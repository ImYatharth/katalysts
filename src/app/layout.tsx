import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

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
        className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-[#0A0A0A]`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
