import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full bg-black py-25 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl font-semibold text-white">
            What is AXSTAR
          </h2>

          <a href="#services-section">
            <button className="px-6 py-3 bg-[var(--primary-color)] text-black rounded-full text-sm md:text-base hover:bg-[var(--primary-color)]/70 cursor-pointer transition">
            Explore ↘
          </button>
          </a>
          
        </div>

        {/* Right Side */}
        <div className="text-center md:text-left">
          <p className="text-white text-justify text-base md:text-lg leading-relaxed max-w-xl">
            Axstar is an IT and Business Consulting company focused on helping organizations transform ideas into scalable success. We provide smart technology solutions, clear business strategies, and end-to-end consulting services that enable digital transformation, efficient project execution, and sustainable growth.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;