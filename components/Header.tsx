"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

const PHONE_DISPLAY = "0800 123 4567";
const PHONE_HREF = "tel:+448001234567";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/faqs" },
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
        className="flex items-center gap-1 py-2 text-sm font-medium text-ink-700 hover:text-teal-700"
      >
        {label}
        <ChevronDown size={14} className="opacity-60" />
      </Link>
      {open && (
        <div className="absolute left-1/2 top-full z-40 grid w-[520px] -translate-x-1/2 grid-cols-2 gap-x-6 gap-y-1 rounded-xl border border-teal-100 bg-white p-4 shadow-xl shadow-teal-950/5">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${href}/${item.slug}`}
              className="rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-teal-50 hover:text-teal-700"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={href}
            className="col-span-2 mt-1 rounded-lg px-3 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50"
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
    <header className="sticky top-0 z-50 border-b border-teal-100/80 bg-paper-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Phoenix — home">
          <Logo size={34} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <DesktopDropdown
            label="Services"
            href="/services"
            items={services.map((s) => ({ name: s.name, slug: s.slug }))}
          />
          <DesktopDropdown
            label="Industries"
            href="/industries"
            items={industries.map((i) => ({ name: i.name, slug: i.slug }))}
          />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-sm font-medium text-ink-700 hover:text-teal-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-teal-700"
          >
            <Phone size={15} className="text-teal-600" />
            {PHONE_DISPLAY}
          </a>
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

      {mobileOpen && (
        <div className="border-t border-teal-100 bg-paper-50 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            <Link
              href="/services"
              className="border-b border-teal-100/70 py-3 text-sm font-semibold text-ink-900"
              onClick={() => setMobileOpen(false)}
            >
              Our Services
            </Link>
            <Link
              href="/industries"
              className="border-b border-teal-100/70 py-3 text-sm font-semibold text-ink-900"
              onClick={() => setMobileOpen(false)}
            >
              Industries
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-teal-100/70 py-3 text-sm font-semibold text-ink-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-1.5 rounded-full border-2 border-teal-600 py-2.5 text-sm font-semibold text-teal-700"
            >
              <Phone size={15} />
              {PHONE_DISPLAY}
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
      className={`inline-flex items-center justify-center rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600 ${
        full ? "w-full" : ""
      }`}
    >
      Book a Confidential Consultation
    </Link>
  );
}
