import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deez Essence - Quality Household & Baby Care Products",
  description:
    "Discover premium household essentials, baby care products, and lifestyle accessories. Order via WhatsApp or call us today!",
  keywords:
    "household products, baby care, lifestyle accessories, Ghana, Accra",
  openGraph: {
    title: "Deez Essence",
    description: "Quality products for your home and family",
    url: "https://deezessence.com",
    siteName: "Deez Essence",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
