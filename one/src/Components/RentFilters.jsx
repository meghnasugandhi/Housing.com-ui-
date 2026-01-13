import React from "react";
import { Container, Dropdown, ButtonGroup } from "react-bootstrap";

const RentFilters = ({ setFilters }) => {
  // Helper to update filters state in parent
  const handleSelect = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white border-bottom py-2 shadow-sm">
      <Container className="d-flex align-items-center gap-2 flex-wrap">
        
        {/* BHK Type */}
        <Dropdown onSelect={(val) => handleSelect("bhk", Number(val))}>
          <Dropdown.Toggle variant="outline-secondary" size="sm" className="bg-white text-dark border-light-subtle py-2 px-3">
            BHK Type
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">1 BHK</Dropdown.Item>
            <Dropdown.Item eventKey="2">2 BHK</Dropdown.Item>
            <Dropdown.Item eventKey="3">3 BHK</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Budget / Price */}
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" size="sm" className="bg-white text-dark border-light-subtle py-2 px-3">
            ₹0 - ₹80K
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>₹0 - ₹20,000</Dropdown.Item>
            <Dropdown.Item>₹20,000 - ₹50,000</Dropdown.Item>
            <Dropdown.Item>Above ₹50,000</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Listed By */}
        <Dropdown onSelect={(val) => handleSelect("listedBy", val)}>
          <Dropdown.Toggle variant="outline-secondary" size="sm" className="bg-white text-dark border-light-subtle py-2 px-3">
            Listed By
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Owner">Owner</Dropdown.Item>
            <Dropdown.Item eventKey="Agent">Agent</Dropdown.Item>
            <Dropdown.Item eventKey="developer">Developer</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Furnishing */}
        <Dropdown onSelect={(val) => handleSelect("furnishing", val)}>
          <Dropdown.Toggle variant="outline-secondary" size="sm" className="bg-white text-dark border-light-subtle py-2 px-3">
            Furnishing
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Unfurnished">Unfurnished</Dropdown.Item>
            <Dropdown.Item eventKey="Semi Furnished">Semi Furnished</Dropdown.Item>
            <Dropdown.Item eventKey="Fully Furnished">Fully Furnished</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Property Type */}
        <Dropdown onSelect={(val) => handleSelect("propertyType", val)}>
          <Dropdown.Toggle variant="outline-secondary" size="sm" className="bg-white text-dark border-light-subtle py-2 px-3">
            Property Type
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Apartment">Apartment</Dropdown.Item>
            <Dropdown.Item eventKey="Houses">Independent House</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Verified Label */}
        <div className="border rounded px-3 py-2 d-flex align-items-center gap-2 bg-white text-secondary" style={{ fontSize: '0.875rem', cursor: 'pointer' }}>
          Verified <i className="bi bi-info-circle"></i>
        </div>

        {/* Featured Agents */}
        <div className="border rounded px-3 py-2 d-flex align-items-center gap-2 bg-white text-secondary" style={{ fontSize: '0.875rem', cursor: 'pointer' }}>
          <i className="bi bi-star"></i> Featured Agents
        </div>

        {/* More Filters */}
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" size="sm" className="bg-white text-dark border-light-subtle py-2 px-3">
            More Filters
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Lease Type</Dropdown.Item>
            <Dropdown.Item>Amenities</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        .dropdown-toggle::after {
            margin-left: 0.5em;
            vertical-align: 0.15em;
            color: #999;
        }
        .btn-outline-secondary {
            border-color: #dee2e6 !important;
        }
        .btn-outline-secondary:hover {
            background-color: #f8f9fa !important;
            color: #212529 !important;
        }
      `}} />
    </div>
  );
};

export default RentFilters;