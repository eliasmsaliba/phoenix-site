import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { IconCard } from "@/components/Cards";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Support",
  description:
    "Recovery looks different in every sector. See how Phoenix supports hospitality, retail, manufacturing, construction, SMEs and family businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Industries" }]} />
      <PageHero
        eyebrow="Industries"
        h1="Recovery Isn't Generic. Neither Is Our Advice."
        subhead="Cash flow patterns, creditor behaviour and contract structures differ by sector — so the plan should too. Here's where we bring the deepest pattern-recognition."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <IconCard
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              icon={ind.icon}
              title={ind.name}
              description={ind.challenges[0]}
            />
          ))}
        </div>
      </Container>

      <CTABand
        headline="Tell Us About Your Business"
        body="Don't see your exact sector? Most recovery patterns transfer more than people expect — get in touch anyway."
      />
    </>
  );
}
