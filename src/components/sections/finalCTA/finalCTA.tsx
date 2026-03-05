import React from 'react';
import { motion as Motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import './finalCTA.css';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" as const }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 0.3, duration: 0.6 }
  }
};

const FinalCTA = () => {
  return (
    <section className="cta-section">
      <Motion.div 
        className="cta-blue-card"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Motion.div className="cta-content" variants={textVariants}>
          <h2>Ready to build, invest, or renovate?</h2>
          <p>
            Builda Toolz is here to handle everything from start to finish. <br />
            Let’s turn your ideas into solid, lasting structures.
          </p>

          <Motion.button 
            className="cta-contact-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us 
          </Motion.button>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default FinalCTA;