import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "katalysts | AI-native business solutions",
  description:
    "we solve your business problems with AI. faster. better. AI-native consulting delivering measurable outcomes at 5x speed and half the cost.",
  keywords: [
    "AI consulting",
    "AI-native",
    "business solutions",
    "digital transformation",
    "AI services",
  ],
  authors: [{ name: "katalysts" }],
  openGraph: {
    title: "katalysts | AI-native business solutions",
    description:
      "AI-native consulting delivering measurable outcomes at 5x speed and half the cost.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "katalysts | AI-native business solutions",
    description: "we solve your business problems with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-background`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
