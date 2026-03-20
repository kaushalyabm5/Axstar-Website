import React from "react";
import { FaCheck } from "react-icons/fa";

const Difference = () => {
  const items = [
    {
      title: "Experienced Professionals",
      desc: "A team of seasoned experts in technology and business consulting.",
    },
    {
      title: "Client-Centric Approach",
      desc: "We prioritize your needs and tailor solutions to fit.",
    },
    {
      title: "Efficient Coverage",
      desc: "Together we cover a wide range of technology projects and specific needs.",
    },
    {
      title: "Innovative Solutions",
      desc: "Leveraging the latest technologies to drive your business forward.",
    },
  ];

  return (
    <section className="w-full py-30 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl text-white md:text-4xl font-semibold text-center mb-12">
          Why Axstar Is Different
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              
              {/* Icon */}
              <div className="mt-1">
                <FaCheck className="text-[var(--primary-color)] text-lg" />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                <p className="text-neutral-300 mt-1 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Difference;