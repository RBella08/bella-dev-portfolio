"use client";

import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { slideInLeft, slideInRight } from "@/lib/motion";
import { siteConfig } from "@/data/site";

const directContacts = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: siteConfig.phone[0],
    href: `https://wa.me/234${siteConfig.phone[0].slice(1)}`,
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "RBella08",
    href: siteConfig.github,
    icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
  eyebrow="Contact"
  title="Let's work together."
  description="Have a project in mind? Send a few details and I'll get back to you soon. Available for remote work with clients across Nigeria — including Lagos, Abeokuta, and beyond."
/>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-3"
          >
            {directContacts.map((contact) => {
              const Icon = contact.icon;
              const isExternal = contact.href.startsWith("http");

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-xl border border-border bg-surface p-5 shadow-elevated transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={18} />
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {contact.label}
                      </p>

                      <p className="font-display text-sm font-medium text-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-border bg-surface p-6 shadow-elevated md:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}