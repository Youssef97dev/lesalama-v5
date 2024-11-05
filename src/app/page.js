import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
