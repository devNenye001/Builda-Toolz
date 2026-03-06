import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

// Sections for Home Page
import Hero from './components/sections/hero/hero';
import AboutSection from './components/sections/aboutSection/aboutSection';
import ServicesSection from './components/sections/servicesSection/servicesSection';
import PropertySection from './components/sections/propertySection/propertySection';
import HotSection from './components/sections/hotSection/hotSection';
import WhySection from './components/sections/whySection/whySection';
import TestimonialSection from './components/sections/testimonialSection/testimonialSection';
import FinalCTA from './components/sections/finalCTA/finalCTA';

// Full Pages
import AboutPage from './pages/aboutPage/aboutPage';
import ContactPage from './pages/contactPage/contactPage';
import FaqsPage from './pages/faqsPage/faqsPage';
import PropertiesPage from './pages/propertiesPage/propertiesPage';
import PropertyDetailsPage from './pages/propertyDetailsPage/propertyDetailsPage';
import ServicesPage from './pages/servicePage/servicePage';
import NotFound from './pages/notFound/notFound'; // Assuming you have the 404 page

// A helper component to keep the App file clean
const Home = () => (
  <>
    <Hero />
    <AboutSection />
    <ServicesSection />
    <PropertySection />
    <WhySection />
    <HotSection />
    <TestimonialSection />
    <FinalCTA />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Individual Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Dynamic Property Details Route */}
        <Route path="/properties/:id" element={<PropertyDetailsPage />} />

        {/* 404 Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;