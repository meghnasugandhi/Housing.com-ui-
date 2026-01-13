import React from "react";
import { Container, Button, Dropdown, Form } from "react-bootstrap";

const BuyFilters = ({ filters, setFilters }) => {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ type: "", bhk: "", priceRange: "", verified: false });
  };

  const filterBtnStyle = {
    borderRadius: '8px',
    borderColor: '#e0e0e0',
    color: '#444',
    fontSize: '0.85rem',
    backgroundColor: '#fff',
    padding: '6px 16px'
  };

  return (
    <div className="bg-white border-bottom shadow-sm">
      <Container className="d-flex gap-2 py-2 align-items-center">
        <Dropdown>
          <Dropdown.Toggle style={filterBtnStyle} variant="outline-light">
            {filters.type || "Apartment, Ind..."}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => updateFilter("type", "flat")}>Flat/Apartment</Dropdown.Item>
            <Dropdown.Item onClick={() => updateFilter("type", "villa")}>Villa</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle style={filterBtnStyle} variant="outline-light">
            {filters.bhk ? `${filters.bhk} BHK` : "BHK Type"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {[1, 2, 3, 4].map(n => <Dropdown.Item key={n} onClick={() => updateFilter("bhk", n)}>{n} BHK</Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle style={filterBtnStyle} variant="outline-light">
            {filters.priceRange || "₹0 - ₹20Cr"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="p-3">
            <Form.Select onChange={(e) => updateFilter("priceRange", e.target.value)}>
               <option value="">Max Budget</option>
               <option value="1Cr">Under 1 Cr</option>
               <option value="2Cr">Under 2 Cr</option>
            </Form.Select>
          </Dropdown.Menu>
        </Dropdown>

        <Button style={filterBtnStyle} variant="outline-light">Sale Type</Button>
        <Button style={filterBtnStyle} variant="outline-light">Construction St...</Button>
        
        <Button 
          style={{...filterBtnStyle, backgroundColor: filters.verified ? '#f0f0ff' : '#fff'}} 
          onClick={() => updateFilter("verified", !filters.verified)}
        >
          Verified <i className="bi bi-info-circle ms-1"></i>
        </Button>

        <Button variant="link" className="text-dark fw-bold ms-auto text-decoration-none" onClick={resetFilters}>
          Reset filters
        </Button>
      </Container>
    </div>
  );
};

export default BuyFilters;