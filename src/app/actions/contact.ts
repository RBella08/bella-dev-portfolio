"use server";

import { Resend } from "resend";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactActionResult = { success: true; message: string } | { success: false; message: string };

export async function submitContactForm(
  input: ContactFormValues,
  honeypot: string
): Promise<ContactActionResult> {
  // Honeypot: real visitors never see or fill this field in.
  // Checked here, not just in the browser, since a bot could call
  // this action directly and skip the client-side form entirely.
  if (honeypot) {
    return { success: true, message: "Thanks — I'll get back to you soon." };
  }

  const parsed = contactFormSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
    };
  }

  const { name, email, projectType, message } = parsed.data;

  try {
    await resend.emails.send({
      from: "BellaDev Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "kilaniquadri8@gmail.com",
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType || "Not specified"}\n\nMessage:\n${message}`,
    });

    return { success: true, message: "Thanks — your message is in. I'll get back to you soon." };
  } catch (error) {
    console.error("Contact form email error:", error);
    return {
      success: false,
      message: "Something went wrong sending your message. Please try emailing me directly instead.",
    };
  }
}