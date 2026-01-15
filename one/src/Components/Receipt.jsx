import React from 'react';
import { Container, Row, Col, Card, Form, Button, Accordion } from 'react-bootstrap';
import valueSvg from '../Images/value.svg'; 

const ReceiptImport = () => {
    return (
        <div className="hc-full-page">
            <style>{`
                .hc-full-page {
                    background-color: #f5f7f9;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    color: #212121;
                    padding-bottom: 100px;
                }

                /* --- HERO SECTION --- */
                .hc-hero {
                    background: #d4a017;
                    background: linear-gradient(135deg, #e5b121 0%, #c49215 100%);
                    padding: 30px 0 100px 0;
                    color: white;
                }
                
                /* LINK STYLING */
                .hc-navbar-link {
                    text-decoration: none !important;
                    color: inherit !important;
                    display: inline-block;
                    margin-bottom: 50px;
                }

                .hc-navbar-brand {
                    font-weight: 800;
                    font-size: 1.1rem;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .hc-logo-sq {
                    background: white;
                    color: #d4a017;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                    margin-right: 8px;
                    font-size: 0.8rem;
                }

                .hero-illustration {
                    max-width: 100%;
                    height: auto;
                }

                /* --- STICKY FORM CARD --- */
                .sticky-wrapper {
                    position: relative;
                    height: 100%;
                }

                .sticky-form-container {
                    position: -webkit-sticky;
                    position: sticky;
                    top: 20px; 
                    z-index: 1000;
                }

                .hc-form-card {
                    border: none;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    padding: 30px;
                    background: #fff;
                    margin-top: -80px; 
                }

                .hc-purple-icon {
                    background: #f0eeff;
                    width: 44px;
                    height: 44px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 15px;
                }

                /* --- FORM STYLING --- */
                .hc-input-underlined {
                    border: none !important;
                    border-bottom: 1px solid #e0e0e0 !important;
                    border-radius: 0 !important;
                    padding: 12px 0 !important;
                    margin-bottom: 35px;
                    font-size: 1rem;
                    background: transparent !important;
                }
                .hc-input-underlined:focus {
                    box-shadow: none !important;
                    border-bottom: 2px solid #6c5ce7 !important;
                }
                .hc-btn-gray {
                    background-color: #808080 !important;
                    border: none !important;
                    padding: 14px !important;
                    font-weight: 600 !important;
                    border-radius: 8px !important;
                    font-size: 1.1rem;
                }

                /* --- LEFT CONTENT STYLING --- */
                .section-container {
                    padding: 40px 0;
                }
                .section-title {
                    font-size: 2.2rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .wave-divider {
                    display: block;
                    margin: 20px 0;
                    width: 45px;
                }
                .hc-step-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 25px;
                }
                .hc-step-circle {
                    background: #e9e6ff;
                    color: #6c5ce7;
                    min-width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 15px;
                    font-weight: 700;
                    font-size: 0.9rem;
                }
                .hc-step-desc {
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: #333;
                }
                .extras-label {
                    color: #ff4d6d;
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 0.8rem;
                    letter-spacing: 1.5px;
                    margin-bottom: 10px;
                    display: block;
                }

                .hc-faq .accordion-item {
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid #e0e0e0;
                }
                .hc-faq .accordion-button {
                    background: transparent;
                    padding: 20px 0;
                    box-shadow: none;
                    font-weight: 600;
                    color: #333;
                    font-size: 1.05rem;
                }
                .hc-faq .accordion-button:not(.collapsed) {
                    color: #6c5ce7;
                    background: transparent;
                }
            `}</style>

            {/* --- HERO SECTION --- */}
            <div className="hc-hero">
                <Container>
                    {/* UPDATED: Added anchor tag for Home navigation */}
                    <a href="/" className="hc-navbar-link">
                        <div className="hc-navbar-brand">
                            <div className="hc-logo-sq">H</div> HOUSING.COM
                        </div>
                    </a>

                    <Row>
                        <Col lg={7}>
                            <h1 className="mb-3 font-weight-bold" style={{fontSize: '2.8rem'}}>Generate Rent Receipt Online</h1>
                            <p className="mb-5" style={{fontSize: '1.25rem', opacity: 0.95, maxWidth: '500px'}}>
                                Get Hassle Free House Rent Receipt Online for Income Tax Declaration
                            </p>
                            <img 
                                src="https://c.housingcdn.com/edge/render/assets/7a976f9273398327.png" 
                                alt="Illustration" 
                                className="hero-illustration d-none d-lg-block" 
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    {/* LEFT COLUMN: SCROLLABLE CONTENT */}
                    <Col lg={7} className="pr-lg-5">
                        
                        <div className="section-container mt-4">
                            <h2 className="section-title">How it works</h2>
                            <p className="text-muted" style={{fontSize: '1.1rem'}}>It only takes 30 seconds to generate rent receipt</p>
                            <img src="https://c.housingcdn.com/edge/render/assets/c133a1f114e9e46a.svg" className="wave-divider" alt="wave" />
                            
                            <div className="hc-step-item">
                                <div className="hc-step-circle">1</div>
                                <div className="hc-step-desc">Provide the name of the tenant and the rent amount</div>
                            </div>
                            <div className="hc-step-item">
                                <div className="hc-step-circle">2</div>
                                <div className="hc-step-desc">Provide the name of your landlord, address, PAN details (optional) and rent period</div>
                            </div>
                            <div className="hc-step-item">
                                <div className="hc-step-circle">3</div>
                                <div className="hc-step-desc">Check preview and download, it's done! 👍</div>
                            </div>
                        </div>

                        <div className="section-container text-center mt-5">
                            <span className="extras-label">Extras</span>
                            <h2 className="section-title">Key points to remember</h2>
                            <img src="https://c.housingcdn.com/edge/render/assets/c133a1f114e9e46a.svg" className="wave-divider mx-auto" alt="wave" />
                            
                            <Card className="p-4 border-0 shadow-sm rounded-lg text-left mt-4">
                                <ul className="list-unstyled mb-0" style={{lineHeight: '1.8', color: '#555'}}>
                                    <li className="mb-3">• In case you pay the rent through net-banking or other online channels, your payment history would also act as a proof.</li>
                                    <li className="mb-3">• The tenant will have to share the rent receipts with his employer in order to claim HRA exemption...</li>
                                    <li>• You don't have to submit rent receipts for each month...</li>
                                </ul>
                            </Card>
                        </div>

                        <div className="section-container mt-5">
                            <h2 className="section-title text-center">Some questions asked</h2>
                            <img src="https://c.housingcdn.com/edge/render/assets/c133a1f114e9e46a.svg" className="wave-divider mx-auto mb-4" alt="wave" />
                            
                            <Accordion className="hc-faq">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Is paying rent online a must to create an online house rent receipt?</Accordion.Header>
                                    <Accordion.Body>You can pay the rent through any medium, including cash payments...</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Is a valid leave and licence agreement must to claim HRA deductions?</Accordion.Header>
                                    <Accordion.Body>Yes, a valid agreement is generally required...</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                    </Col>

                    {/* RIGHT COLUMN: STICKY FORM */}
                    <Col lg={5} className="d-none d-lg-block sticky-wrapper">
                        <div className="sticky-form-container">
                            <Card className="hc-form-card">
                                <div className="hc-purple-icon">
                                    <img src={valueSvg} alt="icon" width="24" height="24" />
                                </div>
                                <div className="text-muted small mb-1">Step 1 of 2</div>
                                <h4 className="font-weight-bold mb-5" style={{letterSpacing: '-0.5px'}}>Enter rent details</h4>
                                
                                <Form>
                                    <Form.Group>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Name of The Tenant" 
                                            className="hc-input-underlined" 
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Monthly Rent Amount" 
                                            className="hc-input-underlined" 
                                        />
                                    </Form.Group>
                                    <Button className="w-100 hc-btn-gray py-3 mt-2 shadow-sm">
                                        Proceed
                                    </Button>
                                </Form>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReceiptImport;