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
        delay: 1,
      });

      gsap.from(".p-animate", {
        opacity: 0,
        y: 60,
        duration: 1.3,
        stagger: 0.3,
        ease: "power3.out",
        delay: .5,
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
        delay:1.7,
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
      id="home"
      className="relative w-full text-white flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col lg:min-h-screen">

        {/* TOP CONTENT */}
        <div className="space-y-6 max-w-xl mt-12 md:mt-20">
          <p className="p-animate text-sm md:text-base text-gray-300 leading-relaxed">
            CloudCode is a modern web development company that designs,
            develops, and deploys high-performance websites tailored to your
            business needs.
          </p>

          <h1 className="h-animate text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-widest">
            CLOU<span className="text-cyan-400">DC</span>ODE
          </h1>

          <div className="buttons-animate flex flex-wrap gap-4 pt-4">
            <a href="#discover">
              <button className="cursor-pointer px-6 py-3 bg-white text-black rounded-full text-sm font-medium transition hover:scale-105">
                Discover →
              </button>
            </a>

            <a href="#contact">
              <button className="cursor-pointer px-6 py-3 border border-white/40 rounded-full text-sm transition hover:bg-white/10">
                Connect With Us
              </button>
            </a>
          </div>
        </div>

        {/* CARDS */}
        <div className="cards-wrapper mt-16 md:mt-20 lg:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="card-animate bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
            <h3 className="font-medium mb-2">Strategic Website Design</h3>
            <p className="text-sm text-gray-300">
              Modern, conversion-focused designs that build trust.
            </p>
          </div>

          <div className="card-animate bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
            <h3 className="font-medium mb-2">Custom Web Development</h3>
            <p className="text-sm text-gray-300">
              Fast, scalable, fully responsive websites.
            </p>
          </div>

          <div className="card-animate bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
            <h3 className="font-medium mb-2">Launch & Growth Optimization</h3>
            <p className="text-sm text-gray-300">
              Seamless deployment with SEO foundation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;