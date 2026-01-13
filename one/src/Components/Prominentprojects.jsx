import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { properties } from "../data/properties";  // Ensure this path is correct

const ProminentProjectsSection = () => {
  // 1. Filter data: Getting first 4 Sale properties for the Carousel
  const saleProperties = properties.filter(p => p.listingType === "sale").slice(0, 4);

  // 2. Group into pairs (2 cards per slide to match your UI)
  const propertyPairs = [];
  for (let i = 0; i < saleProperties.length; i += 2) {
    propertyPairs.push(saleProperties.slice(i, i + 2));
  }

  return (
    <>
      {/* Inline Scoped CSS to keep it in one file */}
      <style>{`
        .custom-section-container {
            padding-top: 3rem;
            padding-bottom: 3rem;
            position: relative;
        }
        .section-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #333;
        }
        .section-subtitle {
            font-size: 0.9rem;
            color: #6c757d;
            margin-bottom: 1.5rem;
        }
        .project-card {
            border: 1px solid #eee;
            border-radius: 4px;
            overflow: hidden;
            transition: box-shadow 0.3s ease;
            height: 100%;
        }
        .project-card:hover {
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .card-img-container {
            height: 200px;
            overflow: hidden;
            position: relative;
        }
        .card-img-top {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .card-price {
            font-weight: 700;
            font-size: 1.1rem;
            color: #000;
        }
        .price-label {
            display: block;
            font-size: 0.7rem;
            color: #999;
            text-align: right;
            text-transform: uppercase;
        }
        .project-name {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 2px;
        }
        .developer-name {
            font-size: 0.8rem;
            color: #777;
        }
        .property-details {
            font-size: 0.85rem;
            color: #444;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #f0f0f0;
        }
        .location-text {
            color: #888;
            font-size: 0.8rem;
        }

        /* Carousel Navigation Styling */
        .property-carousel .carousel-control-prev,
        .property-carousel .carousel-control-next {
            width: 45px;
            height: 45px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            opacity: 1;
            z-index: 5;
        }
        .property-carousel .carousel-control-prev { left: -22px; }
        .property-carousel .carousel-control-next { right: -22px; }

        .property-carousel .carousel-control-prev-icon,
        .property-carousel .carousel-control-next-icon {
            filter: invert(1) grayscale(100) brightness(0);
            width: 20px;
            height: 20px;
        }
        
        @media (max-width: 768px) {
            .property-carousel .carousel-control-prev,
            .property-carousel .carousel-control-next {
                display: none;
            }
        }
      `}</style>

      <Container className="custom-section-container">
        <div className="mb-4">
          <h2 className="section-title">Prominent projects to explore</h2>
          <p className="section-subtitle">Best projects to look out for</p>
        </div>

        <Carousel 
          className="property-carousel" 
          indicators={false} 
          interval={null}
        >
          {propertyPairs.map((pair, index) => (
            <Carousel.Item key={index}>
              <Row>
                {pair.map((item) => (
                  <Col md={6} key={item.id} className="px-2">
                    <Card className="project-card">
                      <div className="card-img-container">
                        <Card.Img variant="top" src={item.images[0]} />
                      </div>
                      <Card.Body className="p-3">
                        <Row className="align-items-start">
                          <Col xs={7}>
                            <div className="project-name text-truncate">
                                {item.project || item.title}
                            </div>
                            <div className="developer-name">
                                by {item.listedBy}
                            </div>
                          </Col>
                          <Col xs={5} className="text-end">
                            <div className="card-price">{item.price.display}</div>
                            <span className="price-label">Price</span>
                          </Col>
                        </Row>

                        <div className="property-details">
                          <strong>
                            {item.bhk ? `${item.bhk} BHK ` : ""} 
                            {item.propertyType.replace('_', ' ').toUpperCase()}
                          </strong>
                          <div className="location-text">
                            {item.locality}, {item.city}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default ProminentProjectsSection;