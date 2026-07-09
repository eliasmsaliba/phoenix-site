import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Phoenix uses cookies on this website.",
};

const cookieTable = [
  { name: "phx_session", purpose: "Essential — keeps the site working correctly", duration: "Session" },
  { name: "phx_consent", purpose: "Essential — remembers your cookie choices", duration: "12 months" },
  { name: "_analytics", purpose: "Analytics — understands how the site is used", duration: "13 months" },
  { name: "_ads", purpose: "Marketing — measures ad performance", duration: "90 days" },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Legal", href: "/legal/privacy-policy" }, { label: "Cookie Policy" }]} />
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold text-ink-950">Cookie Policy</h1>
          <p className="mt-2 text-sm text-ink-500">Last updated: [date] · Draft for legal review</p>

          <div className="mt-6 rounded-xl border border-teal-100 bg-teal-50/60 p-5 text-sm text-ink-700">
            This policy must be backed by a working consent-management banner that
            blocks non-essential cookies until consent is given — a static policy
            page without that mechanism behind it is a compliance gap.
          </div>

          <div className="mt-10 flex flex-col gap-8 text-ink-700">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">What cookies are</h2>
              <p className="mt-2">Small files stored on your device that help websites function and understand usage.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Cookies we use</h2>
              <div className="mt-4 overflow-x-auto rounded-xl border border-teal-100">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-teal-100 bg-teal-50/60">
                      <th className="px-4 py-3 font-semibold text-ink-950">Name</th>
                      <th className="px-4 py-3 font-semibold text-ink-950">Purpose</th>
                      <th className="px-4 py-3 font-semibold text-ink-950">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTable.map((c) => (
                      <tr key={c.name} className="border-b border-teal-100 last:border-0">
                        <td className="px-4 py-3 font-mono text-xs">{c.name}</td>
                        <td className="px-4 py-3">{c.purpose}</td>
                        <td className="px-4 py-3">{c.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Managing your preferences</h2>
              <p className="mt-2">You can update your cookie choices at any time via the consent banner, or through your browser settings.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Third-party cookies</h2>
              <p className="mt-2">Some cookies are set by third parties (analytics and advertising platforms) we use to understand and improve this site.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink-950">Contact</h2>
              <p className="mt-2">Questions about this policy can be sent to <a href={CONTACT.emailHref} className="font-medium text-teal-700 hover:underline">{CONTACT.email}</a>.</p>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
