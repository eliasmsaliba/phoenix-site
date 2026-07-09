import type { Metadata } from "next";
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import FormShell, { Field, SelectField, TextAreaField, CheckboxField } from "@/components/FormShell";
import Link from "next/link";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact Phoenix",
  description:
    "Speak to Phoenix today — by phone, form, or callback request. Every conversation is confidential.",
};

const options = [
  { icon: Phone, title: "Call Now", body: "Mon–Fri, 8am–7pm. Urgent matters answered same day.", cta: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { icon: Mail, title: "Email", body: "We reply within one business day.", cta: CONTACT.email, href: CONTACT.emailHref },
  { icon: MessageSquare, title: "Request a Callback", body: "Leave your number and we'll call you.", cta: "Request a callback", href: "/request-callback" },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contact" }]} />
      <PageHero
        eyebrow="Contact"
        h1="Let's Talk — In Confidence"
        subhead="However you reach us, the conversation stays between us until you decide otherwise."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <div key={opt.title} className="rounded-2xl border border-teal-100 bg-white p-6">
                <Icon size={20} className="text-teal-600" strokeWidth={1.75} />
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">
                  {opt.title}
                </h3>
                <p className="mt-1 text-sm text-ink-700">{opt.body}</p>
                <Link href={opt.href} className="mt-3 inline-block text-sm font-semibold text-teal-700 hover:underline">
                  {opt.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-ink-950">Send a Message</h2>
            <p className="mt-2 text-sm text-ink-500">
              We reply to every enquiry within one business day — urgent requests
              same day.
            </p>
            <div className="mt-6">
              <FormShell submitLabel="Send Message">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" />
                  <Field label="Company" name="company" required={false} />
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Email" name="email" type="email" />
                </div>
                <SelectField
                  label="Nature of enquiry"
                  name="enquiry"
                  options={[
                    "General question",
                    "Cash flow concerns",
                    "Creditor pressure",
                    "Considering insolvency",
                    "Director advisory",
                    "Urgent — need to talk today",
                  ]}
                />
                <TextAreaField label="Message" name="message" placeholder="Tell us briefly what's happening." />
                <CheckboxField
                  name="consent"
                  label={
                    <>
                      I agree to Phoenix contacting me about my enquiry, per the{" "}
                      <Link href="/legal/privacy-policy" className="font-medium text-teal-700 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </>
                  }
                />
              </FormShell>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-7">
              <h3 className="font-display text-lg font-semibold text-ink-950">
                Prefer to talk right now?
              </h3>
              <a href={CONTACT.phoneHref} className="mt-3 block font-display text-2xl font-semibold text-teal-700">
                {CONTACT.phoneDisplay}
              </a>
              <p className="mt-3 text-sm text-ink-700">
                Every call is confidential. There is no obligation to proceed with
                anything after speaking with us.
              </p>
              <div className="mt-5 flex items-start gap-2.5 border-t border-teal-100 pt-5 text-sm text-ink-700">
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal-600" />
                <span>
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
              <Link href="/emergency-support" className="mt-5 inline-block text-sm font-semibold text-red-600 hover:underline">
                Need help today? See Emergency Support →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
