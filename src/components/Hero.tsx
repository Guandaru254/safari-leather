"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/leather-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-gold">
          Safari Leather Collections
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Every stitch tells a story — discover handcrafted luxury designed for the bold.
        </p>
        <motion.a
          href="/products"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gold text-black px-8 py-3 rounded-full font-semibold"
        >
          Explore Collection
        </motion.a>
      </motion.div>
    </section>
  );
}
