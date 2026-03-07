import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiStar } from "react-icons/fi";
import './testimonialSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Chinedu P.',
    image: '/test.svg', // Replace with your image path
    text: '“Customer service is top-notch. They explained everything before repairing my phone.”',
    rating: 4,
  },
  {
    id: 2,
    name: 'Sarah A.',
    image: '/test.svg',
    text: '“Highly professional team. They helped me find the perfect land for my dream home without any stress.”',
    rating: 5,
  },
  {
    id: 3,
    name: 'Tunde O.',
    image: '/test.svg',
    text: '“The construction quality is unmatched. I was kept informed through every stage of the build.”',
    rating: 5,
  }
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonial-section4">
      <div className="testimonial-header4">
        <span className="subtitle4"><span className="dot4">•</span> Testimonials</span>
        <h2>Real Feedback from <br /> our <span className="blue4">satisfied</span> clients</h2>
      </div>

      <div className="carousel-container4">
        <AnimatePresence mode="wait">
          <Motion.div 
            key={testimonials[index].id}
            className="testimonial-card4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="client-image-wrapper4">
              <img src={testimonials[index].image} alt={testimonials[index].name} />
            </div>
            <div className="client-content4">
              <p className="testimonial-text4">{testimonials[index].text}</p>
              <h4 className="client-name4">{testimonials[index].name}</h4>
              <div className="star-rating4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={i < testimonials[index].rating ? "star filled4" : "star4"} 
                  />
                ))}
              </div>
            </div>

            {/* Carousel Navigation Button */}
            <button className="next-btn4" onClick={nextSlide} aria-label="Next Testimonial">
              <FiChevronRight />
            </button>
          </Motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="pagination4">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`dot-indicator4 ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;