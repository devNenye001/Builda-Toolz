import React from 'react';
import { motion as Motion, type Variants } from "framer-motion";
import { 
  
  FiMapPin, 
  FiActivity, 
  FiTool, 
  FiBox, 
  FiTruck 
} from "react-icons/fi";
import './servicePage.css';
import FinalCTA from '../../components/sections/finalCTA/finalCTA';
import { FaHardHat } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaHardHat />,
   
    title: 'Complete Building & Construction Solutions',
    description: 'At Builda Toolz, we provide a wide range of professional services covering every stage of building, construction, and property management.',
    image: '/service1.svg'
  },
  {
    icon: <FiMapPin />,
    title: 'Land Sales',
    description: 'We offer secure and well-documented lands in prime and fast-growing locations. Each property is carefully verified to ensure legal clarity.',
    image: '/service2.svg'
  },
  {
    icon: <FiActivity />,
    title: 'Infrastructure Development',
    description: 'We deliver reliable infrastructure solutions that support estates, communities, and commercial developments.',
    image: '/service3.svg'
  },
  {
    icon: <FiTool />,
    title: 'Maintenance & Renovation',
    description: 'Our team upgrades existing structures to improve safety, aesthetics, and functionality through repairs and remodeling.',
    image: '/service4.svg'
  },
  {
    icon: <FiBox />,
    title: 'General Merchandise',
    description: 'Our services include roads, and other essential infrastructure works for various commercial and residential projects.',
    image: '/service5.svg'
  },
  {
    icon: <FiTruck />,
    title: 'Equipment Rentals',
    description: 'Access a wide range of heavy-duty construction tools and equipment for short-term and long-term use, ready for immediate deployment.',
    image: '/service6.svg'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ServicesPage = () => {
  return (
    <main className="services-page">
      <header className="services-hero">
        <Motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Services
        </Motion.h1>
      </header>

      <Motion.section 
        className="services-grid-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {servicesData.map((service, index) => (
          <Motion.div 
            key={index} 
            className="service-full-card"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div className="service-card-content">
              <div className="service-icon-header">
                <span className="service-icon-bg">{service.icon}</span>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </div>
            <div className="service-card-image">
              <img src={service.image} alt={service.title} />
            </div>
          </Motion.div>
        ))}
      </Motion.section>

      {/* Reusing your existing FinalCTA component */}
      <FinalCTA />
    </main>
  );
};

export default ServicesPage;