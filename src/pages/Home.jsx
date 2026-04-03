import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Gallery from "../sections/Gallery";
import WhatWeTeach from "../sections/WhatWeTeach";
import MapSection from "../sections/MapSection";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <WhatWeTeach />
      <MapSection />
      <Contact />
    </>
  );
}
