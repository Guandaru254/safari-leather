"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Classic Safari Tote",
    price: "KSh 9,500",
    image: "/images/tote.jpg",
  },
  {
    name: "Nomad Travel Duffel",
    price: "KSh 14,000",
    image: "/images/duffel.jpg",
  },
  {
    name: "Safari Executive Briefcase",
    price: "KSh 18,000",
    image: "/images/briefcase.jpg",
  },
  {
    name: "Adventure Leather Backpack",
    price: "KSh 16,000",
    image: "/images/backpack.jpg",
  },
];

export default function ShopPage() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 lg:px-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-black uppercase mb-16 tracking-tight"
      >
        The <span className="text-[#d3960c]">Collection</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-[#d3960c]/30 transition"
          >
            <div className="relative h-64 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://placehold.co/600x400/000000/FFFFFF?text=Safari+Leather";
                }}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-[#d3960c] text-lg mb-4">{product.price}</p>
              <button className="bg-[#d3960c] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#a9780a] transition">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
