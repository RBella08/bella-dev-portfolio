import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "amffl",
    name: "AMFFL",
    type: "Online Marketplace",
    description:
      "A complete online marketplace designed to connect buyers and sellers through a structured classified-listing experience.",
    role: "Built collaboratively, including the WordPress-based frontend and custom functionality.",
    technologies: ["WordPress", "Elementor", "HTML", "CSS", "PHP"],
    image: "/images/projects/amffl.png",
    liveUrl: "https://amffl.com.ng/",
    featured: true,
  },
  {
    slug: "propertyflow",
    name: "PropertyFlow",
    type: "Property Rental & Rent Collection Web App",
    description:
      "A property management web application designed around rental properties, tenants, leases, and rent collection.",
    role: "Designed and built independently using React, TypeScript, and Supabase.",
    technologies: ["React", "TypeScript", "Supabase"],
    image: "/images/projects/propertyflow.png",
    liveUrl: "https://propertyflows.vercel.app/",
    featured: true,
  },
  {
    slug: "surdic-magical-studio",
    name: "Surdic Magical Studio",
    type: "Ecommerce / Body & Beauty",
    description:
      "A beauty-focused website designed to showcase services, products, and the brand's visual identity.",
    role: "Designed and built independently using WordPress and Elementor.",
    technologies: ["WordPress", "Elementor"],
    image: "/images/projects/surdic-magical-studio.png",
    liveUrl: "https://surdicmagicalstudio.wuaze.com/",
    featured: true,
  },
  {
    slug: "novasthetics",
    name: "Novasthetics",
    type: "Ecommerce / Aesthetics & Lifestyle",
    description:
      "A modern ecommerce and aesthetics website created to showcase lifestyle, decor, beauty, and related products.",
    role: "Designed and built independently using WordPress and Elementor.",
    technologies: ["WordPress", "Elementor"],
    image: "/images/projects/novasthetics.png",
    liveUrl: "https://novasthetics.42web.io/?i=1",
  },
  {
    slug: "happiness-jnews",
    name: "Happiness JNews",
    type: "Blog / News Website",
    description:
      "A content-focused blog and news website designed for publishing articles in a clean, organized layout.",
    role: "Designed and built independently using WordPress and Elementor.",
    technologies: ["WordPress", "Elementor"],
    image: "/images/projects/happiness-jnews.png",
    liveUrl: "https://happinessjnews.42web.io/",
  },
  {
    slug: "happiness-gear",
    name: "Happiness Gear",
    type: "Ecommerce / Auto Parts",
    description:
      "An ecommerce website for showcasing and selling automotive parts through a product-focused online experience.",
    role: "Designed and built independently using WordPress and Elementor.",
    technologies: ["WordPress", "Elementor"],
    image: "/images/projects/happiness-gear.png",
    liveUrl: "http://happiness-gear.42web.io/",
  },
];