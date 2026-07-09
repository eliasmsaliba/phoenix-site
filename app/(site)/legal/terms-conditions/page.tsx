import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of the Phoenix website.",
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Legal", href: "/legal/privacy-policy" }, { label: "Terms & Conditions" }]} />
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold text-ink-950">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-ink-500">Last updated: [date] · Draft for legal review</p>

          <div className="mt-6 rounded-xl border border-teal-100 bg-teal-50/60 p-5 text-sm text-ink-700">
            These terms govern use of this <em>website</em> only. Any formal
            engagement with Phoenix is governed separately by a signed engagement
            letter, not by this page.
          </div>

          <div className="mt-10 flex flex-col gap-8 text-ink-700">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Acceptance of terms</h2>
              <p className="mt-2">By using this website, you agree to these terms. If you do not agree, please do not use the site.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Description of services</h2>
              <p className="mt-2">This website provides general information about Phoenix&rsquo;s business recovery and advisory services. It is not itself a service delivery channel — formal engagements are agreed separately in writing.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">No advice disclaimer</h2>
              <p className="mt-2">Content on this website is general information only, and is not a substitute for formal, independent legal, financial or insolvency advice specific to your circumstances.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Intellectual property</h2>
              <p className="mt-2">All content, branding and design on this site belongs to Phoenix Recovery Ltd unless otherwise stated, and may not be reproduced without permission.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Limitation of liability</h2>
              <p className="mt-2">Phoenix accepts no liability for decisions made solely on the basis of general website content, without a formal engagement.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Governing law</h2>
              <p className="mt-2">These terms are governed by the laws of [jurisdiction to be confirmed].</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Changes to these terms</h2>
              <p className="mt-2">We may update these terms from time to time; the current version will always be posted here.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Contact</h2>
              <p className="mt-2">Questions about these terms can be sent to <a href={CONTACT.emailHref} className="font-medium text-teal-700 hover:underline">{CONTACT.email}</a>.</p>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
