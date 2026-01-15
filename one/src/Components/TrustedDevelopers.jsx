import React, { useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { properties } from '../data/properties';

const TrustedDevelopers = () => {
  const scrollRef = useRef(null);

  // Constants for 3-card layout
  const CARDS_VISIBLE = 3;
  const GAP = 24; // This matches 'gap-4' in Bootstrap (1.5rem = 24px)

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // Scroll by the width of the visible container
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const developerProjects = properties.filter(p => p.listingType === "sale");

  return (
    <Container className="py-5">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Projects by trusted developers</h2>
        <p className="text-muted">Exclusive showcase of top projects</p>
      </div>

      <div className="position-relative">
        {/* Navigation Arrows */}
        <Button 
          variant="white" 
          className="position-absolute top-50 start-0 translate-middle rounded-circle shadow border d-none d-md-flex align-items-center justify-content-center"
          onClick={() => scroll('left')}
          style={{ width: '45px', height: '45px', zIndex: 10, left: '0' }}
        >
          <ChevronLeft size={24} />
        </Button>

        <Button 
          variant="white" 
          className="position-absolute top-50 end-0 translate-middle rounded-circle shadow border d-none d-md-flex align-items-center justify-content-center"
          onClick={() => scroll('right')}
          style={{ width: '45px', height: '45px', zIndex: 10, right: '0' }}
        >
          <ChevronRight size={24} />
        </Button>

        {/* Horizontal Scroll Wrapper */}
        <div 
          ref={scrollRef}
          className="d-flex overflow-auto gap-4 no-scrollbar pb-3"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory' // This makes cards "snap" into place
          }}
        >
          {developerProjects.map((item) => (
            <Card 
              key={item.id} 
              className="border shadow-sm flex-shrink-0" 
              style={{ 
                // Logic: (Full Width - Total Gaps) / Number of Cards
                width: `calc((100% - (${GAP * (CARDS_VISIBLE - 1)}px)) / ${CARDS_VISIBLE})`,
                minWidth: '300px', // Fallback for small screens
                borderRadius: '12px',
                scrollSnapAlign: 'start'
              }}
            >
              <Card.Img 
                variant="top" 
                src={item.images[0]} 
                style={{ height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
              />
              <Card.Body>
                <Card.Title className="fw-bold mb-0 text-truncate">
                  {item.project || item.title}
                </Card.Title>
                <Card.Text className="text-muted small mb-3">
                  by {item.listedBy || "Trusted Developer"}
                </Card.Text>
                
                <div className="mb-3">
                  <div className="text-dark small fw-medium">
                    {item.bhk ? `${item.bhk} BHK ` : ""}{item.propertyType.replace('_', ' ')}
                  </div>
                  <div className="text-muted small text-truncate">
                    {item.locality}, {item.city}
                  </div>
                </div>

                <div className="fw-bold fs-5 color-primary">
                  {item.price?.display || item.rent?.display}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TrustedDevelopers;
