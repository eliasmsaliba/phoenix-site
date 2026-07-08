import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { ArticleCard } from "@/components/Cards";
import { articles } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Practical guidance for directors — warning signs, insolvency basics, director duties, and how recovery actually works.",
};

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Resources" }]} />
      <PageHero
        eyebrow="Resources & Insights"
        h1="Guidance for the Decisions You're Facing Right Now"
        subhead="No jargon, no scare tactics — just plain-English guidance from people who do this for a living."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard
              key={a.slug}
              href={`/resources/${a.slug}`}
              title={a.title}
              topic={a.topic}
              readMinutes={a.readMinutes}
              excerpt={a.hook}
            />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-teal-100 bg-teal-50/60 p-8">
          <h2 className="font-display text-xl font-semibold text-ink-950">
            Want the practical templates too?
          </h2>
          <p className="mt-3 max-w-xl text-ink-700">
            Download the cash flow templates and checklists we use with clients —
            free, no obligation.
          </p>
          <a
            href="/guides"
            className="mt-4 inline-flex text-sm font-semibold text-teal-700 hover:underline"
          >
            Browse downloadable guides →
          </a>
        </div>
      </Container>

      <CTABand
        headline="Read Something That Sounds Like Your Situation?"
        body="Let's talk — in confidence, at no cost."
      />
    </>
  );
}
