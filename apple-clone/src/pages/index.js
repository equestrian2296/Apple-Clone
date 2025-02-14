import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import Model from "../components/Model";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Model />
      <ProductSection title="iPhone 16" description="Hello, Apple intelligence" image="/iphone.png" />
      <Footer />
    </div>
  );
}
