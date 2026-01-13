import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, InputGroup, Form, Dropdown } from "react-bootstrap";

const SearchBar = ({ mode }) => {
  const navigate = useNavigate();
  const { city } = useParams();
  const [inputValue, setInputValue] = useState("");

  // Sync input value if needed or keep it local for typing
  const handleSearch = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      // Navigates to the new city/locality selected by user
      navigate(`/${mode}/${inputValue.toLowerCase()}`);
      setInputValue(""); 
    }
  };

  const clearCity = () => {
    navigate(`/${mode}/all`); 
  };

  // Capitalize city for display (e.g., "mumbai" -> "Mumbai")
  const formatCityName = (name) => {
    if (!name || name === "all") return "India";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const displayCity = city && city !== "all" ? city : "";

  return (
    <div style={{ backgroundColor: '#5e23dc', padding: '10px 0' }}>
      <Container className="d-flex align-items-center gap-3">
        {/* Brand Logo */}
        <div 
          className="fw-bold d-flex align-items-center" 
          style={{ color: 'white', fontSize: '1.5rem', cursor: 'pointer', letterSpacing: '1px' }}
          onClick={() => navigate('/')}
        >
          <span style={{ backgroundColor: '#ffc107', color: '#5e23dc', padding: '2px 5px', borderRadius: '4px', marginRight: '5px' }}>
            <i className="bi bi-house-fill"></i>
          </span>
          HOUSING<span style={{ fontSize: '0.9rem', opacity: 0.8 }}>.COM</span>
        </div>

        {/* DYNAMIC TEXT: Changes based on URL params and Mode */}
        <div className="text-white d-none d-md-block text-nowrap mx-2">
          {mode === 'rent' ? 'Rent' : 'Buy'} In {formatCityName(city)} 
          <i className="bi bi-chevron-down ms-1"></i>
        </div>

        {/* Search Input Group */}
        <InputGroup style={{ maxWidth: '600px', borderRadius: '4px', overflow: 'hidden' }}>
          <InputGroup.Text className="bg-white border-0">
            <i className="bi bi-search text-primary"></i>
          </InputGroup.Text>
          
          {/* Dynamic City Badge */}
          {displayCity && (
            <div className="bg-white d-flex align-items-center ps-2">
               <span 
                className="badge rounded-pill bg-light text-primary border p-2 d-flex align-items-center"
                style={{ cursor: 'pointer', fontSize: '0.85rem' }}
                onClick={clearCity}
               >
                 {displayCity} <i className="bi bi-x ms-2"></i>
               </span>
            </div>
          )}

          <Form.Control 
            placeholder="Search Locality / Landmark (e.g. Chembur)" 
            className="border-0 shadow-none" 
            style={{ height: '45px' }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleSearch}
          />

          <Dropdown align="end">
            <Dropdown.Toggle 
              variant="white" 
              className="border-0 text-primary fw-bold bg-white" 
              style={{ height: '45px', borderLeft: '1px solid #eee' }}
            >
              + Add
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate(`/${mode}/mumbai`)}>Mumbai</Dropdown.Item>
              <Dropdown.Item onClick={() => navigate(`/${mode}/pune`)}>Pune</Dropdown.Item>
              <Dropdown.Item onClick={() => navigate(`/${mode}/chembur`)}>Chembur</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup>

        {/* Right Side Icons */}
        <div className="ms-auto d-flex align-items-center text-white gap-4 d-none d-lg-flex">
          <small style={{ cursor: 'pointer' }}><i className="bi bi-phone"></i> Download App</small>
          <div className="bg-white text-dark px-3 py-1 rounded" style={{ fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}>
            List Property <span className="badge bg-danger ms-1">Free</span>
          </div>
          <small style={{ cursor: 'pointer' }}><i className="bi bi-heart"></i> Saved</small>
          <div className="d-flex align-items-center border-start ps-3" style={{ cursor: 'pointer' }}>
             <i className="bi bi-list fs-4 me-2"></i>
             <i className="bi bi-person-circle fs-4"></i>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;