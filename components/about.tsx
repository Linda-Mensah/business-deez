"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Leaf } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description:
        "Carefully selected products that meet the highest standards",
    },
    {
      icon: Heart,
      title: "Family Focused",
      description: "Products designed with your family's well-being in mind",
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description:
        "Committed to sustainable and environmentally friendly practices",
    },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            About Deez Essence
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We are dedicated to providing high-quality household, baby care, and
            lifestyle products that enhance your daily life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-neutral-700" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-neutral-600 max-w-3xl mx-auto">
            With locations in Accra and the Eastern Region, we serve customers
            across Ghana with reliable delivery and exceptional customer
            service. Your satisfaction is our priority.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
