import React, { useState } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

const DeveloperProducts = () => {
  // Example data for the small product thumbnails
  const productThumbs = [
    { id: 1, title: 'Site Take Over', img: 'https://via.placeholder.com/100x60' },
    { id: 2, title: 'City Slot', img: 'https://via.placeholder.com/100x60' },
    { id: 3, title: 'Top Project', img: 'https://via.placeholder.com/100x60' },
    { id: 4, title: 'Featured Dev...', img: 'https://via.placeholder.com/100x60' },
    { id: 5, title: 'Featured Proj...', img: 'https://via.placeholder.com/100x60' },
    { id: 6, title: 'Trending Proj...', img: 'https://via.placeholder.com/100x60' },
    { id: 7, title: 'Billboard', img: 'https://via.placeholder.com/100x60' },
  ];

  const [activeThumb, setActiveThumb] = useState(1);

  return (
    <Container className="py-4 position-relative">
      {/* Header Section */}
      <div className="text-start mb-4">
        <h1 className="fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Ad Products</h1>
        <p className="text-muted fs-5">Best-in-industry products to give maximum project and brand visibility</p>
      </div>

      {/* Thumbnail Navigation Bar */}
      <div className="d-flex overflow-auto mb-5 pb-2 hide-scrollbar border-bottom">
        {productThumbs.map((thumb) => (
          <div 
            key={thumb.id}
            onClick={() => setActiveThumb(thumb.id)}
            className="text-center me-4 cursor-pointer"
            style={{ 
              minWidth: '100px', 
              cursor: 'pointer',
              opacity: activeThumb === thumb.id ? 1 : 0.4,
              borderTop: activeThumb === thumb.id ? '3px solid #6f42c1' : '3px solid transparent',
              transition: '0.3s'
            }}
          >
            <img src={thumb.img} alt={thumb.title} className="rounded mb-2 mt-2" width="80" height="50" style={{ objectFit: 'cover' }} />
            <p style={{ fontSize: '12px', fontWeight: activeThumb === thumb.id ? '700' : '500' }}>{thumb.title}</p>
          </div>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="position-relative">
        <Card className="border-0 p-2 mb-5">
          <Row className="align-items-start">
            <Col lg={5} className="py-4">
              <h2 className="fw-bold mb-4">Site Take Over</h2>
              <ul className="list-unstyled mb-5">
                <li className="mb-3 d-flex align-items-start text-muted">
                  <span className="me-2" style={{ color: '#aaa' }}>●</span>
                  Most premium slot with 100% visibility to all users visiting the home page
                </li>
                <li className="mb-3 d-flex align-items-start text-muted">
                  <span className="me-2" style={{ color: '#aaa' }}>●</span>
                  USPs of the projects can be showcased on the homepage itself
                </li>
              </ul>
              <Button 
                size="lg" 
                className="rounded-1 fw-bold px-5"
                style={{ backgroundColor: '#5e35b1', border: 'none', padding: '12px 0' }}
              >
                I'm interested
              </Button>
            </Col>

            <Col lg={7} className="position-relative">
              <div className="shadow-lg rounded-4 overflow-hidden border">
                <img 
                  src="https://via.placeholder.com/800x450?text=Product+Preview+Image" 
                  className="img-fluid w-100" 
                  alt="Preview" 
                />
              </div>
              
              {/* Floating Next Arrow */}
              <div 
                className="position-absolute shadow-sm bg-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  right: '-30px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  cursor: 'pointer',
                  border: '1px solid #eee'
                }}
              >
                <span style={{ fontSize: '24px', color: '#666' }}>→</span>
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .cursor-pointer:hover {
          opacity: 1 !important;
        }
      `}</style>
    </Container>
  );
};

export default DeveloperProducts;