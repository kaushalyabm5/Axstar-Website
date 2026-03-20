import React from "react";
import { FaArrowDown, FaPlay } from "react-icons/fa";
import appimg1 from "../../../assets/appImg1.png";
import {
  FiSmartphone,
  FiLayout,
  FiLayers,
  FiShield,
  FiGlobe,
  FiDatabase,
  FiLink,
  FiBox,
  FiZap,
  FiCode
} from "react-icons/fi";


const MobileAppDevelopment = () => {

  const cards = [
  { title: "User-friendly mobile experiences", desc: "Sell access to an exclusive Discord community." },
  { title: "Fast, secure, and scalable apps", desc: "Sell access to your TradingView indicators." },
  { title: "Agile collaboration and transparent communication", desc: "Sell access to an online course or program." },
  { title: "Cross-platform expertise for faster launch", desc: "Sell access to an exclusive Discord community." },
  { title: "Continuous support and maintenance", desc: "Sell access to an exclusive Discord community." },
  
];


  const services = [
  {
    title: "Custom App Development",
    desc: "We build tailored mobile apps for iOS and Android that match your business goals.",
    icon: <FiSmartphone />
  },
  {
    title: "UI/UX Design",
    desc: "Simple, clean, and user-friendly designs for a smooth app experience.",
    icon: <FiLayout />
  },
  {
    title: "Cross-Platform Apps",
    desc: "One app that works seamlessly across all devices, saving time and cost.",
    icon: <FiLayers />
  },
  {
    title: "Testing & Support",
    desc: "We test, launch, and continuously improve your app for performance and security.",
    icon: <FiShield />
  },
  {
    title: "Full-Cycle App Services",
    desc: "End-to-end mobile app solutions that boost growth, performance, and reach.",
    icon: <FiBox />
  },
  {
    title: "Mobile Web Apps",
    desc: "Fast, responsive web apps optimized for all mobile devices.",
    icon: <FiGlobe />
  },
  {
    title: "Backend Development",
    desc: "Secure and scalable backend systems with APIs and real-time data handling.",
    icon: <FiDatabase />
  },
  {
    title: "App Integration",
    desc: "Connect your app with third-party tools to improve workflow and efficiency.",
    icon: <FiLink />
  },
  {
    title: "Product Development",
    desc: "We build complete mobile products that drive engagement and business growth.",
    icon: <FiBox />
  },
  {
    title: "Progressive Web Apps (PWA)",
    desc: "High-performance web apps with native-like experience and better SEO.",
    icon: <FiZap />
  },
  {
    title: "iOS & Android Apps",
    desc: "High-quality apps built using modern technologies for maximum performance.",
    icon: <FiCode />
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
          Mobile App Development
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          We believe the best apps are the ones people actually enjoy using. That’s why we focus on blending design, technology, and usability into every mobile solution we build.
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






      <div className="w-full bg-[#000000] py-16 px-6 flex flex-col items-center text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-200 leading-tight">
          Premium Mobile App Engineering: <br className="hidden sm:block" />
          Build for the Future
        </h2>

        <p className="mt-6 max-w-2xl text-neutral-300 text-sm sm:text-base leading-relaxed">
          Axstar Technologies transforms your vision into high-impact digital products. As a global leader in mobile app development, we engineer scalable, secure, and high-performance solutions for both iOS and Android platforms.
        </p>

        <p className="mt-6 max-w-2xl text-neutral-300 text-sm sm:text-base leading-relaxed">
          Our approach prioritizes seamless user engagement and robust performance to drive measurable business growth. By combining innovation with technical reliability, we ensure every project delivers a competitive edge in the digital marketplace.
        </p>

      </div>





       <div className="bg-[#010704] rounded-[2rem] text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Building High-Performance <br />
              Apps for 
              <span className="text-gray-300"> Global Businesses</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-6">
              Axstar provides affordable, reliable mobile app development for businesses worldwide. We build high-performing iOS and Android apps with clean UI/UX and ongoing support. As a trusted offshore team, we turn your ideas into scalable digital products quickly and efficiently.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={appimg1}
                alt="About Visual"
                className="w-full h-auto object-contain rounded-2xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>









      {/* Our Strategic Mobile App Development Lifecycle
 */}

      <div className="w-full rounded-[2rem] bg-[#1c1d1c] py-20 mt-15 px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-300 mb-4">
            Our Strategic Mobile App Development Lifecycle
          </h2>

          <p className="text-neutral-500 max-w-2xl mx-auto mb-20 mt-12 text-sm md:text-base">
            At Axstar Technologies, our refined development process ensures your mobile solution aligns perfectly with your business objectives while maintaining peak performance. We employ a disciplined, iterative methodology that prioritizes high-end quality and seamless user experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title: "Analyze the Business Requirements",
                desc: "We collaborate closely with your stakeholders to define core objectives, understand your goals, target users, and desired outcomes."
              },
              {
                title: "Development and Implementation",
                desc: "Our engineering team utilizes agile development to build scalable, feature-rich solutions. We deliver in efficient, transparent stages to ensure the product evolves with your vision."
              },
              {
                title: "Quality Assurance and Testing",
                desc: "Every development phase includes comprehensive testing protocols. We identify and resolve technical debt early, ensuring a reliable, high-performance final product."
              },
              {
                title: "Deployment & Infrastructure Management",
                desc: "We handle the complexities of mobile app store deployment and provide dedicated maintenance to ensure long-term stability and security."
              },
              {
                title: "Operational User Training & Support",
                desc: "We empower your team with the knowledge and tools required to manage and navigate the application effectively for daily business operations."
              },
              {
                title: "Optimization & Continuous Improvement",
                desc: "Post-launch, we monitor performance metrics and user feedback to implement data-driven updates, ensuring your digital product remains competitive."
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center mt-10 gap-3 text-center">
                <div className={`
                  w-14 h-14 flex items-center justify-center rounded-xl mb-4 text-white text-lg
                  ${i % 3 === 0 ? "bg-[#2f7a5b]" : ""}
                  ${i % 3 === 1 ? "bg-[#3f9a73]" : ""}
                  ${i % 3 === 2 ? "bg-[#4fb58a]" : ""}
                  ${i % 3 === 3 ? "bg-[#5dc192]" : ""}
                  ${i % 3 === 4 ? "bg-[#7fd0a8]" : ""}
                  ${i % 3 === 5 ? "bg-[#a3e0c2]" : ""}
                `}>
                  {i + 1}
                </div>

                <h3 className="text-lg font-semibold text-neutral-300 mb-2">
                  {step.title}
                </h3>

                <p className="text-neutral-500 text-sm max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>







     






            {/* What We Do */}

<div className="w-full bg-transparent py-30 px-4">
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
      WHAT WE DO
    </h2>

    {/* Grid */}
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {services.map((item, index) => (
        <div
          key={index}
          className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 flex flex-col h-full min-h-[220px] hover:bg-white/10 transition duration-300"
        >
          {/* Icon */}
         <div className="flex justify-start mb-4">
          <div className="inline-flex items-center justify-center text-[var(--primary-color)] text-3xl bg-[#686868] rounded-full p-4">
            {item.icon}
          </div>
        </div>

          {/* Content */}
          <div className="flex flex-col flex-1">
            
            {/* Title (fixed height) */}
            <h3 className="text-neutral-200 font-semibold text-lg mb-2 min-h-[56px]">
              {item.title}
            </h3>

            {/* Description (fills remaining space) */}
            <p className="text-neutral-400 text-sm leading-relaxed flex-1">
              {item.desc}
            </p>

          </div>
        </div>
      ))}

    </div>
  </div>
</div>



{/** */}

<div className="w-full bg-[#161616] py-25 rounded-[2rem] px-4 md:px-10">
  {/* Section Title */}
  <div className="max-w-6xl mx-auto text-center mb-10">
    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
      Explore Axstar App Development Expertise Across Industries
    </h2>
    <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
      Axstar builds high-performing mobile apps and websites for multiple industries worldwide. 
      Our expert team helps you grow your online presence, attract more users, and increase sales 
      through data-driven design and advanced technology.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    <div className="bg-[#111827] rounded-xl p-8 flex items-center justify-center text-center hover:bg-[#1f2937] transition">
      <h3 className="text-white font-semibold text-sm md:text-base">
        Healthcare & Fitness Apps
      </h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 flex items-center justify-center text-center hover:bg-[#1f2937] transition">
      <h3 className="text-white font-semibold text-sm md:text-base">
        E-commerce & Retail Apps
      </h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 flex items-center justify-center text-center hover:bg-[#1f2937] transition">
      <h3 className="text-white font-semibold text-sm md:text-base">
        Finance & Banking Apps
      </h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 flex items-center justify-center text-center hover:bg-[#1f2937] transition">
      <h3 className="text-white font-semibold text-sm md:text-base">
        Education & E-learning Apps
      </h3>
    </div>

  </div>
</div>



 {/*** */}

 <div className="w-full bg-gradient-to-br from-[#000000] to-[#002e2a] text-white py-25 rounded-[2rem] mt-15 px-6 md:px-12">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT */}
    <div className="space-y-6 text-center lg:text-left">
      

      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Why Choose Axstar for Mobile App Development?
      </h2>

      <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">
        Axstar, a leading mobile app development company in Sri Lanka, combines technical expertise with user-focused design to create fast, secure, and scalable apps. From MVPs to enterprise solutions, we deliver cross-platform experiences that drive real business results, with transparent collaboration and ongoing support.
      </p>

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



<div className="w-full bg-transparent mt-15 rounded-[2rem] py-30 px-2 flex items-center justify-center">
      <div className="max-w-5xl text-center text-white">
        
        {/* Title */}
        <h2 className="text-2xl text-neutral-200 sm:text-3xl md:text-4xl mb-5 font-bold leading-snug">
          Boost Your Business Presence with the #1 Global Mobile App Development Company 
        </h2>

        {/* Description */}
        <p className="mt-4 text-[1rem] text-neutral-400 leading-relaxed">
          Axstar is a global mobile app development company delivering high-quality and affordable app solutions to businesses worldwide. Our expert mobile app developers create powerful, user-friendly apps for iOS, Android, and cross-platform environments. We help brands enhance visibility, improve engagement, and scale efficiently across international markets.
        </p>

        <p className="mt-4 text-[1rem] mb-5 text-neutral-400 leading-relaxed">
          Partner with a trusted mobile app development agency recognized for innovation, reliability, and performance. Schedule a free consultation today to discover how our global team can turn your ideas into successful digital products.
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

export default MobileAppDevelopment;