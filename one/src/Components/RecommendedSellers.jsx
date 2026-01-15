import React, { useRef } from 'react';
import { Container, Card, Button, Badge } from 'react-bootstrap';
import { ChevronRight, TelephoneFill, ChevronLeft } from 'react-bootstrap-icons';

const RecommendedSellers = () => {
  const scrollRef = useRef(null);

  // Data based on your image
  const sellers = [
    { 
      name: "Kajal Sharma", 
      experience: "11 Yrs", 
      properties: "75", 
      localities: ["Neb Sarai", "Freedom Fighters Encla"], 
      headerColor: "#9c7c44" 
    },
    { 
      name: "SRI BALAJI GROU...", 
      experience: "0.5 Yrs", 
      properties: "62", 
      localities: ["Chengalpattu", "Kundrathur"], 
      headerColor: "#323b94" 
    },
    { 
      name: "One Acre Properties", 
      experience: "9 Yrs", 
      properties: "25", 
      localities: ["Punawale", "Kiwale"], 
      headerColor: "#ff6d00" 
    },
    { 
      name: "Vibrant Prope", 
      experience: "10 Yrs", 
      properties: "15", 
      localities: ["Shewalewadi", "Hadapsar"], 
      headerColor: "#e3e0c7",
      isInitial: true // To show the "VP" circle instead of an icon
    },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Container className="py-5">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Recommended sellers</h2>
        <p className="text-muted">Sellers with complete knowledge about locality</p>
      </div>

      <div className="position-relative">
        {/* Navigation Buttons */}
        <Button 
          variant="white" 
          className="position-absolute top-50 start-0 translate-middle rounded-circle shadow border d-none d-md-flex align-items-center justify-content-center"
          onClick={() => scroll('left')}
          style={{ width: '40px', height: '40px', zIndex: 10, left: '0' }}
        >
          <ChevronLeft />
        </Button>

        <Button 
          variant="white" 
          className="position-absolute top-50 end-0 translate-middle rounded-circle shadow border d-none d-md-flex align-items-center justify-content-center"
          onClick={() => scroll('right')}
          style={{ width: '40px', height: '40px', zIndex: 10, right: '0' }}
        >
          <ChevronRight />
        </Button>

        {/* Horizontal Scroll Wrapper */}
        <div 
          ref={scrollRef}
          className="d-flex overflow-auto gap-3 no-scrollbar pb-3"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory'
          }}
        >
          {sellers.map((seller, idx) => (
            <Card 
              key={idx} 
              className="border-0 shadow-sm flex-shrink-0" 
              style={{ width: '320px', borderRadius: '12px', scrollSnapAlign: 'start' }}
            >
              {/* Header with Background Color */}
              <div 
                className="p-3 d-flex align-items-center text-white position-relative" 
                style={{ 
                  backgroundColor: seller.headerColor, 
                  borderRadius: '12px 12px 0 0', 
                  height: '90px' 
                }}
              >
                <div 
                  className="bg-white rounded-2 me-3 d-flex align-items-center justify-content-center fw-bold" 
                  style={{ 
                    width: '45px', 
                    height: '45px', 
                    color: seller.headerColor,
                    fontSize: '14px',
                    opacity: 0.9
                  }}
                >
                  {seller.isInitial ? "VP" : "LOGO"}
                </div>
                <h6 className="mb-0 fw-bold text-truncate" style={{ maxWidth: '200px' }}>
                  {seller.name} <ChevronRight size={14} className="ms-1" />
                </h6>
              </div>

              {/* Card Body */}
              <Card.Body className="pt-3">
                <div className="d-flex justify-content-between mb-3 text-muted" style={{ fontSize: '0.85rem' }}>
                  <span><strong className="text-dark">{seller.experience}</strong> Experience</span>
                  <span><strong className="text-dark">{seller.properties}</strong> Properties</span>
                </div>

                <div className="mb-4 d-flex flex-wrap gap-1">
                  {seller.localities.map((loc, i) => (
                    <Badge 
                      key={i} 
                      bg="light" 
                      text="dark" 
                      className="border fw-normal px-2 py-1" 
                      style={{ fontSize: '0.75rem', borderRadius: '15px' }}
                    >
                      {loc}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="outline-primary" 
                  className="w-100 rounded-pill d-flex align-items-center justify-content-center py-2 fw-bold"
                  style={{ 
                    borderColor: '#6c5ce7', 
                    color: '#6c5ce7',
                    borderWidth: '1.5px'
                  }}
                >
                  <TelephoneFill className="me-2" /> Show Contact
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .btn-outline-primary:hover {
          background-color: #6c5ce7 !important;
          border-color: #6c5ce7 !important;
          color: white !important;
        }
      `}</style>
    </Container>
  );
};

export default RecommendedSellers;