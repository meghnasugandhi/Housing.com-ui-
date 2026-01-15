import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const properties = [
  {
    id: 1,
    title: "DivyaSree Whispers...",
    developer: "by DivyaSree Developers",
    type: "Residential Plots",
    location: "Doddaballapura, North B..",
    price: "₹1.02 Cr - 1.53 Cr",
    image: "https://picsum.photos/id/10/400/300"
  },
  {
    id: 2,
    title: "Bhumis Divi Dream L...",
    developer: "by SRI BHUMI PROPERTIES",
    type: "Residential Plots",
    location: "Bammanahalli, North Ba..",
    price: "₹66.0 L - 1.38 Cr",
    image: "https://picsum.photos/id/11/400/300"
  },
  {
    id: 3,
    title: "Arvind Lakeview",
    developer: "by Arvind properties",
    type: "Residential Plots",
    location: "Byregowdanahalli, Bang...",
    price: "₹55.2 L - 1.84 Cr",
    image: "https://picsum.photos/id/12/400/300"
  },
  {
    id: 4,
    title: "KNS Sampada",
    developer: "by KNS Infrastructure Pvt Ltd",
    type: "Residential Plots",
    location: "Hejjala, Mysore-Bangalor..",
    price: "₹82.79 L - 2.3 Cr",
    image: "https://picsum.photos/id/13/400/300"
  },
  {
    id: 5,
    title: "Amruthadhama Lega...",
    developer: "by SK Samruddhi Developers",
    type: "Residential Plots",
    location: "Rajanukunte, North Ban...",
    price: "₹63.59 L - 79.49 L",
    image: "https://picsum.photos/id/14/400/300"
  },
  {
    id: 6,
    title: "Sunshine D Greens",
    developer: "by SHREE HANUMAN BUILDE...",
    type: "Residential Plots",
    location: "Devanahalli, North Bang..",
    price: "₹19.2 L - 64.0 L",
    image: "https://picsum.photos/id/15/400/300"
  }
];

const PropertyShowcase = () => {
  return (
    <Container className="py-5 position-relative">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Trending <strong>Projects</strong></h2>
        <p className="text-muted">Most sought-after projects in Bengaluru</p>
      </div>

      <Row className="g-3">
        {properties.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <Row className="g-0 h-100">
                <Col xs={5}>
                  <div style={{ 
                    height: '100%', 
                    minHeight: '140px',
                    backgroundColor: '#f0f0f0' // Fallback color if image fails
                  }}>
                    <Card.Img 
                      src={item.image} 
                      className="h-100 w-100" 
                      style={{ 
                        objectFit: 'cover', 
                        borderRadius: '0',
                        display: 'block'
                      }} 
                      // Error handling: if image fails, hide the broken icon
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                </Col>
                <Col xs={7}>
                  <Card.Body className="p-3 d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title className="fs-6 fw-bold mb-0 text-truncate">{item.title}</Card.Title>
                      <Card.Text className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>
                        {item.developer}
                      </Card.Text>
                      <div className="small text-secondary fw-semibold">{item.type}</div>
                      <div className="text-muted" style={{ fontSize: '0.7rem' }}>{item.location}</div>
                    </div>
                    <div className="fw-bold text-dark mt-2" style={{ fontSize: '0.95rem' }}>
                      {item.price}
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      <Button 
        variant="white" 
        className="rounded-circle shadow border position-absolute d-none d-md-flex align-items-center justify-content-center"
        style={{ 
          top: '55%', 
          right: '-15px', 
          width: '40px', 
          height: '40px', 
          zIndex: 10,
          backgroundColor: '#fff'
        }}
      >
        &#8250;
      </Button>
    </Container>
  );
};

export default PropertyShowcase;