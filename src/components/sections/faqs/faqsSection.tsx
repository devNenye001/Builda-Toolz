import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import './faqsSection.css';

const faqData = [
  {
    question: "What services does Builda Toolz offer?",
    answer: "Builda Toolz provides complete building and construction solutions including land sales, building construction, infrastructure development, equipment rentals, general building merchandise, and maintenance and renovation services."
  },
  {
    question: "Are your lands and properties verified?",
    answer: "Yes, all our lands and properties undergo a rigorous verification process to ensure legal clarity and long-term investment value for our clients."
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Absolutely. We have the expertise and equipment to manage projects ranging from private residential homes to large-scale commercial developments."
  },
  {
    question: "Can I rent construction equipment without hiring your construction services?",
    answer: "Yes, our equipment rental service is available for both short-term and long-term use, ready for immediate deployment to your specific project site."
  }
];

const FaqsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <div className="faqs-container">
        {/* Left Side: Header */}
        <div className="faqs-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            We've answered some common questions to help you understand our services, 
            processes, and how we work. If you need more information, our team is 
            always ready to assist.
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="faqs-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <div className="icon-wrapper">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <Motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;