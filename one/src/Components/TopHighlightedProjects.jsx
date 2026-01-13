import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { properties } from "../data/properties"; 

const TopHighlightedProjects = () => {
  // 1. Filter for 'sale' properties for the carousel
  const saleProperties = properties.filter(p => p.listingType === "sale").slice(0, 4);

  // 2. Group items into pairs for the desktop view
  const propertyPairs = [];
  for (let i = 0; i < saleProperties.length; i += 2) {
    propertyPairs.push(saleProperties.slice(i, i + 2));
  }

  return (
    <>
      <style>{`
        .highlight-section {
          padding: 50px 0;
          background-color: #fff;
        }
        .highlight-title {
          font-weight: 700;
          font-size: 1.6rem;
          color: #333;
          margin-bottom: 5px;
        }
        .highlight-subtitle {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 30px;
        }

        .highlight-card {
          position: relative;
          height: 280px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }
        .highlight-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .highlight-card:hover img {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: #fff;
        }

        .project-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 2px;
        }
        .developer-info {
          font-size: 0.8rem;
          opacity: 0.9;
          margin-bottom: 15px;
        }

        .footer-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 10px;
        }
        .property-spec {
          font-size: 0.8rem;
          line-height: 1.4;
        }
        .property-loc {
          font-size: 0.75rem;
          opacity: 0.8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        .price-tag {
          font-size: 1.2rem;
          font-weight: 700;
          white-space: nowrap;
        }

        /* --- Updated Carousel Navigation Buttons --- */
        .highlight-carousel .carousel-control-next,
        .highlight-carousel .carousel-control-prev {
          width: 45px;
          height: 45px;
          background-color: #fff;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 1;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          z-index: 5;
        }

        /* Position buttons on the edges */
        .highlight-carousel .carousel-control-prev {
          left: -22px; 
        }
        .highlight-carousel .carousel-control-next {
          right: -22px;
        }

        /* Style the actual arrows (black/dark) */
        .highlight-carousel .carousel-control-next-icon,
        .highlight-carousel .carousel-control-prev-icon {
          filter: invert(1) grayscale(100) brightness(0);
          width: 20px;
        }

        @media (max-width: 768px) {
          .highlight-card { height: 220px; }
          .highlight-carousel .carousel-control-next,
          .highlight-carousel .carousel-control-prev { display: none; }
        }
      `}</style>

      <Container className="highlight-section">
        <h2 className="highlight-title">Top highlighted projects</h2>
        <p className="highlight-subtitle">Noteworthy projects to watch</p>

        <Carousel 
          className="highlight-carousel" 
          indicators={false} 
          interval={null}
        >
          {propertyPairs.map((pair, idx) => (
            <Carousel.Item key={idx}>
              <Row>
                {pair.map((item) => (
                  <Col md={6} key={item.id} className="mb-3">
                    <div className="highlight-card">
                      <img src={item.images[0]} alt={item.project} />
                      <div className="card-overlay">
                        <div className="project-title">{item.project || item.title}</div>
                        <div className="developer-info">by {item.listedBy}</div>
                        
                        <div className="footer-info">
                          <div className="property-spec">
                            <strong>{item.bhk ? `${item.bhk} BHK ` : ""}{item.propertyType.replace('_', ' ')}</strong>
                            <div className="property-loc">{item.locality}, {item.city}</div>
                          </div>
                          <div className="price-tag">
                            {item.price.display}
                          </div>
                        </div>
                      </div>
                    </div>
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

export default TopHighlightedProjects;