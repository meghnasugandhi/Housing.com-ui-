import React, { useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const Coliving = () => {
  const swiperRef = useRef(null);

  const partners = [
    {
      logo: "https://i.imgur.com/7Wk4p7m.png",
      title: "Making renting hassle-free with Zero Deposit",
      buttonText: "View Properties",
      sideImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400", 
      overlayText: "ZERO DEPOSIT",
    },
    {
      logo: "https://i.imgur.com/8R0W0fS.png",
      title: "More than a home - Join The Party at Colive",
      buttonText: "View Properties",
      sideImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400",
      overlayText: "JOIN THE PARTY",
    },
    {
      logo: "https://i.imgur.com/vH3u7pX.png",
      title: "Enjoy high comfort & privacy without any compromise",
      buttonText: "View Properties",
      sideImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400",
      overlayText: "LIVE BETTER",
    },
    {
      logo: "https://i.imgur.com/7Wk4p7m.png", 
      title: "Premium spaces for modern professionals",
      buttonText: "View Properties",
      sideImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=400",
      overlayText: "MODERN LIVING",
    },
    {
      logo: "https://i.imgur.com/8R0W0fS.png",
      title: "Discover community living in the heart of the city",
      buttonText: "View Properties",
      sideImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=400",
      overlayText: "CITY CENTER",
    }
  ];

  // Custom Navigation Styles
  const navBtnStyle = {
    backgroundColor: 'black',
    width: '45px',
    height: '45px',
    cursor: 'pointer',
    border: '1px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    zIndex: 10,
    transform: 'translateY(-50%)'
  };

  return (
    <div style={{ backgroundColor: '#1c1c1c', padding: '80px 0', color: 'white', overflow: 'hidden' }}>
      <Container>
        <div className="mb-4">
          <h2 className="fw-normal mb-1">Exclusive <span className="fw-bold">Co-Living Partners</span></h2>
          <p style={{ color: '#888', fontSize: '1.1rem' }}>Co-living is the new way of Urban Living</p>
        </div>

        <div className="position-relative px-lg-2">
          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {partners.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="border-0" style={{ borderRadius: '4px', overflow: 'hidden', height: '220px' }}>
                  <div className="d-flex h-100">
                    {/* Left Panel */}
                    <div className="bg-white d-flex flex-column justify-content-between p-4" style={{ width: '60%' }}>
                      <div>
                        <div className="mb-3" style={{ height: '35px' }}>
                          <img src={item.logo} alt="logo" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                        </div>
                        <p className="text-dark fw-medium mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                          {item.title}
                        </p>
                      </div>
                      <Button variant="outline-dark" className="px-3 py-1 fw-bold" style={{ fontSize: '0.7rem', width: 'fit-content' }}>
                        {item.buttonText}
                      </Button>
                    </div>

                    {/* Right Panel */}
                    <div className="position-relative" style={{ width: '40%' }}>
                      <div style={{ 
                        height: '100%', 
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${item.sideImage})`,
                        backgroundSize: 'cover', backgroundPosition: 'center' 
                      }} />
                      <div className="position-absolute top-50 start-50 translate-middle w-100 text-center">
                        <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                          {item.overlayText}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div 
            style={{ ...navBtnStyle, left: '-25px' }} 
            onClick={() => swiperRef.current?.slidePrev()}
            className="d-none d-lg-flex shadow-lg"
          >
            <ChevronLeft color="white" size={24} />
          </div>

          <div 
            style={{ ...navBtnStyle, right: '-25px' }} 
            onClick={() => swiperRef.current?.slideNext()}
            className="d-none d-lg-flex shadow-lg"
          >
            <ChevronRight color="white" size={24} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Coliving;