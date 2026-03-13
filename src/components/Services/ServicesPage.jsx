import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import ServicesHero from './ServicesHero'
import ItTech from './ItTech'
import Digital from './Digital'
import ItBusiness from './ItBusiness'
import ScrollToTopServices from './ScrollToTopServices';


const ServicesPage = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
        <ServicesHero />
        <ItTech />
        <Digital />
        <ItBusiness />
        <ScrollToTopServices />
    </div>
  )
}

export default ServicesPage