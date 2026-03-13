import React from "react";
import { Link } from "react-router-dom";

const ItBusiness = () => {
  const services = [
    {
      title: "Business Planning & Growth Strategy",
      desc: "Developing strategic plans to ensure sustainable growth.",
      path: "/business-planning",
    },
    {
      title: "Business & Project Documentation",
      desc: "Comprehensive documentation of business and tech projects.",
      path: "/business-documentation",
    },
    {
      title: "Digital Transformation Consulting",
      desc: "Guiding your business through digital change and innovation.",
      path: "/digital-consulting",
    },
  ];

  return (
    <section id="it-business" className="w-full bg-black py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          IT & Business Consulting
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base">
          Strategic consulting services to drive your business transformation
          and sustained success.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#2a2a2a] bg-[#111] p-8 flex flex-col justify-between hover:border-[#5dc192] transition"
          >
            <div>
              {/* Icon Placeholder */}
              <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-5">
                <div className="w-6 h-6 border-2 border-[#5dc192] rounded"></div>
              </div>

              <h3 className="text-white text-lg font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* Learn More Button */}
            <Link
              to={service.path}
              className="mt-6 w-fit px-4 py-2 text-sm rounded-lg border border-white/20 text-white hover:bg-white hover:text-black transition cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItBusiness;