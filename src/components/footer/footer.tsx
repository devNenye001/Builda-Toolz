import React from 'react';
import { motion as Motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, staggerChildren: 0.1 } 
    }
  };

  return (
    <footer className="footer">
      <Motion.div 
        className="footer-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        {/* Branding Section */}
        <div className="footer-brand">
          <div className="logo-section-footer">
            <img src="/logo2.png" alt="Builda Toolz Logo" width={150}  />
             </div>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h4 className="footer-heading">COMPANY</h4>
          <ul className="footer-links">
            <li><a href="/properties">Properties</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Office Address */}
        <div className="footer-column">
          <h4 className="footer-heading">OUR ADDRESS</h4>
          <div className="address-item">
            <FiMapPin className="footer-icon" />
            <p>Suite C01 2x Mall, 3rd Avenue, Gwarimpa</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4 className="footer-heading">CONTACT</h4>
          <div className="contact-item">
            <FiPhone className="footer-icon" />
            <p>08134513172</p>
          </div>
          <div className="contact-item">
            <FiMail className="footer-icon" />
            <p>buildaToolz@gmail.com</p>
          </div>
        </div>
      </Motion.div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>Copyright © {currentYear} Builda Toolz</p>
          <div className="bottom-links">
            <a href="/privacy">Privacy policy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;