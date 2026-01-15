import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Carousel, Badge } from 'react-bootstrap';
import { FaCheck, FaTimes, FaWhatsapp, FaVideo, FaHeadset, FaUserTie, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HousingPremium = () => {
  const [duration, setDuration] = useState(60); // 60 or 100
  const [selectedPlanName, setSelectedPlanName] = useState('Connect+');

  // Pricing Data based on duration
  const pricingData = {
    60: [
      { name: 'Connect', val: '15', p1: true, p2: true, p3: false, p4: false, price: '999', old: '1998' },
      { name: 'Connect+', val: '35', p1: true, p2: true, p3: false, p4: false, price: '1299', old: '2598', popular: true },
      { name: 'Relax', val: '75', p1: true, p2: true, p3: true, p4: false, price: '1999', old: '3998' },
      { name: 'Relax+', val: '75', p1: true, p2: true, p3: true, p4: true, price: '2999', old: '5998' },
    ],
    100: [
      { name: 'Connect', val: '25', p1: true, p2: true, p3: false, p4: false, price: '1499', old: '2998' },
      { name: 'Connect+', val: '50', p1: true, p2: true, p3: false, p4: false, price: '1899', old: '3798', popular: true },
      { name: 'Relax', val: '100', p1: true, p2: true, p3: true, p4: false, price: '2799', old: '5598' },
      { name: 'Relax+', val: '100', p1: true, p2: true, p3: true, p4: true, price: '3999', old: '7998' },
    ]
  };

  const activePlans = pricingData[duration];
  const currentSelected = activePlans.find(p => p.name === selectedPlanName);

  return (
    <div style={{ backgroundColor: '#110510', color: '#fff', minHeight: '100vh', padding: '60px 0', fontFamily: 'sans-serif' }}>
      
      {/* 1. PRICING SECTION */}
      <Container className="mb-5">
        <div style={{ backgroundColor: '#1d0a1b', borderRadius: '12px', border: '1px solid #3d1b35', padding: '30px' }}>
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div>
              <h3 className="mb-0">Hey there!</h3>
              <p className="text-secondary">get access to {duration === 60 ? '1501' : '2400+'} Zero Brokerage properties in Mumbai</p>
            </div>
            
            {/* DURATION TOGGLE */}
            <div className="d-flex align-items-center bg-dark rounded-pill p-1" style={{ border: '1px solid #3d1b35' }}>
              <Button 
                onClick={() => setDuration(60)}
                className={`rounded-pill px-4 border-0 transition-all ${duration === 60 ? 'bg-danger-custom' : 'bg-transparent text-secondary'}`}
              >
                60 days
              </Button>
              <Button 
                onClick={() => setDuration(100)}
                className={`rounded-pill px-4 border-0 transition-all ${duration === 100 ? 'bg-danger-custom' : 'bg-transparent text-secondary'}`}
              >
                100 days
              </Button>
            </div>
          </div>

          <Row className="g-0 border-top border-secondary pt-4 overflow-auto flex-nowrap pricing-table-row">
            {/* Feature Labels */}
            <Col md={4} xs={6} className="pe-4 flex-shrink-0">
               <div className="feature-row">🏠 Zero Brokerage owners contacts</div>
               <div className="feature-row"><FaHeadset className="me-2 text-danger" /> Priority Customer support</div>
               <div className="feature-row"><FaWhatsapp className="me-2 text-danger" /> Instant alerts on new properties</div>
               <div className="feature-row"><FaUserTie className="me-2 text-danger" /> Dedicated relationship manager</div>
               <div className="feature-row border-0"><FaVideo className="me-2 text-danger" /> 5 Property video tours</div>
            </Col>

            {/* Plan Columns */}
            {activePlans.map((plan, idx) => {
              const isSelected = selectedPlanName === plan.name;
              return (
                <Col 
                  key={idx} 
                  onClick={() => setSelectedPlanName(plan.name)}
                  className={`plan-column ${isSelected ? 'selected' : ''}`}
                >
                  {plan.popular && <Badge bg="danger" className="pop-badge">Most Popular</Badge>}
                  
                  <div className="cell fw-bold">{plan.name}</div>
                  <div className="cell">{plan.val}</div>
                  <div className="cell">{plan.p1 ? <FaCheck className="text-success" /> : <FaTimes className="text-muted" />}</div>
                  <div className="cell">{plan.p2 ? <FaCheck className="text-success" /> : <FaTimes className="text-muted" />}</div>
                  <div className="cell">{plan.p3 ? <FaCheck className="text-success" /> : <FaTimes className="text-muted" />}</div>
                  <div className="cell border-0">{plan.p4 ? <FaCheck className="text-success" /> : <FaTimes className="text-muted" />}</div>
                  
                  <div className="price-box">
                      <h4 className="mb-0">₹{plan.price}</h4>
                      <small className="text-decoration-line-through text-muted">₹{plan.old}</small>
                      <div className="text-muted" style={{fontSize: '10px'}}>+ 18% GST</div>
                  </div>
                </Col>
              );
            })}
          </Row>

          <div className="text-center mt-4">
            <Button variant="danger" size="lg" className="buy-btn">
              Buy {selectedPlanName} — ₹{currentSelected?.price}
            </Button>
          </div>
        </div>
      </Container>

      {/* 2. TESTIMONIALS & 3. FEATURED (Same as before) */}
      <Container className="mb-5">
        <h4 className="mb-4">Testimonials</h4>
        <Carousel 
            indicators={false} 
            nextIcon={<div className="nav-circle"><FaChevronRight /></div>}
            prevIcon={<div className="nav-circle"><FaChevronLeft /></div>}
        >
          <Carousel.Item>
            <Row>
              <Col md={6} className="mb-3">
                <Card className="testimonial-card">
                  <div className="text-warning mb-2">★★★★★</div>
                  <p className="small text-secondary">August 11, 2025</p>
                  <Card.Text>Ramadevi has been constantly posting houses for rent. I am very happy with her efforts.</Card.Text>
                  <div className="d-flex align-items-center mt-3">
                    <div className="user-avatar"></div>
                    <div><div className="fw-bold">Sivakumar</div><small className="text-muted">From Chennai</small></div>
                  </div>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="testimonial-card">
                  <div className="text-warning mb-2">★★★★★</div>
                  <p className="small text-secondary">August 12, 2025</p>
                  <Card.Text>Found a property that suited my requirements perfectly. The owner was polite with the deal.</Card.Text>
                  <div className="d-flex align-items-center mt-3">
                    <div className="user-avatar"></div>
                    <div><div className="fw-bold">Rajesh Kumar</div><small className="text-muted">From Mumbai</small></div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <h4 className="mb-4">Featured In</h4>
        <Row className="g-4">
          {['realty&more', 'Business Standard', 'Financial Express'].map((press, i) => (
            <Col lg={4} md={6} key={i}>
              <Card className="press-card">
                <Card.Body>
                  <div className={`mb-3 fw-bold ${i === 0 ? 'text-warning' : i === 1 ? 'text-info' : 'text-white'}`}>{press}</div>
                  <Card.Title className="fs-6">Housing.com launches owner connect services for home seekers</Card.Title>
                  <a href="#" className="text-danger text-decoration-none small">Read now ↗</a>
                </Card.Body>
                <Card.Footer className="text-muted small border-0 bg-transparent">16 August 2022</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .bg-danger-custom { background-color: #e91e63 !important; color: white !important; }
        .transition-all { transition: all 0.3s ease; }
        
        .feature-row { height: 55px; display: flex; align-items: center; border-bottom: 1px solid #2d1428; font-size: 0.9rem; white-space: nowrap; }
        
        .plan-column { 
          text-align: center; cursor: pointer; transition: all 0.3s ease; 
          min-width: 130px; border-radius: 8px; position: relative;
        }
        
        .plan-column:hover { background-color: rgba(233, 30, 99, 0.05); }
        
        .plan-column.selected { 
          background-color: #2d1428; 
          border: 2px solid #e91e63 !important; 
        }

        .cell { height: 55px; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid #3d1b35; }
        .price-box { padding: 20px 10px; }
        
        .pop-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); z-index: 10; }
        
        .buy-btn { 
          background-color: #e91e63; border: none; width: 50%; padding: 15px; 
          font-weight: bold; border-radius: 8px;
        }

        .testimonial-card, .press-card { background: #1d0a1b; border: 1px solid #3d1b35; color: #fff; padding: 20px; height: 100%; }
        .user-avatar { width: 45px; height: 45px; background: #444; border-radius: 50%; margin-right: 15px; }
        
        .nav-circle { background: #1d0a1b; padding: 10px; border-radius: 50%; border: 1px solid #3d1b35; color: white; }
        
        .carousel-control-prev { left: -60px; opacity: 1; }
        .carousel-control-next { right: -60px; opacity: 1; }

        @media (max-width: 991px) {
          .carousel-control-prev, .carousel-control-next { display: none; }
          .buy-btn { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default HousingPremium;