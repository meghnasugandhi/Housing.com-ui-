import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Navbar, Form, Button, Card, Accordion, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeLoanLandingPage = () => {
  // --- STATE FOR EMI CALCULATOR ---
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);

  // --- STATE FOR LEAD FORM ---
  const [propertyIdentified, setPropertyIdentified] = useState(null);

  // EMI Calculation Logic
  useEffect(() => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    const emiCalc = 
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
      (Math.pow(1 + monthlyRate, months) - 1);
    
    setEmi(Math.round(emiCalc));
  }, [loanAmount, interestRate, tenure]);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#f4f7fa', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* TOP IMAGE SLIDER SECTION */}
      <div className="position-relative">
        <Carousel fade indicators={true} controls={false} interval={3000}>
          <Carousel.Item>
            <div style={{ background: 'linear-gradient(135deg, #3b4cb8 0%, #2a3891 100%)', padding: '100px 0', minHeight: '550px' }}>
              <Container>
                <Row>
                  <Col lg={7} className="text-white">
                    <div className="mb-4">
                      <img src="https://img.icons8.com/fluency/120/checklist.png" alt="compare" />
                    </div>
                    <h1 className="fw-bold display-4">Compare and choose</h1>
                    <p className="lead fs-4 opacity-75">One place to Compare offers from all the best banks in the country</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{ background: 'linear-gradient(135deg, #26ba9b 0%, #1a8e77 100%)', padding: '100px 0', minHeight: '550px' }}>
              <Container>
                <Row>
                  <Col lg={7} className="text-white">
                    <div className="mb-4">
                      <img src="https://img.icons8.com/fluency/120/tags.png" alt="offers" />
                    </div>
                    <h1 className="fw-bold display-4">Best Offers</h1>
                    <p className="lead fs-4 opacity-75">Lowest Interest rates</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{ background: 'linear-gradient(135deg, #4264fb 0%, #2d46b3 100%)', padding: '100px 0', minHeight: '550px' }}>
              <Container>
                <Row>
                  <Col lg={7} className="text-white">
                    <div className="mb-4">
                      <img src="https://img.icons8.com/fluency/120/calculator.png" alt="calculator" />
                    </div>
                    <h1 className="fw-bold display-4">Calculate your EMI</h1>
                    <p className="lead fs-4 opacity-75">Use our calculator to plan your monthly expenses</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* STICKY NAVBAR */}
      <Navbar sticky="top" bg="white" className="border-bottom shadow-sm py-3" style={{ zIndex: 1020 }}>
        <Container>
          <Nav className="mx-auto gap-4 fw-semibold text-secondary">
            <Nav.Link onClick={() => scrollToSection('bank-info')}>Bank Information</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('testimonials')}>Testimonials</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('process')}>Buying Process</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('emi-calc')}>EMI Calculator</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('news')}>News</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('faqs')}>FAQs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row className="align-items-start">
          {/* MAIN CONTENT COLUMN */}
          <Col lg={8}>
            
            <section id="bank-info" className="mb-5 pt-2">
              <h3 className="fw-bold mb-4">Home Loan Bank Information</h3>
              <Card className="border-0 shadow-sm mb-3 p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="bg-light rounded p-3 me-3">🏦</div>
                    <div>
                      <h6 className="mb-0 fw-bold">PNB Housing Finance Limited</h6>
                      <small className="text-muted">Interest: 8.25% | Tenure: 1-30 Years</small>
                    </div>
                  </div>
                  <Button variant="success" className="px-4">Apply</Button>
                </div>
              </Card>
            </section>

            <section id="testimonials" className="mb-5 pt-2">
              <div className="text-center mb-4">
                <span className="text-danger small fw-bold text-uppercase">Testimonials</span>
                <h3 className="fw-bold">What our customers say</h3>
              </div>
              <Card className="border-0 shadow-sm p-4 text-center">
                <p className="text-muted italic">"Smooth process and very helpful support for my Pune house loan."</p>
                <h6 className="mb-0 fw-bold">Debojyoti Ghosh</h6>
                <div className="text-warning">★★★★★ 4.8</div>
              </Card>
            </section>

            <section id="process" className="mb-5 pt-2">
              <h3 className="fw-bold mb-4">Home Loan Buying Process</h3>
              <div className="bg-dark rounded-4 overflow-hidden shadow" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="danger" className="rounded-circle p-3">▶</Button>
                <span className="ms-3 text-white fw-bold">Watch Step-by-Step Guide</span>
              </div>
            </section>

            {/* FUNCTIONAL EMI CALCULATOR */}
            <section id="emi-calc" className="mb-5 pt-2">
              <h3 className="fw-bold mb-4 text-center">EMI Calculator</h3>
              <Card className="border-0 shadow-sm p-4">
                <Row className="gy-4">
                  <Col md={7}>
                    <Form.Group className="mb-4">
                      <Form.Label className="d-flex justify-content-between">
                        <span>Loan Amount</span>
                        <span className="fw-bold text-primary">₹ {loanAmount.toLocaleString()}</span>
                      </Form.Label>
                      <Form.Range 
                        min={100000} max={10000000} step={100000} 
                        value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} 
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="d-flex justify-content-between">
                        <span>Interest Rate (%)</span>
                        <span className="fw-bold text-primary">{interestRate}%</span>
                      </Form.Label>
                      <Form.Range 
                        min={5} max={15} step={0.1} 
                        value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} 
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="d-flex justify-content-between">
                        <span>Loan Tenure (Years)</span>
                        <span className="fw-bold text-primary">{tenure} Yrs</span>
                      </Form.Label>
                      <Form.Range 
                        min={1} max={30} step={1} 
                        value={tenure} onChange={(e) => setTenure(Number(e.target.value))} 
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={5} className="text-center d-flex flex-column justify-content-center border-start">
                    <div className="p-3 bg-light rounded shadow-sm">
                      <small className="text-muted text-uppercase fw-bold">Monthly EMI</small>
                      <h2 className="fw-bold text-dark mt-2">₹ {emi.toLocaleString()}</h2>
                      <hr />
                      <div className="d-flex justify-content-between px-2">
                        <small>Total Interest</small>
                        <small className="fw-bold">₹ {Math.round((emi * tenure * 12) - loanAmount).toLocaleString()}</small>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </section>

            <section id="news" className="mb-5 pt-2">
              <h3 className="fw-bold mb-4">Home Loan News</h3>
              <Row>
                <Col md={6}>
                  <Card className="border-0 shadow-sm h-100">
                    <div className="bg-secondary text-white p-5 text-center">News Image</div>
                    <Card.Body>
                      <h6>Should you prepay your home loan?</h6>
                      <small className="text-muted">By Dhwani Meharchandani</small>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </section>

            <section id="faqs" className="mb-5 pt-2">
              <h3 className="fw-bold mb-4">Some questions asked</h3>
              <Accordion flush className="shadow-sm rounded">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Getting the Basics Right</Accordion.Header>
                  <Accordion.Body>Details about home loan eligibility and requirements.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Taking a Loan</Accordion.Header>
                  <Accordion.Body>Step by step guide on how to apply.</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </section>

          </Col>

          {/* STICKY SIDEBAR FORM (THE ONLY ONE REMAINING) */}
          <Col lg={4} className="d-none d-lg-block">
            <div className="sticky-top" style={{ top: '100px', zIndex: 1010 }}>
              <Card className="border-0 shadow-lg p-3">
                <Card.Body>
                  <h5 className="fw-bold mb-4">Enter the loan details</h5>
                  <Form>
                    <Form.Select className="mb-3 py-2">
                      <option>Select Property Amount</option>
                      <option>Under ₹ 50 Lac</option>
                      <option>₹ 50 Lac - ₹ 1 Cr</option>
                      <option>Above ₹ 1 Cr</option>
                    </Form.Select>
                    <Form.Select className="mb-3 py-2">
                      <option>Select City</option>
                      <option>Mumbai</option>
                      <option>Pune</option>
                      <option>Bangalore</option>
                    </Form.Select>
                    <Form.Control type="text" placeholder="Pin code" className="mb-3 py-2" />
                    <Form.Label className="small fw-bold">Property Identified</Form.Label>
                    <div className="d-flex gap-2 mb-4">
                      <Button 
                        variant={propertyIdentified === 'yes' ? 'primary' : 'outline-secondary'} 
                        className="flex-grow-1"
                        onClick={() => setPropertyIdentified('yes')}
                      >Yes</Button>
                      <Button 
                        variant={propertyIdentified === 'no' ? 'primary' : 'outline-secondary'} 
                        className="flex-grow-1"
                        onClick={() => setPropertyIdentified('no')}
                      >No</Button>
                    </div>
                    <Button variant="secondary" className="w-100 py-2 fw-bold" style={{backgroundColor: '#6c757d', border:'none'}}>
                      Next, Add Personal Details
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeLoanLandingPage;