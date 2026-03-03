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

  /* ================= ACTIVE SECTION DETECTION (STABLE VERSION) ================= */
  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition =
      window.scrollY + window.innerHeight / 2;

    let currentSection = "home";

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (!section) return;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        currentSection = item.id;
      }
    });

    // 🔥 Special case: bottom of page = contact
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 5
    ) {
      currentSection = "contact";
    }

    setActive(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  /* ================= MOBILE TOP BAR HIDE ON SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return;

      if (window.scrollY > lastScrollY.current) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 w-[97%] px-10 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[7rem] justify-between items-center z-50">
        <h1 className="text-white text-xl">
          &lt;CLOU<span className="text-[var(--primary-color)]">DC</span>ODE/&gt;
        </h1>

        <ul className="flex gap-12">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition duration-300 ${
                  active === item.id
                    ? "text-[var(--primary-color)]"
                    : "text-white hover:text-white/70"
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
        <h1 className="text-white text-lg">
          &lt;CLOU<span className="text-[var(--primary-color)]">DC</span>ODE/&gt;
        </h1>
      </div>

      {/* ================= MOBILE BOTTOM NAVBAR ================= */}
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