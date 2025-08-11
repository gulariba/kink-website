import Link from "next/link";
import { homeSections } from "../utils/homeSection";

export default function SaleBanner() {
  const { title, subtitle, buttonText, link } = homeSections.saleBanner;

  return (
    <section className="bg-red-600 py-12 text-center text-white">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-4">{subtitle}</p>
      <Link
        href={link}
        className="inline-block mt-6 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold"
      >
        {buttonText}
      </Link>
    </section>
  );
}
