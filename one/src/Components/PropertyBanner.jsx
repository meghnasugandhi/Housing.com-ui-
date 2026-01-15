import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import housingresearch from "../Images/housinginsights.jpg";

const PropertyBanner = () => {
  const cardStyle = {
    position: 'relative',
    borderRadius: '15px',
    border: 'none',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    // Using backgroundImage and backgroundRepeat for better reliability
    backgroundImage: `linear-gradient(90deg, #ffffff 35%, rgba(255, 255, 255, 0) 75%), url(${housingresearch})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
    backgroundRepeat: 'no-repeat',
    // Adjusted height to be "a little" less (160px instead of 200px)
    minHeight: '160px', 
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <Container className="my-4">
      <h3 className="fw-bold mb-3" style={{ color: '#333' }}>
        Have a property to sell?
      </h3>
      
      <Card style={cardStyle}>
        {/* Adjusted padding from p-5 down to py-3 px-4 */}
        <Card.Body className="py-3 px-4">
          <Row className="align-items-center">
            <Col md={8}>
              <h4 className="fw-semibold mb-2" style={{ color: '#444' }}>
                List your property & connect with clients faster!
              </h4>
              <Button 
                variant="outline-primary" 
                className="mt-2 px-4 py-2 fw-bold"
                style={{ 
                  borderRadius: '10px', 
                  borderColor: '#6f42c1', 
                  color: '#6f42c1',
                  borderWidth: '2px',
                  backgroundColor: 'rgba(255,255,255,0.8)' // Slight white bg for visibility
                }}
              >
                Sell your property
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PropertyBanner;