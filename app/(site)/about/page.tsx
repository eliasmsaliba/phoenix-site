import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, MessageCircleHeart, Zap, ScrollText } from "lucide-react";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import CTAButton from "@/components/CTAButton";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About Phoenix",
  description:
    "Meet the team behind Phoenix — why we exist, how we work, and the values that guide every recovery we lead.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Confidentiality",
    body: "Nothing leaves the room without permission.",
  },
  {
    icon: MessageCircleHeart,
    title: "Candour",
    body: "We tell clients what they need to hear, early.",
  },
  {
    icon: Zap,
    title: "Speed",
    body: "Distress compounds daily; so does our urgency.",
  },
  {
    icon: ScrollText,
    title: "Accountability",
    body: "We measure ourselves by businesses stabilised, not hours billed.",
  },
];

const leadership = [
  { name: "Managing Director", title: "Founder & Managing Director" },
  { name: "Head of Restructuring", title: "Business Restructuring Lead" },
  { name: "Head of Director Advisory", title: "Director Advisory Lead" },
  { name: "Head of Financial Recovery", title: "Financial Recovery Lead" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "About Phoenix" }]} />

      <section className="border-b border-teal-100 bg-gradient-to-b from-teal-50 to-paper-50">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              About Phoenix
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-ink-950 sm:text-5xl">
              Built for the Businesses Everyone Else Gives Up On
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-700">
              Phoenix was founded on a simple observation: most businesses in distress
              don&rsquo;t fail because the problem was unsolvable — they fail because
              nobody stepped in early enough, or with the right mix of skills.
            </p>
            <div className="mt-8">
              <a href="#leadership" className="text-sm font-semibold text-teal-700 hover:underline">
                Meet the team ↓
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 id="our-story" className="scroll-mt-24 text-2xl font-semibold text-ink-950">
            Our Story
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Phoenix was formed by restructuring practitioners, accountants and
            operators who had spent years watching good businesses close for
            solvable reasons — a cash flow gap that could have been bridged, a
            creditor conversation that never happened, a director who didn&rsquo;t
            know they had options. We built the firm we wished those businesses
            had been able to call: one team, covering the financial, legal,
            operational and reputational sides of recovery, so a director isn&rsquo;t
            left assembling advisors alone while the clock runs down.
          </p>

          <h2 id="why-phoenix" className="mt-14 scroll-mt-24 text-2xl font-semibold text-ink-950">
            Why &ldquo;Phoenix&rdquo;
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            The phoenix doesn&rsquo;t avoid the fire — it&rsquo;s defined by what it
            does afterward. That&rsquo;s the distinction we work from. We don&rsquo;t
            pretend distress isn&rsquo;t real or serious. We exist for what comes
            next: a business that&rsquo;s leaner, better understood by its own
            directors, and built to withstand the next downturn instead of merely
            surviving this one.
          </p>

          <h2 id="philosophy" className="mt-14 scroll-mt-24 text-2xl font-semibold text-ink-950">
            Our Philosophy
          </h2>
          <div className="mt-6 flex flex-col gap-6">
            <div>
              <h3 className="font-display text-lg font-semibold text-ink-950">
                1. Early beats big.
              </h3>
              <p className="mt-1 text-ink-700">
                The size of the intervention matters less than the timing of it.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink-950">
                2. Advice without action is a report, not a recovery.
              </h3>
              <p className="mt-1 text-ink-700">
                Phoenix implements plans, not just writes them.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink-950">
                3. Directors are clients, not case files.
              </h3>
              <p className="mt-1 text-ink-700">
                Every engagement is built around the person making the decisions,
                not just the balance sheet.
              </p>
            </div>
          </div>
        </div>

        <div id="values" className="mx-auto mt-16 max-w-3xl scroll-mt-24">
          <h2 className="text-2xl font-semibold text-ink-950">Core Values</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-teal-100 bg-white p-6">
                  <Icon size={20} className="text-teal-600" strokeWidth={1.75} />
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-700">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div id="leadership" className="mx-auto mt-16 max-w-3xl scroll-mt-24">
          <h2 className="text-2xl font-semibold text-ink-950">Leadership</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {leadership.map((person) => (
              <div key={person.name} className="flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-50 font-display text-lg font-semibold text-teal-700">
                  {person.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink-950">
                    {person.name}
                  </p>
                  <p className="text-sm text-ink-500">{person.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-500">
            Full leadership bios and credentials to be added once photography and
            copy are finalised.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <CTAButton href="/confidential-consultation" size="lg">
            Talk to the People Who&rsquo;ll Actually Handle Your Case
          </CTAButton>
          <p className="mt-4 text-sm text-ink-500">
            See also:{" "}
            <Link href="/process" className="font-medium text-teal-700 hover:underline">
              Our Process
            </Link>{" "}
            ·{" "}
            <Link href="/services" className="font-medium text-teal-700 hover:underline">
              Our Services
            </Link>{" "}
            ·{" "}
            <Link href="/resources/what-directors-should-know" className="font-medium text-teal-700 hover:underline">
              What Directors Should Know
            </Link>
          </p>
        </div>
      </Container>

      <CTABand
        headline="Talk to the People Who'll Actually Handle Your Case."
        body="One team, from the first call to the last stage of recovery."
      />
    </>
  );
}
