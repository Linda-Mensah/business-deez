"use client";

import { motion } from "framer-motion";
import Button from "./ui/button";
import Link from "next/link";
import { Sparkles, Leaf, Droplets, Wind } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden py-50">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#1a3a2e] via-[#2c5a48]/40 to-[#1a3a2e]/20" />

        <div className="absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-white/10" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#7CB9A8]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#A7C7E7]/15 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#E8F0E8]/20 rounded-full blur-3xl" />
          </div>

          <div className="absolute inset-0 opacity-30">
            <Leaf className="absolute top-1/4 left-[15%] w-12 h-12 text-[#7CB9A8]/40 animate-float" />
            <Droplets className="absolute bottom-1/3 right-[20%] w-10 h-10 text-[#A7C7E7]/40 animate-float-delayed" />
            <Wind className="absolute top-2/3 left-[10%] w-14 h-14 text-white/20 animate-float-slow" />
          </div>

          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 20 L30 30 L25 20 Z M30 40 L35 50 L30 60 L25 50 Z' fill='%237CB9A8' fill-opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg border border-[#7CB9A8]/30"
          >
            <span className="text-sm text-[#2C4A3E] font-medium">
              Fresh. Clean. Natural.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 drop-shadow-lg sm:text-center md:text-left"
          >
            Pure & Gentle Care for
            <span className="block font-extrabold">Your Family</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start"
          >
            <Link href="/products">
              <Button
                variant="primary"
                size="lg"
                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-linear-to-r from-[#2C5A48] to-[#3B7A62] border-none w-full sm:w-auto"
              >
                Explore Products
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://wa.me/233500175261?text=Hello, I want to place an order",
                  "_blank",
                )
              }
            >
              Order via WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(8deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
