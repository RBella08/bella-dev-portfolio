import type { LucideIcon } from "lucide-react";
import { Code2, Blocks, Wrench } from "lucide-react";

export type SkillGroup = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "WordPress",
    icon: Blocks,
    skills: ["WordPress", "Elementor", "WooCommerce", "PHP"],
  },
  {
    name: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Supabase"],
  },
];