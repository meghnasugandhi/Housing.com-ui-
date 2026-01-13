import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { properties } from "../data/properties";
import PropertyCard from "../Components/PropertyCard";
import SearchBar from "../Components/SearchBar";
import RentFilters from "../Components/RentFilters";

const Rent = () => {
  const { city } = useParams();
  const [filters, setFilters] = useState({});

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      // 1. Ensure we only show rent listings
      const isRent = p.listingType === "rent";
      
      // 2. City Match: Handles case sensitivity for "Mumbai" vs "mumbai"
      const matchesCity = city 
        ? p.city.toLowerCase() === city.toLowerCase() 
        : true;

      if (!isRent || !matchesCity) return false;

      // 3. BHK Filter: Ensure numeric comparison
      if (filters.bhk && p.bhk !== Number(filters.bhk)) return false;

      // 4. Furnishing: Match against "furnishingStatus" key in data
      if (filters.furnishing && p.furnishingStatus !== filters.furnishing) return false;

      // 5. Property Type: Match against "Apartment" or "Houses"
      if (filters.propertyType && p.propertyType !== filters.propertyType) return false;

      // 6. Listed By: Match against "Agent" or "Owner"
      if (filters.listedBy && p.listedBy !== filters.listedBy) return false;

      return true;
    });
  }, [city, filters]);

  return (
    <div style={{ backgroundColor: "#f6f7f9", minHeight: "100vh" }}>
      <SearchBar mode="rent" />
      <RentFilters setFilters={setFilters} />

      <Container className="mt-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className="text-muted" style={{ fontSize: "12px" }}>
            Home / Flats for Rent in {city}
          </small>
          <small className="text-muted" style={{ fontSize: "12px" }}>
            Last Updated: Jan 12, 2026
          </small>
        </div>

        <Row>
          <Col lg={8}>
            <div className="d-flex justify-content-between align-items-end mb-2">
              <div>
                <small className="text-muted">
                  Showing 1 - {filtered.length} of {filtered.length} properties
                </small>
                <h4 className="fw-bold">Flats for Rent in {city || "India"}</h4>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <small className="text-nowrap">Sort by:</small>
                <Form.Select size="sm" className="border-0 shadow-sm" style={{ width: "auto" }}>
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                </Form.Select>
              </div>
            </div>

            <div className="property-list">
              {filtered.length > 0 ? (
                filtered.map((p) => <PropertyCard key={p.id} property={p} />)
              ) : (
                <div className="bg-white p-5 text-center border rounded shadow-sm mt-3">
                  <h5 className="text-muted">No results found for "{city}"</h5>
                  <p className="small">Try clearing filters or searching for "Mumbai".</p>
                </div>
              )}
            </div>
          </Col>

          <Col lg={4} className="d-none d-lg-block">
            <div className="bg-white border rounded p-3 mb-4 shadow-sm sticky-top" style={{ top: "20px" }}>
              <h6 className="fw-bold mb-3">Featured Properties</h6>
              {properties.filter(p => p.listingType === "rent").slice(0, 3).map((fp) => (
                <div key={fp.id} className="d-flex gap-2 mb-3 align-items-start border-bottom pb-2">
                  <img src={fp.images[0]} alt="feat" style={{ width: "70px", height: "50px", objectFit: "cover", borderRadius: "4px" }} />
                  <div>
                    <div className="fw-bold small">{fp.rent?.display}</div>
                    <div className="text-truncate small" style={{ maxWidth: "150px" }}>{fp.title}</div>
                    <div className="text-muted" style={{ fontSize: "10px" }}>{fp.locality}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rent;