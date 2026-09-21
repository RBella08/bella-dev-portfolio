"use client";

import { motion } from "framer-motion";
import { fadeInUp, cardLift, iconPop, liftHover } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div variants={fadeInUp} custom={index} className="h-full">
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={cardLift}
        transition={liftHover}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-xl border bg-surface p-6 shadow-elevated transition-colors duration-300",
          service.featured && "justify-between border-border p-7 hover:border-accent/30 md:col-span-2 md:p-8",
          service.secondary && "border-accent/20 hover:border-accent/40",
          !service.featured && !service.secondary && "border-border hover:border-accent/20"
        )}
      >
        {service.featured && (
          <div
            aria-hidden="true"
            className="hero-glow pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-80"
          />
        )}

        <div className="relative">
          {service.featured && (
            <div className="mb-5 flex items-center gap-1.5 opacity-70">
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
            </div>
          )}

          <motion.div
            variants={iconPop}
            transition={liftHover}
            className={cn(
              "flex items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground",
              service.featured ? "mb-5 h-12 w-12" : "mb-4 h-10 w-10"
            )}
          >
            <Icon size={service.featured ? 22 : 18} />
          </motion.div>

          <h3 className={cn("font-display font-semibold text-foreground", service.featured ? "text-xl" : "text-base")}>
            {service.name}
          </h3>
          <p className={cn("leading-relaxed text-muted-foreground", service.featured ? "mt-3 max-w-md text-sm" : "mt-2 text-sm")}>
            {service.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}