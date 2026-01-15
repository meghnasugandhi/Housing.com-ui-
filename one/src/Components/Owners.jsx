import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import housingresearch from "../Images/housinginsights.jpg";

const Owners = () => {
  const [activeTab, setActiveTab] = useState('For Sell');

  const pricingData = {
    'For Sell': [
      { name: 'Basic', validity: '30 Days', visibility: '75%', slot: 'Medium Slot', rm: false, field: false, photo: false, boost: 'x' },
      { name: 'Premium +', validity: '120 Days', visibility: '86%', slot: 'Medium Slot', rm: false, field: false, photo: true, boost: 'x', popular: true },
      { name: 'Assist', validity: '120 Days', visibility: '92%', slot: 'Top Slot', rm: true, field: false, photo: true, boost: '3 Boosts' },
      { name: 'Super Assist', validity: '150 Days', visibility: '98%', slot: 'Top Slot', rm: true, field: false, photo: true, boost: '5 Boosts' },
    ],
    'For Rent': [
      { name: 'Basic', validity: '15 Days', visibility: '75%', slot: 'Medium Slot', rm: false, field: false, photo: false, boost: 'x' },
      { name: 'Premium +', validity: '60 Days', visibility: '86%', slot: 'Medium Slot', rm: false, field: false, photo: true, boost: 'x', popular: true },
      { name: 'Assist', validity: '60 Days', visibility: '92%', slot: 'Top Slot', rm: true, field: false, photo: true, boost: '3 Boosts' },
      { name: 'Super Assist', validity: '75 Days', visibility: '98%', slot: 'Top Slot', rm: true, field: false, photo: true, boost: '5 Boosts' },
    ],
    'For PG': [
      { name: 'Basic', validity: '30 Days', visibility: '75%', slot: 'Medium Slot', tag: false, price: '₹ 1750' },
      { name: 'Premium', validity: '60 Days', visibility: '86%', slot: 'Top Slot', tag: true, price: '₹ 3999', popular: true },
    ]
  };

  const CheckIcon = () => (
    <div className="bg-primary-subtle rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
      <i className="bi bi-check-lg text-primary fw-bold" style={{ fontSize: '0.9rem' }}></i>
    </div>
  );
  
  const CrossIcon = () => (
    <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
      <i className="bi bi-x-lg text-muted opacity-50" style={{ fontSize: '0.8rem' }}></i>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#fdfdff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <div style={{ background: 'linear-gradient(135deg, #3e2b5d 0%, #25183d 100%)', color: 'white', padding: '60px 0', borderRadius: '0 0 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
             <div className="fw-bold fs-4"><i className="bi bi-caret-up-fill text-warning me-1"></i>HOUSING<span className="fw-light">.COM</span></div>
             <div>
               <Button variant="outline-light" className="me-2 rounded-pill px-4 border-0">Login</Button>
               <Button variant="light" className="rounded-pill px-4 text-primary fw-bold">+ Post Property</Button>
             </div>
          </div>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-4 fw-bold mb-3">Sell or Rent Your Property <span style={{ position: 'relative' }}>Effortlessly <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '8px', background: 'rgba(255, 202, 40, 0.4)', borderRadius: '4px' }}></span></span></h1>
              <p className="fs-5 opacity-75 mb-4">India's trusted platform to connect with genuine buyers and renters</p>
              <Button size="lg" className="rounded-4 px-5 py-3 border-0 shadow" style={{ backgroundColor: '#fff', color: '#5e35b1', fontWeight: 'bold' }}>Explore Owner Plans</Button>
            </Col>
            <Col md={5} className="text-center d-none d-md-block">
               <div className="position-relative p-3">
                  <div className="bg-white bg-opacity-10 rounded-circle position-absolute" style={{ width: '450px', height: '450px', top: '-50px', right: '-50px', filter: 'blur(40px)' }}></div>
                  <img 
                    src={housingresearch} 
                    alt="Housing Insights" 
                    className="img-fluid rounded-5 shadow-lg position-relative" 
                    style={{ 
                        zIndex: 1, 
                        border: '8px solid rgba(255,255,255,0.1)',
                        maxHeight: '400px',
                        objectFit: 'cover'
                    }} 
                  />
               </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="position-relative" style={{ marginTop: '-40px' }}>
        {/* --- TAB NAVIGATION --- */}
        <div className="text-center mb-5">
          <div className="d-inline-flex bg-white shadow rounded-pill p-1 border">
            {Object.keys(pricingData).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? 'dark' : 'light'}
                className={`rounded-pill px-5 py-2 border-0 fw-bold ${activeTab === tab ? '' : 'text-muted'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* --- PRICING TABLE --- */}
        <div className="bg-white p-4 rounded-5 shadow-sm overflow-auto mb-5 border">
          <table className="table align-middle border-light">
            <thead>
              <tr className="text-center">
                <th className="text-start border-0 py-4" style={{ width: '25%' }}></th>
                {pricingData[activeTab].map((plan, i) => (
                  <th key={i} className={`border-0 py-4 ${plan.popular ? 'border border-primary border-bottom-0' : ''}`} style={{ width: activeTab === 'For PG' ? '30%' : '18%', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                    {plan.popular && (
                      <div className="bg-danger text-white small py-1 px-3 rounded-pill d-inline-block mb-2" style={{ fontSize: '0.65rem', fontWeight: '800' }}>MOST POPULAR</div>
                    )}
                    <h4 className="fw-bold mb-2">{plan.name}</h4>
                    <div className="bg-light rounded-4 p-2 d-inline-block">
                       <div className="text-success fw-bold small">{plan.visibility}</div>
                       <div className="text-muted" style={{ fontSize: '0.6rem' }}>Listing Visibility <i className="bi bi-info-circle"></i></div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-top-0">
              <tr>
                <td className="py-4 text-muted"><i className="bi bi-calendar3 me-2 text-primary"></i> Plan Validity</td>
                {pricingData[activeTab].map((plan, i) => <td key={i} className={`text-center fw-bold py-4 ${plan.popular ? 'border-start border-end border-primary' : ''}`}>{plan.validity}</td>)}
              </tr>
              <tr>
                <td className="py-4 text-muted"><i className="bi bi-house-door me-2 text-primary"></i> Position in search result <i className="bi bi-info-circle small"></i></td>
                {pricingData[activeTab].map((plan, i) => <td key={i} className={`text-center fw-bold py-4 ${plan.popular ? 'border-start border-end border-primary' : ''}`}>{plan.slot}</td>)}
              </tr>
              {activeTab !== 'For PG' ? (
                <>
                  <tr>
                    <td className="py-4 text-muted"><i className="bi bi-headset me-2 text-primary"></i> Relationship Manager Assistance</td>
                    {pricingData[activeTab].map((plan, i) => <td key={i} className={`text-center py-4 ${plan.popular ? 'border-start border-end border-primary' : ''}`}>{plan.rm ? <CheckIcon /> : <CrossIcon />}</td>)}
                  </tr>
                  <tr>
                    <td className="py-4 text-muted"><i className="bi bi-camera me-2 text-primary"></i> Professional Photoshoot</td>
                    {pricingData[activeTab].map((plan, i) => <td key={i} className={`text-center py-4 ${plan.popular ? 'border-start border-end border-primary' : ''}`}>{plan.photo ? <CheckIcon /> : <CrossIcon />}</td>)}
                  </tr>
                  <tr>
                    <td className="py-4 text-muted"><i className="bi bi-lightning-charge me-2 text-primary"></i> Assured 1st rank boosts</td>
                    {pricingData[activeTab].map((plan, i) => <td key={i} className={`text-center fw-bold py-4 ${plan.popular ? 'border-start border-end border-primary' : ''}`}>{plan.boost}</td>)}
                  </tr>
                </>
              ) : (
                <tr>
                  <td className="py-4 text-muted"><i className="bi bi-tag me-2 text-primary"></i> Unique Tag on Property</td>
                  {pricingData[activeTab].map((plan, i) => <td key={i} className={`text-center py-4 ${plan.popular ? 'border-start border-end border-primary' : ''}`}>{plan.tag ? <CheckIcon /> : <CrossIcon />}</td>)}
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr className="text-center">
                <td className="border-0"></td>
                {pricingData[activeTab].map((plan, i) => (
                  <td key={i} className={`border-0 py-4 ${plan.popular ? 'border border-primary border-top-0' : ''}`} style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                    {plan.price && <h4 className="fw-bold mb-3">{plan.price}</h4>}
                    <Button variant={plan.popular ? "primary" : "link"} className={`rounded-pill px-4 fw-bold text-decoration-none ${!plan.popular ? 'text-primary' : ''}`} style={{ width: plan.popular ? '90%' : 'auto' }}>
                      Upgrade
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* --- WHY CHOOSE HOUSING SECTION --- */}
        <div className="my-5 py-5">
           <div className="text-center mb-5">
              <h2 className="fw-bold">Why 2Mn+ property owners choose Housing.com</h2>
              <p className="text-muted">Monthly 17Mn+ property seekers visit housing.com in search of their right homes</p>
           </div>
           
           <Row className="g-4">
              <Col md={7}>
                 <div className="rounded-5 h-100 p-5 d-flex flex-column align-items-center text-center" style={{ backgroundColor: '#e2f5ee' }}>
                    <div className="bg-white rounded-4 shadow-sm p-3 w-100 mb-4" style={{ maxWidth: '450px' }}>
                       <div className="d-flex justify-content-between border-bottom pb-2 mb-3">
                          <span className="fw-bold small">All Enquiries (15)</span>
                          <span className="text-primary small fw-bold">+ Add Property</span>
                       </div>
                       <Row className="g-2">
                          {[1,2,3,4].map(i => (
                             <Col xs={6} key={i}>
                                <div className="border rounded-3 p-2 text-start bg-light-subtle">
                                   <div className="d-flex align-items-center gap-2 mb-1">
                                      <div className="rounded-circle bg-secondary-subtle" style={{width:'15px', height:'15px'}}></div>
                                      <span className="fw-bold" style={{fontSize: '0.6rem'}}>Pankaj Mishra</span>
                                   </div>
                                   <div className="text-muted fw-light" style={{fontSize: '0.5rem'}}>Budget: ₹ 20,000-25,000</div>
                                </div>
                             </Col>
                          ))}
                       </Row>
                    </div>
                    <h3 className="fw-bold mb-2">Verified seekers</h3>
                    <p className="text-muted px-lg-5">We bring serious buyers and renters directly to you by filtering non-serious leads.</p>
                 </div>
              </Col>
              <Col md={5}>
                 <div className="d-flex flex-column gap-4 h-100">
                    <div className="rounded-5 p-4 flex-grow-1 d-flex align-items-center gap-4 shadow-sm" style={{ backgroundColor: '#ffeaef' }}>
                       <div className="flex-grow-1">
                          <h5 className="fw-bold mb-1">Maximum visibility</h5>
                          <p className="small text-muted mb-0">Showcase your property to thousands of seekers every day.</p>
                       </div>
                       <div className="bg-white p-2 rounded-3 shadow-sm" style={{width: '70px'}}>
                          <div className="bg-primary rounded mb-1" style={{height:'15px', width:'100%'}}></div>
                          <div className="bg-light rounded" style={{height:'10px', width:'70%'}}></div>
                       </div>
                    </div>
                    <div className="rounded-5 p-4 flex-grow-1 d-flex align-items-center gap-4 shadow-sm" style={{ backgroundColor: '#f0f7ff' }}>
                       <div className="flex-grow-1">
                          <h5 className="fw-bold mb-1">Smart tools</h5>
                          <p className="small text-muted mb-0">Easy-to-use tools to create, optimise, and boost your listing.</p>
                       </div>
                       <div className="text-center">
                          <i className="bi bi-speedometer2 text-primary fs-1 opacity-50"></i>
                       </div>
                    </div>
                 </div>
              </Col>
           </Row>
        </div>

        {/* --- HOW IT WORKS SECTION (MATCHING IMAGE_5D576F) --- */}
        <div className="py-5 my-5">
           <div className="text-center mb-5">
              <span className="fw-bold small text-uppercase" style={{ color: '#7c4dff', letterSpacing: '1px' }}>HOW IT WORKS</span>
              <h2 className="fw-bold mt-2" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>4 easy steps to list & promote your properties</h2>
           </div>
           <Row className="g-4">
              {[
                  { 
                    step: '1', 
                    title: 'Upload your property', 
                    desc: 'Provide your personal details, property details, and pricing information to post your property ad online.',
                    icon: 'bi-laptop'
                  },
                  { 
                    step: '2', 
                    title: 'Choose a package', 
                    desc: 'Select a package that best suits your needs. Each package offers different features and benefits to help you reach potential buyers or renters',
                    icon: 'bi-layers'
                  },
                  { 
                    step: '3', 
                    title: 'Property gets promoted to get unlimited enquiries', 
                    desc: 'Housing makes it easy to reach the right tenants and buyers, finding you the perfect match through targeted promotion and qualified enquiries',
                    icon: 'bi-megaphone'
                  },
                  { 
                    step: '4', 
                    title: 'Dedicated RM filters out only the best suited enquiries for you', 
                    desc: 'Our Relationship Manager personally contacts potential tenants or buyers on your behalf. Sit back, relax, and trust them to handle everything smoothly.',
                    icon: 'bi-person-badge',
                    badge: 'For Assisted Packages Only'
                  }
              ].map((item, i) => (
                  <Col md={3} key={i}>
                    <div className="position-relative h-100">
                      {/* Large Faded Number Background */}
                      <div style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '-10px',
                        fontSize: '120px',
                        fontWeight: '900',
                        color: '#7c4dff',
                        opacity: '0.08',
                        lineHeight: '1',
                        zIndex: 0
                      }}>
                        {item.step}
                      </div>

                      {/* Icon/Illustration Container */}
                      <div className="mb-4 pt-3 position-relative" style={{ zIndex: 1 }}>
                        <div 
                          className="rounded-4 d-flex align-items-center justify-content-center shadow-sm" 
                          style={{ 
                            width: '130px', 
                            height: '90px', 
                            background: 'linear-gradient(135deg, #4c1d95 0%, #7c4dff 100%)',
                            borderRadius: '16px'
                          }}
                        >
                          <i className={`bi ${item.icon} text-white fs-1`}></i>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="position-relative" style={{ zIndex: 1 }}>
                        <h6 className="fw-bold mb-2" style={{ color: '#ef4444', fontSize: '1.1rem' }}>Step {item.step}</h6>
                        <h5 className="fw-bold mb-3" style={{ color: '#0f172a', lineHeight: '1.3', fontSize: '1.25rem', minHeight: '3rem' }}>{item.title}</h5>
                        <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
                        
                        {item.badge && (
                          <div className="mt-2">
                            <Badge pill style={{ backgroundColor: '#6366f1', padding: '10px 18px', fontSize: '0.75rem' }}>
                              {item.badge}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  </Col>
              ))}
           </Row>
        </div>

        {/* --- TESTIMONIALS SECTION --- */}
        <div className="py-5 my-5">
          <div className="mb-4">
            <span className="fw-bold small text-uppercase" style={{ color: '#7c4dff' }}>Testimonials</span>
            <h2 className="fw-bold mt-1" style={{ fontSize: '2rem' }}>Boost your sales with our incredible packages</h2>
          </div>

          <Row className="g-4 position-relative">
            <Col md={6}>
              <Card className="border-0 shadow-sm rounded-4 p-3 h-100 position-relative" style={{ backgroundColor: '#ffffff', border: '1px solid #f0f0f0' }}>
                <Card.Body>
                  <div className="position-absolute" style={{ top: '20px', right: '40px', opacity: 0.2 }}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="#7c4dff">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
                    </svg>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="text-warning small"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                    <span className="text-muted small">December 12, 2023</span>
                  </div>
                  <p className="text-secondary mb-4" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                    Using Housing.com was an absolute delight! Their executives provided continuous, 
                    top-notch leads directly, showcasing their dedication to customer satisfaction.
                  </p>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="rounded-circle overflow-hidden bg-warning-subtle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="bi bi-person-fill text-warning fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">Nabashis Mallick</h6>
                      <p className="text-muted small mb-0">From Kolkata</p>
                    </div>
                  </div>
                  <hr style={{ color: '#eee' }} />
                  <div className="d-flex flex-wrap gap-2 pt-2">
                    <div className="px-3 py-1 rounded-pill d-flex align-items-center gap-2" style={{ backgroundColor: '#f3f0ff', fontSize: '0.85rem' }}>
                      <span className="text-muted">Plan:</span> <span className="fw-bold" style={{ color: '#7c4dff' }}>🤩 Assist +</span>
                    </div>
                    <div className="px-3 py-1 rounded-pill d-flex align-items-center gap-2" style={{ backgroundColor: '#f8f9fa', border: '1px solid #eee', fontSize: '0.85rem' }}>
                      <span className="text-muted">Assisted RM:</span> <span className="fw-bold">Ramanand</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm rounded-4 p-3 h-100 position-relative opacity-50" style={{ backgroundColor: '#ffffff', border: '1px solid #f0f0f0' }}>
                <Card.Body>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="text-warning small"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                    <span className="text-muted small">March 15, 2024</span>
                  </div>
                  <p className="text-secondary mb-4">I'm incredibly grateful for the support from my Housing manager! Their proactive approach...</p>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="bi bi-person-fill text-primary fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">Mohan Bhawkar</h6>
                      <p className="text-muted small mb-0">From Pune</p>
                    </div>
                  </div>
                </Card.Body>
                <Button className="position-absolute shadow-lg rounded-circle d-flex align-items-center justify-content-center border-0" 
                        style={{ top: '50%', right: '-25px', width: '50px', height: '50px', backgroundColor: '#fff', color: '#333', zIndex: 10 }}>
                  <i className="bi bi-arrow-right"></i>
                </Button>
              </Card>
            </Col>
          </Row>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="py-5 my-5">
           <div className="text-center mb-5">
              <h2 className="fw-bold">Frequently Asked Questions</h2>
           </div>
           <Row className="justify-content-center">
              <Col md={10} lg={8}>
                 <Accordion flush className="bg-white rounded-4 shadow-sm border overflow-hidden">
                    <Accordion.Item eventKey="0" className="border-bottom">
                       <Accordion.Header className="fw-bold py-3">Is the Property Photoshoot available for all packages?</Accordion.Header>
                       <Accordion.Body className="text-muted lh-lg">
                         No, the professional photoshoot is a premium feature available exclusively for our **Premium+**, **Assist**, and **Super Assist** packages.
                       </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="border-bottom">
                       <Accordion.Header className="fw-bold py-3">What is the role of a Relationship Manager?</Accordion.Header>
                       <Accordion.Body className="text-muted lh-lg">
                         A Relationship Manager acts as your personal property consultant. They filter out non-serious leads and handle initial inquiries.
                       </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="border-bottom">
                       <Accordion.Header className="fw-bold py-3">Can I upgrade my plan after posting my property?</Accordion.Header>
                       <Accordion.Body className="text-muted lh-lg">
                         Yes, you can upgrade your plan at any time through your owner dashboard.
                       </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                       <Accordion.Header className="fw-bold py-3">How do Rank Boosts work?</Accordion.Header>
                       <Accordion.Body className="text-muted lh-lg">
                         Rank Boosts push your property to the top position in search results for your locality.
                       </Accordion.Body>
                    </Accordion.Item>
                 </Accordion>
              </Col>
           </Row>
        </div>

      </Container>
    </div>
  );
};

export default Owners;