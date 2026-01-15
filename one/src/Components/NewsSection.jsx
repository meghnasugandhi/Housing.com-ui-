import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const NewsSection = () => {
  const articles = [
    {
      id: 1,
      image: "https://picsum.photos/id/15/400/250",
      title: "Bangalore Metro map, route, stations and upcoming lines 2025",
      description: "The Namma Metro network in Bangalore is on an expansion spree. From Bengaluru Airport in north to Anjanapura in south.",
      author: "Harini Balasubramanian",
      date: "Dec 2025"
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1/400/250",
      title: "Co-living for students in India: Benefits and challenges",
      description: "Co-living offers students a lifestyle built around affordability, convenience, and connection.",
      author: "Dhwani Meharchandani",
      date: "Nov 2025"
    },
    {
      id: 3,
      image: "https://picsum.photos/id/20/400/250",
      title: "Housing.com launches India's largest online property festival",
      description: "The property festival anticipates to engage with over 55 million home seekers with trusted partners.",
      author: "Housing News Desk",
      date: "Sep 2025"
    }
  ];

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">News and Articles</h2>
          <p className="text-muted small">Read what's happening in Real Estate</p>
        </div>
        <Button 
          variant="outline-primary" 
          size="sm"
          style={{ borderRadius: '8px', color: '#6f42c1', borderColor: '#e2d9f3' }}
        >
          See all news and articles &rsaquo;
        </Button>
      </div>

      <Row className="g-4">
        {articles.map((article) => (
          <Col key={article.id} md={4}>
            {/* h-100 makes the card take full column height */}
            <Card className="h-100 border-0 shadow-sm d-flex flex-column" style={{ borderRadius: '12px' }}>
              <Card.Img 
                variant="top" 
                src={article.image} 
                style={{ borderRadius: '12px 12px 0 0', height: '180px', objectFit: 'cover' }}
              />
              {/* d-flex flex-column allows the child (footer) to be pushed down */}
              <Card.Body className="d-flex flex-column px-3 pb-3">
                <Card.Title className="fw-bold fs-6 mb-2" style={{ minHeight: '44px' }}>
                  {article.title}
                </Card.Title>
                <Card.Text className="text-muted small mb-3">
                  {article.description}
                </Card.Text>
                
                {/* mt-auto pushes this div to the very bottom of the Card.Body */}
                <div className="mt-auto pt-3 border-top d-flex justify-content-between">
                  <span className="text-muted small fw-medium">{article.author}</span>
                  <span className="text-muted small">{article.date}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsSection;