import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/types";
import { services } from "@/data/services";
import Container from "./Container";
import Breadcrumb from "./Breadcrumb";
import CTAButton from "./CTAButton";
import CTABand from "./CTABand";
import FAQAccordion from "./FAQAccordion";

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = service.icon;
  const related = services.filter((s) => service.related.includes(s.slug));

  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.name }]} />

      <section className="border-b border-teal-100 bg-gradient-to-b from-teal-50 to-paper-50">
        <Container className="py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-teal-700 shadow-sm">
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                {service.tier} · Service
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold text-ink-950 sm:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-700">{service.heroSubhead}</p>
            <div className="mt-8">
              <CTAButton href="/confidential-consultation" size="lg">
                {service.ctaLabel}
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-ink-950">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700">
              {service.overview}
            </p>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-950">
                  Problems we solve
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {service.problems.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-ink-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-950">
                  How Phoenix helps
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {service.howWeHelp.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-ink-700">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-teal-100 bg-teal-50/60 p-7">
              <h3 className="font-display text-lg font-semibold text-ink-950">Benefits</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {service.benefits.map((b) => (
                  <li key={b} className="text-sm text-ink-700">
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="font-display text-lg font-semibold text-ink-950">
                Frequently asked questions
              </h3>
              <div className="mt-4">
                <FAQAccordion items={service.faqs} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-teal-100 bg-white p-7">
              <h3 className="font-display text-base font-semibold text-ink-950">
                Related services
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
                href="/process"
                className="mt-6 block text-sm font-medium text-ink-700 hover:text-teal-700"
              >
                See how the recovery process works →
              </Link>
              <Link
                href="/industries"
                className="mt-2 block text-sm font-medium text-ink-700 hover:text-teal-700"
              >
                Browse by industry →
              </Link>
            </div>
          </aside>
        </div>
      </Container>

      <CTABand
        headline="Not sure this is the right service?"
        body="Tell us what's happening and we'll point you to the right combination — most engagements start with one conversation, not a checklist."
        ctaLabel="Book a Free Recovery Assessment"
      />
    </>
  );
}
