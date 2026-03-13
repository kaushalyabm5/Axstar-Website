export default function WhoWeAre() {
  return (
    <section id="who" className="w-full bg-black text-white pt-16">

      {/* Centered Content */}
      <div className="max-w-5xl py-15 mx-auto text-center px-6">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Who We Are
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          AXTAR is a modern IT and business consulting partner dedicated to driving digital transformation. 
          We empower organizations by bridging the gap between sophisticated technology and strategic 
          business goals, ensuring every solution we deploy is built for high-performance and measurable growth.
        </p>

      </div>


      {/* FULL WIDTH SECTION */}
      <div className="w-full bg-gradient-to-r from-[#000000] via-[var(--primary-color)]/30 to-[#000000] text-white py-20 mt-14 px-6">
        
        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Core Pillars
            </h2>
          </div>

          {/* Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">

            {/* Item 1 */}
            <div className="flex gap-4 md:pr-8 md:border-r md:border-white/20">
              <div className="mt-1">
                <div className="w-3 h-3 rounded-full border border-cyan-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                </div>
              </div>

              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">
                  Strategic Business Consulting
                </span>{" "}
                From operational efficiency to digital-first strategies, we provide the expert insights needed to automate workflows, personalize client experiences, and scale your business with confidence.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 md:pl-8">
              <div className="mt-1">
                <div className="w-3 h-3 rounded-full border border-blue-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                </div>
              </div>

              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">
                  High-Performance Solutions
                </span>{" "}
                We transform operations through data-driven digital marketing, custom software development, and enterprise-grade IT solutions tailored to solve your unique business challenges.
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}