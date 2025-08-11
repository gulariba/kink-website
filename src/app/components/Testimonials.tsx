import { homeSections } from "../utils/homeSection";

export default function Testimonials() {
  const { title, feedback } = homeSections.testimonials;

  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {feedback.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <p>“{item.text}”</p>
            <span className="block mt-4 font-semibold">- {item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
