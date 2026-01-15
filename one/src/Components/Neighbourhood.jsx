import React, { useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { properties } from '../data/properties';
import { FaBed, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const Neighbourhood = () => {
  // 1. Create a reference to the scrollable div
  const scrollRef = useRef(null);

  // 2. Function to handle scrolling
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <Container className="py-5 position-relative">
      <h3 className="mb-4 fw-normal" style={{ fontSize: '1.75rem' }}>
        Our Top <strong>Neighbourhood PGs</strong>
      </h3>
      
      {/* 3. Navigation Buttons */}
      <div className="d-none d-md-block">
        <Button 
          variant="light" 
          className="rounded-circle shadow-sm position-absolute start-0 top-50 translate-middle-y z-3 ms-4"
          onClick={() => scroll('left')}
          style={{ width: '45px', height: '45px', border: '1px solid #eee' }}
        >
          <FaChevronLeft />
        </Button>
        <Button 
          variant="light" 
          className="rounded-circle shadow-sm position-absolute end-0 top-50 translate-middle-y z-3 me-4"
          onClick={() => scroll('right')}
          style={{ width: '45px', height: '45px', border: '1px solid #eee' }}
        >
          <FaChevronRight />
        </Button>
      </div>

      {/* 4. The Scroll Container (Attached to Ref) */}
      <div 
        ref={scrollRef}
        className="d-flex overflow-auto pb-4 gap-3 hide-scrollbar" 
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {properties.map((item) => (
          <div 
            key={item.id} 
            style={{ minWidth: '310px', flex: '0 0 auto', scrollSnapAlign: 'start' }}
          >
            <Card className="border-0 shadow-sm h-100 rounded-3 overflow-hidden border">
              <div style={{ height: '200px', backgroundColor: '#f8f9fa' }}>
                <Card.Img 
                  variant="top" 
                  src={item.images[0]} 
                  className="h-100 w-100 object-fit-cover"
                />
              </div>

              <Card.Body className="p-0">
                <div className="p-3 d-flex align-items-start">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center text-white me-3"
                    style={{ 
                        width: '44px', height: '44px', 
                        backgroundColor: '#5e35b1', 
                        fontSize: '1.1rem', fontWeight: '500', flexShrink: 0 
                    }}
                  >
                    {item.title.charAt(0)}
                  </div>

                  <div className="flex-grow-1 overflow-hidden">
                    <div className="d-flex justify-content-between">
                      <div className="pe-2 text-truncate">
                        <h6 className="mb-0 text-truncate fw-semibold" style={{ fontSize: '0.9rem' }}>
                            {item.title}
                        </h6>
                        <small className="text-muted d-block text-truncate" style={{ fontSize: '0.75rem' }}>
                            {item.locality || item.city}
                        </small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold" style={{ fontSize: '0.95rem', color: '#212529' }}>
                           {item.listingType === 'sale' ? item.price.display.split(' ')[0] : item.rent.display.split(' ')[0]}
                        </div>
                        <small className="text-muted d-block" style={{ fontSize: '10px', marginTop: '-3px' }}>
                            Onwards
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-top p-2 bg-light d-flex align-items-center px-3" style={{ minHeight: '42px' }}>
                   <FaBed className="text-secondary me-2" size={14} />
                   <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                        {item.bhk ? `${item.bhk} BHK ` : ''} 
                        {item.propertyType.replace('_', ' ').charAt(0).toUpperCase() + item.propertyType.slice(1)}
                   </small>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .z-3 { z-index: 1050; }
      `}</style>
    </Container>
  );
};

export default Neighbourhood;