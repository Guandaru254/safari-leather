"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/90 shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
          <span className={isScrolled ? "text-black" : "text-[#d3960c]"}>
            Safari
          </span>{" "}
          Leather
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-semibold tracking-wider transition ${
                isScrolled
                  ? "text-black hover:text-[#d3960c]"
                  : "text-white hover:text-[#d3960c]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <X
              size={28}
              className={isScrolled ? "text-black" : "text-white"}
            />
          ) : (
            <Menu
              size={28}
              className={isScrolled ? "text-black" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden flex flex-col items-center space-y-4 py-6 ${
            isScrolled ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium hover:text-[#d3960c] transition`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
