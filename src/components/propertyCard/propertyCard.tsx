import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FiWind, FiMaximize } from "react-icons/fi"; // Using Feather icons
import "./propertyCard.css";
import { FaBed } from "react-icons/fa";

interface PropertyProps {
  id: string | number;
  image: string;
  price: string;
  title: string;
  location: string;
  statusTag?: "For Rent" | "For Sale"; // Optional tag
  amenities?: {
    beds?: number;
    baths?: number;
    size?: string;
  };
}

const PropertyCard: React.FC<PropertyProps> = ({
  id,
  image,
  price,
  title,
  location,
  statusTag,
  amenities,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Navigates to the specific property details page
    navigate(`/properties/${id}`);
  };

  return (
    <Motion.div
      className="property-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
    >
      <div className="image-container">
        <img src={image} alt={title} className="property-img" />
        {/* Optional Status Tag */}
        {statusTag && <div className="status-tag">{statusTag}</div>}
      </div>

      <div className="property-details">
        <h2 className="price">{price}</h2>
        <h3 className="title">{title}</h3>
        <p className="location">{location}</p>

        {/* Optional Amenities Section */}
        {amenities && (
          <div className="amenities">
            {amenities.beds && (
              <span className="amenity-item">
                <FaBed /> {amenities.beds} Beds
              </span>
            )}
            {amenities.baths && (
              <span className="amenity-item">
                <FiWind /> {amenities.baths} Baths
              </span>
            )}
            {amenities.size && (
              <span className="amenity-item">
                <FiMaximize /> {amenities.size}
              </span>
            )}
          </div>
        )}

        <Motion.button
          className="buy-btn"
          onClick={handleNavigation}
          whileTap={{ scale: 0.98 }}
          whileHover={{ backgroundColor: "#333" }}
        >
          Buy Now
        </Motion.button>
      </div>
    </Motion.div>
  );
};

export default PropertyCard;
