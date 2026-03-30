"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-600">
            We&apos;d love to hear from you. Reach out with any questions or
            orders
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-neutral-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-900">Phone</p>
                    <a
                      href="tel:+233443344555"
                      className="text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      +233 44 334 4555
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-neutral-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-900">Email</p>
                    <a
                      href="mailto:deezessence@gmail.com"
                      className="text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      deezessence@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-neutral-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-900">
                      Business Hours
                    </p>
                    <p className="text-neutral-600">
                      Monday - Saturday: 8:00 AM - 8:00 PM
                    </p>
                    <p className="text-neutral-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Our Locations
              </h3>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-neutral-600 mt-1" />
                    <div>
                      <p className="font-medium text-neutral-900">
                        {location.region}
                      </p>
                      <p className="text-neutral-600">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="https://maps.google.com/?q=Deez+Essence+Accra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 underline transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
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
