import React from "react";
import { FaBrain, FaGlobe, FaMagento, FaNodeJs, FaPaypal, FaProjectDiagram, FaPython, FaReact, FaStripe, } from "react-icons/fa";
import ecomImg1 from "../../../assets/ecomImg1.jpg";


import { SiGo, SiPaypal, SiShopify, SiStripe, SiTailwindcss, SiVuedotjs } from "react-icons/si";
import { FiLayers } from "react-icons/fi";
import { MdPayment } from "react-icons/md";



const Ecommerce = () => {

  const technologies = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact style={{color: '#61DAFB'}}/> },
      { name: "Vue.js", icon: <SiVuedotjs style={{color: '#42B883'}}/> },
      { name: "Tailwind CSS", icon: <SiTailwindcss style={{color: '#38B2AC'}}/> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs style={{color: '#339933'}}/> },
      { name: "Python", icon: <FaPython style={{color: '#3776AB'}}/>},
      { name: "Go", icon: <SiGo style={{color: '#00ADD8'}}/>},
    ],
  },
  {
    title: "eCom Platforms",
    items: [
      { name: "Shopify Plus", icon: <SiShopify style={{color: '#95BF47'}}/>},
      { name: "Magento", icon: <FaMagento style={{color: '#EE672F'}}/>},
      { name: "Headless Commerce", icon: <FiLayers style={{color: '#6366F1'}}/>},
    ],
  },
  {
    title: "Payments",
    items: [
      { name: "Stripe", icon: <FaStripe style={{color: '#635BFF'}}/>},
      { name: "PayPal", icon: <FaPaypal style={{color: '#003087'}}/>},
      { name: "Local Gateways", icon: <MdPayment style={{color: '#009CDE'}}/>},
    ],
  },
];


  const features = [
  {
    title: "Architectural Excellence",
    desc: "We design and build modern structures with precision and long-lasting quality.",
  },
  {
    title: "Craftsmanship-Driven Design",
    desc: "Our team focuses on detail-oriented design with superior craftsmanship.",
  },
  {
    title: "Seamless Integration",
    desc: "We ensure smooth coordination between design, planning, and execution.",
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
  Scalable eCommerce Ecosystems for the Modern Enterprise
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          We don't just build online stores; we engineer high-performance digital commerce platforms that drive revenue and automate growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <a href="#web">
                <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] cursor-pointer px-4 py-3 rounded-full font-medium transition mx-auto flex items-center gap-3">
            Book a Consultation
          </button>
            </a>
          

        </div>

       

      </div>

      






      {/** */}

      <div className="w-full bg-black py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          The “Axstar” Difference
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center hover:bg-neutral-800 transition duration-300"
            >
              <h3 className="text-[var(--primary-color)] text-lg sm:text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>









    {/** */}


    <h2 className="text-white text-center mt-10 mb-8 text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          Core Service Offerings
        </h2>
      
      <section className="w-full bg-black border border-[1px] border-neutral-800 rounded-[2rem] text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Custom Storefront Development
          </h2>

          <p className="text-gray-400 text-justify text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
           Building unique shopping experiences using modern frameworks like Next.js or headless commerce architectures.
          </p>

         
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-full">
          <div className="w-full aspect-video">
          <img
            src={ecomImg1}
            alt="Interior"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        </div>
      </div>
    </section>




    <section className="w-full mt-15 bg-black border border-[1px] border-neutral-800 rounded-[2rem] text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">



        {/* RIGHT IMAGE */}
        <div className="w-full h-full">
          <div className="w-full aspect-video">
          <img
            src={ecomImg1}
            alt="Interior"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        </div>
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-right">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Platform Migration
          </h2>

          <p className="text-gray-400 text-sm md:text-base text-right  leading-relaxed max-w-xl mx-auto lg:mx-0">
            Seamlessly moving your data from legacy systems to Shopify, WooCommerce, or BigCommerce without losing SEO rankings.
          </p>

      
        </div>

        
      </div>
    </section>







     <section className="w-full mt-15 bg-black border border-[1px] border-neutral-800 rounded-[2rem] text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
           B2B Commerce Portals
          </h2>

          <p className="text-gray-400 text-justify text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Specialized portals for wholesale clients, featuring bulk pricing, account management, and automated invoicing.
          </p>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-full">
          <div className="w-full aspect-video">
          <img
            src={ecomImg1}
            alt="Interior"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        </div>
      </div>
    </section>





     <section className="w-full mt-15 mb-30 bg-black border border-[1px] border-neutral-800 rounded-[2rem] text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">



        {/* RIGHT IMAGE */}
        <div className="w-full h-full">
          <div className="w-full aspect-video">
          <img
            src={ecomImg1}
            alt="Interior"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        </div>
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-right">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            M-Commerce (Mobile First)
          </h2>

          <p className="text-gray-400 text-sm md:text-base text-justify leading-relaxed max-w-xl mx-auto lg:mx-0">
            Ensuring 100% responsiveness and "Thumb-First" navigation for the mobile-dominant market.
          </p>

          
        </div>

        
      </div>
    </section>



          <h2 className="text-white text-center mt-10 mb-8 text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          Advanced "Next-Gen" Features
        </h2>
    <div className="w-full rounded-[2rem] bg-[#0f0f0f] mb-30 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl px-6 lg:px-1 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 text-center">

        {/* Card 1 */}
        <div className="flex flex-col items-center text-gray-300 hover:text-white transition duration-300">
          <FaBrain className="text-4xl text-[var(--primary-color)] mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            AI-Powered Personalization
          </h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Product recommendations and dynamic pricing based on user behavior.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-gray-300 hover:text-white transition duration-300">
          <FaProjectDiagram className="text-4xl text-[var(--primary-color)] mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Automated Marketing Funnels
          </h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Integration with email and SMS automation to recover lost sales.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-gray-300 hover:text-white transition duration-300">
          <FaGlobe className="text-4xl text-[var(--primary-color)] mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Global Readiness
          </h3>
          <p className="text-sm text-gray-400 max-w-xs">
           Multi-currency, multi-language, and local tax compliance (VAT/GST) built-in.
          </p>
        </div>

      </div>
    </div>







    {/**techs */}


  <section className="w-full bg-black py-14 mb-14 px-4">
  <div className="max-w-6xl mx-auto">

    {/* Main Title */}
    <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-14">
      Our Technologies
    </h2>

    {/* Grid */}
    <div className="grid gap-6 md:grid-cols-2">

      {technologies.map((tech, index) => (
        <div
          key={index}
          className="
            flex flex-col md:flex-row 
            items-center md:items-center 
            justify-center md:justify-between
            text-center md:text-left
            bg-[#111] border border-white/10 rounded-2xl p-6
            hover:border-white/20 transition duration-300
          "
        >

          {/* Title */}
          <h3 className="text-neutral-400 text-[1rem] md:text-[.6rem] lg:text-[1rem] font-semibold mb-4 md:mb-0">
            {tech.title}
          </h3>

          {/* Icons */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">

            {tech.items.map((item, i) => (
              <div key={i} className="relative group">

                {/* Icon */}
                <div className="p-3 bg-white/5 cursor-pointer rounded-xl text-[1.7rem] text-white/80 hover:bg-white/10 hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* Tooltip */}
                <div className="
                  absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                  whitespace-nowrap text-xs text-white bg-black px-2 py-1
                  rounded opacity-0 group-hover:opacity-100
                  transition duration-200 pointer-events-none
                  shadow-lg shadow-black/40
                ">
                  {item.name}
                </div>

              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  </div>
</section>


{/**process */}

<div className="w-full rounded-[2rem] bg-[#0d1717] text-white py-12 px-6 sm:py-16 sm:px-8 md:px-16">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

    {/* LEFT SIDE */}
    <div className="flex-1 min-w-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        The <span className="bg-gradient-to-r from-[var(--primary-color)] to-cyan-800 bg-clip-text text-transparent">Process</span><br/>
        (4 Simple Steps)
      </h2>
    </div>

    {/* RIGHT CARD */}
    <div className="flex-1 min-w-0 w-full md:w-auto bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
  {[ 
    "Discovery: We analyze your business model and target audience.",
    "Architecture: Designing the technical roadmap and UI wireframes.",
    "Deployment: Agile development with rigorous QA testing.",
    "Growth: Post-launch support, SEO optimization, and scaling.",
  ].map((item, index) => {
    // Split the first word (before colon) and the rest
    const [firstWord, ...rest] = item.split(":");
    return (
      <div key={index} className="flex items-start sm:items-center gap-4 sm:gap-5 mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
          {index + 1}
        </div>
        <p className="text-sm sm:text-base text-neutral-400">
          <span className="font-bold text-neutral-200">{firstWord}:</span> {rest.join(":")}
        </p>
      </div>
    );
  })}
</div>

  </div>
</div>







{/**contact */}

<div className="w-full bg-transparent to-[#080808] py-30 px-2 flex items-center justify-center">
      <div className="max-w-5xl text-center text-white">
        
        {/* Title */}
        <h2 className="text-2xl text-neutral-200 sm:text-3xl md:text-4xl mb-5 font-bold leading-snug">
          Ready to dominate your niche?
        </h2>

        {/* Description */}
        <p className="mt-4 text-[1rem] text-neutral-400 leading-relaxed">
         Let’s discuss how Axstar Technologies can build your digital storefront.
        </p>


        {/* Button */}
        <button className="mt-6 px-6 py-3 text-sm sm:text-base font-medium bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/50 cursor-pointer transition-all duration-300 rounded-full">
         Get a Free Audit
        </button>

      </div>
    </div>




    </section>
  );
};

export default Ecommerce;