import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const brokerData = [
  { title: "Housing Expert Pro", tag: "Recommended", color: "#008CBA", features: ["Highest visibility across all categories", "Reusable slots for multiple listings", "Highlight brand with 'Locality Champion' tag"] },
  { title: "Housing Expert", tag: "Enhanced", color: "#F39C12", features: ["Preferential Visibility in Search", "Highlight brand with 'Authentic' tag", "Access to on-ground verification"] },
  { title: "Premier", tag: "Value", color: "#2ECC71", features: ["Reusable slots for multiple listings", "Prime Agent tag included", "Unlimited self-verification"] },
  { title: "Housing Select", tag: "Starter", color: "#95A5A6", features: ["Showcase properties to buyers", "Manage via user-friendly dashboard", "Basic visibility package"] }
];

const BrokerPlans = () => (
  <Row className="g-4">
    {brokerData.map((plan, idx) => (
      <Col key={idx} lg={3} md={6}>
        <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
          <div style={{ backgroundColor: plan.color, color: '#fff', fontSize: '11px', padding: '3px 12px', width: 'fit-content', marginLeft: 'auto', borderRadius: '0 0 0 8px', fontWeight: 'bold' }}>
            {plan.tag}
          </div>
          <Card.Body className="pt-3">
            <Card.Title className="text-center mb-4 fw-bold" style={{ fontSize: '1.1rem' }}>{plan.title}</Card.Title>
            <p className="fw-bold mb-2" style={{ fontSize: '14px' }}>Features</p>
            <ul className="list-unstyled">
              {plan.features.map((feat, i) => (
                <li key={i} className="mb-2" style={{ fontSize: '13px', display: 'flex' }}>
                  <span style={{ color: '#ffc107', marginRight: '8px' }}>▲</span> {feat}
                </li>
              ))}
            </ul>
          </Card.Body>
          <Card.Footer className="bg-white border-0 pb-4">
            <Button variant="outline-primary" className="w-100 mb-2 rounded-2 py-2" style={{ borderColor: '#6f42c1', color: '#6f42c1', fontSize: '14px' }}>Call Customer Support</Button>
            <Button className="w-100 rounded-2 py-2" style={{ backgroundColor: '#6f42c1', border: 'none', fontSize: '14px' }}>Request More Info</Button>
          </Card.Footer>
        </Card>
      </Col>
    ))}
  </Row>
);

export default BrokerPlans;