import React, { useRef, useState } from 'react';
import { motion as Motion, type Variants } from "framer-motion";
import './aboutSection.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const AboutSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="about-section2">
      <Motion.div 
        className="about-header2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="about-title-side2">
          <Motion.span className="subtitle2" variants={fadeUp}>
            <span className="dot2">•</span> About Us
          </Motion.span>
          <Motion.h2 variants={fadeUp}>
            Get to know more <br /> about Builda Toolz
          </Motion.h2>
        </div>
        
        <Motion.div className="about-text-side2" variants={fadeUp}>
          <p>
            Builda Toolz is a full-service real estate and construction company 
            delivering end-to-end building solutions. From land acquisition and 
            property development to construction, equipment rentals, and building 
            materials, we provide everything required to bring projects to life.
          </p>
        </Motion.div>
      </Motion.div>

      <Motion.div 
        className="video-container2"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <video 
          ref={videoRef}
          className="about-video"
          poster="/thumbnail.jpg" // Add your thumbnail path here
          playsInline
          controls
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button className="play-overlay2" onClick={togglePlay} aria-label="Play Video">
            <div className="play-icon2"></div>
          </button>
        )}
      </Motion.div>
    </section>
  );
};

export default AboutSection;