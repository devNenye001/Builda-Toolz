import React, { useState, useRef, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import './propertySection.css';
import PropertyCard from '../../propertyCard/propertyCard';

// Mock data to demonstrate the carousel
const propertyData: Array<{
  id: number;
  image: string;
  price: string;
  title: string;
  location: string;
  statusTag?: 'For Rent' | 'For Sale';
  amenities?: { beds: number; baths: number; size: string };
}> = [
  { id: 1, image: '/property.svg', price: 'N300,000', title: 'Modern 4-Bedroom Duplex', location: 'Enugu, Nigeria', statusTag: 'For Rent', amenities: { beds: 3, baths: 2, size: '1,400 sq ft' } },
  { id: 2, image: '/property.svg', price: 'N450,000', title: 'Luxury Penthouse', location: 'Lagos, Nigeria', statusTag: 'For Sale', amenities: { beds: 4, baths: 4, size: '2,800 sq ft' } },
  { id: 3, image: '/property.svg', price: 'N200,000', title: 'Cozy Family Cottage', location: 'Abuja, Nigeria', amenities: { beds: 2, baths: 1, size: '900 sq ft' } },
  { id: 4, image: '/property.svg', price: 'N600,000', title: 'Smart Urban Villa', location: 'Port Harcourt, Nigeria', statusTag: 'For Sale' },
];

const PropertySection = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextProperty = () => {
    if (index < propertyData.length - 1) setIndex(prev => prev + 1);
  };

  const prevProperty = () => {
    if (index > 0) setIndex(prev => prev - 1);
  };

  return (
    <section className="property-section3">
      <div className="section-header3">
        <div className="header-text3">
          <span className="subtitle3"><span className="dot3">•</span> Featured Properties</span>
          <h2>Explore our <span className="highlight3">exclusive</span> listings</h2>
        </div>
        
        {/* Navigation Controls */}
        <div className="carousel-controls3">
          <button 
            className={`nav-arrow ${index === 0 ? 'disabled' : ''}`} 
            onClick={prevProperty}
            disabled={index === 0}
          >
            <FiChevronLeft />
          </button>
          <button 
            className={`nav-arrow ${index === propertyData.length - 1 ? 'disabled' : ''}`} 
            onClick={nextProperty}
            disabled={index === propertyData.length - 1}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="carousel-viewport3" ref={carouselRef}>
        <Motion.div 
          className="carousel-track3"
          animate={{ x: `calc(-${index * (150)}px)` }} 
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {propertyData.map((item) => (
            <div className="card-wrapper3" key={item.id}>
              <PropertyCard {...item} />
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default PropertySection;