import React from 'react';
import { Container, Card, Badge, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const expertsData = [
  {
    id: 1,
    name: "kkrealtorss",
    experience: "0.5 years",
    properties: 37,
    localities: ["JP Nagar", "Vijayanagar"],
    logo: "https://via.placeholder.com/60/1a472a/ffffff?text=KKR"
  },
  {
    id: 2,
    name: "Devaraj",
    experience: "3 years",
    properties: 23,
    localities: ["SMV Layout"],
    logo: "https://via.placeholder.com/60/003366/ffffff?text=D"
  },
  {
    id: 3,
    name: "REJA REALTY",
    experience: "4 years",
    properties: 34,
    localities: ["Yelahanka", "JP Nagar"],
    initials: "RR",
    bgColor: "#ffcc00"
  },
  {
    id: 4,
    name: "Kamal Singh",
    experience: "7 years",
    properties: 24,
    localities: ["Whitefield", "Nagondanahalli"],
    logo: "https://via.placeholder.com/60/8b0000/ffffff?text=KS"
  },
  {
    id: 5,
    name: "Akshaya Real Estate",
    experience: "5 years",
    properties: 12,
    localities: ["Akshaya Nagar"],
    logo: "https://via.placeholder.com/60/ffcc00/333333?text=AK"
  }
];

const HousingExperts = () => {
  return (
    <>
      <style>{`
        .experts-section {
          background-color: #ffffff;
          padding: 60px 0;
          position: relative;
        }
        .expert-card {
          background-color: #f8f9fa !important;
          border: 1px solid #eee !important;
          border-radius: 12px !important;
          transition: transform 0.2s ease;
        }
        .expert-card:hover {
          transform: translateY(-5px);
        }
        .expert-logo {
          width: 56px;
          height: 56px;
          border-radius: 8px;
          object-fit: cover;
        }
        .initials-logo {
          width: 56px;
          height: 56px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
        }
        .stats-divider {
          border-right: 1px solid #ddd;
        }
        .locality-badge {
          background-color: #fff !important;
          color: #444 !important;
          border: 1px solid #ddd !important;
          font-weight: 400 !important;
          font-size: 0.75rem !important;
          padding: 6px 12px !important;
        }
        .expert-badge {
          font-size: 0.65rem !important;
          padding: 4px 8px !important;
          background-color: #fff3cd !important;
          color: #856404 !important;
          border: 1px solid #ffeeba;
          text-transform: uppercase;
        }

        /* UPDATED SWIPER ARROW STYLING */
        .swiper-button-next, .swiper-button-prev {
          background-color: white !important;
          width: 45px !important;
          height: 45px !important;
          border-radius: 50% !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
          z-index: 10;
          top: 55% !important; /* Centers arrows vertically relative to cards */
        }

        .swiper-button-next {
          right: -10px !important;
        }

        .swiper-button-prev {
          left: -10px !important;
        }

        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 18px !important;
          color: #333 !important;
          font-weight: bold;
        }

        /* Adjust container to ensure arrows don't get cut off */
        .swiper {
          padding: 10px 20px 40px 20px !important;
        }
      `}</style>

      <Container className="experts-section">
        <div className="mb-5">
          <h2 className="fw-normal mb-1" style={{ fontSize: '2rem' }}>
            Housing <span className="fw-bold">Experts</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            Sellers with complete knowledge about locality and verified listings
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={true} /* Enables both arrows */
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-4"
        >
          {expertsData.map((expert) => (
            <SwiperSlide key={expert.id}>
              <Card className="expert-card h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    {expert.logo ? (
                      <img src={expert.logo} alt={expert.name} className="expert-logo me-3" />
                    ) : (
                      <div className="initials-logo me-3" style={{ backgroundColor: expert.bgColor }}>
                        {expert.initials}
                      </div>
                    )}
                    <div>
                      <h6 className="mb-0 fw-bold text-dark">{expert.name}</h6>
                      <Badge className="expert-badge mt-1">
                        Housing Expert
                      </Badge>
                    </div>
                  </div>

                  <Row className="text-center mb-4 border-top pt-3 mt-2">
                    <Col xs={6} className="stats-divider">
                      <div className="fw-bold mb-0" style={{ fontSize: '0.9rem' }}>{expert.experience}</div>
                      <div className="text-muted" style={{ fontSize: '0.7rem' }}>Experience</div>
                    </Col>
                    <Col xs={6}>
                      <div className="fw-bold mb-0" style={{ fontSize: '0.9rem' }}>{expert.properties}</div>
                      <div className="text-muted" style={{ fontSize: '0.7rem' }}>Properties</div>
                    </Col>
                  </Row>

                  <div className="d-flex flex-wrap gap-2">
                    {expert.localities.map((loc, idx) => (
                      <Badge key={idx} pill className="locality-badge">
                        {loc}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default HousingExperts;