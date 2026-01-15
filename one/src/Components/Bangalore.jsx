import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed
import { Container, Nav, Navbar, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { properties } from '../data/properties';

const Bangalore = () => {
  // Logic: Filter properties by type and listing
  const buyProperties = properties.filter(p => p.listingType === "sale");
  const rentProperties = properties.filter(p => p.listingType === "rent");
  const commercialProperties = properties.filter(p => p.propertyType === "commercial");

  // Smooth Scroll Helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Offset for sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. CUSTOM CSS STYLES (Mimicking Housing.com) */}
      <style>{`
        body { background-color: #f5f7fb; font-family: 'Segoe UI', Roboto, sans-serif; }
        
        .housing-purple { color: #5e23dc; }
        .bg-housing-purple { background-color: #5e23dc; }
        
        /* Navbar & Nav Links */
        .nav-link-custom {
          color: #6c757d !important;
          font-weight: 600;
          padding: 1rem 1.2rem !important;
          cursor: pointer;
          white-space: nowrap;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .nav-link-custom:hover { color: #5e23dc !important; }
        .active-tab { border-bottom: 3px solid #5e23dc !important; color: #000 !important; }

        /* Horizontal Scroll Logic */
        .scroll-wrapper {
          display: flex;
          overflow-x: auto;
          gap: 1.5rem;
          padding-bottom: 1.5rem;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE/Edge */
        }
        .scroll-wrapper::-webkit-scrollbar { display: none; } /* Chrome/Safari */

        /* Card Styling */
        .housing-card {
          min-width: 280px;
          max-width: 280px;
          border: none !important;
          border-radius: 10px !important;
          background: #fff;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .housing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
        }

        .img-container { height: 170px; position: relative; border-radius: 10px 10px 0 0; overflow: hidden; }
        .verified-label {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #28a745;
          color: white;
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 3px;
          font-weight: bold;
        }

        /* Tool Cards */
        .tool-card {
          background: #fff;
          border: 1px solid #eef0f5;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .tool-card:hover { background: #f0f4ff; }
      `}</style>

      {/* 2. STICKY NAVBAR */}
      <Navbar bg="white" sticky="top" className="flex-column p-0 border-bottom shadow-sm">
        <Container className="py-2 d-flex justify-content-between align-items-center">
            {/* LOGO WITH HOME LINK */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="fw-bolder fs-4 housing-purple" style={{ letterSpacing: '-1.5px', cursor: 'pointer' }}>
                HOUSING<span className="text-secondary small fw-normal">.COM</span>
              </div>
            </Link>

            <div className="d-flex gap-2">
                <Button variant="outline-dark" size="sm" className="rounded-1 d-none d-md-block px-3">Download App</Button>
                <Button variant="danger" size="sm" className="rounded-1 fw-bold px-3">
                  List Property <Badge bg="light" text="danger" className="ms-1">FREE</Badge>
                </Button>
            </div>
        </Container>
        
        <Container>
          <Nav className="w-100 border-top overflow-auto flex-nowrap scroll-hide">
            <Nav.Link onClick={() => scrollToSection('buy')} className="nav-link-custom active-tab">Buy</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('rent')} className="nav-link-custom">Rent</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('comm')} className="nav-link-custom">Commercial</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('tools')} className="nav-link-custom">Calculators</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="py-4">
        
        {/* BUY SECTION */}
        <section id="buy" className="mb-5">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <div>
              <h4 className="fw-bold mb-1">Latest Properties to Buy in Bangalore</h4>
              <p className="text-muted small mb-0">Based on your recent activity</p>
            </div>
            <Button variant="link" className="housing-purple fw-bold text-decoration-none">See All</Button>
          </div>
          <div className="scroll-wrapper">
            {buyProperties.map(item => <PropertyCard key={item.id} data={item} />)}
          </div>
        </section>

        {/* RENT SECTION */}
        <section id="rent" className="mb-5">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <h4 className="fw-bold mb-1">Properties for Rent in Bangalore</h4>
            <Button variant="link" className="housing-purple fw-bold text-decoration-none">See All</Button>
          </div>
          <div className="scroll-wrapper">
            {rentProperties.map(item => <PropertyCard key={item.id} data={item} />)}
          </div>
        </section>

        {/* COMMERCIAL SECTION */}
        <section id="comm" className="mb-5">
          <h4 className="fw-bold mb-3">Commercial Property</h4>
          <div className="scroll-wrapper">
            {commercialProperties.map(item => <PropertyCard key={item.id} data={item} />)}
          </div>
        </section>

        {/* CALCULATORS / TOOLS */}
        <section id="tools" className="py-5 border-top">
          <h4 className="fw-bold mb-4">Home Buying Tools</h4>
          <Row className="g-3">
            {['EMI Calculator', 'Price Calculator', 'Home Loan Eligibility', 'Tax Savings'].map(tool => (
              <Col key={tool} md={3} xs={6}>
                <div className="tool-card shadow-sm small fw-bold text-dark">
                  {tool}
                </div>
              </Col>
            ))}
          </Row>
        </section>

      </Container>

      {/* FOOTER */}
      <footer className="bg-white border-top py-4 mt-5">
        <Container className="text-center">
          <p className="text-muted mb-0 small">© 2026 Housing.com - Real Estate Services in Bangalore</p>
        </Container>
      </footer>
    </>
  );
};

// Sub-component: Property Card
const PropertyCard = ({ data }) => {
  const isRent = data.listingType === "rent";
  const price = isRent ? data.rent.display : data.price.display;

  return (
    <Card className="housing-card shadow-sm">
      <div className="img-container">
        <Card.Img 
          variant="top" 
          src={data.images[0]} 
          style={{ height: '100%', objectFit: 'cover' }} 
        />
        {data.verified && <div className="verified-label">VERIFIED</div>}
      </div>
      <Card.Body className="p-3">
        <div className="fw-bold text-dark text-truncate mb-1" title={data.title}>
          {data.title}
        </div>
        <div className="text-muted" style={{ fontSize: '11px' }}>by {data.listedBy}</div>
        
        <div className="text-secondary mt-2 mb-3" style={{ fontSize: '12px' }}>
          {data.builtUpArea || data.plotArea} sq.ft • {data.locality}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="h6 fw-bold text-dark mb-0">{price}</div>
          <Button variant="primary" size="sm" className="bg-housing-purple border-0 px-3 fw-bold rounded-1">
            Contact
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Bangalore;