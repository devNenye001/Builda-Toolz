import React from 'react';
import { motion as Motion, type Variants } from "framer-motion";
import { FiMapPin, FiHome, FiTool } from "react-icons/fi"; // Using React Icons
import './ServicesSection.css';

const services = [
  {
    icon: <FiMapPin />,
    title: 'Land Sales',
    description: 'We help you acquire secure, well-documented land in strategic locations.'
  },
  {
    icon: <FiHome />,
    title: 'Building Construction',
    description: 'From planning to execution, we handle complete building projects.'
  },
  {
    icon: <FiTool />,
    title: 'Maintenance & Renovation',
    description: 'We maintain, upgrade, and restore buildings to top condition.'
  }
];

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-grid">
        {/* Left Column: Heading & CTA */}
        <Motion.div 
          className="services-info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
        >
          <span className="subtitle"><span className="dot">•</span> Our Services</span>
          <h2>Our <span className="highlight">Expertise</span> in Every Aspect of Construction</h2>
          
          <Motion.button 
            className="learn-more-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#333" }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </Motion.button>
        </Motion.div>

        {/* Right Column: Service Cards */}
        <Motion.div 
          className="services-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <Motion.div 
              key={index} 
              className="service-card"
              variants={cardVariants}
              whileHover={{ x: 10 }}
            >
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <div className="card-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
        <Motion.button 
            className="learn-more-btn2"
            whileHover={{ scale: 1.05, backgroundColor: "#333" }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </Motion.button>
      </div>
    </section>
  );
};

export default ServicesSection;