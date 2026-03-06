import React, { useRef, useState } from 'react';
import { motion as Motion } from "framer-motion";
import './aboutPage.css';
import WhySection from '../../components/sections/whySection/whySection';
import FaqsSection from '../../components/sections/faqs/faqsSection';
import FinalCTA from '../../components/sections/finalCTA/finalCTA';
import ServicesSection from '../../components/sections/servicesSection/servicesSection';

// Importing your existing sections


const AboutPage = () => {
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
    <div className="about-page-container">
      <header className="about-header">
        <Motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Builda Toolz
        </Motion.h1>
      </header>

      {/* Hero Video Section */}
      <Motion.div 
        className="video-container"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <video 
          ref={videoRef}
          className="about-video"
          poster="/thumbnail.jpg"
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button className="play-overlay" onClick={togglePlay} aria-label="Play Video">
            <div className="play-icon"></div>
          </button>
        )}
      </Motion.div>

      <section className="about-intro-text">
        <p>
          Builda Toolz is a full-service real estate and construction company providing comprehensive building solutions under one trusted brand. We operate across land sales, building construction, infrastructure development, equipment rentals, general building merchandise, and renovation services. Our approach is simple: make building and property development easier, more reliable, and more transparent for our clients.
        </p>
      </section>

      {/* Existing Sections */}
     <ServicesSection />
      <WhySection />

      {/* Certifications & Compliance Section */}
      <section className="cert-section">
        <Motion.div 
          className="cert-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Certifications & Compliance</h2>
          <p>
            Builda Toolz operates in full compliance with industry regulations and recognized professional standards. Our certifications reflect our commitment to quality workmanship, safety, and ethical business practices. All our operations, properties, and construction projects are handled according to approved guidelines, ensuring reliability, transparency, and long-term value for our clients.
          </p>
          
          <div className="cert-image-wrapper">
            <Motion.img 
              src="/certificate.svg" 
              alt="Builda Toolz Certification" 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </Motion.div>
      </section>

      <FaqsSection />
      <FinalCTA />
    </div>
  );
};

export default AboutPage;