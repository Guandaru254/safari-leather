"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      
      {/* 1. Video Element: Set to autoplay, loop, muted, and cover the entire area.
        2. Replace the style attribute on the <section> tag.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline // Recommended for mobile devices
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/safari.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support the video tag */}
        Your browser does not support the video tag.
      </video>

      {/* The overlay is essential for content visibility on top of the video */}
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10" // z-10 ensures the content is above the video and overlay
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
        </motion.a>
      </motion.div>
    </section>
  );
}