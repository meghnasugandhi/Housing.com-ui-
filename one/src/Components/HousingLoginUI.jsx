import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';

const HousingLoginUI = ({ show, handleClose }) => {
  const [loginMethod, setLoginMethod] = useState('phone'); // 'phone' or 'email'
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Reset state when modal opens/closes or when switching methods
  useEffect(() => {
    setInputValue('');
    setError('');
    setIsValid(false);
  }, [show, loginMethod]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (loginMethod === 'phone') {
      const numericValue = value.replace(/\D/g, ''); // Remove non-digits
      if (numericValue.length <= 10) {
        setInputValue(numericValue);
        if (numericValue.length === 10) {
          setIsValid(true);
          setError('');
        } else {
          setIsValid(false);
        }
      }
    } else {
      // Email Logic
      setInputValue(value);
      if (validateEmail(value)) {
        setIsValid(true);
        setError('');
      } else {
        setIsValid(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setError(`Please enter a valid ${loginMethod}`);
      return;
    }
    
    console.log(`${loginMethod} submitted:`, inputValue);
    alert(`Success! Proceeding with ${loginMethod}: ${inputValue}`);
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
            {loginMethod === 'phone' ? 'Enter Phone Number' : 'Enter Email Address'}
          </div>

          <InputGroup className={`mb-2 border-bottom ${isValid ? 'border-success' : error ? 'border-danger' : 'border-primary'} border-2`}>
            {loginMethod === 'phone' && (
              <Form.Select variant="flush" style={{ maxWidth: '80px', border: 'none', boxShadow: 'none' }}>
                <option>+91</option>
                <option>+1</option>
              </Form.Select>
            )}
            <Form.Control 
              type={loginMethod === 'phone' ? "tel" : "email"} 
              className="border-0 shadow-none" 
              placeholder={loginMethod === 'phone' ? "Enter 10 digit number" : "e.g. name@email.com"}
              value={inputValue}
              onChange={handleInputChange}
            />
          </InputGroup>
          
          <div className="text-start mb-3" style={{ minHeight: '20px' }}>
            {error && <span className="text-danger" style={{ fontSize: '0.8rem' }}>{error}</span>}
            {isValid && <span className="text-success" style={{ fontSize: '0.8rem' }}>✓ Valid {loginMethod}</span>}
          </div>
          
          <Button 
            type="submit"
            className="w-100 py-2 fw-bold mb-3"
            style={{ 
              backgroundColor: isValid ? '#198754' : '#d3d3d3', 
              border: 'none',
              color: isValid ? 'white' : '#6c757d',
              cursor: isValid ? 'pointer' : 'not-allowed'
            }}
            disabled={!isValid}
          >
            Continue
          </Button>

          {/* Toggle Button */}
          <div className="text-center">
            <span 
              onClick={() => setLoginMethod(loginMethod === 'phone' ? 'email' : 'phone')}
              style={{ color: '#5e23dc', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500' }}
            >
              Login with {loginMethod === 'phone' ? 'Email' : 'Phone Number'}
            </span>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HousingLoginUI;