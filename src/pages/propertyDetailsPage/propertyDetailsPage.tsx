import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FiMapPin, FiCheckCircle, FiHome } from 'react-icons/fi';
import './propertyDetailsPage.css';

// This would normally come from an API or central data file

 const propertyDatabase = [
    {
    id: 1,
    title: "Modern 4-Bedroom Duplex",
    price: "N300,000",
    location: "Enugu, Nigeria",
    statusTag: "For Rent" as const,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    ],
    description:
      "A modern 4-bedroom duplex located in a quiet residential area in Enugu. The home features spacious living areas and a fitted kitchen.",
    amenities: { beds: 4, baths: 2, size: "1,400 sq ft" },
    features: ["Parking Space", "24/7 Security", "Balcony", "Water Supply"]
  },

  {
    id: 2,
    title: "Luxury Apartment",
    price: "N250,000",
    location: "Abuja, Nigeria",
    statusTag: "For Rent" as const,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ],
    description:
      "A luxury apartment located in the heart of Abuja with modern finishes and excellent accessibility.",
    amenities: { beds: 3, baths: 2, size: "1,200 sq ft" },
    features: ["Gym", "Elevator", "Parking", "24/7 Security"]
  },

  {
    id: 3,
    title: "Cozy Family Home",
    price: "N200,000",
    location: "Port Harcourt, Nigeria",
    statusTag: "For Rent" as const,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    ],
    description:
      "A cozy and affordable family home located in a peaceful neighborhood in Port Harcourt.",
    amenities: { beds: 2, baths: 1, size: "900 sq ft" },
    features: ["Parking", "Water Supply", "Secure Compound"]
  },

  {
    id: 4,
    title: "Luxury Estate Villa",
    price: "N150,000,000",
    location: "Lagos, Nigeria",
    statusTag: "For Sale" as const,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
    ],
    description:
      "A luxury estate villa in Lagos offering premium living with large spaces and modern architecture.",
    amenities: { beds: 5, baths: 6, size: "4,500 sq ft" },
    features: ["Swimming Pool", "Garden", "Garage", "24/7 Security"]
  },

  {
    id: 5,
    title: "Executive Mansion",
    price: "N85,000,000",
    location: "Abuja, Nigeria",
    statusTag: "For Sale" as const,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    ],
    description:
      "An executive mansion designed with luxury finishing, large living spaces, and modern amenities.",
    amenities: { beds: 4, baths: 4, size: "3,200 sq ft" },
    features: ["Smart Home System", "Large Parking", "Garden", "Security"]
  },
  {
    id: 6,
    title: "Modern 4-Bedroom Duplex",
    price: "N300,000",
    location: "Enugu, Nigeria",
    statusTag: "For Rent" as const,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    ],
    description:
      "A modern 4-bedroom duplex located in Enugu with spacious living areas and modern kitchen.",
    amenities: { beds: 3, baths: 2, size: "1,400 sq ft" },
    features: ["Parking Space", "24/7 Security", "Balcony"]
  },

  // Property 7
  {
    id: 7,
    title: "Luxury Penthouse",
    price: "N450,000",
    location: "Lagos, Nigeria",
    statusTag: "For Sale" as const,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ],
    description:
      "A luxurious penthouse in Lagos with premium finishes, large terraces, and stunning city views.",
    amenities: { beds: 4, baths: 4, size: "2,800 sq ft" },
    features: ["Elevator", "Gym", "24/7 Security", "Rooftop Terrace"]
  },

  // Property 8
  {
    id: 8,
    title: "Cozy Family Cottage",
    price: "N200,000",
    location: "Abuja, Nigeria",
    statusTag: "For Rent" as const,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    ],
    description:
      "A cozy family cottage in Abuja, perfect for small families looking for comfort and convenience.",
    amenities: { beds: 2, baths: 1, size: "900 sq ft" },
    features: ["Secure Compound", "Parking", "Garden"]
  }
];



const PropertyDetailsPage = () => {
const { id } = useParams();
const propertyId = Number(id);
const [loading, setLoading] = useState(true);
const [property, setProperty] = useState<any>(null);

useEffect(() => {
  const propertyId = Number(id);
  const foundProperty = propertyDatabase.find(p => p.id === propertyId);

  // Fake API delay
  setTimeout(() => {
    setProperty(foundProperty);
    setLoading(false);
  }, 2000);

}, [id]);
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello Builda Toolz, I am interested in the property: ${property?.title}`);
    window.open(`http://googleusercontent.com/wa.me/2348134513172?text=${message}`, '_blank');
  };

if (loading || !property) {
  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <p>Loading property details...</p>
    </div>
  );
}
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