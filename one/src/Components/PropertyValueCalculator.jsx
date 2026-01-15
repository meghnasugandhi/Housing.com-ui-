import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import valueSvg from '../Images/value.svg';

const PropertyValueCalculator = () => {
  const [mode, setMode] = useState('Rent');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [bedrooms, setBedrooms] = useState('2');
  const [furnishing, setFurnishing] = useState('Semi Furnished');

  const styles = {
    heroSection: {
      backgroundColor: '#b58e3e',
      paddingTop: '60px',
      paddingBottom: '150px',
      borderRadius: '0 0 40px 40px',
      position: 'relative',
      overflow: 'hidden'
    },
    logoLink: {
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer'
    },
    calculatorCard: {
      marginTop: '-120px',
      borderRadius: '24px',
      border: 'none',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      padding: '40px',
      zIndex: 2,
      position: 'relative',
      backgroundColor: '#fff'
    },
    label: {
      fontWeight: '600',
      fontSize: '14px',
      color: '#444',
      marginBottom: '10px'
    },
    toggleButton: {
      borderRadius: '8px',
      padding: '8px 25px',
      marginRight: '10px',
      fontSize: '14px',
      border: '1px solid #ddd',
      backgroundColor: '#fff',
      color: '#333',
      transition: 'all 0.2s ease'
    },
    activeToggle: {
      backgroundColor: '#f0eaff',
      borderColor: '#9b7bf7',
      color: '#9b7bf7',
      fontWeight: '600'
    },
    estimateBtn: {
      backgroundColor: mode === 'Rent' ? '#9b7bf7' : '#b58e3e',
      border: 'none',
      padding: '12px',
      fontSize: '18px',
      fontWeight: '600',
      borderRadius: '8px',
      width: '100%',
      color: 'white',
      marginTop: '10px'
    }
  };

  const handleEstimate = (e) => {
    e.preventDefault();
    alert(`Calculating ${mode} value for a ${bedrooms}BHK ${propertyType}...`);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={styles.heroSection}>
        <Container className="text-white">
          <div className="d-flex justify-content-between align-items-center mb-4">
            {/* Wrap the Logo in a Link component */}
            <Link to="/" style={styles.logoLink}>
              <h4 className="fw-bold m-0">HOUSING.COM</h4>
            </Link>
            
            <div className="d-flex align-items-center">
              <span className="me-3" style={{ fontSize: '14px', cursor: 'pointer' }}>Saved ❤️</span>
              <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '5px 15px', cursor: 'pointer' }}>
                <span style={{ color: '#9b7bf7' }}>☰ 👤</span>
              </div>
            </div>
          </div>
          <img 
            src={valueSvg} 
            alt="valuation icon" 
            style={{ position: 'absolute', right: '5%', bottom: '15%', opacity: '0.4', width: '180px' }} 
          />
        </Container>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <Card style={styles.calculatorCard}>
              <h2 className="fw-bold mb-1">Property Value Calculator</h2>
              <p className="text-muted mb-4">Let's calculate {mode.toLowerCase()} value in seconds</p>

              <Form onSubmit={handleEstimate}>
                <Form.Group className="mb-4">
                  <Form.Label style={styles.label}>I'm Looking to *</Form.Label>
                  <div className="d-flex">
                    <Button 
                      style={mode === 'Sell' ? {...styles.toggleButton, ...styles.activeToggle} : styles.toggleButton}
                      onClick={() => setMode('Sell')}
                    >Sell</Button>
                    <Button 
                      style={mode === 'Rent' ? {...styles.toggleButton, ...styles.activeToggle} : styles.toggleButton}
                      onClick={() => setMode('Rent')}
                    >Rent</Button>
                  </div>
                </Form.Group>

                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Label style={styles.label}>City *</Form.Label>
                    <Form.Control required type="text" placeholder="Enter city" className="border-0 border-bottom rounded-0 px-0 shadow-none" />
                  </Col>
                  <Col md={6} className="mb-4">
                    <Form.Label style={styles.label}>Project</Form.Label>
                    <Form.Control type="text" placeholder="Enter project" className="border-0 border-bottom rounded-0 px-0 shadow-none" />
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label style={styles.label}>Locality *</Form.Label>
                  <Form.Control required type="text" placeholder="Enter locality" className="border-0 border-bottom rounded-0 px-0 shadow-none" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={styles.label}>Property Type *</Form.Label>
                  <div className="d-flex flex-wrap gap-2">
                    {['Apartment', 'Independent Floor', 'Independent House', 'Villa'].map(type => (
                      <Button 
                        key={type} 
                        style={propertyType === type ? {...styles.toggleButton, ...styles.activeToggle} : styles.toggleButton}
                        onClick={() => setPropertyType(type)}
                      >{type}</Button>
                    ))}
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={styles.label}>Bedrooms *</Form.Label>
                  <div className="d-flex flex-wrap gap-2">
                    {['1', '2', '3', '4', '5+'].map(num => (
                      <Button 
                        key={num} 
                        style={bedrooms === num ? {...styles.toggleButton, ...styles.activeToggle, padding: '8px 20px'} : {...styles.toggleButton, padding: '8px 20px'}}
                        onClick={() => setBedrooms(num)}
                      >{num}</Button>
                    ))}
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={styles.label}>Size(sq.ft) *</Form.Label>
                  <Form.Control required type="number" placeholder="e.g. 1200" className="border-0 border-bottom rounded-0 px-0 shadow-none" />
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Label style={styles.label}>Furnishing *</Form.Label>
                  <div className="d-flex flex-wrap gap-2">
                    {['Unfurnished', 'Semi Furnished', 'Fully Furnished'].map(f => (
                      <Button 
                        key={f} 
                        style={furnishing === f ? {...styles.toggleButton, ...styles.activeToggle} : styles.toggleButton}
                        onClick={() => setFurnishing(f)}
                      >{f}</Button>
                    ))}
                  </div>
                </Form.Group>

                <Button type="submit" style={styles.estimateBtn}>
                  Estimate {mode} Price
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>

        <section className="py-5 mt-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Benefits</h2>
            <div className="text-warning fs-3 mb-2" style={{lineHeight: 0.5}}>〰〰</div>
            <p className="fw-bold mt-3">Why should you choose Housing.com for property valuation?</p>
          </div>

          <Row className="text-center pb-5">
            <Col md={4} className="mb-4">
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center" style={{width:'80px', height:'80px', backgroundColor:'#f3d9a2', borderRadius:'20px'}}>
                <img src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png" width="40" alt="icon" />
              </div>
              <p className="fw-bold px-4">India's Insights derived from over 10 lakh listings</p>
            </Col>
            <Col md={4} className="mb-4">
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center" style={{width:'80px', height:'80px', backgroundColor:'#f3d9a2', borderRadius:'20px'}}>
                <img src="https://cdn-icons-png.flaticon.com/512/2640/2640821.png" width="40" alt="icon" />
              </div>
              <p className="fw-bold px-4">Exhaustive data-backed repository of rates and trends</p>
            </Col>
            <Col md={4} className="mb-4">
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center" style={{width:'80px', height:'80px', backgroundColor:'#f3d9a2', borderRadius:'20px'}}>
                <img src="https://cdn-icons-png.flaticon.com/512/3126/3126647.png" width="40" alt="icon" />
              </div>
              <p className="fw-bold px-4">Trusted by over 1.5 cr buyers, sellers and partners</p>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default PropertyValueCalculator;