"use client";

import { motion } from "framer-motion";
import Button from "./ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Fresh decorative elements overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#7CB9A8]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#A7C7E7]/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <svg
              className="absolute top-20 left-10 w-20 h-20 text-white/10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2z" />
            </svg>
            <svg
              className="absolute bottom-20 right-10 w-16 h-16 text-white/10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-fresh"
          >
            <Sparkles className="w-4 h-4 text-[#7CB9A8]" />
            <span className="text-sm text-[#2C4A3E] font-medium">
              Fresh. Clean. Trusted.
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Pure & Gentle Care for
            <span className="block bg-clip-text font-extrabold">
              Your Family
            </span>
          </h1>

          <p className="text-xl font-semibold text-white/90 mb-8 max-w-2xl mx-auto">
            Discover our fresh, clean household essentials and gentle baby care
            products thoughtfully made for your family&apos;s wellbeing
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button variant="primary" size="lg">
                Explore Products
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              onClick={() =>
                window.open(
                  "https://wa.me/233500175261?text=Hello, I want to place an order",
                  "_blank",
                )
              }
            >
              Order via WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
