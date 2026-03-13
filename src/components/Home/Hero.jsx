import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // TOP SECTION ANIMATION (on load)
      gsap.from(".h-animate", {
        opacity: 0,
        y: 60,
        duration: 1.9,
        stagger: 0.25,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".p-animate", {
        opacity: 0,
        y: 60,
        duration: 1.3,
        stagger: 0.3,
        ease: "power3.out",
        delay: 1,
      });

      gsap.from(".buttons-animate", {
        opacity: 0,
        y: 60,
        duration: 1.3,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.5,
      });

      // CARDS ANIMATION (on scroll)
      gsap.from(".card-animate", {
        opacity: 0,
        y: 80,
        delay: 1.7,
        duration: 1.4,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cards-wrapper",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="home-hero"
      className="relative w-full text-white flex items-center overflow-hidden"
    >
      {/* ===== Overlay (above bg image, below content) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(120,130,150,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1117]/40 via-[#0b1117]/60 to-[#000000]" />
      </div>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
        {/* TOP CONTENT */}
        <div className="space-y-6 max-w-3xl mt-12 md:mt-20">

          <h1 className="h-animate text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[3.2rem] font-bold tracking-wide">
            Transforming Ideas Into Scalable Digital Solutions
          </h1>
          <p className="p-animate text-sm md:text-[.8rem] md:w-[95%] text-[white] leading-relaxed flex">
            AXSTAR helps businesses grow through smart technology solutions, business consulting, and digital transformation services.
          </p>
          <p className="p-animate text-sm md:text-[.8rem] md:w-[95%] text-[white] leading-relaxed flex">
            AXSTAR delivers integrated IT and business consulting services designed to scale your enterprise. From strategic planning to full-scale deployment, we build high-performance solutions that align your technology with your business goals.
          </p>

          

          <div className="buttons-animate flex flex-wrap gap-4 pt-4">
            <a href="#about">
              <button className="cursor-pointer px-6 py-3 
                bg-gradient-to-r from-[var(--primary-color)] to-white/30
                text-black rounded-full text-sm font-medium transition hover:scale-105">
                Discover ↓
              </button>
            </a>

            <a href="/services#services-hero">
              <button className="cursor-pointer px-6 py-3 border border-[var(--primary-color)]/40 rounded-full text-sm transition hover:bg-white/10 text-[var(--primary-color)]/40">
                View Services
              </button>
            </a>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;