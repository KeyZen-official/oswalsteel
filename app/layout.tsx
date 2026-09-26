import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oswal Steel Industries | Specialty Steel Supplier in Mumbai",
  description:
    "Oswal Steel Industries is a Mumbai-based importer, stockist and supplier of specialty steels, with ready stock, precision cutting and over 50 years of industry experience.",
  metadataBase: new URL("https://www.oswalsteel.com"),
  keywords: [
    "specialty steel supplier Mumbai",
    "tool steel supplier Mumbai",
    "high speed steel supplier Mumbai",
    "industrial steel supplier Mumbai",
    "steel stockist Mumbai",
    "precision cutting steel Mumbai",
  ],
  openGraph: {
    title: "Oswal Steel Industries | Specialty Steel Supplier in Mumbai",
    description:
      "Oswal Steel Industries is a Mumbai-based importer, stockist and supplier of specialty steels, with ready stock, precision cutting and over 50 years of industry experience.",
    url: "https://www.oswalsteel.com",
    siteName: "Oswal Steel Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/stockyard-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Oswal Steel Industries Stockyard",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-warmWhite text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
