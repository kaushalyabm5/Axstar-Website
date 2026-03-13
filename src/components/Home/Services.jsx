import React from "react";
import { FaPlaneArrival, FaCalendarCheck, FaUserTie, FaTags, FaCode, FaShoppingCart, FaRobot, FaBullhorn, FaBriefcase, FaFileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-2xl" />,
    title: "Web & Mobile App Development",
    description: "Custom websites and mobile apps built for performance",
  },
  {
    icon: <FaShoppingCart className="text-2xl" />,
    title: "Ecommerce Business Solutions",
    description: "Complete online stores designed to sell and scale.",
  },
  {
    icon: <FaRobot className="text-2xl" />,
    title: "AI-Driven Solutions",
    description: "Smart automation and AI tools for modern businesses.",
  },
  {
    icon: <FaBullhorn className="text-2xl" />,
    title: "Digital Marketing & Services",
    description: "Strategies to grow your brand and reach customers.",
  },
   {
    icon: <FaBriefcase className="text-2xl" />,
    title: "IT & Business Consulting",
    description: "Expert guidance to optimize technology and operations.",
  },
  {
    icon: <FaFileAlt className="text-2xl" />,
    title: "Project Documentation",
    description: "Clear, structured project documentation.",
  },
];

const Services = () => {
  return (
    <section id="services-section" className="w-full py-16 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 text-center">
          Our Core Services
        </h2>

        

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-y-16">

          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-[var(--primary-color)] mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[var(--primary-color)]/50">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-200 mt-2 max-w-[220px]">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;