import { Link } from "react-router-dom";

export default function Digital() {

  const cards = [
    {
      title: "Social Media Management",
      desc: "Crafting strategies that boost your brand's social media engagement",
      path: "/social-media-management",
    },
    {
      title: "Search Engine Marketing (SEO)",
      desc: "Craft tailored digital strategies that help businesses stand out and drive sustainable outcomes.",
      path: "/seo",
    },
    {
      title: "Branding & Content Creation",
      desc: "Professional content for digital campaigns and social platforms.",
      path: "/branding",
    },
    {
      title: "Digital Marketing Support",
      desc: "Data-driven marketing campaigns to drive growth and reach your audience.",
      path: "/digital-marketing-support",
    },
  ];

  return (
    <section id="digital" className="w-full bg-[#0b0b0b] py-16 px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          Digital Services
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Amplifying your online presence with strategic marketing and active
          and engaging attention.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-2xl border border-[#3a3a3a] bg-gradient-to-br from-[black]/50 to-[var(--primary-color)]/50 p-8 overflow-hidden"
          >
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-white text-lg font-semibold mb-3">
                  {card.title}
                </h3>

                <p className="text-neutral-200 text-sm leading-relaxed max-w-md">
                  {card.desc}
                </p>
              </div>

              {/* Learn More Button */}
              <Link to={card.path}>
                <button className="mt-6 w-fit px-4 py-2 text-sm rounded-lg border border-white/20 text-white hover:bg-white hover:text-black transition cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}