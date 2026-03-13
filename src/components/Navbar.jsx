import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiPhone,
  FiGrid,
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
import logo from "../assets/c1.png";

/* ---------------- NAV ITEMS ---------------- */
const navItems = [
  { id: "home", label: "Home", icon: <FiHome size={20} />, path: "/" },
  { id: "about", label: "About Us", icon: <FiUser size={20} />, path: "/about" },
  { id: "services", label: "Services", icon: <FiGrid size={20} />, path: "/services" },
  { id: "projects", label: "Projects", icon: <FiFolder size={20} />, path: "/projects" },
  { id: "contact", label: "Contact Us", icon: <FiPhone size={20} />, path: "/contact" },
];

/* ---------------- SERVICES ---------------- */
const servicesLinks = [
  { id: "services-hero", label: "All Services", path: "/services#services-hero" },
  { id: "it-tech", label: "IT & Technology Services", path: "/services#it-tech" },
  { id: "digital", label: "Digital Services", path: "/services#digital" },
  { id: "it-business", label: "IT & Business Consulting", path: "/services#it-business" },
];

const itTechSubServices = [
  { label: "Web Development", path: "/web-development" },
  { label: "Mobile App Development", path: "/mobile-app-development" },
  { label: "AI-Driven Solutions", path: "/ai-driven-solutions" },
  { label: "E-commerce Software Solutions", path: "/ecommerce" },
  { label: "Digital Presence Setup", path: "/digital-presence" },
];

const digitalSubServices = [
  { label: "Social Media Management", path: "/social-media-management" },
  { label: "Search Engine Marketing (SEO)", path: "/seo" },
  { label: "Branding & Content Creation", path: "/branding" },
  { label: "Digital Marketing Support", path: "/digital-marketing-support" },
];

