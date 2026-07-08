import type { Metadata } from "next";
import { Lock, Clock, ShieldOff, CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import FormShell, { Field, SelectField } from "@/components/FormShell";
import { Testimonial } from "@/components/TrustBar";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Free Confidential Business Recovery Consultation",
  description:
    "Speak to a business recovery specialist today, in complete confidence. No obligation. Book your free consultation now.",
};

const trustRow = [
  { icon: Lock, label: "100% Confidential" },
  { icon: Clock, label: "Response within 24 hours" },
  { icon: ShieldOff, label: "No Obligation" },
];

const reasons = [
  {
    title: "Most directors wait too long, not too little",
    body: "Acting a month earlier almost always means more options, not fewer.",
  },
  {
    title: "One call gives you a clear picture, not a sales pitch",
    body: "We tell you honestly what we see — including if you don't need us.",
  },
  {
    title: "You keep control of every decision from here",
    body: "Nothing happens without your sign-off, ever.",
  },
];

const microFaqs = [
  {
    q: "Will this cost me anything?",
    a: "No — the initial consultation is completely free, with no obligation to proceed.",
  },
  {
    q: "Will you contact my creditors or anyone else?",
    a: "No — nothing is contacted without your explicit agreement.",
  },
  {
    q: "What if I'm not ready to make a decision yet?",
    a: "That's fine — most first calls are exploratory. You'll leave with clarity, not pressure.",
  },
];

export default function ConfidentialConsultationPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            Free Confidential Consultation
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-ink-950 sm:text-5xl">
            Your Business, Your Options — In Complete Confidence
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-700">
            Book a free, no-obligation consultation with a Phoenix recovery
            specialist. Nothing you share leaves the room, and nothing happens
            without your agreement.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-teal-600" />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink-950">
                    {r.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-700">{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Testimonial
              quote="Phoenix had a plan on the table within a week. For the first time in months, I could see a way through."
              attribution="— Director, Hospitality Group (name withheld by request)"
            />
          </div>

          <div className="mt-10">
            <h3 className="font-display text-base font-semibold text-ink-950">
              Before you call
            </h3>
            <div className="mt-3">
              <FAQAccordion items={microFaqs} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-teal-100 bg-white p-8 shadow-xl shadow-teal-900/5 lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-semibold text-ink-950">
            Book My Confidential Consultation
          </h2>
          <div className="mt-6">
            <FormShell submitLabel="Book My Confidential Consultation">
              <Field label="Name" name="name" />
              <Field label="Company" name="company" required={false} />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Best time to call" name="best_time" required={false} placeholder="e.g. this afternoon" />
              <SelectField
                label="What's the situation?"
                name="situation"
                options={[
                  "Cash flow",
                  "Creditor pressure",
                  "Considering insolvency",
                  "Director concerns",
                  "Other",
                ]}
              />
            </FormShell>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-teal-100 pt-6">
            {trustRow.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-ink-700">
                <Icon size={14} className="text-teal-600" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
