import React, { useState, useEffect, useRef } from "react";
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home", icon: <FiHome size={20} /> },
  { id: "about", label: "About", icon: <FiUser size={20} /> },
  { id: "projects", label: "Projects", icon: <FiFolder size={20} /> },
  { id: "contact", label: "Contact", icon: <FiMail size={20} /> },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [showTopBar, setShowTopBar] = useState(true);
  const lastScrollY = useRef(0);

  // 🔥 Detect active section
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // 🔥 Hide top bar on scroll down (mobile only effect)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return; // only mobile

      if (window.scrollY > lastScrollY.current) {
        setShowTopBar(false); // scrolling down
      } else {
        setShowTopBar(true); // scrolling up
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 w-[97%] px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[7rem] justify-between items-center z-50">
        <h1 className="text-white font-[1rem] text-xl">
          &lt;CLOU<span className="text-[#ff00ea]">DC</span>ODE/&gt;
        </h1>

        <ul className="flex gap-12 text-white">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition ${
                  active === item.id ? "text-[#ff00ea]" : "text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= MOBILE TOP GLASS BAR ================= */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-12 backdrop-blur-xl bg-black/20 border-b border-white/10 z-40 transition-transform duration-300 ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        } flex items-center justify-center`}
      >
        <h1 className="text-white font-thin text-lg">
          &lt;CLOU<span className="text-[#ff00ea]">DC</span>ODE/&gt;
        </h1>
      </div>

      {/* ================= MOBILE BOTTOM GLASS NAVBAR ================= */}
      <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] backdrop-blur-2xl bg-white/5 border border-white/20 rounded-full px-5 py-3 flex justify-between items-center shadow-2xl z-50">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? "bg-white/20 text-white px-4 py-2 rounded-full gap-2"
                  : "text-white/60"
              }`}
            >
              {item.icon}
              {isActive && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </a>
          );
        })}
      </nav>
    </>
  );
}