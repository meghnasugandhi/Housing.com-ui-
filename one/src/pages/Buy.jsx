import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyCard from "../Components/PropertyCard";

import SearchBar from "../Components/SearchBar";
import BuyFilters from "../Components/BuyFilters";
import { Container, Row, Col } from "react-bootstrap";

const Buy = () => {
  const { city } = useParams();
  
  // Local state for active filters
  const [filters, setFilters] = useState({
    type: "",
    bhk: "",
    priceRange: "",
    verified: false,
  });

  const filtered = properties.filter(p => {
    // 1. Filter by Sale type and City
    const basicMatch = p.listingType === "sale" && p.city.toLowerCase() === city.toLowerCase();
    
    // 2. Filter by Property Type
    const typeMatch = !filters.type || p.propertyType === filters.type;
    
    // 3. Filter by BHK
    const bhkMatch = !filters.bhk || p.bhk === filters.bhk;
    
    // 4. Filter by Verified Status
    const verifiedMatch = !filters.verified || p.verified === true;

    // 5. Filter by Price (Logic based on property.price.max)
    let priceMatch = true;
    if (filters.priceRange === "50L") priceMatch = p.price.max <= 5000000;
    if (filters.priceRange === "1Cr") priceMatch = p.price.max <= 10000000;
    if (filters.priceRange === "2Cr") priceMatch = p.price.max <= 20000000;

    return basicMatch && typeMatch && bhkMatch && verifiedMatch && priceMatch;
  });

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <div className="sticky-top bg-white" style={{ zIndex: 1020 }}>
        
        <SearchBar mode="buy" />
        {/* Pass state and setter to the filter bar */}
        <BuyFilters filters={filters} setFilters={setFilters} />
      </div>

      <Container className="mt-3">
        <Row>
          <Col md={8}>
            <div className="mb-3">
              <h5 className="fw-bold">Properties for sale in {city}</h5>
              <small className="text-muted">Found {filtered.length} Results</small>
            </div>

            {filtered.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
            
            {filtered.length === 0 && (
              <div className="p-5 text-center bg-white rounded border">
                No properties match these filters. Try resetting!
              </div>
            )}
          </Col>

          <Col md={4} className="d-none d-md-block">
             <div className="bg-white p-3 rounded border sticky-top" style={{ top: '200px' }}>
                <h6>Are you a property owner?</h6>
                <p className="small text-muted">List your property for free and reach millions of buyers.</p>
                <button className="btn btn-primary w-100" style={{backgroundColor: '#5e23dc', border: 'none'}}>Post Property</button>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buy;