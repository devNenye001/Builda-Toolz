import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import AboutSection from "../components/sections/aboutSection/aboutSection"
import FinalCTA from "../components/sections/finalCTA/finalCTA"
import Hero from "../components/sections/hero/hero"
import HotSection from "../components/sections/hotSection/hotSection"
import PropertySection from "../components/sections/propertySection/propertySection"
import ServicesSection from "../components/sections/servicesSection/servicesSection"
import TestimonialSection from "../components/sections/testimonialSection/testimonialSection"
import WhySection from "../components/sections/whySection/whySection"



function LandingPage() {


  return (
    <>
     <Navbar />
     <Hero/>
      <AboutSection />
      <ServicesSection />
      <PropertySection />
      <WhySection />
      <HotSection />
      <TestimonialSection />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default LandingPage
