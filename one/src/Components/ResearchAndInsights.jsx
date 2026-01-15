import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

// Corrected Image Imports
import housingresearch from "../Images/housinginsights.jpg";
import cityinsights from "../Images/cityinsights.jpg";
import pricetrends from "../Images/pricetrend.jpg";

const insightData = [
  {
    id: 1,
    title: "Price Trends",
    description: "Find property rates & price trends of top locations",
    image: pricetrends, // Using the imported variable
  },
  {
    id: 2,
    title: "City Insights",
    description: "Get to know about top cities before you invest",
    image: cityinsights, // Using the imported variable
  },
  {
    id: 3,
    title: "Housing Research",
    description: "Find reports on Indian residential market",
    image: housingresearch, // Using the imported variable
  }
];

const ResearchAndInsights = () => {
  return (
    <Container className="py-5">
      {/* Header Section */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1" style={{ color: '#444' }}>Research and Insights</h2>
        <p className="text-muted">Explore useful real estate insights</p>
      </div>

      {/* Cards Row */}
      <Row className="g-4">
        {insightData.map((item) => (
          <Col key={item.id} md={4} xs={12}>
            <Card 
              className="h-100 text-center border-secondary-subtle border-1 shadow-sm transition-hover"
              style={{ borderRadius: '12px', cursor: 'pointer' }}
            >
              <Card.Body className="d-flex flex-column align-items-center p-4">
                {/* Illustration Image Container */}
                <div className="mb-4 d-flex align-items-center justify-content-center" style={{ height: '180px' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="img-fluid" 
                    style={{ maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Text Content */}
                <Card.Title className="fw-bold d-flex align-items-center mb-2">
                  {item.title}
                  <ChevronRight size={16} className="ms-2 mt-1" />
                </Card.Title>
                
                <Card.Text className="text-muted small px-3">
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Custom Hover Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .transition-hover {
          transition: all 0.3s ease;
        }
        .transition-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          border-color: #dee2e6 !important;
        }
      `}} />
    </Container>
  );
};

export default ResearchAndInsights;