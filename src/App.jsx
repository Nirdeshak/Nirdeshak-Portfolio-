import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div className="font-sans scroll-smooth bg-gray-900">
      <Navbar />

      {/* Sections */}
      <main className="pt-16">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
