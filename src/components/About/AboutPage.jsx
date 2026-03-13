import React from 'react'
import AboutHero from './AboutHero'
import WhoWeAre from './WhoWeAre'
import WhatWeDo from './WhatWeDo'
import Difference from './Difference'
import Vision from './Vision'
import Mission from './Mission'
import ScrollToTopAbout from './ScrollToTopAbout'


const AboutPage = () => {
  return (
    <div>
      <AboutHero/>
      <Vision />
      <Mission />
      <WhoWeAre />
      <WhatWeDo />
      
      <Difference />
      <ScrollToTopAbout />
    </div>
  )
}

export default AboutPage