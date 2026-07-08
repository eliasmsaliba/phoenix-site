import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import FormShell, { Field, SelectField } from "@/components/FormShell";
import { TrustBadges } from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Book a Free Business Recovery Consultation",
  description:
    "Choose a time that works for you. Every consultation with Phoenix is confidential, with no obligation to proceed.",
};

export default function BookConsultationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Book Consultation" }]} />
      <PageHero
        eyebrow="Get Help"
        h1="Book Your Free Consultation"
        subhead="Choose a time that works for you. Every consultation is confidential, with no obligation to proceed."
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-xl">
          <div className="mb-8">
            <TrustBadges />
          </div>
          <FormShell submitLabel="Confirm My Slot">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Company" name="company" required={false} />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" />
            </div>
            <SelectField
              label="Preferred time"
              name="time"
              options={["Morning (9am–12pm)", "Afternoon (12pm–5pm)", "Evening (5pm–7pm)", "As soon as possible"]}
            />
          </FormShell>
          <p className="mt-6 text-center text-xs text-ink-500">
            Prefer a live calendar? This form routes to the same specialists who
            manage direct scheduling — a calendar embed can replace this form once
            connected to your booking tool of choice.
          </p>
        </div>
      </Container>
    </>
  );
}
