import type { Metadata } from "next";
import { Search, ShieldCheck, Wrench, TrendingUp } from "lucide-react";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Our Recovery Process",
  description:
    "A clear, four-stage process — from first confidential call to full recovery. See exactly how Phoenix works.",
};

const stages = [
  {
    icon: Search,
    number: "1",
    name: "Diagnose",
    when: "Days 1–3",
    body: "A confidential initial call, followed by a rapid financial and operational review — cash position, creditor pressure, contractual risk, and personal exposure for directors. You get a plain-English picture of where things actually stand.",
  },
  {
    icon: ShieldCheck,
    number: "2",
    name: "Stabilise",
    when: "Week 1–2",
    body: "Immediate actions to relieve pressure — creditor communication, cash flow triage, and, where relevant, coordinating formal protections. The goal is to buy breathing room safely.",
  },
  {
    icon: Wrench,
    number: "3",
    name: "Restructure",
    when: "Weeks 2–8, scaled to the business",
    body: "A tailored plan covering whichever combination of financial, operational, legal and leadership changes the diagnosis calls for, agreed with you before anything is actioned.",
  },
  {
    icon: TrendingUp,
    number: "4",
    name: "Rebuild",
    when: "Ongoing",
    body: "Once stable, focus shifts to growth — financial reporting that keeps stakeholders confident, and marketing/branding support to rebuild market position.",
  },
];

const faqs = [
  {
    q: "Do I need to have decided on insolvency before I call?",
    a: "No — most calls are exploratory, and many businesses we speak to never enter a formal insolvency process at all.",
  },
  {
    q: "Will you tell my creditors before I'm ready?",
    a: "No — nothing is contacted without your agreement on approach and timing.",
  },
  {
    q: "What does the first call cost?",
    a: "Nothing — it's a free, confidential assessment with no obligation to proceed.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Our Process" }]} />
      <PageHero
        eyebrow="Our Process"
        h1="A Clear Path, From the First Call Onward"
        subhead="Directors rarely delay because they don't want help — they delay because they don't know what asking for it actually involves. Here is exactly what happens when you call Phoenix."
      />

      <Container className="py-16 sm:py-20">
        <div className="relative flex flex-col gap-8">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div key={stage.name} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  {i < stages.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-teal-200" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-500">
                    Stage {stage.number} · {stage.when}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-ink-950">
                    {stage.name}
                  </h2>
                  <p className="mt-2 max-w-2xl text-ink-700">{stage.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-teal-100 bg-teal-50/60 p-8">
          <h2 className="font-display text-xl font-semibold text-ink-950">
            What to Expect in Week One
          </h2>
          <p className="mt-3 max-w-2xl text-ink-700">
            You will not be handed over to a call centre, and nothing happens
            without your sign-off. Within the first week, you&rsquo;ll have a named
            lead, a written summary of your position, and a specific list of next
            actions — not a lengthy report to read alone.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-ink-950">Frequently Asked</h2>
          <div className="mt-6 max-w-2xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </Container>

      <CTABand
        headline="Start With a Confidential Call"
        body="No obligation, no pressure — just a clear picture of where things stand."
      />
    </>
  );
}
