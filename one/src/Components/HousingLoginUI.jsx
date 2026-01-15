import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';

const HousingLoginUI = ({ show, handleClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (show) {
      setPhoneNumber('');
      setError('');
      setIsValid(false);
    }
  }, [show]);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setPhoneNumber(value);
      
      // Validate when user types
      if (value.length === 10) {
        setIsValid(true);
        setError('');
      } else {
        setIsValid(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    
    // Phone is valid, proceed with login
    console.log('Phone number submitted:', phoneNumber);
    alert(`Success! Moving to OTP for: ${phoneNumber}`);
    // handleClose(); // You can close the modal here if needed
  };

  const handleContinue = () => {
    if (phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    
    // Phone is valid, proceed with login
    console.log('Phone number submitted:', phoneNumber);
    alert(`Success! Moving to OTP for: ${phoneNumber}`);
    // handleClose(); // You can close the modal here if needed
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered 
      contentClassName="rounded-0 border-0"
      style={{ zIndex: 1100 }}
    >
      <Modal.Header closeButton className="border-0 pb-0"></Modal.Header>
      <Modal.Body className="px-5 pb-5 pt-0 text-center">
        <div className="mb-4 d-flex justify-content-center">
          <div style={{ backgroundColor: '#5e23dc', padding: '10px 20px', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
            HOUSING<span style={{ fontSize: '0.8rem' }}>.COM</span>
          </div>
        </div>
        <h5 className="text-muted fw-normal mb-4" style={{ fontSize: '1.1rem' }}>
          Your Trusted Real Estate Partner
        </h5>
        <Form onSubmit={handleSubmit}>
          <div className="text-start mb-1" style={{ fontSize: '0.75rem', color: '#5e23dc', fontWeight: '600' }}>
            Enter Phone Number
          </div>
          <InputGroup className={`mb-2 border-bottom ${isValid ? 'border-success' : error ? 'border-danger' : 'border-primary'} border-2`}>
            <Form.Select variant="flush" style={{ maxWidth: '80px', border: 'none', boxShadow: 'none' }}>
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </Form.Select>
            <Form.Control 
              type="tel" 
              className="border-0 shadow-none" 
              placeholder="Enter 10 digit number"
              value={phoneNumber}
              onChange={handleInputChange}
              maxLength={10}
            />
          </InputGroup>
          
          {/* Error message */}
          <div className="text-start mb-3" style={{ minHeight: '20px' }}>
            {error && <span className="text-danger" style={{ fontSize: '0.8rem' }}>{error}</span>}
            {isValid && <span className="text-success" style={{ fontSize: '0.8rem' }}>✓ Valid phone number</span>}
          </div>
          
          <Button 
            type="submit"
            className="w-100 py-2 fw-bold"
            style={{ 
              backgroundColor: isValid ? '#198754' : '#d3d3d3', 
              border: 'none',
              color: isValid ? 'white' : '#6c757d',
              cursor: isValid ? 'pointer' : 'not-allowed'
            }}
            disabled={!isValid}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HousingLoginUI;