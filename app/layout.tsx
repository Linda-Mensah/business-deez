import type { Metadata } from "next";
import "./globals.css";
import { Marcellus, Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Deez Biz - Quality Household & Baby Care Products",
  description:
    "Discover premium household essentials, baby care products, and lifestyle accessories. Order via WhatsApp or call us today!",
  keywords:
    "household products, baby care, lifestyle accessories, Ghana, Accra",
  openGraph: {
    title: "Deez Biz",
    description: "Quality products for your home and family",
    url: "https://deezbiz.com",
    siteName: "Deez Biz",
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
      <body className={`${marcellus.variable} ${inter.variable}`}>
        <SmoothScroll />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
