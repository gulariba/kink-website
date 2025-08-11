import { productData } from "./productData";

export const homeSections = {
  featuredProducts: {
    title: "Featured Products",
    products: productData.slice(0, 3),
  },
  collections: {
    title: "Shop by Collection",
    items: [
      { name: "Leather Corsets", link: "/collections/leather-corsets" },
      { name: "Lace Bodysuits", link: "/collections/lace-bodysuits" },
      { name: "BDSM Kits", link: "/collections/bdsm-kits" },
    ],
  },
  newArrivals: {
    title: "New Arrivals",
    products: productData.slice(3, 7),
  },
  saleBanner: {
    title: "Summer Sale - Up to 50% Off!",
    subtitle: "Hurry up! Limited time offer.",
    buttonText: "Shop Sale",
    link: "/sale",
  },
  testimonials: {
    title: "What Our Customers Say",
    feedback: [
      { text: "Amazing quality and super fast delivery!", name: "Sarah M." },
      { text: "Absolutely love my new outfit. Highly recommend!", name: "John D." },
    ],
  },
  blogSection: {
    title: "Latest Articles",
    articles: [
      { title: "Styling Tips for Leatherwear", link: "#" },
      { title: "BDSM Essentials You Should Know", link: "#" },
      { title: "Behind the Scenes of Our Brand", link: "#" },
    ],
  },
};
