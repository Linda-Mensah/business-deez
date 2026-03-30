"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-[#2C4A3E] to-[#1F3A30] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-6 h-6 text-[#7CB9A8]" />
              <h3 className="text-2xl text-[#7CB9A8] font-bold">Deez Biz</h3>
            </div>
            <p className="text-white/70">
              Fresh, clean, and gentle products for your family&apos;s everyday
              needs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+233500175261"
                  className="hover:text-white transition-colors"
                >
                  +233 50 017 5261
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:gyemfa@deezbiz.com"
                  className="hover:text-white transition-colors"
                >
                  gyemfa@deezbiz.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Number 8 Klemusu Road, Teshie, Accra</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Promise</h4>
            <p className="text-white/70">
              Pure ingredients. Gentle care. Fresh approach. Quality you can
              trust for your family.
            </p>
            <div className="mt-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#7CB9A8] animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-[#A7C7E7] animate-pulse delay-100" />
              <div className="w-2 h-2 rounded-full bg-[#9BC4B0] animate-pulse delay-200" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Deez Biz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
