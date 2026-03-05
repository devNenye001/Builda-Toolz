import React, { useState } from 'react';
import { motion as Motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PropertyCard from '../../propertyCard/propertyCard';
import './hotSection.css';

const hotDealsData = [
  { id: 101, image: '/property2.svg', price: 'N150,000', title: 'Modern 4-Bedroom Duplex', location: 'Enugu, Nigeria', statusTag: 'For Rent' as const, amenities: { beds: 3, baths: 2, size: '1,400 sq ft' } },
  { id: 102, image: '/property2.svg', price: 'N150,000', title: 'Modern 4-Bedroom Duplex', location: 'Enugu, Nigeria', statusTag: 'For Rent' as const, amenities: { beds: 3, baths: 2, size: '1,400 sq ft' } },
  { id: 103, image: '/property2.svg', price: 'N180,000', title: 'Modern 4-Bedroom Duplex', location: 'Enugu, Nigeria', statusTag: 'For Rent' as const, amenities: { beds: 3, baths: 2, size: '1,400 sq ft' } },
  { id: 104, image: '/property2.svg', price: 'N120,000', title: 'Modern 4-Bedroom Duplex', location: 'Enugu, Nigeria', statusTag: 'For Rent' as const, amenities: { beds: 3, baths: 2, size: '1,400 sq ft' } },
] as const;

const HotSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const slideRight = () => {
    if (currentIndex < hotDealsData.length - 1) setCurrentIndex(prev => prev + 1);
  };

  return (
    <section className="hot-section">
      <div className="hot-header">
        <div className="title-area">
          <span className="subtitle"><span className="dot">•</span> Properties</span>
          <h2><span className="blue-text">Hot</span> Deals</h2>
        </div>
        
        <div className="header-actions">
          <div className="nav-buttons">
            <button 
              className={`nav-icon ${currentIndex === 0 ? 'disabled' : ''}`} 
              onClick={slideLeft}
            >
              <FiChevronLeft />
            </button>
            <button 
              className={`nav-icon ${currentIndex === hotDealsData.length - 1 ? 'disabled' : ''}`} 
              onClick={slideRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="hot-carousel-container">
        <Motion.div 
          className="hot-track"
          animate={{ x: `calc(-${currentIndex * (150)}px)` }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {hotDealsData.map((deal) => (
            <div className="hot-card-wrapper" key={deal.id}>
              <PropertyCard {...deal} />
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default HotSection;