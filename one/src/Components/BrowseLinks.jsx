import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BrowseLinks = () => {
  const searchLinks = [
    "Studio Apartments in Bangalore",
    "Duplex in Bangalore",
    "Resale House in Bangalore",
    "Townships in Bangalore",
    "Penthouse in Bangalore",
    "House for sale without brokerage in Bangalore",
    "Rowhouse in Bangalore",
    "4 BHK Flats for sale in Bangalore"
  ];

  return (
    <Container className="py-5 bg-light border-top border-bottom" fluid>
      <Container>
        <Row>
          <Col md={12}>
            {/* Main Heading */}
            <h2 className="fw-bold mb-4" style={{ color: '#333', fontSize: '1.8rem' }}>
              Browse top links to search your home
            </h2>
            
            {/* Sub Heading */}
            <h5 className="fw-bold mb-3" style={{ color: '#000' }}>
              People Also Search For
            </h5>

            {/* Links List */}
            <div className="d-flex flex-column gap-2">
              {searchLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={`#${link.replace(/\s+/g, '-').toLowerCase()}`}
                  className="text-decoration-none py-1"
                  style={{ 
                    color: '#444', 
                    fontSize: '0.95rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#6f42c1'}
                  onMouseOut={(e) => e.target.style.color = '#444'}
                >
                  {link}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BrowseLinks;