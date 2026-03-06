import React from 'react';
import { motion as Motion, type Variants } from "framer-motion";
import { FiDollarSign, FiUserCheck, FiUsers } from "react-icons/fi";
import './whySection.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const WhySection = () => {
  const reasons = [
    {
      icon: <FiDollarSign />,
      title: 'Comprehensive Solutions',
      description: 'Every aspect of building and construction under one brand.',
    },
    {
      icon: <FiUserCheck />,
      title: 'Expert Team',
      description: 'Skilled professionals ensuring quality and timely delivery.',
    },
    {
      icon: <FiUsers />,
      title: 'Trusted Partnerships',
      description: 'Reliable suppliers and equipment for seamless project execution.',
    },
  ];

  return (
    <section className="why-section2">
      <Motion.div 
        className="why-header2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="subtitle2"><span className="dot2">•</span> Why Choose Us</span>
        <h2>
          Building is more than construction <br className="desktop-only2" />
          — it’s <span className="blue2">trust</span>, <span className="blue2">quality</span>, and <span className="blue2">vision</span>
        </h2>
      </Motion.div>

      <Motion.div 
        className="reasons-grid2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {reasons.map((reason, index) => (
          <Motion.div 
            key={index} 
            className="reason-card2" 
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="icon-box2">
              {reason.icon}
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
};

export default WhySection;