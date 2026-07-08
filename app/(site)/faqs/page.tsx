import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FAQAccordion from "@/components/FAQAccordion";
import { faqCategories } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the questions directors ask most — confidentiality, cost, timelines, insolvency, and what happens after you call.",
};

export default function FAQsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "FAQs" }]} />
      <PageHero
        eyebrow="FAQs"
        h1="Questions Directors Ask Before They Call"
        subhead="If your question isn't here, ask us directly — every conversation starts confidential, question included."
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {faqCategories.map((cat) => (
            <div key={cat.category} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-semibold text-ink-950">{cat.category}</h2>
              <div className="mt-6">
                <FAQAccordion items={cat.items} />
              </div>
            </div>
          ))}
        </div>
      </Container>

      <CTABand
        headline="Still Have Questions?"
        body="Request a callback and we'll answer them directly — no obligation."
        ctaLabel="Request a Callback"
        ctaHref="/request-callback"
      />
    </>
  );
}
