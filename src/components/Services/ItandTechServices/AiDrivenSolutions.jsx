import React from "react";
import { FiSettings, FiSearch, FiBarChart2 } from "react-icons/fi";
import { FaShieldAlt, FaHeadset, FaDatabase, FaNetworkWired, FaSync, FaRobot, FaKeyboard, FaCalendarAlt, FaChartLine, FaTools, FaPlug, FaLightbulb, FaCogs, FaComments } from "react-icons/fa";

import { FaUserAstronaut, FaUsers, FaGamepad } from "react-icons/fa";


const AiDrivenSolutions = () => {


const data = [
    {
      step: "1. Find the Gaps",
      process:
        "We audit your daily tasks to find where you are losing time and money.",
      benefit:
        "A Clear Plan: You’ll see exactly where AI can save you the most hours.",
    },
    {
      step: "2. Build the Tools",
      process:
        "We create custom Chatbots, Task Bots, and Automations for your specific needs.",
      benefit:
        "Custom Logic: Tools built for your business, not a generic 'one-size-fits-all.'",
    },
    {
      step: "3. Plug & Play",
      process:
        "We connect these new AI tools into your existing email and cloud workspace.",
      benefit:
        "Zero Stress: Everything works together perfectly from day one.",
    },
    {
      step: "4. Watch it Grow",
      process:
        "We monitor the AI and fine-tune it every month to make it even smarter.",
      benefit:
        "Better Results: A business that gets faster and more accurate over time.",
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
         Scaling your operations with intelligent systems that work while you sleep.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          At Axstar, we build AI-driven solutions that help businesses work smarter. Using Machine Learning, Automation, NLP, and Computer Vision, we create intuitive tools that boost efficiency and turn data into your most valuable asset.
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





      {/**empower */}

      <div className="w-full bg-[#070f14]/0 text-white py-25 px-6 md:px-12 lg:px-20">
  
  {/* TOP SECTION */}
  <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">
    
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-xl">
      Empower <br /> Growth with AI
    </h2>

    <p className="text-gray-300 max-w-xl text-sm md:text-base leading-relaxed">
      Unlock smarter decisions, automate processes, and accelerate innovation
      through intelligent AI-driven solutions.
    </p>
  </div>

  {/* CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* CARD 1 */}
    <div className="bg-[#0d1b22] rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
      <div className="flex justify-between items-start mb-4">
        <span className="text-2xl font-semibold text-gray-300">01</span>
        <div className="text-teal-400 text-2xl">
          <i className="react-icons">
            {/* Icon */}
            <FiSettings />
          </i>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-base mb-2">
          Automate – Make Work Easier
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Cut manual work and speed up workflows with intelligent automation
          that improves accuracy and scales effortlessly.
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-[#0d1b22] rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
      <div className="flex justify-between items-start mb-4">
        <span className="text-2xl font-semibold text-gray-300">02</span>
        <div className="text-teal-400 text-2xl">
          <i className="react-icons">
            <FiSearch />
          </i>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-base mb-2">
          Analyze – Understand Your Data
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Turn data into insights. Our analytics uncover opportunities and
          strategies to boost revenue and efficiency.
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-[#0d1b22] rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
      <div className="flex justify-between items-start mb-4">
        <span className="text-2xl font-semibold text-gray-300">03</span>
        <div className="text-teal-400 text-2xl">
          <i className="react-icons">
            <FiBarChart2 />
          </i>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-base mb-2">
          Transform – Elevate Results
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Maximize performance with AI-driven optimization that identifies
          inefficiencies and keeps your business agile.
        </p>
      </div>
    </div>

  </div>
</div>








{/**2nd part */}


{/* Title */}
        <h2 className="text-2xl text-center text-neutral-200 sm:text-3xl md:text-4xl mb-1 font-bold leading-snug">
          Explore Our AI Solutions 
        </h2>

        {/* Description */}
        <p className="mt-4 text-[1rem] text-neutral-400 text-center mb-14 leading-relaxed">
          Explore the Power of AI with Axstar.
        </p>

<div className="w-full bg-gradient-to-br from-[#000000] to-[#002e2a] lg:px-10 border border-[1px] border-neutral-800 text-white py-16 px-5 rounded-[2rem]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight mb-6">
        AI Chatbots & <span className="text-[var(--primary-color)]">Virtual</span> Assistants
      </h1>

      <p className="text-cyan-300 mb-6 max-w-lg mx-auto lg:mx-0">
        24/7 Engagement & Lead Capture
      </p>
    </div>

    {/* RIGHT CONTENT */}
    <div className="space-y-6">

      {/* ITEM 1 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-[#233d44] p-5 rounded-xl">
        <div className="bg-[#011312] p-3 rounded-full text-[var(--primary-color)] text-xl">
          <FaHeadset />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-300">
            Instant Customer Support
          </h3>
          <p className="text-neutral-400 text-sm">
            We deploy custom-trained AI bots that answer customer inquiries instantly, 24/7, across your website and social media.
          </p>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-[#233d44] p-5 rounded-xl">
        <div className="bg-[#011312] p-3 rounded-full text-[var(--primary-color)] text-xl">
          <FaDatabase />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-300">
            Automated Lead Collection
          </h3>
          <p className="text-neutral-400 text-sm">
            Your chatbot doesn't just talk; it qualifies leads, collects contact information, and books meetings directly into your calendar.
          </p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-[#233d44] p-5 rounded-xl">
        <div className="bg-[#011312] p-3 rounded-full text-[var(--primary-color)] text-xl">
          <FaNetworkWired />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-300">
            Multi-Platform Integration
          </h3>
          <p className="text-neutral-400 text-sm">
            Whether it’s WhatsApp, Instagram, or your website, your brand remains responsive everywhere.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>




<div className="mt-15 w-full bg-gradient-to-br from-[#000000] to-[#2a002e] lg:px-10 border border-[1px] border-neutral-800 text-white py-16 px-5 rounded-[2rem]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight mb-6">
        Intelligent Workflow <span className="text-[#a603b4]">Automation</span>
      </h1>

      <p className="text-[#ea00ff] mb-6 max-w-lg mx-auto lg:mx-0">
        Connecting Your Business Ecosystem
      </p>
    </div>

    {/* RIGHT CONTENT */}
    <div className="space-y-6">

      {/* ITEM 1 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-[#49334b] p-5 rounded-xl">
        <div className="bg-[#011312] p-3 rounded-full text-[#a603b4] text-xl">
          <FaSync />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-300">
            Tool Synchronization
          </h3>
          <p className="text-neutral-400 text-sm">
            We build the "digital bridges" that allow your apps to share data automatically (e.g., your Website → CRM → Email Marketing).
          </p>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-[#49334b] p-5 rounded-xl">
        <div className="bg-[#011312] p-3 rounded-full text-[#a603b4] text-xl">
          <FaRobot />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-300">
            Zero-Touch Processes
          </h3>
          <p className="text-neutral-400 text-sm">
            Automate repetitive workflows like invoice generation, client onboarding emails, and data syncing between departments.
          </p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-[#49334b] p-5 rounded-xl">
        <div className="bg-[#011312] p-3 rounded-full text-[#a603b4] text-xl">
          <FaShieldAlt />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-300">
            Error Elimination
          </h3>
          <p className="text-neutral-400 text-sm">
            By removing manual data entry between platforms, we eliminate human error and ensure data integrity.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>








<div className="mt-15 w-full bg-gradient-to-br from-[#000000] to-[#002e00] lg:px-10 border border-[1px] border-neutral-800 text-white py-16 px-5 rounded-[2rem] mb-15">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight mb-6">
        Custom Task <br/><span className="text-[#039b03]">Bots</span>
      </h1>

      <p className="text-[#03e203] mb-6 max-w-lg mx-auto lg:mx-0">
        Precision & Time Recovery
      </p>
    </div>

    {/* RIGHT CONTENT */}
    <div className="space-y-6">

      {/* ITEM 1 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-[#3c583c] p-5 rounded-xl">
        <div className="bg-[#011312] p-3 rounded-full text-[#048004] text-xl">
          <FaKeyboard />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-300">
            Automated Data Entry
          </h3>
          <p className="text-neutral-400 text-sm">
            Custom bots that extract information from documents or emails and input them into your databases instantly.
          </p>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-[#3c583c] p-5 rounded-xl">
        <div className="bg-[#011312] p-3 rounded-full text-[#048004] text-xl">
          <FaCalendarAlt />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-300">
            Smart Scheduling
          </h3>
          <p className="text-neutral-400 text-sm">
            AI-powered scheduling bots that manage complex team calendars, recurring appointments, and follow-up reminders.
          </p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-[#3c583c] p-5 rounded-xl">
        <div className="bg-[#011312] p-3 rounded-full text-[#048004] text-xl">
          <FaChartLine />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-300">
            Research & Reporting
          </h3>
          <p className="text-neutral-400 text-sm">
            Specialized bots that gather market data or generate weekly performance reports, delivering them straight to your inbox.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>





{/* Description */}
<div className="w-full flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8 sm:py-10">
  <p className="text-center max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 leading-relaxed">
    As a professional AI development firm, we help your business work smarter and grow faster with practical, high-impact solutions. At Axstar, we make advanced technology simple, helping you achieve more with less effort.
  </p>
</div>









{/** */}


<div className="w-full bg-[black]/0 py-16 px-4">
  {/* Title Section */}
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-semibold text-white">
      How We Decode AI for Your Business
    </h2>
    <p className="text-gray-400 mt-4 text-sm md:text-base">
     We don't just provide tools; we architect the intelligence behind your operations.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center  transition duration-300 min-h-[300px]">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 mb-6">
        <FaTools className="text-[var(--primary-color)] text-xl" />
      </div>
      <h3 className="text-white text-lg font-medium mb-3">
        Practical AI Implementation
      </h3>
      <p className="text-neutral-400 text-sm mb-6">
        We focus on solutions that solve real business problems reducing overhead, increasing speed, and eliminating errors.
      </p>
     
    </div>

    {/* Card 2 */}
    <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center transition duration-300 min-h-[300px]">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 mb-6">
        <FaPlug className="text-[var(--primary-color)] text-xl" />
      </div>
      <h3 className="text-white text-lg font-medium mb-3">
        Seamless Integration
      </h3>
      <p className="text-neutral-400 text-sm mb-6">
        Our AI solutions are designed to plug directly into your existing infrastructure without disrupting your current workflow.
      </p>
      
    </div>

    {/* Card 3 */}
    <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center transition duration-300 min-h-[300px]">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 mb-6">
        <FaChartLine className="text-[var(--primary-color)] text-xl" />
      </div>
      <h3 className="text-white text-lg font-medium mb-3">
        Scalable Intelligence
      </h3>
      <p className="text-neutral-400 text-sm mb-6">
        As your business grows, our Machine Learning and Automation models evolve with you, handling more complex tasks over time.
      </p>
      
    </div>

  </div>
</div>
        




{/**table */}



<div className="w-full px-8 rounded-[2rem] py-10 bg-[#021617]/50">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-white">
          The Axstar "AI & Automation" Roadmap
        </h2>
        <p className="text-gray-400 mt-2 mb-8 text-sm md:text-base">
          How we turn your manual work into an automated growth engine
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-xl border border-gray-700 bg-gradient-to-br from-[#021717] to-[#07262a] shadow-lg">
        <table className="w-full min-w-[700px] text-left text-sm text-gray-300">
          {/* Header */}
          <thead className="bg-[#0f2a29] text-gray-200 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-4 border-b border-gray-700">Step</th>
              <th className="px-4 py-4 border-b border-gray-700">
                Our Simple Process
              </th>
              <th className="px-4 py-4 border-b border-gray-700">
                Your Business Benefit
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-[#0b3030] transition duration-300"
              >
                <td className="px-4 py-5 border-b border-gray-700 font-semibold text-white">
                  {item.step}
                </td>

                <td className="px-4 py-5 border-b border-gray-700">
                  {item.process}
                </td>

                <td className="px-4 py-5 border-b border-gray-700">
                  {item.benefit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>






{/**why choose us */}


<div className="w-full bg-[black]/0 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Why Choose Our <br /> AI Solutions
          </h2>

          <div className="w-24 h-[1px] bg-neutral-600 mb-6"></div>

          <p className="text-gray-400 text-sm md:text-base max-w-md">
            We deliver intelligent, scalable AI solutions that transform how your business operates, makes decisions, and engages with customers. By combining advanced machine learning, automation, and natural language capabilities, we help you unlock efficiency, reduce costs, and create more human-centered digital experiences.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* CARD 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-gradient-to-r from-[#111] to-[#1a1a1a] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition">

            {/* ICON */}
            <div className="text-2xl text-cyan-400 mb-3 md:mb-0 md:order-2">
              <FaLightbulb />
            </div>

            {/* TEXT */}
            <div className="md:order-1">
              <h4 className="text-white font-medium">
                Enhanced Decision Making
              </h4>
              <p className="text-sm text-neutral-400 mt-1">
                Tailored machine learning models designed to solve domain-specific challenges using structured and unstructured data.
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-gradient-to-r from-[#111] to-[#1a1a1a] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition">

            {/* ICON */}
            <div className="text-2xl text-purple-400 mb-3 md:mb-0 md:order-2">
              <FaCogs />
            </div>

            {/* TEXT */}
            <div className="md:order-1">
              <h4 className="text-white font-medium">
                Streamlined Operations
              </h4>
              <p className="text-sm text-neutral-400 mt-1">
                Streamline operations with AI-powered automation from workflows to decision-making, reducing time and cost.
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-gradient-to-r from-[#111] to-[#1a1a1a] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition">

            {/* ICON */}
            <div className="text-2xl text-green-400 mb-3 md:mb-0 md:order-2">
              <FaComments />
            </div>

            {/* TEXT */}
            <div className="md:order-1">
              <h4 className="text-white font-medium">
                Human-like Interactions
              </h4>
              <p className="text-sm text-neutral-400 mt-1">
                Deploy smart virtual assistants, chatbots, and interview agents that understand, engage, and respond like humans.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>


















<div className="w-full bg-transparent mt-15 rounded-[2rem] py-30 px-2 flex items-center justify-center">
      <div className="max-w-5xl text-center text-white">
        
        {/* Title */}
        <h2 className="text-2xl text-neutral-200 sm:text-3xl md:text-4xl mb-5 font-bold leading-snug">
        Transform Your Business with AI Precision.
        </h2>

        {/* Description */}
        <p className="mt-4 text-[1rem] text-neutral-400 leading-relaxed">
          As a trusted AI development partner, Axstar builds powerful solutions that make operations faster, smarter, and easier to manage. Our technology combines automation, analytics, and optimization to simplify workflows and support better decision-making.
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

export default AiDrivenSolutions;