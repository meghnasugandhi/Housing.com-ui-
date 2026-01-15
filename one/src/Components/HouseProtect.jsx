import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Navbar, Nav } from 'react-bootstrap';
import houseProtectionImg from '../Images/homeprotection.jpg'; // Path: src/Images/houseprotection.jpg

const HouseProtect = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <style>{`
        /* --- Navigation & Sidebar Styles --- */
        .custom-navbar {
          background-color: #0a3d31;
          padding: 15px 20px;
        }

        .hamburger-icon {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .hamburger-icon span {
          display: block;
          width: 20px;
          height: 2px;
          background-color: white;
        }

        .sidebar-overlay {
          position: fixed;
          top: 0;
          right: ${showSidebar ? '0' : '-300px'};
          width: 300px;
          height: 100vh;
          background-color: #1a1a1a;
          z-index: 1050;
          transition: 0.3s ease-in-out;
          padding: 30px 20px;
          color: white;
          overflow-y: auto;
          box-shadow: -5px 0 15px rgba(0,0,0,0.5);
        }

        .sidebar-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.5);
          display: ${showSidebar ? 'block' : 'none'};
          z-index: 1040;
        }

        .sidebar-link {
          color: #e0e0e0;
          text-decoration: none;
          display: block;
          padding: 12px 0;
          font-weight: 500;
          font-size: 0.95rem;
          border-bottom: 1px solid #2d2d2d;
        }

        .sidebar-link:hover {
          color: white;
        }

        .sidebar-footer {
          margin-top: 30px;
          font-size: 0.85rem;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 15px;
        }

        /* --- Your Original Styles --- */
        .house-protect-hero {
          background: radial-gradient(circle at center, #0a3d31 0%, #051a14 100%);
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .introducing-badge {
          font-size: 0.7rem;
          padding: 5px 10px;
          letter-spacing: 1px;
          background-color: #e91e63 !important;
        }

        .offering-container {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-width: 450px;
        }

        .protection-card {
          border-radius: 20px;
          color: white;
          transition: transform 0.3s ease;
        }

        .cyber-card {
          background: linear-gradient(180deg, #1c2a1c 0%, #0a140a 100%);
        }

        .rent-card {
          background: linear-gradient(180deg, #1a2135 0%, #0a1122 100%);
        }

        .protection-card:hover {
          transform: translateY(-5px);
        }

        .smaller-text {
          font-size: 0.75rem;
          line-height: 1.2;
        }

        .icon-wrapper {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-slider-indicator {
          display: flex;
          justify-content: center;
        }

        .indicator-track {
          width: 100px;
          height: 3px;
          background: #333;
          border-radius: 10px;
          position: relative;
        }

        .indicator-thumb {
          width: 40%;
          height: 100%;
          background: white;
          border-radius: 10px;
          position: absolute;
          left: 0;
        }

        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .btn-link {
            font-weight: bold;
            font-size: 0.7rem;
            text-transform: uppercase;
        }
      `}</style>

      {/* Sidebar Overlay */}
      <div className="sidebar-backdrop" onClick={toggleSidebar}></div>
      <div className="sidebar-overlay">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <span className="small opacity-50">हिंदी में पढ़ें ⚪</span>
          <button className="btn btn-sm text-white" onClick={toggleSidebar}>✕</button>
        </div>
        <nav>
          <a href="#" className="sidebar-link">Home</a>
          <a href="#" className="sidebar-link">Rent/Sell Your Property</a>
          <a href="#" className="sidebar-link">Owner Packages</a>
          <a href="#" className="sidebar-link">Housing Edge</a>
          <a href="#" className="sidebar-link">Buying Guide</a>
          <a href="#" className="sidebar-link">Real Estate News</a>
          <a href="#" className="sidebar-link">Home Loans</a>
          <a href="#" className="sidebar-link">Home Loans EMI Calculator</a>
          <a href="#" className="sidebar-link">Download Apps</a>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="sidebar-link border-0">Give Us Your Feedback</a>
          <p className="mt-3 mb-1 opacity-50">Need any help? Write to us at</p>
          <a href="mailto:support@housing.com" className="text-white text-decoration-none">support@housing.com</a>
          
          <div className="social-icons">
            <span>🐦</span><span>👤</span><span>📸</span><span>📌</span><span>▶️</span>
          </div>
        </div>
      </div>

      {/* Top Navbar */}
      <Navbar className="custom-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://img.housingcdn.com/logo/housing_logo.png" // Placeholder logo URL
              height="30"
              className="d-inline-block align-top"
              alt="Housing Logo"
            />
          </Navbar.Brand>
          <div className="hamburger-icon" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Container>
      </Navbar>

      <div className="house-protect-hero">
        <Container>
          <Row className="align-items-center py-5">
            {/* Left Side Content */}
            <Col lg={6} md={12} className="text-white">
              <div className="mb-4">
                <Badge className="introducing-badge">INTRODUCING</Badge>
                <h1 className="display-4 fw-bold mt-3">Housing Protect</h1>
                <p className="lead text-light opacity-75">
                  Home & Lifestyle protection plans made simple with Housing Protect
                </p>
              </div>

              {/* Offerings Panel */}
              <div className="offering-container p-4 rounded-4 shadow-lg">
                <p className="small fw-bold text-uppercase tracking-wider opacity-50 mb-4">We Offer</p>
                
                <Row className="g-3">
                  {/* Cyber Safe Card */}
                  <Col xs={6}>
                    <Card className="h-100 protection-card cyber-card border-0">
                      <Card.Body className="text-center d-flex flex-column align-items-center">
                        <div className="icon-wrapper mb-3">
                          <span className="fs-3">💳</span>
                        </div>
                        <Card.Title className="fs-6 fw-bold">Cyber Safe</Card.Title>
                        <Card.Text className="smaller-text opacity-75">
                          Protect yourself from financial fraud
                        </Card.Text>
                        <button className="btn btn-link text-white text-decoration-none smaller-text mt-auto">
                          View Details →
                        </button>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Rent Protect Card */}
                  <Col xs={6}>
                    <Card className="h-100 protection-card rent-card border-0">
                      <Card.Body className="text-center d-flex flex-column align-items-center">
                        <div className="icon-wrapper mb-3">
                          <span className="fs-3 text-purple">₹</span>
                        </div>
                        <Card.Title className="fs-6 fw-bold">Rent Protect</Card.Title>
                        <Card.Text className="smaller-text opacity-75">
                          Protect your rent, Protect your health
                        </Card.Text>
                        <button className="btn btn-link text-white text-decoration-none smaller-text mt-auto">
                          View Details →
                        </button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                
                <div className="custom-slider-indicator mt-4">
                  <div className="indicator-track">
                    <div className="indicator-thumb"></div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Side Image */}
            <Col lg={6} md={12} className="text-center mt-5 mt-lg-0">
              <div className="image-glow-wrapper">
                <img 
                  src={houseProtectionImg} 
                  alt="House Protection" 
                  className="img-fluid floating-animation"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HouseProtect;