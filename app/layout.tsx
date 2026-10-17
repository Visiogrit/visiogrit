import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Visiogrit — Brand Systems for Tech & SaaS",
  description:
    "Precision visual identity, brand systems, and digital product design for technical founders, B2B SaaS, developer tools, and high-growth tech startups.",
  keywords: [
    "brand identity",
    "design systems",
    "SaaS branding",
    "developer tools",
    "tech startups",
    "Visiogrit",
  ],
  authors: [{ name: "Visiogrit", url: "https://visiogrit.com" }],
  openGraph: {
    title: "Visiogrit — Brand Systems for Tech & SaaS",
    description:
      "We translate complex software into unforgettable visual identities and design systems.",
    url: "https://visiogrit.com",
    siteName: "Visiogrit",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d14" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
