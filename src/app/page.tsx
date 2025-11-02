"use client";

import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-24 px-6 md:px-16 bg-black">
        <ProductGrid />
      </section>
    </>
  );
}
