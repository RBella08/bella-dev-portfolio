"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { fadeInUp, cardLift, imageZoom, fadeOverlay, textShift, iconNudge, sweep, liftHover } from "@/lib/motion";

const MotionLink = motion(Link);

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div variants={fadeInUp} custom={index} className="h-full">
      <MotionLink
        href={`/work/${project.slug}`}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        variants={cardLift}
        transition={liftHover}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-elevated transition-[border-color,box-shadow] duration-300 hover:border-accent/30 hover:shadow-[0_28px_60px_-24px_color-mix(in_srgb,var(--accent)_35%,transparent)]"
      >
        <div className="relative aspect-4/3 overflow-hidden">
          <motion.div variants={imageZoom} transition={liftHover} className="relative h-full w-full">
            <Image
              src={project.image}
              alt={`${project.name} website screenshot`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </motion.div>
          <motion.div
            variants={fadeOverlay}
            transition={liftHover}
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent"
          />
          <motion.div
            aria-hidden="true"
            variants={sweep}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-0 -skew-x-12 bg-linear-to-r from-transparent via-white/15 to-transparent"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-3">
            <motion.div variants={textShift} transition={liftHover}>
              <h3 className="font-display text-lg font-semibold text-foreground">{project.name}</h3>
              <p className="text-sm text-muted-foreground">{project.type}</p>
            </motion.div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
              <motion.span variants={iconNudge} transition={liftHover} className="flex">
                <ArrowUpRight size={16} />
              </motion.span>
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-auto flex flex-wrap gap-2 pt-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors duration-300 group-hover:border-accent/30 group-hover:text-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </MotionLink>
    </motion.div>
  );
}