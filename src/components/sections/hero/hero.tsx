import React from 'react';
import { motion as Motion, type Variants } from "framer-motion";
import './hero.css';
import { Link } from 'react-router-dom';


const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.4 }
  }
};

const Hero = () => {
  return (
    <section className="hero-container">
      <Motion.div 
        className="hero-text-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Motion.h1 variants={textVariants}>
          Find the home that fits your <br className="desktop-break" />
          lifestyle <span className="highlight-blue">perfectly</span>
        </Motion.h1>
      </Motion.div>

      <Motion.div 
        className="hero-image-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        <img 
          src="/hero.svg" 
          alt="Modern property lifestyle" 
          className="hero-image"
        />
        
        {/* Simple black button integrated into the hero flow */}
        <Motion.div 
          className="hero-action"
          variants={textVariants}
        >
            <Link to="/properties">
          <Motion.button 
            className="explore-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#333" }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Now
          </Motion.button>
            </Link>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;