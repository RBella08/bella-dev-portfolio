import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.name,
      description: project.description,
      url: `/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: project.liveUrl,
    creator: { "@type": "Person", name: siteConfig.fullName },
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }} />
      <article className="pb-24 pt-14 md:pb-32 md:pt-20">
        <Container>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to work
          </Link>

          <div className="mt-8 max-w-2xl">
            <p className="mb-3 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Case Study
            </p>
            <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">{project.type}</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface-muted px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <div className="relative aspect-16/10">
              <Image
                src={project.image}
                alt={`${project.name} website screenshot`}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Overview</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.role}</p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full">
                Visit Live Site
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </article>
    </main>
  );
}