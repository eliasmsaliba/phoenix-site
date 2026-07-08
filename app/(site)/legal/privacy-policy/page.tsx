import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Phoenix collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Legal", href: "/legal/privacy-policy" }, { label: "Privacy Policy" }]} />
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold text-ink-950">Privacy Policy</h1>
          <p className="mt-2 text-sm text-ink-500">Last updated: [date] · Draft for legal review</p>

          <div className="mt-6 rounded-xl border border-teal-100 bg-teal-50/60 p-5 text-sm text-ink-700">
            This page sets out the structure Phoenix&rsquo;s privacy policy should follow.
            Final wording must be reviewed by qualified counsel for the relevant
            data protection regime before publishing.
          </div>

          <div className="mt-10 flex flex-col gap-8 text-ink-700">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Who we are</h2>
              <p className="mt-2">Phoenix Recovery Ltd (&ldquo;Phoenix&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides business recovery and turnaround advisory services. This policy explains how we handle personal information collected through this website and in the course of our engagements.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">What we collect</h2>
              <p className="mt-2">Contact details submitted through our forms (name, company, phone, email), messages you send us, and standard website analytics (pages visited, device type, approximate location).</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Why we collect it</h2>
              <p className="mt-2">To respond to enquiries, deliver services under an agreed engagement, meet legal and regulatory obligations, and understand how our website is used.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Legal basis</h2>
              <p className="mt-2">Processing is based on your consent, the necessity of performing a contract with you, or our legitimate interest in responding to enquiries and operating our business, as applicable under the relevant data protection law.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">How long we keep it</h2>
              <p className="mt-2">Only for as long as necessary to fulfil the purposes described here, or as required by law or professional obligation.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Who we share it with</h2>
              <p className="mt-2">We never sell personal information. Where an engagement requires it, we share only what is necessary with named professional partners (e.g. an instructed insolvency practitioner or solicitor), with your knowledge.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Your rights</h2>
              <p className="mt-2">You may request access to, correction of, or deletion of your personal information, and may object to certain processing, subject to applicable law.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Cookies</h2>
              <p className="mt-2">See our <a href="/legal/cookie-policy" className="font-medium text-teal-700 hover:underline">Cookie Policy</a> for details on the cookies this site uses and how to manage them.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Contact</h2>
              <p className="mt-2">Questions about this policy can be sent to <a href="mailto:privacy@phoenixrecovery.example" className="font-medium text-teal-700 hover:underline">privacy@phoenixrecovery.example</a>.</p>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
