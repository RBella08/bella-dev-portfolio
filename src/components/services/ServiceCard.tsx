"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import type { Service } from "@/data/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  if (service.featured) {
    return (
      <motion.div
        variants={fadeInUp}
        custom={index}
        className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface p-7 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 md:col-span-2 md:p-8"
      >
        <div
          aria-hidden="true"
          className="hero-glow pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-80"
        />
        <div className="relative">
          <div className="mb-5 flex items-center gap-1.5 opacity-70">
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
          </div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
            <Icon size={22} />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground">{service.name}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group flex flex-col rounded-xl border border-border bg-surface p-6 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon size={18} />
      </div>
      <h3 className="font-display text-base font-semibold text-foreground">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
    </motion.div>
  );
}