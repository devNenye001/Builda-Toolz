import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FiMapPin, FiCheckCircle, FiHome } from 'react-icons/fi';
import './propertyDetailsPage.css';

// This would normally come from an API or central data file
const propertyDatabase = [
  {
    id: "1",
    title: "Modern 4-Bedroom Duplex, Enugu, Nigeria",
    location: "Enugu, Nigeria",
    price: "N300,000",
    description: "A luxurious and modern 4-bedroom duplex built with high-quality materials and designed for comfort, safety, and style. Perfect for families or investors looking for a high-value property.",
    features: [
      "4 Spacious Bedrooms",
      "4 Modern Bathrooms",
      "2-3 Car Parking Spaces",
      "Open-plan Living and Dining Areas",
      "Contemporary Kitchen with Built-in Cabinets",
      "Secure Compound with Gate and Fencing"
    ],
    images: ["/detail1.svg", "/detail2.svg", "/detail3.svg"]
  },
];

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<any>(null);

  useEffect(() => {
    // Find the property based on the ID from the PropertyCard
    const foundProperty = propertyDatabase.find(p => p.id === id) || propertyDatabase[0];
    setProperty(foundProperty);
  }, [id]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello Builda Toolz, I am interested in the property: ${property?.title}`);
    window.open(`http://googleusercontent.com/wa.me/2348134513172?text=${message}`, '_blank');
  };

  if (!property) return <div className="loading">Loading...</div>;

  return (
    <main className="details-page">
      <div className="details-container">
        {/* Image Gallery Grid */}
        <section className="image-grid">
          <Motion.div 
            className="main-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img src={property.images[0]} alt="Exterior" />
          </Motion.div>
          <div className="side-images">
            <img src={property.images[1]} alt="Interior 1" />
            <img src={property.images[2]} alt="Interior 2" />
          </div>
        </section>

        {/* Content Section */}
        <section className="content-grid">
          <Motion.div 
            className="text-content"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="prop-title">{property.title}</h1>
            <div className="prop-location">
              <FiMapPin /> {property.location}
            </div>
            <h2 className="prop-price">{property.price}</h2>

            <p className="prop-description">{property.description}</p>

            <div className="key-features">
              <h3>Key Features</h3>
              <ul>
                {property.features.map((feature: string, index: number) => (
                  <li key={index}><FiCheckCircle className="check-icon" /> {feature}</li>
                ))}
              </ul>
            </div>
          </Motion.div>

          {/* Enquiry Card - Strictly No Box Shadow */}
          <Motion.aside 
            className="enquiry-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="card-inner">
              <h3>Interested in this property?</h3>
              <div className="house-icon-bg">
                <FiHome size={60} color="#666" />
              </div>
              <p>Contact Builda Toolz today to schedule a viewing or request more information.</p>
              
              <Motion.button 
                className="enquire-btn"
                whileHover={{ scale: 1.02, backgroundColor: "#333" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
              >
                Enquire Now
              </Motion.button>
            </div>
          </Motion.aside>
        </section>
      </div>
    </main>
  );
};

export default PropertyDetailsPage;