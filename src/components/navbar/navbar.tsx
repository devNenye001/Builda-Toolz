import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence, Variants } from "framer-motion";
import "./navbar.css";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
];

const menuVariants: Variants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkVariants: Variants = {
  closed: { x: 30, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="nav-container">
        <Motion.div
          className="logo-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src="/logo2.png"
            alt="builda toolz logo"
            width={150}
            height="auto"
          />
        </Motion.div>

        {/* Desktop Links */}
        <ul className="nav-links-desktop">
          {navLinks.map((link) => (
            <Motion.li
              key={link.name}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={link.href} className="nav-link">
                {link.name}
                <span className="underline" />
              </Link>
            </Motion.li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="cta-desktop">
          <Link to="/contact">
            <Motion.button
              className="contact-btn"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </Motion.button>
          </Link>
        </div>

        {/* Burger */}
        <button
          className="burger-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Motion.div
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="bar"
          />
          <Motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="bar"
          />
          <Motion.div
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="bar"
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            className="mobile-drawer"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <Motion.li key={link.name} variants={linkVariants}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </Motion.li>
              ))}

              <Motion.li variants={linkVariants}>
                <Link to="/contact" className="contact-btn mobile-btn">
                  Contact Us
                </Link>
              </Motion.li>
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;
