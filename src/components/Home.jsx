import React from "react";
import Hero from "../assets/hero/hero.avif";
import pdf from "../assets/pdf/Resume.pdf";
import SplashCursor from "./SplashCursor";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-900 px-4 sm:px-6 md:px-16 py-10"
    >
      <SplashCursor />
      {/* Left Text Section */}
      <div
        className="flex-1 text-center md:text-left mt-8 md:mt-0"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug">
          Hi, I'm{" "}
          <span className="animate-textColorChange font-bold text-indigo-500">
            Nirdeshak
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-pink-500 mb-6 max-w-lg mx-auto md:mx-0">
          A passionate <span className="font-semibold">Web Developer</span> who
          loves building modern, responsive, and interactive applications.
        </p>

        <a
          href={pdf}
          download="Resume.pdf"
          className="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 
                     hover:bg-pink-600 hover:text-white transition-colors 
                     font-medium rounded-full animate-borderGradient"
        >
          Download Resume
        </a>
      </div>

      {/* Right Hero Section */}
      <div
        className="flex-1 flex justify-center md:justify-end"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <div className="relative group w-48 sm:w-64 md:w-80 lg:w-96 rounded-full">
          <img
            src={Hero}
            alt="Hero"
            className="rounded-full shadow-lg object-cover w-full h-full 
                       transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 rounded-full border-4 sm:border-6 md:border-8 border-transparent 
                       group-hover:border-gradient animate-borderGradient pointer-events-none"
          ></div>
        </div>
      </div>
    </section>
  );
}
