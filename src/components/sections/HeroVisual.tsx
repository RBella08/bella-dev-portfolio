"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motion";

const floatingCards = [
  { src: "/images/projects/amffl.png", alt: "AMFFL marketplace website", wrapClass: "left-0 top-0 w-[62%] rotate-[-6deg]", delay: 0 },
  { src: "/images/projects/propertyflow.png", alt: "PropertyFlow web application", wrapClass: "right-0 top-[14%] w-[58%] rotate-[4deg]", delay: 0.5 },
  { src: "/images/projects/novasthetics.png", alt: "Novasthetics ecommerce website", wrapClass: "left-[8%] bottom-0 w-[54%] rotate-[-3deg]", delay: 1 },
];

const badges = [
  { label: "React", wrapClass: "-left-3 top-[4%]" },
  { label: "WordPress", wrapClass: "-right-2 bottom-[18%]" },
  { label: "TypeScript", wrapClass: "left-[34%] -bottom-3" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-5/6 w-full max-w-75 lg:mx-0 lg:max-w-82.5">
      <div aria-hidden="true" className="hero-glow absolute inset-[-18%] -z-10 rounded-full blur-3xl" />
      <div aria-hidden="true" className="hero-glow-alt absolute inset-[-12%] -z-10 translate-x-6 translate-y-8 rounded-full blur-3xl" />

      {floatingCards.map((card) => (
        <motion.div
          key={card.src}
          className={`absolute ${card.wrapClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 + card.delay * 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-full overflow-hidden rounded-xl border border-border bg-surface shadow-elevated"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5 + card.delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.9 + card.delay }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-1.5 border-b border-border bg-surface-muted px-2.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
            </div>
            <div className="relative aspect-16/10">
              <Image src={card.src} alt={card.alt} fill sizes="200px" className="object-cover object-top" />
            </div>
          </motion.div>
        </motion.div>
      ))}

      {badges.map((badge, i) => (
        <motion.div
          key={badge.label}
          className={`absolute z-10 ${badge.wrapClass}`}
          variants={scaleIn}
          custom={i}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="block whitespace-nowrap rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] font-medium text-foreground shadow-elevated"
            animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0] }}
// ...
whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.4 + i * 0.2 }}
          >
            {badge.label}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}