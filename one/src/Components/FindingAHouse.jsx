import React from 'react';
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Added Link for navigation
import 'bootstrap-icons/font/bootstrap-icons.css';

const FindingAHouse = () => {
  return (
    <div style={{ backgroundColor: '#f4f5f7', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* 1. Purple Header (Matching Screenshot) */}
      <Navbar style={{ backgroundColor: '#5e23dc' }} variant="dark" className="py-2 sticky-top">
        <Container fluid className="px-4">
          {/* logo takes back to home page */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center me-4">
            <div className="bg-warning p-1 me-2 rounded d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
              <i className="bi bi-house-door-fill text-white"></i>
            </div>
            <span className="text-white" style={{ fontWeight: '800', fontSize: '1.25rem', letterSpacing: '-0.5px' }}>
              HOUSING<span style={{fontWeight: '400', fontSize: '0.8rem'}}>.COM</span>
            </span>
          </Navbar.Brand>
          
          <Nav className="me-auto d-none d-lg-flex">
            <Nav.Link href="#" className="text-white fw-semibold opacity-90">Buy In Select City <i className="bi bi-chevron-down small"></i></Nav.Link>
          </Nav>

          <Form className="d-flex flex-grow-1 mx-4 position-relative" style={{ maxWidth: '600px' }}>
            <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
            <FormControl
              type="search"
              className="ps-5 border-0 shadow-none"
              placeholder="Search..."
              style={{ borderRadius: '4px', height: '40px' }}
            />
          </Form>

          <Nav className="align-items-center">
            <Nav.Link className="text-white d-flex align-items-center me-2 opacity-90">
                <i className="bi bi-phone me-1"></i> Download App
            </Nav.Link>
            <Button variant="light" className="mx-2 px-3 fw-bold btn-sm d-flex align-items-center" style={{ color: '#5e23dc', borderRadius: '4px' }}>
                List Property <Badge bg="danger" className="ms-2">Free</Badge>
            </Button>
            <Nav.Link className="text-white mx-2 opacity-90"><i className="bi bi-heart me-1"></i> Saved</Nav.Link>
            
            {/* User Profile Pill */}
            <div className="ms-2 border border-light rounded-pill p-1 d-flex align-items-center bg-white shadow-sm" style={{ cursor: 'pointer' }}>
                <i className="bi bi-list mx-2 fs-5 text-dark"></i>
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '28px', height: '28px'}}>
                    <i className="bi bi-person-fill text-white"></i>
                </div>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid className="mt-5 px-lg-5">
        <Row>
          {/* 2. Left Illustration Section (Sticky) */}
          <Col lg={4} className="text-center mb-5">
            <div className="position-sticky" style={{ top: '120px' }}>
              <div className="mb-4">
                <div className="position-relative d-inline-block">
                    <div className="rounded-circle border border-warning border-4 p-5 shadow-sm bg-white" style={{width: '240px', height: '240px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{fontSize: '100px', color: '#e91e63'}}>
                             <i className="bi bi-house-heart-fill"></i>
                        </div>
                    </div>
                </div>
                
                <h2 className="fw-bold mt-4" style={{ color: '#1a1a1a' }}>1. Finding a house</h2>
                <p className="text-muted px-lg-4 mt-3 lead fs-6">
                  How to research for your dream home and location, 
                  and choose a property type that suits your requirements
                </p>
                
                {/* Pagination Dots */}
                <div className="d-flex justify-content-center gap-2 mt-5">
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#5e23dc', borderRadius: '50%' }}></div>
                  <div className="bg-secondary opacity-25 rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                  <div className="bg-secondary opacity-25 rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                  <div className="bg-secondary opacity-25 rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                </div>
              </div>
            </div>
          </Col>

          {/* 3. Right Information Section */}
          <Col lg={8}>
            
            {/* Property Types Card */}
            <Card className="border-0 shadow-sm mb-4 rounded-4 overflow-hidden">
              <div className="p-4 p-lg-5">
                <h3 className="fw-bold mb-4">Property Types</h3>
                
                <Nav variant="tabs" defaultActiveKey="under" className="mb-4 border-bottom">
                  <Nav.Item>
                    <Nav.Link eventKey="under" className="px-0 me-4 border-0 border-bottom border-primary border-3 text-primary fw-bold bg-transparent">
                        Under Construction Properties
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ready" className="px-0 me-4 border-0 text-muted bg-transparent">Ready-To-Move Properties</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="resale" className="px-0 border-0 text-muted bg-transparent">Resale Properties</Nav.Link>
                  </Nav.Item>
                </Nav>

                <div className="lh-lg">
                  <div className="mb-2"><strong>Property price</strong> — <span className="text-muted">Discount over market rate</span></div>
                  <div className="mb-2"><strong>Fund security</strong> — <span className="text-muted">Risky</span></div>
                  <div className="mb-2"><strong>Possession delivery</strong> — <span className="text-muted">Delays possible</span></div>
                  <div className="mb-2"><strong>Construction quality check</strong> — <span className="text-muted">Verifiable at possession time</span></div>
                  <div className="mb-2"><strong>Social infrastructure</strong> — <span className="text-muted">Not present</span></div>
                  <div className="mb-2"><strong>Physical infrastructure</strong> — <span className="text-muted">May not be present</span></div>
                  <div className="mb-2"><strong>Return on investment</strong> — <span className="text-muted">High</span></div>
                  <div className="mb-2"><strong>Loan facility</strong> — <span className="text-muted">Depends on project</span></div>
                  <div className="mb-2"><strong>Overall risk</strong> — <span className="text-muted">High</span></div>
                  <div className="mb-2"><strong>Suitable for</strong> — <span className="text-muted">Investor</span></div>
                </div>

                {/* Lightbulb Tip */}
                <div className="mt-5 p-4 rounded-3 d-flex align-items-start shadow-sm border" style={{ backgroundColor: '#fffdf0', borderColor: '#fef0c7' }}>
                  <i className="bi bi-lightbulb-fill text-warning fs-3 me-3"></i>
                  <p className="small mb-0 text-dark opacity-75 fw-medium">
                    Under Construction properties appreciate faster, but ready-to-move flats can earn 1.5% to 2% (of the property value) per annum if you lease it.
                  </p>
                </div>
              </div>
            </Card>

            {/* Areas Explained Card */}
            <Card className="border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
              <div className="p-4 p-lg-5">
                <h3 className="fw-bold mb-5">Areas Explained</h3>
                
                <div className="text-center position-relative py-5 bg-light rounded-4 mb-4 border border-dashed">
                  <div className="mb-4">
                    <i className="bi bi-bounding-box fs-1 text-primary opacity-50"></i>
                    <div className="text-muted mt-2 fw-bold small">CARPET AREA PLAN</div>
                  </div>
                  
                  <h5 className="fw-bold mt-3">Carpet area</h5>
                  <p className="text-muted small mx-auto" style={{maxWidth: '400px'}}>
                    Includes wall to wall area, balcony and closets, not building's common spaces
                  </p>

                  <Button variant="white" className="position-absolute shadow-sm rounded-circle p-0 border d-flex align-items-center justify-content-center" 
                    style={{ top: '50%', right: '20px', width: '45px', height: '45px', transform: 'translateY(-50%)' }}>
                    <i className="bi bi-arrow-right fs-4 text-muted"></i>
                  </Button>
                </div>

                <div className="p-4 rounded-3 d-flex align-items-start border shadow-sm" style={{ backgroundColor: '#fffdf0', borderColor: '#fef0c7' }}>
                  <i className="bi bi-lightbulb-fill text-warning fs-3 me-3"></i>
                  <p className="small mb-0 text-dark opacity-75 fw-medium">
                    Built up area is approximately 110% of carpet area. Built up area is used to calculate taxes. 
                    Loading Factor - The Loading Factor is a percentage added to the carpet area to come up with the Super Built up area: 
                    'Carpet area x (1 + Loading factor) = Super built-up area'.
                  </p>
                </div>
              </div>
            </Card>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FindingAHouse;