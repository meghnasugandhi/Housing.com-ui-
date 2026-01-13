import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { properties } from "../data/properties"; 

const FeaturedDevelopers = () => {
  const saleProperties = properties.filter(p => p.listingType === "sale");
  
  const developerChunks = [];
  for (let i = 0; i < saleProperties.slice(0, 6).length; i += 3) {
    developerChunks.push(saleProperties.slice(i, i + 3));
  }

  return (
    <>
      <style>{`
        .featured-section {
          padding: 60px 0;
          background-color: #fff;
        }
        .featured-header {
          margin-bottom: 35px;
        }
        .featured-title {
          font-weight: 700;
          font-size: 1.6rem;
          color: #333;
          margin-bottom: 4px;
        }
        .featured-subtitle {
          font-size: 0.95rem;
          color: #666;
        }

        /* --- INCREASED CARD HEIGHT --- */
        .dev-card {
          border: 1.5px solid #eee;
          border-top: 4px solid #6c5ce7;
          border-radius: 8px;
          min-height: 520px; /* Increased from default */
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.3s ease;
          background: #fff;
        }
        .dev-card:hover {
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .dev-logo-container {
          width: 60px;
          height: 60px;
          border: 1px solid #f0f0f0;
          padding: 5px;
          margin-right: 15px;
          flex-shrink: 0;
        }
        .dev-name {
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 10px;
          color: #222;
        }
        .stat-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #333;
        }
        .stat-subtext {
          font-size: 0.7rem;
          color: #999;
        }

        .dev-desc {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.6;
          margin: 20px 0;
          flex-grow: 1; /* Pushes the bottom section down */
        }

        .dev-links {
          border-bottom: 2px solid #6c5ce7;
          display: inline-block;
          color: #6c5ce7;
          font-weight: 700;
          font-size: 0.8rem;
          text-decoration: none;
          margin-bottom: 20px;
        }

        /* --- INCREASED PREVIEW HEIGHT --- */
        .project-preview {
          position: relative;
          height: 200px; /* Increased from 160px */
          border-radius: 6px;
          overflow: hidden;
          margin-top: auto; /* Ensures it stays at the bottom */
        }
        .project-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .preview-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 15px;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          color: #fff;
        }
        .preview-title {
          font-size: 0.9rem;
          font-weight: 700;
        }
        .preview-loc {
          font-size: 0.75rem;
          opacity: 0.8;
        }
        .preview-price {
          font-weight: 700;
          font-size: 1rem;
          margin-top: 5px;
        }

        .dev-carousel .carousel-control-next,
        .dev-carousel .carousel-control-prev {
          width: 45px;
          height: 45px;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .dev-carousel .carousel-control-next { right: -22px; }
        .dev-carousel .carousel-control-prev { left: -22px; }
        .dev-carousel .carousel-control-next-icon,
        .dev-carousel .carousel-control-prev-icon {
          filter: invert(1) grayscale(100) brightness(0);
          width: 20px;
        }

        @media (max-width: 992px) {
          .dev-carousel .carousel-control-next, .dev-carousel .carousel-control-prev { display: none; }
          .dev-card { min-height: auto; }
        }
      `}</style>

      <Container className="featured-section">
        <div className="featured-header">
          <h2 className="featured-title">Featured Developers</h2>
          <p className="featured-subtitle">Prominent real-estate builders</p>
        </div>

        <Carousel className="dev-carousel" indicators={false} interval={null}>
          {developerChunks.map((chunk, idx) => (
            <Carousel.Item key={idx}>
              <Row>
                {chunk.map((item) => (
                  <Col lg={4} md={6} key={item.id} className="mb-4">
                    <Card className="dev-card p-3">
                      <div className="d-flex align-items-start">
                        <div className="dev-logo-container d-flex align-items-center justify-content-center">
                          <div className="fw-bold" style={{fontSize: '10px', color: '#6c5ce7'}}>LOGO</div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="dev-name text-truncate">{item.listedBy}</div>
                          <Row className="g-0">
                            <Col xs={6}>
                              <div className="stat-label">1980</div>
                              <div className="stat-subtext">Year estd.</div>
                            </Col>
                            <Col xs={6}>
                              <div className="stat-label">524</div>
                              <div className="stat-subtext">Projects</div>
                            </Col>
                          </Row>
                        </div>
                      </div>

                      <p className="dev-desc">
                        {item.listedBy} is among the foremost real estate developers. Established in 1980, the developer takes pride in offering you enchanting homes.
                      </p>

                      <div>
                        <a href="#" className="dev-links">{item.project || "View Projects"}...</a>
                      </div>

                      <div className="project-preview">
                        <img src={item.images[0]} alt={item.project} />
                        <div className="preview-overlay">
                          <div className="preview-title text-truncate">{item.project || item.title}</div>
                          <div className="preview-loc text-truncate">{item.locality}, {item.city}</div>
                          <div className="preview-price">{item.price?.display || "Price on Request"}</div>
                        </div>
                      </div>
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

export default FeaturedDevelopers;