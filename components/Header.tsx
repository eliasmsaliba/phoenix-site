"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { services } from "@/data/services";
import { articles } from "@/data/resources";
import { CONTACT } from "@/lib/contact";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

const afterDropdowns = [
  { label: "Director Support", href: "/services/director-advisory" },
  { label: "Contact", href: "/contact" },
];

function DesktopDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { name: string; slug: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        className="flex items-center gap-1 py-2 text-[13px] font-bold uppercase tracking-wide text-ink-900 hover:text-teal-600"
      >
        {label}
        <ChevronDown size={13} className="opacity-60" />
      </Link>
      {open && (
        <div className="absolute left-1/2 top-full z-40 grid w-[520px] -translate-x-1/2 grid-cols-2 gap-x-6 gap-y-1 rounded-xl border border-teal-100 bg-white p-4 shadow-xl shadow-teal-950/10">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${href}/${item.slug}`}
              className="rounded-lg px-3 py-2 text-sm normal-case text-ink-700 hover:bg-teal-50 hover:text-teal-700"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={href}
            className="col-span-2 mt-1 rounded-lg px-3 py-2 text-sm normal-case font-semibold text-teal-700 hover:bg-teal-50"
          >
            View all →
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="hidden border-b border-teal-100 bg-paper-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-4 py-1.5 text-xs text-ink-700 sm:px-6 lg:px-8">
          <a href={CONTACT.phoneHref} className="flex items-center gap-1.5 font-semibold hover:text-teal-700">
            <Phone size={12} className="text-red-500" />
            {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.emailHref} className="flex items-center gap-1.5 hover:text-teal-700">
            <Mail size={12} className="text-teal-600" />
            {CONTACT.email}
          </a>
        </div>
      </div>

      <div className="border-b border-teal-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Phoenix — home">
            <Logo size={40} tagline />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-[13px] font-bold uppercase tracking-wide text-ink-900 hover:text-teal-600"
              >
                {link.label}
              </Link>
            ))}
            <DesktopDropdown
              label="Solutions"
              href="/services"
              items={services.map((s) => ({ name: s.name, slug: s.slug }))}
            />
            <Link
              href={afterDropdowns[0].href}
              className="py-2 text-[13px] font-bold uppercase tracking-wide text-ink-900 hover:text-teal-600"
            >
              {afterDropdowns[0].label}
            </Link>
            <DesktopDropdown
              label="Resources"
              href="/resources"
              items={articles.map((a) => ({ name: a.title, slug: a.slug }))}
            />
            <Link
              href={afterDropdowns[1].href}
              className="py-2 text-[13px] font-bold uppercase tracking-wide text-ink-900 hover:text-teal-600"
            >
              {afterDropdowns[1].label}
            </Link>
          </nav>

          <div className="hidden lg:block">
            <CTAHeaderButton />
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-ink-900 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-teal-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {[...navLinks, { label: "Solutions", href: "/services" }, ...afterDropdowns.slice(0, 1), { label: "Resources", href: "/resources" }, afterDropdowns[1]].map(
              (link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-teal-100/70 py-3 text-sm font-bold uppercase tracking-wide text-ink-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center justify-center gap-1.5 rounded-full border-2 border-teal-600 py-2.5 text-sm font-semibold text-teal-700"
            >
              <Phone size={15} />
              {CONTACT.phoneDisplay}
            </a>
            <CTAHeaderButton full />
          </div>
        </div>
      )}
    </header>
  );
}

function CTAHeaderButton({ full = false }: { full?: boolean }) {
  return (
    <Link
      href="/confidential-consultation"
      className={`inline-flex items-center justify-center rounded-md bg-red-500 px-5 py-3 text-[12.5px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-600 ${
        full ? "w-full" : ""
      }`}
    >
      Request a Confidential Consultation
    </Link>
  );
}
