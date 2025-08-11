import Link from "next/link";
import { homeSections } from "../utils/homeSection";

export default function BlogSection() {
  const { title, articles } = homeSections.blogSection;

  return (
    <section className="py-16 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.title} href={article.link}>
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm mt-2">Read More →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
