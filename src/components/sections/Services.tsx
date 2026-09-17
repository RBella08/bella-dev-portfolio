"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { staggerContainer } from "@/lib/motion";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you."
          description="From full custom builds to WordPress-based sites, here's what I take on for clients and businesses."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}