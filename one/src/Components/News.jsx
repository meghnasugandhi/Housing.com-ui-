import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Carousel, Form, InputGroup, ListGroup, Badge, NavDropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const News = () => {
  // Styles for the specific News Navbar
  const navStyles = {
    fontSize: '13px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const carouselItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
      title: "The township tipping point: Why do big builders bet on integrated living?",
      author: "Rohan Khatau",
      date: "December 31, 2025"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=1600&q=80",
      title: "Why homeowners should not keep their houses vacant?",
      author: "Sagar Sharma",
      date: "October 7, 2025"
    }
  ];

  return (
    <div className="news-page-wrapper bg-white">
      {/* --- 1. EXACT IMAGE-MATCH NAVBAR --- */}
      <Navbar bg="white" expand="lg" className="border-bottom sticky-top py-1 shadow-sm">
        <Container fluid className="px-lg-5">
          {/* Logo takes you back to Home "/" */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center me-4">
            <div style={{ backgroundColor: '#ffda00', padding: '2px 6px', borderRadius: '4px', marginRight: '6px' }}>
              <span style={{ color: '#3e2b5d', fontWeight: 'bold', fontSize: '14px' }}>▲</span>
            </div>
            <span style={{ fontWeight: '800', color: '#444', fontSize: '1.4rem', letterSpacing: '-0.5px' }}>
              HOUSING<span style={{ fontWeight: '400', fontSize: '0.9rem' }}>.COM</span>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="news-nav" />
          
          <Navbar.Collapse id="news-nav">
            <Nav className="me-auto" style={navStyles}>
              <Nav.Link as={Link} to="/news" className="text-dark px-3">HOME</Nav.Link>
              
              <NavDropdown title="PROPERTY TRENDS" id="trends-dropdown" className="px-2">
                <NavDropdown.Item href="#">Market Insights</NavDropdown.Item>
                <NavDropdown.Item href="#">New Launches</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Expert Views</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="MUST KNOWS" id="knows-dropdown" className="px-2">
                <NavDropdown.Item href="#">Legal & Taxation</NavDropdown.Item>
                <NavDropdown.Item href="#">Home Buying Guide</NavDropdown.Item>
                <NavDropdown.Item href="#">Home Loans</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="RENT" id="rent-dropdown" className="px-2">
                <NavDropdown.Item href="#">Tenant Guide</NavDropdown.Item>
                <NavDropdown.Item href="#">Rental Agreements</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="LIFESTYLE" id="lifestyle-dropdown" className="px-2">
                <NavDropdown.Item href="#">Home Decor</NavDropdown.Item>
                <NavDropdown.Item href="#">Vastu</NavDropdown.Item>
                <NavDropdown.Item href="#">Gardening</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="PODCASTS" id="podcasts-dropdown" className="px-2">
                <NavDropdown.Item href="#">Real Estate Talk</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="USEFUL TOOLS" id="tools-dropdown" className="px-2">
                <NavDropdown.Item href="#">EMI Calculator</NavDropdown.Item>
                <NavDropdown.Item href="#">Rent Receipt</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#" className="text-dark px-3">WEB STORIES</Nav.Link>
            </Nav>

            {/* Right Side: Search Icon exactly like image */}
            <div className="d-flex align-items-center ms-auto pe-2">
               <FaSearch style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* --- 2. HERO CAROUSEL --- */}
      <Carousel controls={true} indicators={true} interval={5000} className="mb-5">
        {carouselItems.map(item => (
          <Carousel.Item key={item.id}>
            <div style={{ height: '480px', position: 'relative' }}>
              <img
                className="d-block w-100 h-100"
                src={item.image}
                alt={item.title}
                style={{ objectFit: 'cover' }}
              />
              {/* Dark Overlay for text readability */}
              <div style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                background: 'rgba(0,0,0,0.4)' 
              }}></div>
            </div>
            <Carousel.Caption className="text-center" style={{ bottom: '25%' }}>
              <div className="mx-auto" style={{ maxWidth: '850px' }}>
                <p className="mb-2 text-white fw-bold" style={{ fontSize: '0.9rem' }}>
                  By {item.author} | {item.date}
                </p>
                <h1 className="fw-bold mb-4" style={{ fontSize: '2.8rem', lineHeight: '1.2' }}>{item.title}</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* --- 3. NEWS FEED --- */}
      <Container className="pb-5">
        <Row>
          <Col lg={8}>
            <h5 className="fw-bold mb-4">LATEST NEWS</h5>
            {[1, 2, 3].map((post) => (
              <Card key={post} className="mb-4 border-0 border-bottom rounded-0 pb-4">
                <Row className="g-4">
                  <Col md={5}>
                    <div className="position-relative">
                      <img 
                        src={`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80`} 
                        className="img-fluid w-100" 
                        style={{ height: '180px', objectFit: 'cover' }} 
                        alt="news" 
                      />
                      <Badge bg="black" className="position-absolute top-0 start-0 m-2 rounded-0 px-2 py-1" style={{ fontSize: '10px' }}>
                        PROPERTY TRENDS
                      </Badge>
                    </div>
                  </Col>
                  <Col md={7}>
                    <small className="text-muted fw-bold" style={{ fontSize: '11px' }}>BY AUTHOR NAME | JAN 15, 2026</small>
                    <h5 className="mt-2 fw-bold" style={{ lineHeight: '1.4' }}>The township tipping point: Why do big builders bet on integrated living?</h5>
                    <p className="text-muted small mt-2">
                      India's residential market is changing in subtle but important ways. As cities grow crowded and commute times increase...
                    </p>
                    <a href="#" className="text-primary fw-bold text-decoration-none small">READ FULL STORY</a>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>

          {/* SIDEBAR */}
          <Col lg={4} className="ps-lg-5">
             <div className="bg-black text-white p-4 text-center mb-4">
                <p className="small mb-1">For any feedback, write to us at</p>
                <p className="fw-bold mb-0">editor@housing.com</p>
             </div>

             <div className="mb-4">
                <h6 className="fw-bold border-bottom pb-2 mb-3">READ IN OTHER LANGUAGES</h6>
                <div className="d-flex flex-wrap gap-2">
                   {["हिन्दी", "Marathi", "Kannada", "Tamil", "Bengali", "Malayalam", "Telugu"].map(lang => (
                     <span key={lang} className="text-muted small border-end pe-2" style={{ cursor: 'pointer' }}>{lang}</span>
                   ))}
                </div>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default News;