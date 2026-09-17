"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 md:pb-14 md:pt-16 lg:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-lg"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Web Developer
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-[clamp(2.25rem,4.5vw+1rem,4rem)] font-semibold leading-[1.08] tracking-tight text-foreground"
            >
              Building websites businesses can rely on.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-md text-base text-muted-foreground md:text-lg"
            >
              I&apos;m Quadri Happiness Kilani — working under BellaDev — building
              responsive websites and web applications with WordPress, Elementor,
              and modern web technologies.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#work" variant="primary">
                View Selected Work
              </Button>
              <Button href="#contact" variant="secondary">
                Let&apos;s Work Together
              </Button>
            </motion.div>
          </motion.div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}