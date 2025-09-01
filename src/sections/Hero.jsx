// src/sections/Hero.jsx
import React from "react";
import HeroText from "../components/HeroText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "85vh" }}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="hero-bg-fixed"
        style={{
          backgroundImage: "url(/assets/fullbg2.png)",
        }}
      />
      <div className="hero-bg-overlay" aria-hidden="true" />

      {/* Foreground content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
          
          {/* LEFT: Hero text */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <HeroText />
          </div>

          {/* RIGHT: Laptop image */}
          <div className="flex items-center justify-center mt-12 md:mt-40 flex-shrink-0">
            <img
              src="/assets/laptop.png"
              alt="Laptop illustration"
              loading="eager"
              decoding="async"
              className="drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
              style={{
                width: "clamp(380px, 75vw, 630px)", // bigger than before
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
