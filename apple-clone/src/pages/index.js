import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection title="iPhone 15" description="New camera. New design." image="/iphone.png" />
      <Footer />
    </div>
  );
}
