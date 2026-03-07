import { useState } from 'react';
import { motion as Motion } from "framer-motion";
import { FiSearch, FiFilter } from "react-icons/fi";
import './propertiesPage.css';
import PropertyCard from '../../components/propertyCard/propertyCard';

type Property = {
  id: number;
  image: string;
  price: string;
  title: string;
  location: string;
  statusTag?: "For Rent" | "For Sale";
  amenities?: {
    beds: number;
    baths: number;
    size: string;
  };
};

// Mock data arrays
const rentProperties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: "N300,000",
    title: "Modern 4-Bedroom Duplex",
    location: "Enugu, Nigeria",
    statusTag: "For Rent",
    amenities: { beds: 4, baths: 2, size: "1,400 sq ft" }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: "N250,000",
    title: "Luxury Apartment",
    location: "Abuja, Nigeria",
    statusTag: "For Rent",
    amenities: { beds: 3, baths: 2, size: "1,200 sq ft" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "N200,000",
    title: "Cozy Family Home",
    location: "Port Harcourt, Nigeria",
    statusTag: "For Rent",
    amenities: { beds: 2, baths: 1, size: "900 sq ft" }
  }
];

const saleProperties: Property[] = [
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    price: "N150,000,000",
    title: "Luxury Estate Villa",
    location: "Lagos, Nigeria",
    statusTag: "For Sale",
    amenities: { beds: 5, baths: 6, size: "4,500 sq ft" }
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    price: "N85,000,000",
    title: "Executive Mansion",
    location: "Abuja, Nigeria",
    statusTag: "For Sale",
    amenities: { beds: 4, baths: 4, size: "3,200 sq ft" }
  }
];
const PropertiesPage = () => {
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [bedFilter, setBedFilter] = useState<string>(""); // Bedrooms filter
  const [priceFilter, setPriceFilter] = useState<string>(""); // Price filter

  // Convert property.price string to number for filtering
  const priceToNumber = (price: string) => Number(price.replace(/[^0-9]/g, ''));

  const filterProperties = (properties: Property[]) => {
    return properties.filter(prop => {
      // Search filter
      const matchesSearch =
        prop.title.toLowerCase().includes(search.toLowerCase()) ||
        prop.location.toLowerCase().includes(search.toLowerCase());

      // Bedroom filter
      let matchesBed = true;
      if (bedFilter) {
        const bedCount = prop.amenities?.beds || 0;
        matchesBed = bedFilter === "1" ? bedCount === 1 :
                     bedFilter === "2" ? bedCount === 2 :
                     bedFilter === "3" ? bedCount === 3 :
                     true;
      }

      // Price filter
      let matchesPrice = true;
      if (priceFilter) {
        const priceNum = priceToNumber(prop.price);
        matchesPrice = priceFilter === "0-500k" ? priceNum <= 500_000 :
                       priceFilter === "500k-2M" ? priceNum > 500_000 && priceNum <= 2_000_000 :
                       priceFilter === "2M+" ? priceNum > 2_000_000 :
                       true;
      }

      return matchesSearch && matchesBed && matchesPrice;
    });
  };

  const filteredRent = filterProperties(rentProperties);
  const filteredSale = filterProperties(saleProperties);

  return (
    <main className="properties-page">
      <header className="page-header">
        <Motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Properties
        </Motion.h1>

        {/* Search & Filter Bar */}
        <div className="filter-bar">
          <div className="search-input">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by location or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
            <FiFilter /> Filter
          </button>
        </div>

        {showFilter && (
          <div className="filter-panel">
            <select value={bedFilter} onChange={(e) => setBedFilter(e.target.value)}>
              <option value="">Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
            </select>

            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="">Price Range</option>
              <option value="0-500k">0 - 500k</option>
              <option value="500k-2M">500k - 2M</option>
              <option value="2M+">2M+</option>
            </select>

            <button className="apply-filter" onClick={() => setShowFilter(false)}>Apply</button>
          </div>
        )}
      </header>

      {/* For Rent Section */}
      <section className="property-group">
        <h2 className="group-title">For Rent</h2>
        <div className="scroll-container">
          {filteredRent.length ? filteredRent.map((prop) => (
            <div key={prop.id} className="scroll-item">
              <PropertyCard {...prop} />
            </div>
          )) : <p>No rent properties found</p>}
        </div>
      </section>

      {/* For Sale Section */}
      <section className="property-group">
        <h2 className="group-title">For Sale</h2>
        <div className="scroll-container">
          {filteredSale.length ? filteredSale.map((prop) => (
            <div key={prop.id} className="scroll-item">
              <PropertyCard {...prop} />
            </div>
          )) : <p>No sale properties found</p>}
        </div>
      </section>
    </main>
  );
};

export default PropertiesPage;