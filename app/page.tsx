import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Residences from "./components/Residences";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Residences />
      <Footer />
    </>
  );
}
