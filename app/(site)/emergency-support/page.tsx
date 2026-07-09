import type { Metadata } from "next";
import { Phone, AlertTriangle } from "lucide-react";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import FormShell, { Field, TextAreaField } from "@/components/FormShell";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Emergency Business Support — Call Now",
  description:
    "Facing an immediate threat — a winding-up petition, a bounced payroll run, a creditor deadline in the next 48 hours? Call Phoenix now.",
};

export default function EmergencySupportPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Emergency Support" }]} />

      <section className="border-b border-red-100 bg-red-50/60">
        <Container className="py-14 sm:py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-red-600">
              <AlertTriangle size={18} />
              <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                Urgent Business Support
              </p>
            </div>
            <h1 className="mt-3 text-4xl font-semibold text-ink-950 sm:text-5xl">
              Need Help Today?
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-700">
              If you&rsquo;re facing an immediate threat — a winding-up petition, a
              bounced payroll run, a creditor deadline in the next 48 hours — call
              now. This line is monitored for urgent cases.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-500 px-8 py-4 text-lg font-semibold text-white hover:bg-red-600"
            >
              <Phone size={20} />
              {CONTACT.phoneDisplay} — Call Now
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-lg">
          <h2 className="text-center text-xl font-semibold text-ink-950">
            Can&rsquo;t call right now?
          </h2>
          <p className="mt-2 text-center text-sm text-ink-500">
            Send the essentials and we&rsquo;ll call you back as a priority.
          </p>
          <div className="mt-6">
            <FormShell submitLabel="Send — Mark as Urgent">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
              <TextAreaField
                label="What's happening?"
                name="situation"
                required
                placeholder="E.g. we've received a winding-up petition dated..."
              />
            </FormShell>
          </div>
        </div>
      </Container>
    </>
  );
}
