import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email("Please enter a valid email address.")),
  projectType: z.string().max(100).optional(),
  message: z.string().trim().min(10, "Please add a few details about your project.").max(2000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;