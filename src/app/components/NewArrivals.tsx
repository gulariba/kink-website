"use client";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { homeSections } from "../utils/homeSection";

export default function NewArrivals() {
  const { title, products } = homeSections.newArrivals;

  return (
    <section className="py-16 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}
