import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CheckCircleFill, HouseFill, PeopleFill } from 'react-bootstrap-icons';
// Importing your specific image
import housingresearch from "../Images/housinginsights.jpg"; 

const HomeAtFirstSight = () => {
  const features = [
    {
      icon: <CheckCircleFill color="#ffc107" size={20} />,
      text: "Verified & Onboarded by our experts",
      underline: true
    },
    {
      icon: <HouseFill color="#6f42c1" size={20} />,
      text: "Every property detail on just a click",
      underline: false
    },
    {
      icon: <PeopleFill color="#e83e8c" size={20} />,
      text: "Genuine & vast userbase",
      underline: false
    }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '60px 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Content */}
          <Col lg={5} md={6} className="ps-lg-5">
            <h2 className="display-6 mb-5" style={{ fontWeight: '400' }}>
              Home at <span className="fw-bold" style={{ color: '#212529' }}>First Sight</span>
            </h2>

            <ul className="list-unstyled">
              {features.map((item, index) => (
                <li key={index} className="d-flex align-items-center mb-4">
                  <span className="me-3 d-flex align-items-center">
                    {item.icon}
                  </span>
                  <span 
                    style={{ 
                      fontSize: '1.1rem', 
                      color: '#495057',
                      fontWeight: '500',
                      borderBottom: item.underline ? '2px solid #fff3cd' : 'none',
                      paddingBottom: '2px'
                    }}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </Col>

          {/* Right Side: Image */}
          <Col lg={7} md={6} className="text-center mt-4 mt-md-0">
            <div className="position-relative">
              <img 
                src={housingresearch} 
                alt="Housing Insights" 
                className="img-fluid"
                style={{ 
                  maxHeight: '450px', 
                  width: 'auto', 
                  objectFit: 'contain' 
                }} 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeAtFirstSight;