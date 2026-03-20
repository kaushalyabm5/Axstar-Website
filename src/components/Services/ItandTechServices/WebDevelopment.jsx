import React from "react";
import { FaArrowDown, FaPlay } from "react-icons/fa";

import {
  FiCode,
  FiPenTool,
  FiSmartphone,
  FiFileText,
  FiTrendingUp,
  FiSearch,
  FiZap,
  FiCloud,
} from "react-icons/fi";

import { FaMobileAlt, FaPalette, FaLayerGroup, FaHeadset, } from "react-icons/fa";


const WebDevelopment = () => {

    const cards = [
  { title: "Fast, smooth performance you can rely on", desc: "Sell access to an exclusive Discord community." },
  { title: "Clean, simple designs that people enjoy using", desc: "Sell access to your TradingView indicators." },
  { title: "Security baked in from the start", desc: "Sell access to an online course or program." },
  { title: "Solutions that scale as your business grows", desc: "Sell access to an exclusive Discord community." },
  { title: "A team that’s with you before, during, and after launch", desc: "Sell access to an exclusive Discord community." },
  
];






  const services = [
    {
      title: "Custom Mobile App Development",
      description:
        "Your business is unique, and your app should reflect that. We build apps from the ground up, tailored to your goals.",
      icon: <FaMobileAlt />,
    },
    {
      title: "UI/UX Design",
      description:
        "An app should feel as good as it looks. We create clean, intuitive designs that make using your app simple and enjoyable.",
      icon: <FaPalette />,
    },
    {
      title: "Cross-Platform Development",
      description:
        "One app, all devices. Our cross-platform solutions save time and cost while giving users a seamless experience.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Quality & Ongoing Support",
      description:
        "We don’t just launch and leave. From testing to updates, we make sure your app stays fast, secure, and ready.",
      icon: <FaHeadset />,
    },
  ];
  return (
    <section id="about-hero" className="lg:px-14 px-8 relative w-full bg-black text-white overflow-hidden">
   {/* ✅ TOP GLOW (FIXED) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[var(--primary-color)]/30 blur-[180px] rounded-full pointer-events-none"></div>

      {/* Top spacing */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 text-center">

        

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
         
Web Development
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
         Stop dreaming, start building! your website is your first impression. 
Let’s build something great together.  

        </p>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
        At Axstar, we build high-performance, custom websites designed to convert visitors into loyal customers.
A great web app doesn’t just sit online; it works for you. From managing customers to streamlining workflows, we build smart, easy-to-use applications that help businesses run better and grow faster.


        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <a href="#web">
                <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] cursor-pointer px-4 py-3 rounded-full font-medium transition mx-auto flex items-center gap-3">
            Explore More
          </button>
            </a>
          

        </div>

       

      </div>














      {/** */}

<div className="w-full bg-[#080808]/0 text-white py-30 px-15">
  <div className="max-w-7xl mx-auto text-center">

   

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
     What we Offer
    </h2>

    {/* Steps Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-30">

      {/* 1 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-blue-400 mb-3">
          <FiCode />
        </div>
        <h3 className="text-lg font-semibold mb-2">Fully Custom Coded</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          No templates or pre-made builders used.
        </p>
      </div>

      {/* 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-purple-400 mb-3">
          <FiPenTool />
        </div>
        <h3 className="text-lg font-semibold mb-2">Unique Premium Designs</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Tailored specifically to match your brand identity.
        </p>
      </div>

      {/* 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-green-400 mb-3">
          <FiSmartphone />
        </div>
        <h3 className="text-lg font-semibold mb-2">100% Mobile Responsive</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Optimized for desktops, tablets, and smartphones.
        </p>
      </div>

      {/* 4 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-yellow-400 mb-3">
          <FiFileText />
        </div>
        <h3 className="text-lg font-semibold mb-2">Result-Focused Content</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Content tailored to your business goals.
        </p>
      </div>

      {/* 5 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-pink-400 mb-3">
          <FiTrendingUp />
        </div>
        <h3 className="text-lg font-semibold mb-2">Lead-Driven Strategy</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Built to convert visitors into customers.
        </p>
      </div>

      {/* 6 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-cyan-400 mb-3">
          <FiSearch />
        </div>
        <h3 className="text-lg font-semibold mb-2">SEO Optimization</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          SEO-ready structure for better search visibility.
        </p>
      </div>

      {/* 7 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-orange-400 mb-3">
          <FiZap />
        </div>
        <h3 className="text-lg font-semibold mb-2">Fast Support</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Quick response and dedicated communication.
        </p>
      </div>

      {/* 8 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-indigo-400 mb-3">
          <FiCloud />
        </div>
        <h3 className="text-lg font-semibold mb-2">Cloud Hosting</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Reliable hosting with security and maintenance.
        </p>
      </div>

    </div>

  </div>
</div>







{/** */}
<div className="w-full bg-[#1a1a1a] py-20 rounded-[2rem] px-4 sm:px-6 lg:px-20">
      {/* Title */}
    <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">
     What we Do
    </h2>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-[#0e0e0e] rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Icon */}
            <div className="text-[var(--primary-color)] text-2xl mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-neutral-300 mb-2">
              {item.title}
            </h3>

            {/* Divider */}
            <div className="w-10 h-[2px] bg-[var(--primary-color)] mb-4"></div>

            {/* Description */}
            <p className="text-xs text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>





    {/** */}

    <div className="w-full bg-gradient-to-br from-[#000000] to-[#002e2a] rounded-[2rem] mt-20 text-white py-30 px-6 md:px-12">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT */}
    <div className="space-y-6 text-center lg:text-left">
      

      <h2 className="text-[4rem] lg:text-[6rem] font-bold leading-tight">
        Why Work With Us
      </h2>

    

    </div>

    {/* RIGHT */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#1f2e2b] p-5 rounded-xl border border-neutral-700 hover:border-gray-500 transition hover:scale-[1.02]"
        >
          <h3 className="font-semibold mb-2 text-neutral-300">{card.title}</h3>
          
        </div>
      ))}
    </div>

  </div>
</div>






<div className="w-full bg-transparent py-30 px-2 flex items-center justify-center">
      <div className="max-w-5xl text-center text-white">
        
        {/* Title */}
        <h2 className="text-2xl text-neutral-200 sm:text-3xl md:text-4xl mb-5 font-bold leading-snug">
          LET’S Build something THAT WORKS FOR YOU 
        </h2>

        {/* Description */}
        <p className="mt-4 text-[1rem] text-neutral-400 leading-relaxed">
          Your web app should make life easier, not harder. Whether it’s a simple tool or a full-scale platform, we’ll design and build something that feels right for your business and your users.
        </p>


        {/* Button */}
        <button className="mt-6 px-6 py-3 text-sm sm:text-base font-medium bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/50 cursor-pointer transition-all duration-300 rounded-full">
         Contact Our Team
        </button>

      </div>
    </div>

    

    </section>
  );
};

export default WebDevelopment;