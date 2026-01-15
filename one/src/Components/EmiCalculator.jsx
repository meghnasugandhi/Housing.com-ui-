import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Table } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmiCalculator = () => {
  // State for inputs
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [tenure, setTenure] = useState(10);
  const [interestRate, setInterestRate] = useState(9);

  // State for outputs
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emiCalc = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    setEmi(Math.round(emiCalc));
    setTotalPayment(Math.round(emiCalc * n));
    setTotalInterest(Math.round((emiCalc * n) - loanAmount));
  }, [loanAmount, tenure, interestRate]);

  const pieData = {
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#4B208C', '#845EC2'],
        borderWidth: 0,
      },
    ],
  };

  const formatCurrency = (val) => "₹ " + new Intl.NumberFormat('en-IN').format(val);

  return (
    <Container className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Card className="shadow-sm border-0">
        <Card.Body className="p-4">
          <h4 className="mb-4">Home Loan EMI Calculator</h4>
          <Row>
            {/* Left Side: Inputs */}
            <Col md={6} className="pe-md-5">
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Loan Amount (₹)</Form.Label>
                <Form.Range 
                  min={100000} max={50000000} step={100000}
                  value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
                <Form.Control type="text" value={formatCurrency(loanAmount)} readOnly className="bg-light border-0 fw-bold fs-5" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Tenure (Years)</Form.Label>
                <Form.Range 
                  min={2} max={30} step={1}
                  value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                />
                <Form.Control type="text" value={tenure} readOnly className="bg-light border-0 fw-bold fs-5" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Rate of Interest (%)</Form.Label>
                <Form.Range 
                  min={7} max={15} step={0.1}
                  value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <Form.Control type="text" value={interestRate} readOnly className="bg-light border-0 fw-bold fs-5" />
              </Form.Group>
            </Col>

            {/* Right Side: Results & Chart */}
            <Col md={6} className="text-center border-start">
              <p className="text-muted mb-0">Your EMI Per Month</p>
              <h2 className="display-6 fw-bold mb-4">{formatCurrency(emi)}</h2>
              
              <div style={{ maxWidth: '250px', margin: '0 auto' }}>
                <Pie data={pieData} options={{ cutout: '0%' }} />
              </div>

              <Row className="mt-4 text-start">
                <Col xs={6} className="mb-3">
                  <small className="text-muted d-block">• Total Interest</small>
                  <span className="fw-bold">{formatCurrency(totalInterest)}</span>
                </Col>
                <Col xs={6} className="mb-3">
                  <small className="text-muted d-block">• Processing Fees</small>
                  <span className="fw-bold">₹ 25,000</span>
                </Col>
                <Col xs={12}>
                  <small className="text-muted d-block">• Loan Amount</small>
                  <span className="fw-bold">{formatCurrency(loanAmount)}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Amortization Section */}
      <Card className="mt-4 shadow-sm border-0">
        <Card.Body>
          <h5 className="mb-3">Home Loan Amortization Table</h5>
          <Table responsive hover>
            <thead className="table-light">
              <tr>
                <th>Year</th>
                <th>Principal (₹)</th>
                <th>Interest (₹)</th>
                <th>Balance (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026</td>
                <td>3,23,170</td>
                <td>4,36,885</td>
                <td>46,76,830</td>
              </tr>
              {/* You can map logic here to generate full rows based on state */}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmiCalculator;