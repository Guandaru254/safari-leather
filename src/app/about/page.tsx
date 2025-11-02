"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="py-24 px-8 md:px-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Our Story
      </motion.h2>
      <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
        Founded in Ongata Rongai, Safari Leather Collections has become Kenya’s signature brand
        for timeless craftsmanship and global sophistication. We blend locally sourced materials with
        global design sensibilities to bring you unique leather artistry.
      </p>
    </section>
  );
}
