import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Handpicked = () => {
  const collections = [
    {
      title: "For Guys",
      img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      title: "For Girls",
      img: "https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      title: "Food Available",
      // Updated stable link for the food image
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      title: "Private Room",
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400&h=500&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        {/* Section Heading */}
        <h2 className="mb-4 fw-normal text-dark" style={{ fontSize: '1.8rem' }}>
          Our handpicked <span className="fw-bold">Collections</span>
        </h2>

        <Row className="g-4">
          {collections.map((item, idx) => (
            <Col key={idx} xs={6} md={3}>
              <Card 
                className="border-0 shadow-sm overflow-hidden h-100 text-white" 
                style={{ borderRadius: '12px', cursor: 'pointer' }}
              >
                <div style={{ position: 'relative', height: '240px' }}>
                  <Card.Img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ 
                      height: '100%', 
                      width: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }} 
                  />
                  {/* Dark gradient overlay for text readability as seen in the UI */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 60%)'
                    }}
                  />
                  
                  <Card.ImgOverlay className="d-flex align-items-end justify-content-center pb-3">
                    <Card.Title 
                      className="fw-bold m-0 text-center" 
                      style={{ fontSize: '1rem', letterSpacing: '0.5px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                    >
                      {item.title}
                    </Card.Title>
                  </Card.ImgOverlay>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Handpicked;