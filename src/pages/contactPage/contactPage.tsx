import React from 'react';
import { motion as Motion, type Variants } from "framer-motion";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import './contactPage.css';
import FinalCTA from '../../components/sections/finalCTA/finalCTA';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ContactPage = () => {
  return (
    <main className="contact-page">
      <header className="contact-hero">
        <Motion.h1 variants={fadeUp} initial="hidden" animate="visible">
          Contact Us
        </Motion.h1>
        <Motion.p 
          variants={fadeUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ delay: 0.2 }}
        >
          Have questions? We're here to help. Reach out to us via phone or email.
        </Motion.p>
      </header>

      <section className="contact-grid">
        {/* Left Side: Contact Info */}
        <Motion.div 
          className="contact-info-side"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Get In Touch!</h2>
          <p className="description">
            Reach out to us through any of the channels below and we'll respond promptly.
          </p>

          <div className="contact-method">
            <div className="icon-box blue-bg">
              <FiMapPin />
            </div>
            <div className="method-text">
              <h3>Head Office</h3>
              <p>102 Christian Okpara Street, Okpanam Road, Asaba, Delta State</p>
            </div>
          </div>

          <div className="contact-method">
            <div className="icon-box blue-bg">
              <FiMail />
            </div>
            <div className="method-text">
              <h3>Email</h3>
              <p>buildatoolz@gmail.com</p>
            </div>
          </div>

          <div className="contact-method">
            <div className="icon-box blue-bg">
              <FiPhone />
            </div>
            <div className="method-text">
              <h3>Phone Number</h3>
              <p>+2348134513172</p>
            </div>
          </div>
        </Motion.div>

        {/* Right Side: Random Embedded Map */}
        <Motion.div 
          className="map-side"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126935.80786518115!2d6.65707440406839!3d6.164363290463137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f260388d1d9d%3A0x6b47c030d9370135!2sAsaba%2C%20Delta!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Builda Toolz Location"
          ></iframe>
        </Motion.div>
      </section>
      <FinalCTA />
    </main>
  );
};

export default ContactPage;