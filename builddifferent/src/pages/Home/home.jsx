import React from 'react'
import Navbar from '../../compoents/Navbar/Navbar'
import HeroSection from '../../compoents/HeroSection/hero'
import About from '../../compoents/About/about'
import Contact from '../../compoents/Contact/contact'
import Services from '../../compoents/Services/services'
import Projects from '../../compoents/Projects/project'
import Staff from '../../compoents/Staff/staff'
import Port from '../../compoents/Portfolio/port'
import Pricing from '../../compoents/Pricing/pricing'
import Footer from '../../compoents/Footer/footer'
import Messages from '../../compoents/Messages/messages'
import Testimonials from '../../compoents/Testimonials/testimonials'

const home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Contact/>
      <Services/>
      <Projects/>
      <Staff/>
      <Port/>
      <Pricing/>
      <Testimonials/>
      <Messages/>
      <Footer/>
    </div>
  )
}

export default home
