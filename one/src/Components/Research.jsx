import React from 'react';
import { Container, Row, Col, Nav, Navbar, ListGroup, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Make sure to install react-icons

const Research = () => {
  const articles = [
    {
      category: 'Research',
      title: 'How do environmental and social factors impact real estate market?',
      author: 'HARINI BALASUBRAMANIAN',
      date: 'JULY 4, 2025',
      excerpt: 'The Indian real estate sector is characterised as a dynamic market with evolving demand-supply trends and growth patterns, with new emerging formats such as co-living...',
      image: 'https://via.placeholder.com/300x180?text=Environment+Global'
    },
    {
      category: 'Property Trends',
      title: 'Understanding real estate market cycles',
      author: 'SAGAR SHARMA',
      date: 'NOVEMBER 6, 2025',
      excerpt: 'Real estate is not just about buying, selling, or owning property—it’s a living, breathing ecosystem influenced by economic shifts, investor behavior, and human psychology...',
      image: 'https://via.placeholder.com/300x180?text=Market+Cycles'
    },
    {
      category: 'Research',
      title: 'Mortgage rates not home buying deterrent: Track2Realty survey',
      author: 'RAVI SINHA',
      date: 'JULY 17, 2024',
      excerpt: 'Affordable housing is witnessing degrowth at a time when luxury housing is on a roll. A perception has gained ground that higher interest rates in the range of 8.5-9%...',
      image: 'https://via.placeholder.com/300x180?text=Mortgage+Rates'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Updated Navbar to match the image precisely */}
      <Navbar style={{ backgroundColor: '#7023d1', padding: '12px 0' }} variant="dark" expand="lg" className="sticky-top shadow-sm">
        <Container>
          {/* Logo with Yellow Icon linking to Home */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <div style={{ 
              backgroundColor: '#ffc107', 
              color: '#7023d1', 
              fontWeight: 'bold', 
              padding: '0px 6px', 
              borderRadius: '4px',
              marginRight: '8px',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center'
            }}>
              ^
            </div>
            <span style={{ fontWeight: '800', letterSpacing: '0.5px', fontSize: '22px' }}>
              HOUSING<small style={{ fontSize: '12px', fontWeight: '400' }}>.COM</small>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="research-nav" />
          
          <Navbar.Collapse id="research-nav">
            <Nav className="ms-auto align-items-center" style={{ fontSize: '13px', fontWeight: '600' }}>
              <Nav.Link as={Link} to="/" className="text-white px-3">HOME</Nav.Link>
              
              <NavDropdown title="PROPERTY TRENDS" id="trends-drop" className="px-2">
                <NavDropdown.Item href="#action1">Research</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="MUST KNOWS" id="must-drop" className="px-2">
                <NavDropdown.Item href="#action2">Buyer Guide</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="RENT" id="rent-drop" className="px-2">
                <NavDropdown.Item href="#action3">Rental Trends</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="LIFESTYLE" id="life-drop" className="px-2">
                <NavDropdown.Item href="#action4">Home Decor</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="PODCASTS" id="pod-drop" className="px-2">
                <NavDropdown.Item href="#action5">Audio Stories</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="USEFUL TOOLS" id="tools-drop" className="px-2">
                <NavDropdown.Item href="#action6">Calculators</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#web-stories" className="text-white px-3">WEB STORIES</Nav.Link>
              
              <Nav.Link href="#search" className="text-white ps-3">
                <FaSearch size={16} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {/* Breadcrumbs */}
        <p className="text-muted small mb-1" style={{ letterSpacing: '0.5px' }}>CATEGORY: RESEARCH</p>
        <div className="text-muted small mb-4">
            <Link to="/" className="text-decoration-none text-muted">Home</Link> » Property Trends » <b>Research</b>
        </div>

        <Row>
          {/* Main Content */}
          <Col md={8}>
            {articles.map((article, index) => (
              <Row key={index} className="mb-5 align-items-start border-bottom pb-4">
                <Col md={5} className="position-relative">
                  <div className="position-absolute bg-dark text-white px-2 py-1 small" style={{ zIndex: 1, top: 0, fontSize: '10px' }}>
                    {article.category.toUpperCase()}
                  </div>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="img-fluid rounded" 
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Col>
                <Col md={7}>
                  <div className="text-muted mb-1" style={{ fontSize: '11px' }}>
                    BY <span className="text-dark fw-bold">{article.author}</span> | {article.date}
                  </div>
                  <h4 className="fw-bold mb-2" style={{ lineHeight: '1.3', fontSize: '20px' }}>{article.title}</h4>
                  <p className="text-secondary small mb-2">{article.excerpt}</p>
                  <a href="#" className="text-primary small fw-bold text-decoration-none">READ FULL STORY</a>
                </Col>
              </Row>
            ))}
          </Col>

          {/* Sidebar */}
          <Col md={4}>
            <div className="bg-black text-white p-3 mb-4 rounded" style={{ fontSize: '13px' }}>
              <p className="mb-0 opacity-75">For any feedback, write to us at</p>
              <p className="fw-bold mb-0">editor@housing.com</p>
            </div>

            <ListGroup variant="flush" className="bg-transparent mb-4">
              {[
                "Rent House in Chennai", "House for sale in Bangalore", 
                "Rent House in Bangalore", "Rent Flats in Bangalore", 
                "Rent Flats in Pune", "Rent House in Coimbatore",
                "Rent House in Hyderabad", "House for sale in Hyderabad",
                "Flats in Hyderabad", "Rent Flats in Hyderabad", "Rent Flats in Mumbai"
              ].map((item, idx) => (
                <ListGroup.Item key={idx} className="bg-transparent border-0 ps-0 py-1 small text-primary" style={{ fontSize: '13px' }}>
                  {idx + 1}. {item}
                </ListGroup.Item>
              ))}
            </ListGroup>

            <div className="border-top pt-3">
              <p className="fw-bold small mb-2" style={{ fontSize: '12px' }}>READ IN OTHER LANGUAGES</p>
              <ul className="list-unstyled small ps-3">
                <li className="text-muted" style={{ fontSize: '13px' }}>• Telugu</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Research;