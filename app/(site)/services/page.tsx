import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { IconCard } from "@/components/Cards";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From creditor negotiation to director advisory and rebranding — explore the 12 services Phoenix uses to turn business setbacks into comebacks.",
};

const tiers: { name: string; body: string }[] = [
  { name: "Stabilise", body: "Get pressure off the business, fast." },
  { name: "Rebuild", body: "Fix what actually caused the distress." },
  { name: "Grow Again", body: "Rebuild demand, reporting and trust." },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services" }]} />
      <PageHero
        eyebrow="Our Services"
        h1="One Team. Every Discipline a Recovery Needs."
        subhead="Financial distress is rarely just a financial problem — it touches creditors, contracts, the leadership team, and the brand itself. Phoenix runs all of it under one roof, so nothing falls through the gap between advisors."
      />

      <Container className="py-16 sm:py-20">
        {tiers.map((tier) => (
          <div key={tier.name} className="mb-14 last:mb-0">
            <div className="flex items-baseline gap-3">
              <h2 className="text-2xl font-semibold text-ink-950">{tier.name}</h2>
              <span className="text-sm text-ink-500">{tier.body}</span>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services
                .filter((s) => s.tier === tier.name)
                .map((s) => (
                  <IconCard
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    icon={s.icon}
                    title={s.name}
                    description={s.tagline}
                  />
                ))}
            </div>
          </div>
        ))}

        <div className="mt-4 rounded-2xl border border-teal-100 bg-teal-50/60 p-8">
          <h3 className="font-display text-xl font-semibold text-ink-950">
            How services combine
          </h3>
          <p className="mt-3 max-w-2xl text-ink-700">
            Most engagements start with one service and widen as the picture
            becomes clear — a creditor negotiation often surfaces a restructuring
            need; a restructuring often needs new financial reporting to prove
            it&rsquo;s working. Your engagement lead manages that whole arc, so
            you&rsquo;re never re-explaining your business to a new advisor.
          </p>
        </div>
      </Container>

      <CTABand
        headline="Not Sure Where to Start?"
        body="Book a free assessment and we'll tell you honestly which services actually apply."
        ctaLabel="Book a Free Assessment"
      />
    </>
  );
}
