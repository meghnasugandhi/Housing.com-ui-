import React, { useRef } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaTrain, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Mock data based on your image
const establishments = [
  { id: 1, name: "Halasuru Metro Station" },
  { id: 2, name: "South End Circle Metro Station" },
  { id: 3, name: "Kuvempu Road Metro Station" },
  { id: 4, name: "M.G. Road Metro Station" },
  { id: 5, name: "Yeshwantpur Industry Metro..." },
  { id: 6, name: "Trinity Metro Station" },
  { id: 7, name: "Rashtreeya Vidyalaya Road ..." },
  { id: 8, name: "Indiranagar Metro Station" },
  { id: 9, name: "Cubbon Park Metro Station" },
];

const Establishments = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll 80% of view
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <Container className="py-5 position-relative">
      <h3 className="mb-4 fw-normal">
        Top Establishments <strong>In The City</strong>
      </h3>

      {/* Navigation Buttons */}
      <Button 
        variant="white" 
        className="rounded-circle shadow position-absolute start-0 top-50 translate-middle-y z-3 ms-2 border"
        onClick={() => scroll('left')}
        style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <FaChevronLeft className="text-muted" />
      </Button>

      <Button 
        variant="white" 
        className="rounded-circle shadow position-absolute end-0 top-50 translate-middle-y z-3 me-2 border"
        onClick={() => scroll('right')}
        style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <FaChevronRight className="text-muted" />
      </Button>

      {/* Scrollable Grid Container */}
      <div 
        ref={scrollRef}
        className="d-flex overflow-auto pb-4 gap-3 hide-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* We wrap items in groups of 2 to create the vertical columns seen in the UI */}
        {Array.from({ length: Math.ceil(establishments.length / 2) }).map((_, colIndex) => (
          <div key={colIndex} className="d-flex flex-column gap-3" style={{ minWidth: '320px', scrollSnapAlign: 'start' }}>
            {establishments.slice(colIndex * 2, colIndex * 2 + 2).map((item) => (
              <div 
                key={item.id} 
                className="d-flex align-items-center border rounded shadow-sm overflow-hidden bg-white"
                style={{ height: '80px' }}
              >
                {/* Text Section */}
                <div className="flex-grow-1 px-3 py-2 text-truncate">
                  <span style={{ fontSize: '0.9rem', color: '#444' }}>{item.name}</span>
                </div>
                
                {/* Icon Section (Purple Background) */}
                <div 
                  className="d-flex align-items-center justify-content-center h-100"
                  style={{ backgroundColor: '#ebe5ff', width: '60px', flexShrink: 0 }}
                >
                  <FaTrain style={{ color: '#6f42c1', fontSize: '1.2rem' }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .z-3 { z-index: 10; }
      `}</style>
    </Container>
  );
};

export default Establishments;