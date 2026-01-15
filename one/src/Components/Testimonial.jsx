import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mudhit Khannawalia",
    role: "Co Living resident since last year",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    text: "I am one of those who likes a lot of variety in my meals. Being away from my hometown, I was really worried about this while searching for places to stay. Thankfully, on Housing.com I found out in advance the kind of meals being served in PGs and Co-living properties. Now I am staying in a place that offers a lot to my taste."
  }
];

const TestimonialComponent = () => {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  return (
    <>
      <style>
        {`
          .main-wrapper {
            background-color: #fff;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          }
          
          /* Adjusted Image Size: Constrained to 4 columns instead of 5 */
          .img-container {
            background-color: #000;
            height: 550px; /* Fixed height for consistency */
            display: flex;
            justify-content: center;
            overflow: hidden;
          }
          
          .img-container img {
            height: 100%;
            width: auto;
            object-fit: cover;
          }

          .content-side {
            padding-left: 60px !important;
            padding-right: 100px !important;
          }

          .member-avatar-circle {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            object-fit: cover;
            background-color: #000;
          }

          .testimonial-text {
            font-size: 1.05rem;
            line-height: 1.5;
            color: #212529;
            max-width: 580px;
          }

          .nav-btn {
            border: 1px solid #eee !important;
            border-radius: 0 !important;
            padding: 15px 22px !important;
            background: white !important;
            color: #ccc !important;
            margin-right: 10px;
          }

          /* Brand Footer Styling - Match exact image colors */
          .brand-footer {
            border-top: 1px solid #f0f0f0;
            padding: 30px 0;
            margin-top: 40px;
          }

          .brand-item {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 0.9rem;
            text-transform: uppercase;
            color: #000;
          }

          .featured-in-text {
            font-weight: bold;
            font-size: 0.85rem;
            color: #000;
          }

          .brand-red { color: #e31e24; font-size: 1.2rem; line-height: 1; }
          .brand-blue { color: #0077b5; }
          .brand-et { color: #333; font-family: serif; font-weight: normal; }
          .brand-bt { color: #0099cc; font-style: italic; }
          .brand-inc42 { color: #000; font-weight: 800; }
        `}
      </style>

      <div className="main-wrapper">
        <Container fluid className="p-0">
          <Row className="g-0 align-items-center">
            {/* Reduced Column Width for Image (md={4} instead of 5) */}
            <Col md={4} className="img-container">
              <img src={current.image} alt={current.name} />
            </Col>

            {/* Content Side */}
            <Col md={8} className="content-side">
              <h2 className="fw-bold mb-1">What our members say</h2>
              <p className="text-muted mb-5">These are genuine feedbacks from our member community</p>

              <div className="d-flex align-items-center mb-4">
                <img src={current.image} className="member-avatar-circle me-3" alt="avatar" />
                <div>
                  <h6 className="mb-0 fw-bold">{current.name}</h6>
                  <p className="text-muted mb-0" style={{fontSize: '0.8rem'}}><em>{current.role}</em></p>
                </div>
              </div>

              <p className="testimonial-text mb-5">
                {current.text}
              </p>

              <div className="d-flex">
                <Button className="nav-btn shadow-sm">
                   <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </Button>
                <Button className="nav-btn shadow-sm">
                   <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Bottom Brands - Replicated from your Image */}
        <div className="brand-footer">
          <Container>
            <Row className="align-items-center text-center">
              <Col md={2} className="featured-in-text text-start">Featured in</Col>
              <Col md={10}>
                <Row className="align-items-center">
                  <Col className="brand-item brand-red">YOUR<br/>STORY</Col>
                  <Col className="brand-item brand-blue">BUSINESS<br/>INSIDER</Col>
                  <Col className="brand-item brand-et">The Economic Times</Col>
                  <Col className="brand-item brand-bt">Business Today</Col>
                  <Col className="brand-item brand-inc42">Inc<span style={{color:'red'}}>42</span></Col>
                  <Col className="brand-item">
                    <img src="https://logowik.com/content/uploads/images/dailyhunt-new-20202651.jpg" alt="dh" height="30" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default TestimonialComponent;