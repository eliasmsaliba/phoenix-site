import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

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
    <footer className="border-t border-teal-900/40 bg-ink-950 text-paper-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo size={32} dark />
            <p className="mt-4 max-w-[26ch] text-sm italic text-teal-300">
              Turning Setbacks into Comebacks
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Phoenix on LinkedIn"
                className="rounded-full border border-white/15 p-2 text-paper-100 hover:bg-white/10"
              >
                <LinkedinGlyph />
              </a>
              <a
                href="#"
                aria-label="Phoenix on X"
                className="rounded-full border border-white/15 p-2 text-paper-100 hover:bg-white/10"
              >
                <XGlyph />
              </a>
            </div>
          </div>

          <FooterCol title="Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Industries">
            {industries.map((i) => (
              <FooterLink key={i.slug} href={`/industries/${i.slug}`}>
                {i.name}
              </FooterLink>
            ))}
            <FooterLink href="/about">About Phoenix</FooterLink>
            <FooterLink href="/process">Our Process</FooterLink>
            <FooterLink href="/resources">Resources</FooterLink>
          </FooterCol>

          <FooterCol title="Get Help">
            <FooterLink href="/book-consultation">Book Consultation</FooterLink>
            <FooterLink href="/request-callback">Request a Callback</FooterLink>
            <FooterLink href="/emergency-support">Emergency Business Support</FooterLink>
            <FooterLink href="/guides">Download Guides</FooterLink>
            <FooterLink href="/faqs">FAQs</FooterLink>
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/legal/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/legal/terms-conditions">Terms &amp; Conditions</FooterLink>
            <FooterLink href="/legal/cookie-policy">Cookie Policy</FooterLink>
            <a
              href="tel:+448001234567"
              className="mt-2 flex items-center gap-1.5 text-sm text-paper-100/80 hover:text-white"
            >
              <Phone size={14} /> 0800 123 4567
            </a>
            <a
              href="mailto:hello@phoenixrecovery.example"
              className="flex items-center gap-1.5 text-sm text-paper-100/80 hover:text-white"
            >
              <Mail size={14} /> hello@phoenixrecovery.example
            </a>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-paper-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Wreckingball Business Consultancy trading as Phoenix Recovery Ltd. All rights reserved.</p>
          <p>Registered office details and company number here.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-white">{title}</h3>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-sm text-paper-100/70 hover:text-white">
      {children}
    </Link>
  );
}
