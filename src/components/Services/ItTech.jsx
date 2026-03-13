import { Link } from "react-router-dom";

export default function ItTech() {

  const services = [
    {
      title: "Web Development",
      desc: "We build fast, responsive and scalable websites.",
      path: "/web-development"
    },
    {
      title: "Mobile App Development",
      desc: "Designing high-performance iOS and Android apps.",
      path: "/mobile-app-development"
    },
    {
      title: "AI-Driven Solutions",
      desc: "Empowering your future with intelligent automation.",
      path: "/ai-driven-solutions"
    },
    {
      title: "E-commerce Software Solutions",
      desc: "Custom software tailored to enhance operations.",
      path: "/ecommerce"
    },
    {
      title: "Digital Presence Setup",
      desc: "Complete online presence setup across all digital platforms for your brand.",
      path: "/digital-presence"
    },
  ];

  const Card = ({ service }) => (
    <div className="group relative rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-zinc-900 to-black transition">
      <div className="absolute inset-0 opacity-0 transition bg-gradient-to-br from-[var(--primary-color)]/20 to-transparent blur-2xl"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-400 text-sm">{service.desc}</p>
        </div>

        <Link to={service.path}>
          <button className="mt-6 cursor-pointer self-start text-sm px-5 py-2 rounded-full border border-white/20 hover:bg-[var(--primary-color)] hover:text-black transition">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <section id="it-tech" className="w-full bg-black py-24 px-14 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            IT & Technology Services
          </h2>
        </div>

        {/* Top Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, i) => (
            <Card key={i} service={service} />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {services.slice(3).map((service, i) => (
            <Card key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}