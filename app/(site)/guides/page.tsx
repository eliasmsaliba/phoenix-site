import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import FormShell, { Field } from "@/components/FormShell";

export const metadata: Metadata = {
  title: "Free Business Recovery Guides & Templates",
  description:
    "Download the frameworks we use with clients — free, no obligation.",
};

const guides = [
  {
    title: "13-Week Cash Flow Template",
    body: "The exact rolling forecast format we build with clients in their first week.",
  },
  {
    title: "Director's Guide to Financial Distress",
    body: "A plain-English overview of duties, options and next steps.",
  },
  {
    title: "Restructuring Readiness Checklist",
    body: "Twenty questions to assess how ready your business is to restructure.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Download Guides" }]} />
      <PageHero
        eyebrow="Get Help"
        h1="Practical Guides for Directors"
        subhead="Download the frameworks we use with clients — free, no obligation."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-5 lg:col-span-3">
            {guides.map((g) => (
              <div key={g.title} className="flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <FileText size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-950">
                    {g.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-700">{g.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-7">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink-950">
                <Download size={18} className="text-teal-700" />
                Send Me the Guides
              </h3>
              <p className="mt-2 text-sm text-ink-700">
                Enter your details once to unlock all three downloads.
              </p>
              <div className="mt-5">
                <FormShell submitLabel="Send Me the Guides">
                  <Field label="Name" name="name" />
                  <Field label="Email" name="email" type="email" />
                </FormShell>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
