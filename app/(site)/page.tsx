import Link from "next/link";
import type { Metadata } from "next";
import { Search, ShieldCheck, Wrench, TrendingUp, Phone, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { IconCard } from "@/components/Cards";
import CTABand from "@/components/CTABand";
import { TrustBadges, Testimonial } from "@/components/TrustBar";
import FAQAccordion from "@/components/FAQAccordion";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Business Recovery & Turnaround Specialists",
  description:
    "Phoenix helps directors and businesses in financial distress recover, restructure and rebuild — confidentially. Book a free consultation today.",
};

const featuredServices = services.filter((s) =>
  [
    "corporate-recovery",
    "business-rescue",
    "creditor-negotiation",
    "director-advisory",
    "business-restructuring",
    "financial-recovery",
  ].includes(s.slug)
);

const processSteps = [
  { icon: Search, name: "Diagnose", body: "A confidential call and rapid review of cash, creditors, and personal risk." },
  { icon: ShieldCheck, name: "Stabilise", body: "Immediate action to relieve pressure and buy breathing room, safely." },
  { icon: Wrench, name: "Restructure", body: "A tailored plan across finance, operations and leadership — agreed with you." },
  { icon: TrendingUp, name: "Rebuild", body: "Reporting that keeps stakeholders confident, and demand moving again." },
];

const homeFaqs = [
  {
    q: "Is my conversation with Phoenix really confidential?",
    a: "Yes — nothing discussed is shared with anyone, including creditors or staff, without your explicit agreement.",
  },
  {
    q: "How quickly can Phoenix help?",
    a: "Most initial calls happen within 24 hours; urgent matters are handled the same day.",
  },
  {
    q: "Does contacting Phoenix mean my business is going into insolvency?",
    a: "No — most initial conversations are exploratory, and many businesses we speak to are stabilised without any formal insolvency process at all.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-teal-100 bg-gradient-to-b from-teal-50 via-paper-50 to-paper-50">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-6 lg:py-28">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              Business Recovery &amp; Turnaround
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-ink-950 sm:text-5xl lg:text-6xl">
              Turning Setbacks Into Comebacks
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-700">
              When cash is tight, creditors are pressing, or the next decision feels
              impossible — Phoenix gives directors a clear, confidential plan and the
              people to carry it out.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href="/confidential-consultation" size="lg">
                Book a Confidential Consultation
              </CTAButton>
              <CTAButton href="tel:+448001234567" size="lg" variant="ghost">
                <Phone size={16} /> Speak to a Specialist
              </CTAButton>
            </div>
            <p className="mt-5 text-sm text-ink-500">
              Confidential. No obligation. Most calls booked within 24 hours.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-teal-100 bg-white p-8 shadow-xl shadow-teal-900/5">
              <p className="font-display text-lg text-ink-950">
                “The size of the problem matters less than the timing of the call.”
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {processSteps.map((step, i) => (
                  <div key={step.name} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-700">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-ink-900">{step.name}</span>
                    <span className="text-sm text-ink-500">— {step.body}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why directors call first */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-ink-950">
              Why Directors Call Phoenix First
            </h2>
            <p className="mt-4 text-base text-ink-700">
              Every business hits a moment where the numbers stop adding up the way
              they used to. What separates the businesses that recover from the ones
              that don&rsquo;t is rarely the size of the problem — it&rsquo;s how early
              someone picked up the phone. Phoenix exists for that call.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Confidential from the first conversation",
                body: "Nothing you share leaves the room without your agreement — ever.",
              },
              {
                title: "Specialists in recovery, not just paperwork",
                body: "Financial, legal, operational and reputational expertise, under one team.",
              },
              {
                title: "A plan within days, not months",
                body: "You leave the first week with specific next actions, not a report to read alone.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-teal-100 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="bg-teal-50/50 py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-ink-950">What We Do</h2>
              <p className="mt-3 text-base text-ink-700">
                One team, covering every discipline a recovery needs — from the first
                creditor call to the rebrand that marks a fresh start.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:underline"
            >
              View all 12 services
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <IconCard
                key={s.slug}
                href={`/services/${s.slug}`}
                icon={s.icon}
                title={s.name}
                description={s.tagline}
                meta={s.tier}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-ink-950">How Recovery Works</h2>
            <p className="mt-3 text-base text-ink-700">
              A clear, four-stage path from the first call onward.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.name} className="relative rounded-2xl border border-teal-100 bg-white p-6">
                  <span className="font-display text-sm font-semibold text-teal-300">
                    0{i + 1}
                  </span>
                  <Icon size={22} className="mt-3 text-teal-600" strokeWidth={1.75} />
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700">{step.body}</p>
                </div>
              );
            })}
          </div>
          <Link
            href="/process"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:underline"
          >
            See the full process
            <ArrowRight size={15} />
          </Link>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-ink-950 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">Industries We Know</h2>
            <p className="mt-3 text-base text-paper-100/70">
              Recovery looks different in every sector. We bring pattern-recognition
              from the ones we know best.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 p-6 text-center transition-colors hover:bg-white/5"
                >
                  <Icon size={24} className="text-teal-400" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-white">{ind.name}</span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Testimonial
              quote="Phoenix had a plan on the table within a week. For the first time in months, I could see a way through."
              attribution="— Director, Hospitality Group (name withheld by request)"
            />
            <div>
              <h2 className="text-2xl font-semibold text-ink-950">
                Built for the conversation you&rsquo;re not sure how to start.
              </h2>
              <p className="mt-3 text-base text-ink-700">
                Every engagement begins the same way: one confidential call, no
                obligation, and a plain-English picture of where things actually
                stand.
              </p>
              <div className="mt-6">
                <TrustBadges />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mini FAQ */}
      <section className="bg-teal-50/50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-ink-950">
              Questions Before You Call
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-2xl">
            <FAQAccordion items={homeFaqs} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/faqs" className="text-sm font-semibold text-teal-700 hover:underline">
              See all FAQs →
            </Link>
          </div>
        </Container>
      </section>

      <CTABand
        headline="The Right Call Is the Next One."
        body="Every day a problem goes unaddressed, options narrow. Talk to Phoenix today — in confidence, at no cost, with no obligation."
      />
    </>
  );
}
