import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { properties } from '../data/properties'; // Adjust path as needed

const CommercialRentAndBuy = () => {
  // Filter data based on listing type
  const saleProperties = properties.filter(p => p.listingType === "sale").slice(0, 3);
  const rentProperties = properties.filter(p => p.listingType === "rent").slice(0, 3);

  const PropertyCard = ({ item }) => (
    <Col md={4} className="mb-4">
      <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: '8px', overflow: 'hidden' }}>
        <Row className="g-0 h-100">
          <Col xs={5}>
            <Card.Img 
              src={item.images[0]} 
              alt={item.title}
              style={{ objectFit: 'cover', height: '100%', minHeight: '150px' }}
            />
          </Col>
          <Col xs={7}>
            <Card.Body className="p-3 d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="mb-0 fw-bold" style={{ fontSize: '1rem' }}>
                  {item.propertyType.replace('_', ' ').toUpperCase()}
                </Card.Title>
                <Card.Text className="text-muted mb-2" style={{ fontSize: '0.8rem' }}>
                  by {item.listedBy}
                </Card.Text>
                
                <div className="text-muted" style={{ fontSize: '0.85rem' }}>
                  <p className="mb-0">
                    {item.builtUpArea || item.plotArea} sq.ft 
                    {item.yield && ` | ${item.yield}% p.a.`}
                  </p>
                  <p className="mb-1 text-truncate">
                    {item.locality}, {item.city}
                  </p>
                </div>
              </div>

              <h5 className="fw-bold mt-2 mb-0">
                {item.listingType === 'sale' ? item.price.display : item.rent.display}
              </h5>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );

  return (
    <Container className="py-5" style={{ backgroundColor: '#fdfdfd' }}>
      {/* SECTION: SALE */}
      <div className="mb-5">
        <h3 className="mb-4 fw-normal">
          Recently Added Properties <span className="fw-bold">for Sale</span>
        </h3>
        <Row>
          {saleProperties.map(item => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </Row>
      </div>

      {/* SECTION: RENT */}
      <div>
        <h3 className="mb-4 fw-normal">
          Recently Added Properties <span className="fw-bold">for Rent</span>
        </h3>
        <Row>
          {rentProperties.map(item => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default CommercialRentAndBuy;