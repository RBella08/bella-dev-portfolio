"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";

const steps = [
  { number: "01", title: "Discover", description: "Understand the business, goals, and requirements." },
  { number: "02", title: "Plan", description: "Define structure, content, and visual direction." },
  { number: "03", title: "Build", description: "Develop the responsive website." },
  { number: "04", title: "Refine", description: "Test, optimize, and improve the experience." },
  { number: "05", title: "Launch", description: "Deploy the finished website." },
];

export function Process() {
  return (
    <Section id="process" tint>
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="How I work."
          description="A straightforward process that keeps projects moving from first conversation to launch."
        />

        <div className="relative mt-16 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute left-6 top-2 bottom-2 w-px bg-border md:left-[10%] md:right-[10%] md:top-6 md:bottom-auto md:h-px md:w-auto"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                custom={index}
                className="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <motion.span
                  variants={scaleIn}
                  custom={index}
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm font-medium text-accent shadow-elevated"
                >
                  {step.number}
                </motion.span>
                <div className="pt-2.5 md:pt-5">
                  <h3 className="font-display text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:mt-2">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}