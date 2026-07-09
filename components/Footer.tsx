import Link from "next/link";
import { Phone, Mail, MapPin, Plus, Minus } from "lucide-react";
import { LogoMark } from "./Logo";
import FormShell, { Field, TextAreaField } from "./FormShell";
import { CONTACT } from "@/lib/contact";

const footerFaqs = [
  {
    q: "What is the difference between CVL and liquidation?",
    a: "A CVL (Creditors' Voluntary Liquidation) is one specific route into liquidation, started by the directors — liquidation is the broader term for winding a company up.",
  },
  {
    q: "Will I be personally liable for company debts?",
    a: "In most cases, no — provided you've continued to act properly. This is exactly what a confidential Director Support conversation exists to clarify.",
  },
  {
    q: "How much does it cost?",
    a: "Your initial consultation is free. Beyond that, fees are agreed upfront and fixed wherever possible, before any work begins.",
  },
  {
    q: "How long does the process take?",
    a: "Stabilisation is often achieved within 1–2 weeks; full restructuring engagements typically run 4–8 weeks.",
  },
];

function LinkedinGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function XGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.3 3H21l-6.6 7.54L22.2 21h-6.5l-5.1-6.66L4.7 21H2l7.06-8.07L1.8 3h6.66l4.6 6.09L18.3 3zm-1.14 16.17h1.48L7.9 4.75H6.3l10.86 14.42z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-teal-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Common Questions */}
          <div>
            <h2 className="inline-block border-b-2 border-teal-500 pb-1 font-display text-xl font-semibold text-ink-950">
              Common Questions
            </h2>
            <div className="mt-5 flex flex-col">
              {footerFaqs.map((item) => (
                <details key={item.q} className="group border-b border-teal-100 py-3.5 first:pt-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink-900 marker:content-none [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="relative h-4 w-4 shrink-0 text-teal-600">
                      <Plus size={16} className="absolute inset-0 group-open:hidden" />
                      <Minus size={16} className="absolute inset-0 hidden group-open:block" />
                    </span>
                  </summary>
                  <p className="mt-2 pr-6 text-sm text-ink-700">{item.a}</p>
                </details>
              ))}
            </div>
            <Link
              href="/faqs"
              className="mt-6 inline-flex items-center justify-center rounded-md border-2 border-teal-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-teal-700 hover:bg-teal-50"
            >
              View All FAQs
            </Link>
          </div>

          {/* Ready to Talk */}
          <div>
            <h2 className="inline-block border-b-2 border-teal-500 pb-1 font-display text-xl font-semibold text-ink-950">
              Ready to Talk?
            </h2>
            <p className="mt-5 max-w-sm text-sm text-ink-700">
              A confidential conversation could help you understand your options
              and take the next step with confidence.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-sm font-semibold text-ink-900 hover:text-teal-700">
                <Phone size={16} className="shrink-0 text-teal-600" />
                {CONTACT.phoneDisplay}
              </a>
              <a href={CONTACT.emailHref} className="flex items-center gap-3 text-sm font-semibold text-ink-900 hover:text-teal-700">
                <Mail size={16} className="shrink-0 text-teal-600" />
                {CONTACT.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-ink-700">
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal-600" />
                <span>
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Phoenix on LinkedIn"
                className="rounded-full border border-teal-200 p-2 text-ink-700 hover:bg-teal-50"
              >
                <LinkedinGlyph />
              </a>
              <a
                href="#"
                aria-label="Phoenix on X"
                className="rounded-full border border-teal-200 p-2 text-ink-700 hover:bg-teal-50"
              >
                <XGlyph />
              </a>
            </div>
          </div>

          {/* Request a Confidential Consultation */}
          <div className="rounded-2xl bg-red-500 p-7 text-white">
            <h2 className="font-display text-xl font-semibold">
              Request a Confidential Consultation
            </h2>
            <p className="mt-2 text-sm text-white/85">
              Complete the form below and a member of our team will be in touch.
            </p>
            <div className="mt-5">
              <FormShell
                submitLabel="Send Enquiry"
                submitClassName="mt-1 inline-flex w-full items-center justify-center rounded-md bg-ink-950 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-ink-900"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Full Name" name="name" hideLabel />
                  <Field label="Company Name" name="company" required={false} hideLabel />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Email Address" name="email" type="email" hideLabel />
                  <Field label="Phone Number" name="phone" type="tel" hideLabel />
                </div>
                <TextAreaField label="How can we help?" name="message" hideLabel rows={3} />
              </FormShell>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-900 bg-navy-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <div className="flex items-center gap-2.5">
            <LogoMark size={26} />
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm font-bold uppercase tracking-wide text-white">
                Phoenix
              </span>
              <span className="mt-0.5 text-[10px] text-gold-400">
                Turning Setbacks into Comebacks
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-paper-100/70">
            <Link href="/legal/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/legal/terms-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/legal/cookie-policy" className="hover:text-white">
              Cookies
            </Link>
          </div>

          <p className="text-xs text-paper-100/60">
            © {new Date().getFullYear()} Wreckingball Business Consultancy trading as Phoenix Recovery Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
