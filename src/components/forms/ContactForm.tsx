"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ContactFormFields = ContactFormValues & { company?: string };

const projectTypes = [
  "Website Development",
  "WordPress / Elementor",
  "Web Application",
  "Website Redesign",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormFields) {
    const { company, ...values } = data;
    const result = await submitContactForm(values, company ?? "");

    if (result.success) {
      setStatus("success");
      setStatusMessage(result.message);
      reset();
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — real visitors never see or fill this in */}
      <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <input id="name" type="text" autoComplete="name" {...register("name")} className={inputClass(!!errors.name)} />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" {...register("email")} className={inputClass(!!errors.email)} />
        </Field>
      </div>

      <Field label="Project type (optional)" htmlFor="projectType">
        <select id="projectType" {...register("projectType")} className={inputClass(false)}>
          <option value="">Select an option</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Project details" htmlFor="message" error={errors.message?.message}>
        <textarea id="message" rows={5} {...register("message")} className={cn(inputClass(!!errors.message), "resize-none")} />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="primary" disabled={isSubmitting} className="sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        {status !== "idle" && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex items-center gap-2 text-sm",
              status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
            )}
          >
            {status === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            {statusMessage}
          </motion.p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-lg border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60",
    hasError ? "border-red-500/60 focus:border-red-500" : "border-border focus:border-accent"
  );
}