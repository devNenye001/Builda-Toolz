import React from "react";
import PropertyCard from "../../propertyCard/propertyCard";
import "./hotSection.css";

const hotDealsData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: "N300,000",
    title: "Modern 4-Bedroom Duplex",
    location: "Enugu, Nigeria",
      statusTag: "For Rent" as const,
    amenities: { beds: 4, baths: 2, size: "1,400 sq ft" }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: "N250,000",
    title: "Luxury Apartment",
    location: "Abuja, Nigeria",
      statusTag: "For Rent" as const,
    amenities: { beds: 3, baths: 2, size: "1,200 sq ft" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "N200,000",
    title: "Cozy Family Home",
    location: "Port Harcourt, Nigeria",
      statusTag: "For Rent" as const,
    amenities: { beds: 2, baths: 1, size: "900 sq ft" }
  },
  
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    price: "N85,000,000",
    title: "Executive Mansion",
    location: "Abuja, Nigeria",
    statusTag: "For Sale" as const,
    amenities: { beds: 4, baths: 4, size: "3,200 sq ft" }
  }

];

const HotSection = () => {
  return (
    <section className="hot-section">
      <div className="hot-header">
        <div className="title-area">
          <span className="subtitle">
            <span className="dot">•</span> Properties
          </span>
          <h2>
            <span className="blue-text">Hot</span> Deals
          </h2>
        </div>
      </div>

      <div className="hot-scroll-container">
        {hotDealsData.map((deal) => (
          <div className="hot-card" key={deal.id}>
            <PropertyCard {...deal} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotSection;