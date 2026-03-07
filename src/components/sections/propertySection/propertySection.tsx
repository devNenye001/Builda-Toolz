
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
 {
    id: 1,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6", // Modern 4-Bedroom Duplex
    price: "N300,000",
    title: "Modern 4-Bedroom Duplex",
    location: "Enugu, Nigeria",
    statusTag: "For Rent" as const,
    amenities: { beds: 3, baths: 2, size: "1,400 sq ft" }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", // Luxury Penthouse
    price: "N450,000",
    title: "Luxury Penthouse",
    location: "Lagos, Nigeria",
    statusTag: "For Sale" as const,
    amenities: { beds: 4, baths: 4, size: "2,800 sq ft" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Cozy Family Cottage
    price: "N200,000",
    title: "Cozy Family Cottage",
    location: "Abuja, Nigeria",
    amenities: { beds: 2, baths: 1, size: "900 sq ft" }
  }
];

const PropertySection = () => {
 return (
    <section className="property-section3">
      <div className="section-header3">
        <div className="header-text3">
          <span className="subtitle3"><span className="dot3">•</span> Featured Properties</span>
          <h2>Explore our <span className="highlight3">exclusive</span> listings</h2>
        </div>
      </div>

      <div className="carousel-viewport3">
        {propertyData.map((item) => (
          <div className="card-wrapper3" key={item.id}>
            <PropertyCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertySection;