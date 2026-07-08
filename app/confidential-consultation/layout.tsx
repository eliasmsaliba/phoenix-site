import Link from "next/link";
import Logo from "@/components/Logo";

export default function ConfidentialConsultationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="border-b border-teal-100 py-5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Link href="/" aria-label="Phoenix — home">
            <Logo size={32} />
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-teal-100 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-center text-xs text-ink-500 sm:px-6">
          <p>© {new Date().getFullYear()} Wreckingball Business Consultancy trading as Phoenix Recovery Ltd. All rights reserved.</p>
          <Link href="/legal/privacy-policy" className="underline hover:text-teal-700">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </>
  );
}
