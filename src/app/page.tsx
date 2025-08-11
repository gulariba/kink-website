import BlogSection from "./components/BlogSection";
import Collections from "./components/Collections";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import SaleBanner from "./components/SaleBanner";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Collections />
      <NewArrivals />
      <SaleBanner />
      <Testimonials />
      <BlogSection />
    </>
  );
}
