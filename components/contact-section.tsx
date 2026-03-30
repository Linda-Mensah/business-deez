"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react";
import ContactForm from "./contact-form";

const ContactSection = () => {
  const locations = [
    {
      address: "Number 8 Klemusu Road, Teshie, Accra, Ghana",
      region: "Greater Accra",
    },
    {
      address: "Number 9 Street, Nkawkaw, Eastern Region",
      region: "Eastern Region",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-br from-[#F8FCF8] to-[#F0F6F0] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-[#7CB9A8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#A7C7E7]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-fresh">
            {/* <Sparkles className="w-4 h-4 text-[#7CB9A8]" /> */}
            <span className="text-sm text-[#2C4A3E]">Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4A3E] mb-4">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-lg text-[#2C4A3E]/60">
            Have questions? Ready to order? Reach out anytime
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-fresh border border-[#E0F0E8]">
              <h3 className="text-2xl font-semibold text-[#2C4A3E] mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-r from-[#7CB9A8] to-[#6BA598] flex items-center justify-center shadow-fresh group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2C4A3E]">Phone</p>
                    <a
                      href="tel:+233500175261"
                      className="text-[#2C4A3E]/60 hover:text-[#7CB9A8] transition-colors"
                    >
                      +233 50 017 5261
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-r from-[#7CB9A8] to-[#6BA598] flex items-center justify-center shadow-fresh group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2C4A3E]">Email</p>
                    <a
                      href="mailto:gyemfa@deezbiz.com"
                      className="text-[#2C4A3E]/60 hover:text-[#7CB9A8] transition-colors"
                    >
                      gyemfa@deezbiz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-r from-[#7CB9A8] to-[#6BA598] flex items-center justify-center shadow-fresh group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2C4A3E]">Business Hours</p>
                    <p className="text-[#2C4A3E]/60">
                      Monday - Saturday: 8:00 AM - 8:00 PM
                    </p>
                    <p className="text-[#2C4A3E]/60">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-fresh border border-[#E0F0E8]">
              <h3 className="text-2xl font-semibold text-[#2C4A3E] mb-6">
                Our Locations
              </h3>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-r from-[#7CB9A8] to-[#6BA598] flex items-center justify-center shadow-fresh group-hover:scale-110 transition-transform shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#2C4A3E]">
                        {location.region}
                      </p>
                      <p className="text-[#2C4A3E]/60">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#E0F0E8]">
                <a
                  href="https://maps.google.com/?q=Deez+Biz+Accra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7CB9A8] hover:text-[#6BA598] transition-colors inline-flex items-center gap-1"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-fresh border border-[#E0F0E8]"
          >
            <h3 className="text-2xl font-semibold text-[#2C4A3E] mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
