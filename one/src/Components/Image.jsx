import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import place from '../Images/place.jpg';

const Image = () => {
  return (
    <>
      <style>{`
        .greatness-banner {
          background-color: #701edb;
          background-image: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%);
          color: white;
          /* INCREASED PADDING TO INCREASE OVERALL HEIGHT */
          padding: 80px 40px; 
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          min-height: 400px; /* SETS A MINIMUM HEIGHT */
          display: flex;
          align-items: center;
        }

        .text-section h1 {
          font-size: 3.5rem; /* LARGER FONT */
          font-weight: 800;
          line-height: 1.1;
          max-width: 500px;
        }

        .divider {
          border-left: 2px solid rgba(255,255,255,0.3);
          height: 150px; /* INCREASED DIVIDER HEIGHT */
          margin: 0 40px;
        }

        .ranked-box {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .ranked-text .label {
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 1.1rem; /* LARGER LABEL */
          margin-bottom: 5px;
        }

        .ranked-text .sub-label {
          font-size: 0.9rem; /* LARGER SUB-TEXT */
          opacity: 0.9;
          line-height: 1.2;
        }

        .number-5 {
          font-size: 7rem; /* LARGER NUMBER */
          font-weight: 700;
          line-height: 1;
          position: relative;
        }

        .number-5 span {
          font-size: 1.5rem;
          position: absolute;
          top: 15px;
          right: -35px;
        }

        .badge-img {
          width: 100%;
          /* INCREASED MAX-WIDTH TO MAKE IMAGE BIGGER */
          max-width: 250px; 
          height: auto;
          display: block;
        }
      `}</style>

      <Container className="my-5">
        <div className="greatness-banner">
          <Row className="align-items-center w-100">
            {/* Left Section: Main Title */}
            <Col md={5} className="text-section">
              <h1>Come home to Greatness</h1>
            </Col>

            {/* Middle Section: Ranking */}
            <Col md={4} className="d-flex align-items-center justify-content-center">
              <div className="divider d-none d-md-block"></div>
              <div className="ranked-box">
                <div className="ranked-text">
                  <div className="label text-end">RANKED</div>
                  <div className="sub-label text-end">
                    Best Companies to Work For<br />
                    2024 by Great Place to Work®
                  </div>
                </div>
                <div className="number-5">
                  5<span>th</span>
                </div>
              </div>
            </Col>

            {/* Right Section: Badge Image */}
            <Col md={3} className="text-end">
              <img 
                src={place} 
                alt="Great Place to Work Badges" 
                className="badge-img ms-auto"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Image;