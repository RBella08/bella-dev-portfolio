"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I work with."
          description="A working technology set built through real client and personal projects — not a checklist."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.name}
                variants={fadeInUp}
                custom={index}
                className="rounded-xl border border-border bg-surface p-6 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/20"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <GroupIcon size={18} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">{group.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="group/chip flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors duration-200 hover:border-accent/40 hover:text-foreground"
                      >
                        {SkillIcon && (
                          <span className="text-muted-foreground transition-colors duration-200 group-hover/chip:text-accent">
                            <SkillIcon size={13} color="currentColor" />
                          </span>
                        )}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}