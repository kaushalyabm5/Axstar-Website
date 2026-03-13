import React from 'react'

import Hero from './Hero'
import About from './About'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Technologies from './Technologies'
import Stat from './Stat'
import Process from './Process'
import Testimonials from './Testimonials'
import ProjectSection from './ProjectSection'
import Contact from './Contact'
import ScrollToTopHome from './ScrollToTopHome'


const HomePage = () => {
  return (
    <div id='home'>
        
        <Hero/>
        <About/>
        <Services/>
        <WhyChooseUs/>
        <Stat/>
        <Process/>
        <Technologies/>
        <ProjectSection/>
        <Testimonials/>
        <Contact/>
        <ScrollToTopHome />
    </div>
  )
}

export default HomePage