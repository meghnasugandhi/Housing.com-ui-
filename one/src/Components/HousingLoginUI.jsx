import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';

const HousingLoginUI = ({ show, handleClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  // Reset phone number when modal opens
  useEffect(() => {
    if (show) setPhoneNumber('');
  }, [show]);

  // Logic: Enable button only if phone number is exactly 10 digits
  const isReady = phoneNumber.length === 10;

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleContinue = (e) => {
    // Prevent page refresh (Crucial for Enter key support)
    if (e) e.preventDefault();
    
    if (isReady) {
      alert(`Success! Moving to OTP for: ${phoneNumber}`);
      // handleNextStep(); 
    }
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered 
      contentClassName="rounded-0 border-0"
      backdrop="static"
      keyboard={false}
      style={{ zIndex: 2000 }}
    >
      <Modal.Header closeButton className="border-0 pb-0"></Modal.Header>

      <Modal.Body className="px-5 pb-5 pt-0 text-center">
        <div className="mb-4 d-flex justify-content-center">
          <div style={{ 
            backgroundColor: '#5e23dc', 
            padding: '10px 20px', 
            color: 'white', 
            fontWeight: 'bold',
            fontSize: '1.2rem' 
          }}>
            HOUSING<span style={{ fontSize: '0.8rem' }}>.COM</span>
          </div>
        </div>

        <h5 className="text-muted fw-normal mb-4" style={{ fontSize: '1.1rem' }}>
          Your Trusted Real Estate Partner
        </h5>

        {/* The onSubmit allows the Enter key to work automatically */}
        <Form onSubmit={handleContinue}>
          <div className="text-start mb-1" style={{ fontSize: '0.75rem', color: '#5e23dc', fontWeight: '600' }}>
            Enter Phone Number
          </div>
          
          <InputGroup className={`mb-4 border-bottom ${isReady ? 'border-success' : 'border-primary'} border-2`}>
            <Form.Select 
              variant="flush" 
              style={{ maxWidth: '80px', border: 'none', boxShadow: 'none', cursor: 'pointer' }}
            >
              <option>+91</option>
              <option>+1</option>
            </Form.Select>
            <Form.Control
              type="text"
              inputMode="numeric"
              placeholder="Enter 10 digit number"
              className="border-0 shadow-none"
              value={phoneNumber}
              onChange={handleInputChange}
              autoFocus
            />
          </InputGroup>

          <Button 
            type="submit" // Ensures form submission logic
            disabled={!isReady} 
            className="w-100 py-2 fw-bold"
            style={{ 
              // logic: If ready, show Success Green, else Light Gray
              backgroundColor: isReady ? '#198754' : '#d3d3d3', 
              transition: 'background-color 0.3s ease', // Smooth transition
              border: 'none',
              color: isReady ? 'white' : '#6c757d',
              cursor: isReady ? 'pointer' : 'not-allowed'
            }}
          >
            Continue
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HousingLoginUI;