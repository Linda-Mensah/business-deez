"use client";

import { motion } from "framer-motion";
import { Droplets, Heart, Leaf } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Droplets,
      title: "Pure & Gentle",
      description: "Formulated with care for sensitive skin and delicate needs",
      color: "from-[#7CB9A8] to-[#6BA598]",
    },
    {
      icon: Heart,
      title: "Family First",
      description: "Thoughtfully designed for every member of your family",
      color: "from-[#A7C7E7] to-[#96B7D7]",
    },
    {
      icon: Leaf,
      title: "Naturally Fresh",
      description: "Eco-conscious choices for a cleaner, greener home",
      color: "from-[#9BC4B0] to-[#8BB4A0]",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2C4A3E] mb-4 tracking-tight">
            Pure Care for Every Moment
          </h2>
          <p className="text-lg text-[#2C4A3E]/70 max-w-2xl mx-auto leading-relaxed">
            We believe in creating products that bring freshness, purity, and
            gentle care to your everyday life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-8 bg-linear-to-br from-[#5F9E8D]/50 to-[#F8FCF8] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-[#E0F0E8] backdrop-blur-sm hover:scale-105"
            >
              <div
                className={`inline-flex items-center justify-center w-20 h-20 bg-linear-to-r ${feature.color} rounded-2xl mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2C4A3E] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#2C4A3E]/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-linear-to-r from-[#F8FCF8]/80 to-[#F0F6F0]/80 rounded-3xl p-10 relative overflow-hidden shadow-sm"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#7CB9A8]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#A7C7E7]/20 rounded-full blur-3xl" />
          </div>
          <p className="text-[#2C4A3E]/70 max-w-3xl mx-auto relative z-10 text-lg leading-relaxed">
            With locations in Accra and the Eastern Region, we bring fresh,
            quality products to families across Ghana. Your family&apos;s
            wellbeing and satisfaction is our greatest joy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
