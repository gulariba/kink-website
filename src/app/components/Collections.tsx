import Link from "next/link";
import { homeSections } from "../utils/homeSection";

export default function Collections() {
  const { title, items } = homeSections.collections;

  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
        {items.map((collection) => (
          <Link
            key={collection.name}
            href={collection.link}
            className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold">{collection.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
