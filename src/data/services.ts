import type { LucideIcon } from "lucide-react";
import {
  Globe,
  LayoutDashboard,
  Blocks,
  MousePointerClick,
  Paintbrush,
  Briefcase,
  ShoppingCart,
  Wrench,
} from "lucide-react";

export type Service = {
  name: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  secondary?: boolean;
};

export const services: Service[] = [
  {
    name: "Website Development",
    description:
      "Custom, responsive websites built from the ground up — fast, accessible, and easy to manage.",
    icon: Globe,
    featured: true,
  },
  {
    name: "Web App Development",
    description:
      "Web applications built around real workflows, from dashboards to full-featured platforms.",
    icon: LayoutDashboard,
  },
  {
    name: "WordPress Development",
    description: "Custom WordPress builds, from theme setup to tailored functionality.",
    icon: Blocks,
  },
  {
    name: "Elementor Development",
    description:
      "Fast, flexible page building with Elementor for teams who need to self-manage content.",
    icon: MousePointerClick,
  },
  {
    name: "Website Redesign",
    description: "Modernizing existing websites for better design, performance, and usability.",
    icon: Paintbrush,
  },
  {
    name: "Business Websites",
    description: "Professional websites that give businesses a credible, reliable online presence.",
    icon: Briefcase,
  },
  {
    name: "E-commerce Websites",
    description: "Online stores built to showcase products and handle real transactions.",
    icon: ShoppingCart,
  },
  {
    name: "Website Maintenance",
    description: "Ongoing updates, fixes, and improvements to keep a website running smoothly.",
    icon: Wrench,
  },
  {
  name: "Web App Development",
  description:
    "Web applications built around real workflows, from dashboards to full-featured platforms.",
  icon: LayoutDashboard,
  secondary: true,
},
];