import type { LucideIcon } from "lucide-react";

import { Code2, Blocks, Wrench } from "lucide-react";

import type { ComponentType } from "react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiWordpress,
  SiPhp,
  SiGit,
  SiVsco,
  SiVercel,
  SiSupabase,
} from "@icons-pack/react-simple-icons";

import { GithubIcon } from "@/components/icons/GithubIcon";

export type Skill = {
  name: string;
  icon?: ComponentType<{ size?: number; color?: string }>;
};

export type SkillGroup = {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    name: "WordPress",
    icon: Blocks,
    skills: [
      { name: "WordPress", icon: SiWordpress },
      { name: "Elementor" },
      { name: "WooCommerce" },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: GithubIcon },
      { name: "VS Code", icon: SiVsco },
      { name: "Vercel", icon: SiVercel },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
];