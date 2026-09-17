"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/motion";

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

        {/* Desktop / tablet: horizontal timeline */}
        <div className="relative mt-20 hidden md:block">
          <div className="absolute left-[10%] right-[10%] top-6 h-px bg-border" aria-hidden="true" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-[10%] right-[10%] top-6 h-px bg-accent"
            aria-hidden="true"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative grid grid-cols-5 gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                custom={index}
                className="flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm font-medium text-accent shadow-elevated">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: vertical timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-14 space-y-8 md:hidden"
        >
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border" aria-hidden="true" />
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={fadeInUp} custom={index} className="relative flex gap-5">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm font-medium text-accent shadow-elevated">
                {step.number}
              </span>
              <div className="pt-2.5">
                <h3 className="font-display text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}