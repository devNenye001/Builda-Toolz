import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

import './faqsPage.css';
import FinalCTA from '../../components/sections/finalCTA/finalCTA';

const faqData = [
  {
    id: 1,
    question: "What services does Builda Toolz offer?",
    answer: "Builda Toolz provides complete building and construction solutions including land sales, building construction, infrastructure development, equipment rentals, general building merchandise, and maintenance and renovation services."
  },
  {
    id: 2,
    question: "Are your lands and properties verified?",
    answer: "Yes, all our lands and properties undergo a rigorous verification process to ensure legal clarity and long-term investment value for our clients."
  },
  {
    id: 3,
    question: "Do you handle both residential and commercial projects?",
    answer: "Absolutely. We have the expertise and equipment to manage projects ranging from private residential homes to large-scale commercial developments."
  },
  {
    id: 4,
    question: "Can I rent construction equipment without hiring your construction services?",
    answer: "Yes, our equipment rental service is available for both short-term and long-term use, ready for immediate deployment to your specific project site."
  }
];

const FaqsPage = () => {
  const [activeId, setActiveId] = useState<number | null>(1); // Default first one open

  return (
    <main className="faqs-page">
      <header className="faqs-hero">
        <Motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </Motion.h1>
        <Motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We've answered some common questions to help you understand our services, 
          processes, and how we work. If you need more information, our team is always ready to assist.
        </Motion.p>
      </header>

      <section className="faqs-accordion-container">
        {faqData.map((faq) => (
          <div 
            key={faq.id} 
            className={`faq-card ${activeId === faq.id ? 'active' : ''}`}
          >
            <button 
              className="faq-trigger" 
              onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
            >
              <span className="question-text">{faq.question}</span>
              <div className="status-icon">
                {activeId === faq.id ? <FiMinus /> : <FiPlus />}
              </div>
            </button>

            <AnimatePresence>
              {activeId === faq.id && (
                <Motion.div 
                  className="faq-content-wrapper"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="faq-content-inner">
                    <p>A: {faq.answer}</p>
                  </div>
                </Motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      {/* Your existing FinalCTA component */}
      <FinalCTA />
    </main>
  );
};

export default FaqsPage;