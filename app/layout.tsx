import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
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
  themeColor: "#0a0d14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#0a0d14] font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
