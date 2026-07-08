import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phoenixrecovery.example"),
  title: {
    default: "Phoenix | Business Recovery & Turnaround Specialists",
    template: "%s | Phoenix",
  },
  description:
    "Phoenix helps directors and businesses in financial distress recover, restructure and rebuild — confidentially. Turning setbacks into comebacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">{children}</body>
    </html>
  );
}
