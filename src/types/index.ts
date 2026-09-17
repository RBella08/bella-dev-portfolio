export type Project = {
  slug: string;
  name: string;
  type: string;
  description: string;
  role: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  featured?: boolean;
};