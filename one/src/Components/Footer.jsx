import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import rea from '../Images/rea.jpg'; 

const HousingFooter = () => {
  const [activeTab, setActiveTab] = useState('FOR BUYERS');

  const footerContent = {
    'FOR BUYERS': {
      title: 'Find flats for sale',
      links: [
        ['Mysore', 'Mangalore', 'Hubli', 'Kithiganur', 'Hubali-Dharwad'],
        ['Ullalu', 'Belagavi', 'Doddaballapura', 'Udupi', 'Doddanagamangala'],
        ['Billamaranahalli', 'Chikkagubbi', 'Yamare', 'Vajarahalli', 'Bhovi Palya'],
        ['Shivamogga', 'Vaddara Palya', 'Chikballapur Rural', 'Tumkur', 'Adiganahalli']
      ]
    },
    'FOR TENANTS': {
      title: 'Find flats for rent',
      links: [
        ['Mangalore', 'Mysore', 'Belagavi', 'Hubali-Dharwad', 'Hubli'],
        ['Udupi', 'Shivamogga', 'Gulbarga', 'Kithiganur', 'Bhovi Palya'],
        ['Dharwad', 'Doddanagamangala', 'Davanagere', 'Tumkur', 'Billamaranahalli'],
        ['Byatarayanapura CMC And OG Part', 'Chikkagubbi', 'Vaddara Palya', 'Bellary', 'Geddalahalli']
      ]
    },
    'PROJECTS': {
      title: 'Find new residential projects',
      links: [
        ['New projects in Mysore', 'New projects in Mangalore', 'New projects in Belagavi', 'New projects in Udupi', 'New projects in Hubli'],
        ['New projects in Bellary', 'New projects in Hubali-Dharwad', 'New projects in Gulbarga', 'New projects in Vaddara Palya', 'New projects in Shivamogga'],
        ['New projects in Doddaballapura', 'New projects in Byatarayanapura CMC And OG Part', 'New projects in Tumkur', 'New projects in Kithiganur', 'New projects in Vijayapura'],
        ['New projects in Dharwad', 'New projects in Yamare', 'New projects in Doddanagamangala', 'New projects in Chikkagubbi', 'New projects in Uttara Kannada']
      ]
    },
    'POPULAR CITIES': {
      title: 'Find properties to buy and rent in popular cities',
      links: [
        ['Properties for sale in Mumbai', 'Properties for sale in Pune', 'Properties for sale in Bangalore', 'Properties for sale in New Delhi', 'Properties for sale in Chennai'],
        ['Properties for sale in Kolkata', 'Properties for sale in Gurgaon', 'Properties for sale in Hyderabad', 'Properties for sale in Ahmedabad', 'Properties for sale in Navi Mumbai'],
        ['Properties for rent in Mumbai', 'Properties for rent in Pune', 'Properties for rent in Bangalore', 'Properties for rent in New Delhi', 'Properties for rent in Chennai'],
        ['Properties for rent in Kolkata', 'Properties for rent in Gurgaon', 'Properties for rent in Hyderabad', 'Properties for rent in Ahmedabad', 'Properties for rent in Navi Mumbai']
      ]
    },
    'POPULAR SEARCHES': {
      title: 'Popular property related searches',
      links: [
        ['Convert square meter to square feet', 'Convert square feet to square meter', 'Convert acre to square feet', 'Convert square feet to acre'],
        ['Convert hectare to acre feet', 'Convert hectare to square meter', 'Convert acre to hectare', 'List of all residential cities'],
        ['List of all cities for rentals', 'Properties in India', 'Agricultural Lands in India', 'Plots in India'],
        ['Flats in India']
      ]
    }
  };

  const getNavLinkStyle = (tabName) => ({
    color: activeTab === tabName ? '#ffffff !important' : '#8a8d91 !important',
    fontWeight: 'bold',
    fontSize: '12px',
    paddingBottom: '15px',
    cursor: 'pointer',
    textAlign: 'center',
    borderBottom: activeTab === tabName ? '2px solid #ffffff' : 'none',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease-in-out'
  });

  return (
    <>
      {/* Increased REA Image size in this section */}
      <div style={{ backgroundColor: '#ffffff', padding: '25px 0', borderBottom: '1px solid #e0e0e0' }}>
        <Container className="text-center">
          <div style={{ 
            fontSize: '16px', 
            color: '#333', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '15px' 
          }}>
            <span style={{ color: '#666', fontWeight: '500' }}>Part of</span>
            <img 
              src={rea} 
              alt="REA Group" 
              style={{ 
                height: '50px', // Increased from 28px
                maxWidth: '250px', 
                objectFit: 'contain' 
              }} 
            />
          </div>
        </Container>
      </div>

      <footer style={{ backgroundColor: '#151719', color: '#ffffff', paddingTop: '40px' }}>
        <Container>
          {/* Navigation Tabs */}
          <Row className="mb-4 border-bottom border-secondary">
            {Object.keys(footerContent).map((tab) => (
              <Col key={tab} xs={6} md={2}>
                <div onClick={() => setActiveTab(tab)} style={getNavLinkStyle(tab)}>
                  {tab}
                </div>
              </Col>
            ))}
          </Row>

          {/* Dynamic Section Content */}
          <div style={{ minHeight: '180px' }}>
            <h6 className="mb-4 fw-bold">{footerContent[activeTab].title}</h6>
            <Row>
              {footerContent[activeTab].links.map((column, colIdx) => (
                <Col key={colIdx} md={3} sm={6}>
                  {column.map((link, linkIdx) => (
                    <a 
                      key={linkIdx} 
                      href="#" 
                      className="d-block mb-2 text-decoration-none" 
                      style={{ color: '#a0a0a0', fontSize: '12px' }}
                    >
                      {activeTab === 'FOR BUYERS' ? `Flats for sale in ${link}` : 
                       activeTab === 'FOR TENANTS' ? `Flats for rent in ${link}` : link}
                    </a>
                  ))}
                </Col>
              ))}
            </Row>
          </div>

          <hr className="border-secondary mt-5 opacity-25" />

          {/* Bottom Section */}
          <Row className="py-5">
            <Col lg={5} className="mb-4">
              <div style={{ backgroundColor: '#6224fb', padding: '40px', borderRadius: '4px', position: 'relative' }}>
                <h3 className="fw-bold">Come home to Greatness</h3>
                <p className="small mb-0 opacity-75">Ranked 5th - Best Companies to Work For 2024</p>
                <div style={{ position: 'absolute', right: '20px', bottom: '20px', display: 'flex', gap: '10px' }}>
                    <div style={{ width: '40px', height: '60px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                    <div style={{ width: '40px', height: '60px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <Row>
                <Col xs={4}>
                  <h6 className="fw-bold mb-3" style={{ fontSize: '11px' }}>COMPANY</h6>
                  {['Careers', 'About Us', 'For Partners', 'Terms', 'Annual Return', 'Privacy Policy', 'Contact Us', 'Unsubscribe', 'Merger Hearing'].map(item => (
                    <a key={item} href="#" className="d-block mb-1 text-decoration-none" style={{color: '#a0a0a0', fontSize: '11px'}}>{item}</a>
                  ))}
                </Col>
                <Col xs={4}>
                  <h6 className="fw-bold mb-3" style={{ fontSize: '11px' }}>PARTNER SITES</h6>
                  {['realestate.com.au', 'realtor.com', '99.co', 'collinsdictionary.com'].map(item => (
                    <a key={item} href="#" className="d-block mb-1 text-decoration-none" style={{color: '#a0a0a0', fontSize: '11px'}}>{item}</a>
                  ))}
                </Col>
                <Col xs={4}>
                  <h6 className="fw-bold mb-3" style={{ fontSize: '11px' }}>EXPLORE</h6>
                  {['News', 'Home Loans', 'Sitemap', 'International'].map(item => (
                    <a key={item} href="#" className="d-block mb-1 text-decoration-none" style={{color: '#a0a0a0', fontSize: '11px'}}>{item}</a>
                  ))}
                </Col>
              </Row>
            </Col>

            <Col lg={3}>
              <h6 className="fw-bold mb-3" style={{ fontSize: '11px' }}>EXPERIENCE HOUSING APP ON MOBILE</h6>
              <div className="d-flex gap-2 mb-4">
                <div className="bg-dark border border-secondary p-2 rounded flex-fill text-center" style={{ fontSize: '10px', cursor: 'pointer' }}>App Store</div>
                <div className="bg-dark border border-secondary p-2 rounded flex-fill text-center" style={{ fontSize: '10px', cursor: 'pointer' }}>Google Play</div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: '#fff', padding: '5px' }}>
                    <div style={{ width: '100%', height: '100%', border: '2px solid #000' }}></div>
                </div>
                <p style={{ fontSize: '10px', color: '#a0a0a0' }}>Open camera & scan the QR code to Download the App</p>
              </div>

              <h6 className="fw-bold mb-3 mt-4" style={{ fontSize: '11px' }}>FOLLOW</h6>
              <div className="d-flex gap-3 fs-6 text-secondary">
                <FaFacebookF style={{cursor: 'pointer'}} /> 
                <FaInstagram style={{cursor: 'pointer'}} /> 
                <FaTwitter style={{cursor: 'pointer'}} /> 
                <FaLinkedinIn style={{cursor: 'pointer'}} /> 
                <FaYoutube style={{cursor: 'pointer'}} />
              </div>
            </Col>
          </Row>

          <div className="text-center py-3 border-top border-secondary opacity-50 small">
            © 2012-26 Locon Solutions Pvt. Ltd
          </div>
        </Container>
      </footer>
    </>
  );
};

export default HousingFooter;