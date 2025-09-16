import React from "react";
import Hero from "../assets/hero/hero.avif";
import pdf from "../assets/pdf/Resume.pdf";

export default function Home() {
  return (
    <>
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 px-6 md:px-16"
    >
      <div
        className="flex-1 text-center md:text-left"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 ">
          Hi, I'm <span className="animate-textColorChange font-bold">Nirdeshak</span>

        </h1>
        <p className="text-lg text-pink-500 mb-6">
          A passionate <span className="font-semibold">Web Developer</span> who
          loves building modern, responsive, and interactive applications.
        </p>
        <a
          href={pdf}
            download="Resume.pdf"
          className="inline-block px-6 py-3 border-indigo-600 text-indigo-600 hover:bg-pink-600 hover:text-white transition-colors font-medium p-2 border-4 rounded-full animate-borderGradient mb-4"
        >
          Download Resume
        </a>
      </div>

      <div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <div className="relative group w-72 md:w-96 rounded-full">
          <img
            src={Hero}
            alt="Hero"
            className="rounded-full shadow-lg object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 rounded-full border-8 border-transparent 
                          group-hover:border-gradient animate-borderGradient pointer-events-none"
          ></div>
        </div>
      </div>
    </section>
    </>
  );
}
