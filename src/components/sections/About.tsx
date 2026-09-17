"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { slideInLeft, slideInRight } from "@/lib/motion";

const focusAreas = ["WordPress & Elementor", "Modern Web Apps", "Business Websites", "Ecommerce"];

export function About() {
  return (
    <Section id="about" tint>
      <Container>
        <SectionHeading eyebrow="About" title="I build practical websites for real businesses." />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative mx-auto w-full max-w-xs lg:mx-0"
          >
            <div aria-hidden="true" className="hero-glow-alt absolute inset-[-15%] -z-10 rounded-full blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated">
              <div className="relative aspect-4/5">
                <Image
                  src="/images/profile/bella.png"
                  alt="Quadri Happiness Kilani"
                  fill
                  sizes="(min-width: 1024px) 320px, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 260, damping: 18 }}
              className="absolute -bottom-5 -right-4 rounded-xl border border-border bg-surface px-4 py-3 shadow-elevated"
            >
              <p className="font-display text-lg font-semibold text-foreground">BellaDev</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Web Developer</p>
            </motion.div>
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m Quadri Happiness Kilani, a web developer focused on building modern, responsive
              websites and web applications that are practical, easy to use, and built around real
              business needs. I work across WordPress, Elementor, and modern web technologies — with
              hands-on experience building business websites, ecommerce platforms, marketplaces, and
              web applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}