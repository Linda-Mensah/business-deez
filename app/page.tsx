"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import ProductsPreview from "@/components/products-preview";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductsPreview />
      <ContactSection />
    </>
  );
}
