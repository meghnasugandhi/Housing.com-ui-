import React, { useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { properties } from '../data/properties'; // Ensure path is correct

const AddedProperties = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by exactly one view width
      const scrollAmount = clientWidth; 
      const target = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: target,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>
        {`
          .added-props-wrapper {
            position: relative;
            padding: 0 10px;
          }

          .added-props-container {
            display: flex;
            overflow-x: auto;
            gap: 20px;
            padding: 15px 5px 30px 5px;
            scroll-behavior: smooth;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE/Edge */
          }

          .added-props-container::-webkit-scrollbar {
            display: none; /* Chrome/Safari */
          }

          .prop-card {
            /* Logic: (100% - total gap space) / number of cards */
            /* 3 gaps of 20px = 60px total gap */
            flex: 0 0 calc((100% - 60px) / 4); 
            min-width: 250px; /* Safety for smaller screens */
            border: 1px solid #f0f0f0 !important;
            border-radius: 12px !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            transition: transform 0.3s ease;
          }

          @media (max-width: 1200px) {
            .prop-card { flex: 0 0 calc((100% - 40px) / 3); } /* 3 cards */
          }

          @media (max-width: 992px) {
            .prop-card { flex: 0 0 calc((100% - 20px) / 2); } /* 2 cards */
          }

          @media (max-width: 576px) {
            .prop-card { flex: 0 0 85%; } /* 1.15 cards for "peek" effect */
          }

          .prop-card:hover {
            transform: translateY(-5px);
          }

          .prop-card img {
            height: 160px;
            object-fit: cover;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
          }

          .btn-contact-outline {
            border: 1.5px solid #6f42c1 !important;
            color: #6f42c1 !important;
            background-color: transparent !important;
            font-weight: 600 !important;
            border-radius: 8px !important;
            padding: 8px 0 !important;
          }

          .btn-contact-outline:hover {
            background-color: #6f42c1 !important;
            color: #fff !important;
          }

          .scroll-btn {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: #fff;
            border: 1px solid #eee;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .scroll-btn:hover {
            background: #f8f9fa;
            color: #6f42c1;
          }

          .left-arrow { left: -22px; }
          .right-arrow { right: -22px; }
        `}
      </style>

      <Container className="py-5">
        <div className="mb-4">
          <h2 className="fw-bold mb-1" style={{ color: '#2c3e50' }}>Newly-added properties</h2>
          <p className="text-muted">Fresh listings to check out</p>
        </div>

        <div className="added-props-wrapper">
          {/* Navigation Arrows */}
          <button className="scroll-btn left-arrow d-none d-md-flex" onClick={() => handleScroll('left')}>
            &#10094;
          </button>
          <button className="scroll-btn right-arrow d-none d-md-flex" onClick={() => handleScroll('right')}>
            &#10095;
          </button>

          {/* Horizontal Scroll Wrapper */}
          <div className="added-props-container" ref={scrollRef}>
            {properties.map((item) => (
              <Card key={item.id} className="prop-card">
                <Card.Img variant="top" src={item.images[0]} alt={item.title} />
                <Card.Body className="d-flex flex-column px-3">
                  <Card.Title className="fs-6 fw-bold mb-1 text-truncate">
                    {item.project || item.title}
                  </Card.Title>
                  
                  <div className="text-muted small mb-1">
                    {item.bhk ? `${item.bhk} BHK ` : ''} 
                    {item.propertyType.replace('_', ' ')}
                  </div>
                  
                  <div className="text-muted small mb-3 text-truncate">
                    {item.locality}, {item.city}
                  </div>

                  <div className="mt-auto">
                    <div className="fw-bold fs-5 mb-3">
                      {item.listingType === 'sale' ? item.price.display : item.rent.display}
                    </div>
                    <Button className="w-100 btn-contact-outline">
                      Contact
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddedProperties;