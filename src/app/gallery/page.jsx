import Gallery from "./components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
};

export default page;
