import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import FormShell, { Field, SelectField, TextAreaField } from "@/components/FormShell";

export const metadata: Metadata = {
  title: "Request a Confidential Callback",
  description:
    "Leave your number and the best time to reach you. We'll call you back, in confidence — usually within a few hours.",
};

export default function RequestCallbackPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Request a Callback" }]} />
      <PageHero
        eyebrow="Get Help"
        h1="Request a Callback"
        subhead="Leave your number and the best time to reach you. We'll call you back, in confidence — usually within a few hours."
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-xl">
          <FormShell submitLabel="Request My Callback">
            <Field label="Name" name="name" />
            <Field label="Phone" name="phone" type="tel" />
            <SelectField
              label="Best time to call"
              name="time"
              options={["Morning", "Afternoon", "Evening", "Anytime today"]}
            />
            <TextAreaField label="Anything we should know? (optional)" name="note" />
          </FormShell>
        </div>
      </Container>
    </>
  );
}
