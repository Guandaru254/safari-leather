"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 lg:px-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-black uppercase tracking-tight mb-16"
      >
        Get In <span className="text-[#d3960c]">Touch</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-zinc-900/70 backdrop-blur-lg rounded-3xl shadow-lg p-10"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-xl bg-black border border-zinc-700 text-white focus:outline-none focus:border-[#d3960c]"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full p-3 rounded-xl bg-black border border-zinc-700 text-white focus:outline-none focus:border-[#d3960c]"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full p-3 rounded-xl bg-black border border-zinc-700 text-white focus:outline-none focus:border-[#d3960c]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#d3960c] hover:bg-[#a9780a] text-black font-semibold px-10 py-3 rounded-full transition"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-gray-400 mt-10 text-sm">
          Or visit us at <span className="text-[#d3960c]">Sawa Mall C3, O.Rongai</span>
        </p>
      </motion.div>
    </section>
  );
}
