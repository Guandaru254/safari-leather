"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Asali Tote Bag",
    image: "/asali.jpg",
    price: "KES 17,000",
  },
  {
    name: "Safari Travel Duffel",
    image: "/images/duffel.jpg",
    price: "KES 12,000",
  },
  {
    name: "Elegant Crossbody",
    image: "/images/crossbody.jpg",
    price: "KES 6,800",
  },
  {
    name: "Vintage Backpack",
    image: "/images/backpack.jpg",
    price: "KES 10,500",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
      {products.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          className="text-center group"
        >
          <div className="overflow-hidden rounded-2xl border border-zinc-800">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <h3 className="mt-4 text-lg font-medium">{item.name}</h3>
          <p className="text-gold font-semibold mt-1">{item.price}</p>
        </motion.div>
      ))}
    </div>
  );
}
