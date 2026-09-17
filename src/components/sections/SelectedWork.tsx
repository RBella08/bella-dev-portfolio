import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <Section id="work" tint spacing="tight">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Real projects, built end to end."
          description="A selection of websites and web applications I've designed and built — from marketplaces and ecommerce stores to a full property management app."
        />
        <div className="mt-16">
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </Section>
  );
}