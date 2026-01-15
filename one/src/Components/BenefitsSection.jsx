import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Importing your local images
import housingresearch from "../Images/housinginsights.jpg";
import cityinsights from "../Images/cityinsights.jpg";
import pricetrends from "../Images/pricetrend.jpg";
import apetite from "../Images/appetite.jpg";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Stress free search",
      desc: "Real property photos and Transparent pricing",
      img: housingresearch // Using imported image
    },
    {
      title: "Find your Match",
      desc: "Lots of options to choose from (private, twin & multi-sharing)",
      img: cityinsights // Using imported image
    },
    {
      title: "Bon appetite",
      desc: "Info on meal type and offerings to know what's cooking",
      img: apetite // Using imported image
    },
    {
      title: "Your Life, Your Rules",
      desc: "Advance info on house rules to live like you do",
      img: pricetrends // Using imported image
    }
  ];

  const stats = [
    { value: "30k+", label: "Properties" },
    { value: "40+", label: "Cities" },
    { value: "3.5 Lakh+", label: "Monthly users" }
  ];

  return (
    <section className="pt-5" style={{ backgroundColor: '#fff' }}>
      <Container>
        {/* Section Heading */}
        <h2 className="mb-5 fw-normal text-dark" style={{ fontSize: '2rem' }}>
          Benefits of our <span className="fw-bold">PG/Co-Living</span>
        </h2>
        
        {/* Benefits Icons Grid */}
        <Row className="text-center mb-5 g-4">
          {benefits.map((benefit, idx) => (
            <Col key={idx} lg={3} md={6}>
              <div className="mb-3 d-flex justify-content-center">
                <img 
                  src={benefit.img} 
                  alt={benefit.title} 
                  style={{ height: '140px', width: 'auto', objectFit: 'contain' }} 
                />
              </div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                {benefit.title}
              </h5>
              <p className="text-secondary mx-auto" style={{ fontSize: '0.9rem', maxWidth: '200px' }}>
                {benefit.desc}
              </p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Statistics Banner */}
      <div className="bg-dark text-white py-5 mt-4">
        <Container>
          <Row className="text-center align-items-center">
            {stats.map((stat, idx) => (
              <Col key={idx} md={4} className="mb-4 mb-md-0">
                <h2 className="fw-bold display-5 mb-1">{stat.value}</h2>
                <p className="text-light opacity-75 mb-0" style={{ fontSize: '1.1rem' }}>
                  {stat.label}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default BenefitsSection;