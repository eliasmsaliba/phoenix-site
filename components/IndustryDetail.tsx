import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import type { Industry } from "@/lib/types";
import { services } from "@/data/services";
import Container from "./Container";
import Breadcrumb from "./Breadcrumb";
import CTAButton from "./CTAButton";
import CTABand from "./CTABand";
import FAQAccordion from "./FAQAccordion";

export default function IndustryDetail({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  const related = services.filter((s) => industry.relatedServices.includes(s.slug));

  return (
    <>
      <Breadcrumb items={[{ label: "Industries", href: "/industries" }, { label: industry.name }]} />

      <section className="border-b border-teal-100 bg-gradient-to-b from-teal-50 to-paper-50">
        <Container className="py-14 sm:py-20">
          <div className="max-w-3xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-teal-700 shadow-sm">
              <Icon size={22} strokeWidth={1.75} />
            </span>
            <h1 className="mt-4 text-4xl font-semibold text-ink-950 sm:text-5xl">
              {industry.h1}
            </h1>
            <div className="mt-8">
              <CTAButton href="/confidential-consultation" size="lg">
                {industry.ctaLabel}
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-ink-950">
              What makes this sector different
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              {industry.challenges.map((c) => (
                <li key={c} className="flex gap-3 rounded-xl border border-teal-100 bg-white p-4 text-sm text-ink-700">
                  <AlertTriangle size={16} className="mt-0.5 shrink-0 text-red-500" />
                  {c}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-ink-950">
              How Phoenix helps
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700">
              {industry.howWeHelp}
            </p>

            <div className="mt-12">
              <h3 className="font-display text-lg font-semibold text-ink-950">
                A question we hear often
              </h3>
              <div className="mt-4">
                <FAQAccordion items={[industry.faq]} defaultOpenIndex={0} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-teal-100 bg-white p-7">
              <h3 className="font-display text-base font-semibold text-ink-950">
                Relevant services
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="flex items-center justify-between gap-2 text-sm font-medium text-teal-700 hover:underline"
                    >
                      {r.name}
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/industries"
                className="mt-6 block text-sm font-medium text-ink-700 hover:text-teal-700"
              >
                Browse all industries →
              </Link>
            </div>
          </aside>
        </div>
      </Container>

      <CTABand
        headline={`Tell us what's happening in your ${industry.name.toLowerCase()} business.`}
        body="Every conversation is confidential, and most start with an honest, no-obligation assessment."
        ctaLabel={industry.ctaLabel}
      />
    </>
  );
}
