import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import ServicesPage from "./components/Services/ServicesPage";
/* ===== IT & Technology Services ===== */
import WebDevelopment from "./components/Services/ItandTechServices/WebDevelopment";
import MobileAppDevelopment from "./components/Services/ItandTechServices/MobileAppDevelopment";
import AiDrivenSolutions from "./components/Services/ItandTechServices/AiDrivenSolutions";
import Ecommerce from "./components/Services/ItandTechServices/Ecommerce";
import DigitalPresence from "./components/Services/ItandTechServices/DigitalPresence";
/* ===== Digital Services ===== */
import SocialMediaManagement from "./components/Services/DigitalServices/SocialMediaManagement";
import Seo from "./components/Services/DigitalServices/Seo";
import Branding from "./components/Services/DigitalServices/Branding";
import DMarketingSup from "./components/Services/DigitalServices/DMarketingSup";
/* ===== IT & Business Consulting ===== */
import BusinessPlanning from "./components/Services/ItandBusiness/BusinessPlanning";
import BussinessDocumentation from "./components/Services/ItandBusiness/BussinessDocumentation";
import DigitalConsulting from "./components/Services/ItandBusiness/DigitalConsulting";

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import ContactPage from "./components/Contact/ContactPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ProjectDetails from "./components/Projects/ProjectDetails";
import WhatsAppPopup from "./components/WhatsAppPopup";
import CareersPage from "./components/Careers/CareersPage";

const AppWrapper = () => {
  const scrollRef = useRef();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Initial page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loader
    return () => clearTimeout(timer);
  }, []);

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // shorter loader for navigation
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loading />}
      <ScrollToTop scrollRef={scrollRef} />
      <SmoothScroll ref={scrollRef}>
        <div
          className="
            min-h-screen
            w-full
            bg-cover
            bg-center
            bg-fixed
            bg-blend-darken
            bg-[url('/src/assets/mobile-bg-3.png')]
            md:bg-[url('/src/assets/hero-bg-16.png')]
          "
        >
          <div className="max-w-[1400px] mx-auto">
            <Navbar />

            <Routes>
              {/* ===== Main Pages ===== */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project-details" element={<ProjectDetails />} />
              <Route path="/careers" element={<CareersPage />} />
              

              {/* ===== IT & Technology Services ===== */}
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/ai-driven-solutions" element={<AiDrivenSolutions />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/digital-presence" element={<DigitalPresence />} />

              {/* ===== Digital Services ===== */}
              <Route path="/social-media-management" element={<SocialMediaManagement />} />
              <Route path="/seo" element={<Seo />} />
              <Route path="/branding" element={<Branding />} />
              <Route path="/digital-marketing-support" element={<DMarketingSup />} />

              {/* ===== IT & Business Consulting ===== */}
              <Route path="/business-planning" element={<BusinessPlanning />} />
              <Route path="/business-documentation" element={<BussinessDocumentation />} />
              <Route path="/digital-consulting" element={<DigitalConsulting />} />
            </Routes>
            <WhatsAppPopup />
            <Footer />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;