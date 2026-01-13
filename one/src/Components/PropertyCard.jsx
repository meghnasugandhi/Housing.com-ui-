import React, { useState } from "react";
import { Card, Row, Col, Button, Badge, Carousel } from "react-bootstrap";

const PropertyCard = ({ property }) => {
  const isRent = property.listingType === "rent";
  const [index, setIndex] = useState(0);

  // Handle manual carousel navigation to update the custom counter
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Card className="mb-4 border-0 shadow-sm overflow-hidden" style={{ borderRadius: '12px' }}>
      <Row className="g-0">
        {/* Left Section: Image Carousel / Single Image */}
        <Col md={4} className="position-relative bg-dark" style={{ minHeight: '220px' }}>
          {property.images && property.images.length > 1 ? (
            <Carousel 
              activeIndex={index} 
              onSelect={handleSelect} 
              interval={null} // Set to null to prevent auto-sliding like the image
              indicators={false} // Hiding indicators to match the clean look
              className="h-100"
            >
              {property.images.map((img, idx) => (
                <Carousel.Item key={idx} className="h-100">
                  <img
                    src={img}
                    alt={`${property.title} - ${idx + 1}`}
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <img 
              src={property.images[0]} 
              alt={property.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}

          {/* Top Brand Label overlay */}
          <div className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-dark bg-opacity-75 text-white rounded small d-flex align-items-center" style={{ zIndex: 2 }}>
            <div className="bg-primary rounded-circle me-1" style={{ width: '10px', height: '10px' }}></div>
            Property Saathi <span className="ms-1 text-secondary" style={{ fontSize: '10px' }}>+3 more</span>
          </div>

          {/* Dynamic Image Counter overlay */}
          <div className="position-absolute bottom-0 end-0 m-2 px-2 py-1 bg-dark bg-opacity-50 text-white rounded-pill xsmall" style={{ zIndex: 2, fontSize: '12px' }}>
            {index + 1}/{property.images.length}
          </div>
        </Col>

        {/* Right Section: Details (remains the same style) */}
        <Col md={8} className="p-3 d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex justify-content-between align-items-start mb-1">
              <div>
                <Badge bg="light" text="dark" className="border fw-normal mb-1" style={{ fontSize: '10px' }}>Zero Brokerage</Badge>
                <h5 className="fw-bold mb-0 text-dark" style={{ fontSize: '1.1rem' }}>
                  {property.title} {property.verified && <Badge bg="success" className="ms-2 fw-normal" style={{ fontSize: '10px' }}>RERA</Badge>}
                </h5>
                <p className="text-muted small mb-3">{property.bhk} BHK Flats in {property.locality}</p>
              </div>
            </div>

            {/* Price Grid */}
            <Row className="mb-3 g-2 text-start border-top pt-2">
              <Col xs={4} className="border-end">
                <small className="text-muted d-block" style={{ fontSize: '11px' }}>1 BHK Flat</small>
                <span className="fw-bold text-dark">{isRent ? property.rent.display : "₹39.09 L - 55.52 L"}</span>
              </Col>
              <Col xs={4} className="border-end">
                <small className="text-muted d-block" style={{ fontSize: '11px' }}>2 BHK Flat</small>
                <span className="fw-bold text-dark">{isRent ? "N/A" : "₹52.41 L - 67.97 L"}</span>
              </Col>
              <Col xs={4}>
                <small className="text-muted d-block" style={{ fontSize: '11px' }}>3 BHK Flat</small>
                <span className="fw-bold text-dark">{isRent ? "N/A" : "₹1.02 Cr - 1.15 Cr"}</span>
              </Col>
            </Row>

            <div className="d-flex gap-3 small text-muted mb-2" style={{ fontSize: '12px' }}>
              <span>Avg. Price: <b>₹12.45 K/sq.ft</b></span>
              <span>Possession: <b>Dec, 2029</b></span>
            </div>
          </div>

          {/* Footer Section */}
          <div className="d-flex justify-content-between align-items-center border-top pt-2">
            <div>
              <small className="text-muted d-block" style={{ fontSize: '11px' }}>Updated</small>
              <small className="fw-bold text-dark" style={{ fontSize: '12px' }}>{property.updatedAt}</small>
            </div>
            <div className="d-flex gap-2">
              <Button variant="light" className="border rounded-circle p-2 d-flex align-items-center">
                <i className="bi bi-heart text-muted"></i>
              </Button>
              <Button className="px-5 border-0 shadow-sm" style={{ backgroundColor: '#5e23dc', fontWeight: '500' }}>
                Contact
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default PropertyCard;