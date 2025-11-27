import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Logos } from "./Components/Logo";
import { Navbar } from "./Components/Navbar";
import { Showcase } from "./Components/ShowCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black" >
      <Navbar/>
      <Hero/>
      <Showcase/>
      <Logos/>
      <Footer/>
    </div>
  );
}
