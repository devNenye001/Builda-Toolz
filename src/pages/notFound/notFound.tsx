import React from 'react';
import { motion as Motion, type Variants } from "framer-motion";
import './notFound.css';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <Motion.div 
        className="not-found-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Icon Box */}
        <Motion.div 
          className="icon-box"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <span className="question-mark"><BsFillQuestionCircleFill /></span>
        </Motion.div>

        {/* Text Content */}
        <Motion.h1 variants={itemVariants}>Page not found!</Motion.h1>
        
        <Motion.p variants={itemVariants}>
          The page you're looking for does not exist or has <br /> been moved.
        </Motion.p>

        {/* Button */}
        <Motion.div variants={itemVariants}>
          <Motion.button 
            className="go-home-btn"
            whileHover={{ scale: 1.02, backgroundColor: "#333" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/'}
          >
            Go Home
          </Motion.button>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default NotFound;