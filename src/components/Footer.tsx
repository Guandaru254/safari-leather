"use client";

import { motion } from "framer-motion";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-20 py-16 text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 text-center"
      >
        <h3 className="text-3xl font-bold mb-6 text-[#d3960c] tracking-wider uppercase">
          Safari Leather Collections
        </h3>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Every stitch tells a story — handcrafted in Nairobi, inspired by
          adventure, designed for the world.
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <Link
            href="https://www.instagram.com/safarileathercollections"
            target="_blank"
            className="hover:text-[#d3960c] transition"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="tel:+254727672280"
            className="hover:text-[#d3960c] transition"
          >
            <Phone size={24} />
          </Link>
          <Link
            href="mailto:safarileathercollections@gmail.com"
            className="hover:text-[#d3960c] transition"
          >
            <Mail size={24} />
          </Link>
          <Link
            href="https://goo.gl/maps/"
            target="_blank"
            className="hover:text-[#d3960c] transition"
          >
            <MapPin size={24} />
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Safari Leather Collections — All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
