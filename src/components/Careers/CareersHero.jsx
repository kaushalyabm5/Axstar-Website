import React from "react";
import { FaArrowDown, FaPlay } from "react-icons/fa";

const CareersHero = () => {
  return (
    <section id="career-hero" className="relative w-full bg-black text-white overflow-hidden">
      

      {/* Top spacing */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 text-center">


        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
         Join with Axstar Team
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-6 max-w-5xl mx-auto text-lg">
          At Axstar Technologies, we don’t just fill roles; we curate talent. We are defining the next era of IT and Business Consulting a space where your workspace is a high-performance lab and your projects become global benchmarks.
        </p>
         <p className="text-gray-400 mt-6 max-w-5xl mx-auto text-lg">
          we are a unified force of high-performance specialists delivering real-time solutions on a global scale. We don't just build technology; we set the world standard for excellence and strategic precision.
        </p>

         <p className="text-gray-400 mt-6 max-w-5xl mx-auto text-lg">
          We provide the modern infrastructure; you provide the visionary execution. Join a collective where collaborative success drives our global legacy. If you are ready to work with the best team in the world, let’s build the future together.
        </p>


        

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <a href="#web">
                <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] cursor-pointer px-4 py-3 rounded-full font-medium transition mx-auto flex items-center gap-3">
            Explore The Future
          </button>
            </a>
          

        </div>

       

      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[var(--primary-color)]/30 blur-[180px] rounded-full pointer-events-none"></div>

    </section>
  );
};

export default CareersHero;