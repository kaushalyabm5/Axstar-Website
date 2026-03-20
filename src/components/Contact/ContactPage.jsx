import React from 'react'
import ContactHero from './ContactHero'
import ContactSection from './ContactSection'
import ScrollToTopContact from './ScrollToTopContact'

const ContactPage = () => {
  return (
    <div>
        <ContactHero />
        <ContactSection />
        <ScrollToTopContact />
    </div>
  )
}

export default ContactPage