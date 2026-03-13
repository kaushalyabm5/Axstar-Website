import { useState } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";

export default function WhatWeDo() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "Tailored IT & Software Solutions",
      desc: "Crafting custom technology solutions that address your unique business needs.",
      full: "We design and develop fully customized IT and software solutions tailored specifically to your business processes. Our team ensures scalable, secure, and high-performance applications that grow with your company.",
      bg: "bg-gradient-to-br from-[var(--primary-color)] to-[black]",
    },
    {
      title: "Digital Strategy",
      desc: "Creating impactful digital strategies that strategic growth and efficiency.",
      full: "Our digital strategy services help businesses identify the right technologies, marketing channels, and digital experiences needed to stay competitive and achieve long-term growth.",
      bg: "bg-gradient-to-br from-[var(--primary-color)] to-[black]",
    },
    {
      title: "Business Consulting",
      desc: "Providing strategic consulting to streamline processes and efficiency.",
      full: "We provide expert consulting to analyze business workflows, identify inefficiencies, and implement technology-driven improvements that enhance productivity and operational success.",
      bg: "bg-gradient-to-br from-[var(--primary-color)] to-[black]",
    },
  ];

  return (
    <section className="w-full py-20 px-6 bg-[#000000]">

        
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            What We Do
          </h2>
         
        </div>

        {/* Cards */}
        <div className="grid py-5 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} text-white rounded-2xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-[1.03]`}
            >
              {/* Decorative shape */}
              <div className="absolute w-40 h-40 bg-white/10 rounded-full blur-2xl -bottom-10 -right-10"></div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-white/90 mb-6">{item.desc}</p>

              {/* Button */}
              <button
                onClick={() => setActiveService(item)}
                className="cursor-pointer group flex items-center gap-2 bg-white text-black text-sm px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Learn More
                <FiArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveService(null)}
            ></div>

            {/* Modal Box */}
            <div className="relative bg-neutral-800 rounded-2xl max-w-lg w-full p-8 shadow-xl">

              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="cursor-pointer absolute top-4 right-4 text-neutral-300 hover:text-[var(--primary-color)]"
              >
                <FiX size={22} />
              </button>

              {/* Modal Content */}
              <h3 className="text-2xl font-semibold mb-4 text-neutral-100">
                {activeService.title}
              </h3>

              <p className="text-neutral-300 leading-relaxed">
                {activeService.full}
              </p>

              <div className="mt-6">
                <button
                  onClick={() => setActiveService(null)}
                  className="cursor-pointer bg-[var(--primary-color)] text-black px-6 py-2 rounded-full hover:bg-[var(--primary-color)]/40 transition"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}