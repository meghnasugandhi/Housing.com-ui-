import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlotCollections = () => {
  const plotData = [
    {
      title: 'Corner Plots',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Boundary Wall Plots',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'East Facing Plots',
      image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Below ₹30Lakhs Plots',
      image: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <Container className="py-5">
      <div className="mb-4">
        <h2 className="fw-bold">Plot <span className="text-secondary">Collections</span></h2>
        <p className="text-muted">Exclusive showcase of categorized plots</p>
      </div>

      <Row className="g-4">
        {plotData.map((plot, index) => (
          <Col key={index} xs={12} sm={6} lg={3}>
            <Card 
              className="border-0 shadow text-white overflow-hidden" 
              style={{ 
                borderRadius: '15px', 
                height: '350px',
                transition: 'transform 0.3s ease' 
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {/* The Image - Set to cover the whole card */}
              <Card.Img 
                src={plot.image} 
                alt={plot.title} 
                className="h-100 w-100"
                style={{ objectFit: 'cover' }}
              />

              {/* The Overlay - Creates a dark gradient so text is visible */}
              <Card.ImgOverlay 
                className="d-flex flex-column justify-content-start"
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%)',
                  padding: '20px'
                }}
              >
                <Card.Title className="fw-bold" style={{ fontSize: '1.25rem' }}>
                  {plot.title}
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlotCollections;