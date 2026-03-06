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
  { id: 1, image: '/property2.svg', price: 'N300,000', title: 'Modern 4-Bedroom Duplex', location: 'Enugu, Nigeria', statusTag: 'For Rent', amenities: { beds: 3, baths: 2, size: '1,400 sq ft' } },
  { id: 2, image: '/property2.svg', price: 'N300,000', title: 'Modern 4-Bedroom Duplex', location: 'Enugu, Nigeria', statusTag: 'For Rent', amenities: { beds: 3, baths: 2, size: '1,400 sq ft' } },
  { id: 3, image: '/property2.svg', price: 'N300,000', title: 'Modern 4-Bedroom Duplex', location: 'Enugu, Nigeria', statusTag: 'For Rent', amenities: { beds: 3, baths: 2, size: '1,400 sq ft' } },
  { id: 4, image: '/property2.svg', price: 'N300,000', title: 'Modern 4-Bedroom Duplex', location: 'Enugu, Nigeria', statusTag: 'For Rent', amenities: { beds: 3, baths: 2, size: '1,400 sq ft' } },
];

const saleProperties: Property[] = [
  { id: 5, image: '/property.svg', price: 'N150,000,000', title: 'Luxury Estate Villa', location: 'Lagos, Nigeria', statusTag: 'For Sale', amenities: { beds: 5, baths: 6, size: '4,500 sq ft' } },
  { id: 6, image: '/property.svg', price: 'N85,000,000', title: 'Executive Mansion', location: 'Abuja, Nigeria', statusTag: 'For Sale', amenities: { beds: 4, baths: 4, size: '3,200 sq ft' } },
  { id: 7, image: '/property.svg', price: 'N150,000,000', title: 'Luxury Estate Villa', location: 'Lagos, Nigeria', statusTag: 'For Sale', amenities: { beds: 5, baths: 6, size: '4,500 sq ft' } },
  { id: 8, image: '/property.svg', price: 'N85,000,000', title: 'Executive Mansion', location: 'Abuja, Nigeria', statusTag: 'For Sale', amenities: { beds: 4, baths: 4, size: '3,200 sq ft' } },
];

const PropertiesPage = () => {

  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  // Filtering logic

  const filteredRent = rentProperties.filter((property) =>
    property.location.toLowerCase().includes(search.toLowerCase()) ||
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSale = saleProperties.filter((property) =>
    property.location.toLowerCase().includes(search.toLowerCase()) ||
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="properties-page">
      <header className="page-header">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
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

          <button 
  className="filter-btn"
  onClick={() => setShowFilter(!showFilter)}
>
  <FiFilter /> Filter
</button>
        </div>
        {showFilter && (
  <div className="filter-panel">
    <select>
      <option>Bedrooms</option>
      <option>1 Bedroom</option>
      <option>2 Bedrooms</option>
      <option>3 Bedrooms</option>
    </select>

    <select>
      <option>Price Range</option>
      <option>0 - 500k</option>
      <option>500k - 2M</option>
      <option>2M+</option>
    </select>

    <button className="apply-filter">Apply</button>
  </div>
)}
        
      </header>
      

      {/* For Rent Section */}
      <section className="property-group">
        <h2 className="group-title">For Rent</h2>

        <div className="scroll-container">
          {filteredRent.map((prop) => (
            <div key={prop.id} className="scroll-item">
              <PropertyCard {...prop} />
            </div>
          ))}
        </div>

        {filteredRent.length === 0 && <p>No rent properties found</p>}
      </section>

      {/* For Sale Section */}
      <section className="property-group">
        <h2 className="group-title">For Sale</h2>

        <div className="scroll-container">
          {filteredSale.map((prop) => (
            <div key={prop.id} className="scroll-item">
              <PropertyCard {...prop} />
            </div>
          ))}
        </div>

        {filteredSale.length === 0 && <p>No sale properties found</p>}
      </section>
    </main>
  );
};

export default PropertiesPage;