const businessSubServices = [
  { label: "Business Planning & Growth Strategy", path: "/business-planning" },
  { label: "Business & Project Documentation", path: "/business-documentation" },
  { label: "Digital Transformation Consulting", path: "/digital-consulting" },
];

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(false);

  /* ---------- DESKTOP DROPDOWN STATES ---------- */
  const [openServices, setOpenServices] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openDigitalSubmenu, setOpenDigitalSubmenu] = useState(false);
  const [openBusinessSubmenu, setOpenBusinessSubmenu] = useState(false);

  const [submenuLeft, setSubmenuLeft] = useState(false);
  const [digitalSubmenuLeft, setDigitalSubmenuLeft] = useState(false);
  const [businessSubmenuLeft, setBusinessSubmenuLeft] = useState(false);

  const desktopDropdownRef = useRef(null);
  const itTechRef = useRef(null);
  const digitalRef = useRef(null);
  const businessRef = useRef(null);

  /* ---------- MOBILE STATES ---------- */
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    itTech: false,
    digital: false,
    business: false,
  });

  /* ===================================================
  RESET MENU WHEN PAGE CHANGES
  =================================================== */
  useEffect(() => {
    setActive(location.pathname);
    setOpenServices(false);
    setOpenSubmenu(false);
    setOpenDigitalSubmenu(false);
    setOpenBusinessSubmenu(false);
    setMobileMenu(false);
    setMobileDropdowns({
      services: false,
      itTech: false,
      digital: false,
      business: false,
    });
  }, [location]);

  /* ===================================================
  SCROLL EFFECT
  =================================================== */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===================================================
  CLOSE DESKTOP DROPDOWN ON OUTSIDE CLICK
  =================================================== */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setOpenServices(false);
        setOpenSubmenu(false);
        setOpenDigitalSubmenu(false);
        setOpenBusinessSubmenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const checkPosition = (ref, setState) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const spaceRight = window.innerWidth - rect.right;
    setState(spaceRight < 280);
  };

  /* ============ MOBILE DROPDOWN TOGGLE ============ */
  const toggleMobileDropdown = (key) => {
    setMobileDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* ================= MOBILE NAVBAR ================= */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} className="w-[4rem]" />
        </Link>
        <button onClick={() => setMobileMenu(!mobileMenu)} className="text-white text-2xl">
          {mobileMenu ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black text-white z-40 transition-all duration-300 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-24 px-6 space-y-4">
          {navItems.map((item) => {
            if (item.id !== "services") {
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="block py-3 border-b border-white/10"
                >
                  {item.label}
                </Link>
              );
            }

            // SERVICES MOBILE MENU
            return (
              <div key={item.id}>
                <button
                  onClick={() => toggleMobileDropdown("services")}
                  className="flex justify-between w-full py-3 border-b border-white/10"
                >
                  {item.label}
                  <FiChevronDown />
                </button>

                {mobileDropdowns.services && (
                  <div className="pl-4 space-y-2">
                    {servicesLinks.map((service) => {
                      let subServices = [];
                      if (service.id === "it-tech") subServices = itTechSubServices;
                      if (service.id === "digital") subServices = digitalSubServices;
                      if (service.id === "it-business") subServices = businessSubServices;

                      if (subServices.length > 0) {
                        return (
                          <div key={service.id}>
                            <button
                              onClick={() =>
                                toggleMobileDropdown(
                                  service.id === "it-tech"
                                    ? "itTech"
                                    : service.id === "digital"
                                    ? "digital"
                                    : "business"
                                )
                              }
                              className="flex justify-between w-full py-2"
                            >
                              {service.label}
                              <FiChevronDown />
                            </button>
                            {mobileDropdowns[
                              service.id === "it-tech"
                                ? "itTech"
                                : service.id === "digital"
                                ? "digital"
                                : "business"
                            ] && (
                              <div className="pl-4 space-y-1">
                                {subServices.map((s, i) => (
                                  <Link
                                    key={i}
                                    to={s.path}
                                    className="block text-white/80 py-1"
                                  >
                                    {s.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }

                      // Top-level services without sub-services
                      return (
                        <Link
                          key={service.id}
                          to={service.path}
                          className="block py-1 text-white/80"
                        >
                          {service.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= DESKTOP NAVBAR ================= */}
      <nav
        className={`hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 w-full px-14 py-5 justify-between items-center z-50 transition-all duration-300 ${
          scrolled ? "bg-white/10 backdrop-blur-xl" : "bg-white/0"
        }`}
      >
        <Link to="/">
          <img src={logo} className="w-[5rem]" />
        </Link>
        <ul className="flex gap-12 items-center">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              {item.id === "services" ? (
                <div ref={desktopDropdownRef}>
                  <button
                    onClick={() => setOpenServices(!openServices)}
                    className={`flex items-center cursor-pointer gap-2 ${
                      active.includes("/services") ? "text-[var(--primary-color)]" : "text-white hover:text-white/70"
                    }`}
                  >
                    {item.label}
                    <FiChevronDown />
                  </button>

                  {/* ================= SERVICES DROPDOWN ================= */}
                  <div
                    className={`absolute top-8 left-0 w-64 bg-black border border-white/10 py-3 shadow-xl transition-all duration-300 ${
                      openServices ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
                    }`}
                  >
                    {servicesLinks.map((service) => {
                      if (service.id === "services-hero") {
                        return (
                          <Link
                            key={service.id}
                            to={service.path}
                            className="block px-5 py-2 text-white/80 hover:text-[var(--primary-color)]"
                          >
                            {service.label}
                          </Link>
                        );
                      }
                      if (service.id === "it-tech") {
                        return (
                          <div
                            key={service.id}
                            ref={itTechRef}
                            className="relative"
                            onMouseEnter={() => {
                              setOpenSubmenu(true);
                              checkPosition(itTechRef, setSubmenuLeft);
                            }}
                            onMouseLeave={() => setOpenSubmenu(false)}
                          >
                            <Link
                              to={service.path}
                              className="flex justify-between px-5 py-2 text-white/80 hover:text-[var(--primary-color)]"
                            >
                              {service.label} <FiChevronRight />
                            </Link>
                            <div
                              className={`absolute top-0 ${
                                submenuLeft ? "right-full" : "left-full"
                              } w-64 bg-black border border-white/10 shadow-xl ${
                                openSubmenu ? "opacity-100" : "opacity-0 pointer-events-none"
                              }`}
                            >
                              {itTechSubServices.map((sub, i) => (
                                <Link
                                  key={i}
                                  to={sub.path}
                                  className="block px-5 py-2 text-white/80 hover:text-[var(--primary-color)]"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      if (service.id === "digital") {
                        return (
                          <div
                            key={service.id}
                            ref={digitalRef}
                            className="relative"
                            onMouseEnter={() => {
                              setOpenDigitalSubmenu(true);
                              checkPosition(digitalRef, setDigitalSubmenuLeft);
                            }}
                            onMouseLeave={() => setOpenDigitalSubmenu(false)}
                          >
                            <Link
                              to={service.path}
                              className="flex justify-between px-5 py-2 text-white/80 hover:text-[var(--primary-color)]"
                            >
                              {service.label} <FiChevronRight />
                            </Link>
                            <div
                              className={`absolute top-0 ${
                                digitalSubmenuLeft ? "right-full" : "left-full"
                              } w-72 bg-black border border-white/10 shadow-xl ${
                                openDigitalSubmenu ? "opacity-100" : "opacity-0 pointer-events-none"
                              }`}
                            >
                              {digitalSubServices.map((sub, i) => (
                                <Link
                                  key={i}
                                  to={sub.path}
                                  className="block px-5 py-2 text-white/80 hover:text-[var(--primary-color)]"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      if (service.id === "it-business") {
                        return (
                          <div
                            key={service.id}
                            ref={businessRef}
                            className="relative"
                            onMouseEnter={() => {
                              setOpenBusinessSubmenu(true);
                              checkPosition(businessRef, setBusinessSubmenuLeft);
                            }}
                            onMouseLeave={() => setOpenBusinessSubmenu(false)}
                          >
                            <Link
                              to={service.path}
                              className="flex justify-between px-5 py-2 text-white/80 hover:text-[var(--primary-color)]"
                            >
                              {service.label} <FiChevronRight />
                            </Link>
                            <div
                              className={`absolute top-0 ${
                                businessSubmenuLeft ? "right-full" : "left-full"
                              } w-72 bg-black border border-white/10 shadow-xl ${
                                openBusinessSubmenu ? "opacity-100" : "opacity-0 pointer-events-none"
                              }`}
                            >
                              {businessSubServices.map((sub, i) => (
                                <Link
                                  key={i}
                                  to={sub.path}
                                  className="block px-5 py-2 text-white/80 hover:text-[var(--primary-color)]"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`${active === item.path ? "text-[var(--primary-color)]" : "text-white hover:text-white/70"}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}