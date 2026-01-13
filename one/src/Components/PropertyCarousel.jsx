import { useEffect, useState, useRef } from "react";
import { properties } from "../data/properties";

const AUTO_SLIDE_TIME = 3000;

const PropertyCarousel = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const scrollRef = useRef(null);

  const activeProperty = properties?.[activeCard];
  const activeImages = activeProperty?.images || [];

  useEffect(() => {
    if (activeImages.length <= 1) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % activeImages.length);
    }, AUTO_SLIDE_TIME);
    return () => clearInterval(interval);
  }, [activeCard, activeImages.length]);

  useEffect(() => {
    setImageIndex(0);
  }, [activeCard]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 840; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!properties || properties.length === 0) {
    return <div style={{ padding: "20px" }}>No properties found.</div>;
  }

  return (
    <div className="carousel-section">
      <style>
        {`
        .carousel-section { 
            padding: 40px 60px; 
            background: #fff; 
            font-family: 'Segoe UI', Roboto, Arial, sans-serif; 
            position: relative;
        }

        /* Header Text */
        .section-header { margin-bottom: 25px; padding-left: 10px; }
        .section-header h2 { font-size: 26px; font-weight: 700; color: #333; margin: 0; }
        .section-header p { font-size: 15px; color: #666; margin: 4px 0 0 0; }

        .carousel-container { 
            display: flex; 
            gap: 20px; 
            overflow-x: auto; 
            padding: 10px 10px 40px 10px; 
            scrollbar-width: none; 
            align-items: flex-end; 
        }
        .carousel-container::-webkit-scrollbar { display: none; }

        .card-wrapper { 
            display: flex; 
            flex-direction: column; 
            width: 820px; 
            min-width: 820px; 
            transition: all 0.3s ease; 
        }

        .nav-btn {
            position: absolute;
            top: 62%;
            width: 44px;
            height: 44px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 100;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .prev-btn { left: 20px; }
        .next-btn { right: 20px; }

        .thumbnail-header {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-bottom: 12px;
          height: 60px;
        }
        .thumb-box {
          width: 100px;
          height: 60px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
        }
        .thumb-box.active { border-color: #6a3df0; }
        .thumb-box img { width: 100%; height: 100%; object-fit: cover; }

        .property-card {
          display: flex;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          position: relative;
          height: 350px;
          border: 1px solid #eee;
        }

        .progress-bar-container {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 4px;
          background: rgba(0,0,0,0.05); z-index: 20;
        }
        .progress-fill { height: 100%; background: #6a3df0; animation: progressLinear linear forwards; }
        @keyframes progressLinear { from { width: 0%; } to { width: 100%; } }

        .info-side {
          width: 35%;
          padding: 24px;
          display: flex;
          flex-direction: column;
          background: #fdfbff;
        }

        /* Text Details */
        .dev-header { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 20px; }
        .dev-logo-placeholder { width: 45px; height: 45px; background: #f0f0f0; border-radius: 6px; flex-shrink: 0; }
        .dev-name { font-size: 14px; font-weight: 700; color: #222; display: block; line-height: 1.2; }
        .view-proj { font-size: 12px; color: #6a3df0; text-decoration: underline; font-weight: 600; cursor: pointer; }
        
        .property-title { font-size: 18px; font-weight: 700; color: #111; margin-top: 10px; }
        .property-location { font-size: 13px; color: #777; margin-bottom: 15px; }
        .price-text { font-size: 22px; font-weight: 800; color: #000; }
        .bhk-sub { font-size: 14px; color: #555; margin-bottom: auto; }
        
        .contact-btn {
          background: #5b2be0;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .image-side { width: 65%; position: relative; }
        .main-img { width: 100%; height: 100%; object-fit: cover; }
        `}
      </style>

      {/* NEW HEADER SECTION */}
      <div className="section-header">
        <h2>Housing's top picks</h2>
        <p>Explore top living options with us</p>
      </div>

      <button className="nav-btn prev-btn" onClick={() => scroll("prev")}>❮</button>
      <button className="nav-btn next-btn" onClick={() => scroll("next")}>❯</button>

      <div className="carousel-container" ref={scrollRef}>
        {properties.map((item, index) => {
          const isActive = index === activeCard;
          const hasMulti = item.images && item.images.length > 1;
          const displayPrice = item.listingType === "sale" ? item.price.display : item.rent.display;

          return (
            <div key={item.id} className="card-wrapper" onMouseEnter={() => setActiveCard(index)}>
              
              <div className="thumbnail-header" style={{ 
                  visibility: isActive && hasMulti ? 'visible' : 'hidden'
                }}>
                {hasMulti && item.images.map((img, i) => (
                  <div key={i} className={`thumb-box ${imageIndex === i ? "active" : ""}`} onClick={() => setImageIndex(i)}>
                    <img src={img} alt="preview" />
                  </div>
                ))}
              </div>

              <div className="property-card">
                {isActive && hasMulti && (
                  <div className="progress-bar-container">
                    <div key={imageIndex} className="progress-fill" style={{ animationDuration: `${AUTO_SLIDE_TIME}ms` }} />
                  </div>
                )}

                <div className="info-side">
                  <div className="dev-header">
                    <div className="dev-logo-placeholder"></div>
                    <div>
                        <span className="dev-name">{item.listedBy}</span>
                        <span className="view-proj">View Projects</span>
                    </div>
                  </div>
                  
                  <div className="property-title">{item.title}</div>
                  <div className="property-location">{item.locality || "Sector 4, Sohna"}, {item.city || "Gurgaon"}</div>
                  
                  <div className="price-text">{displayPrice}</div>
                  <div className="bhk-sub">{item.bhk} BHK Apartment</div>
                  
                  <button className="contact-btn">Contact</button>
                </div>

                <div className="image-side">
                  <img 
                    src={isActive ? item.images[imageIndex] : item.images[0]} 
                    alt={item.title} 
                    className="main-img" 
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyCarousel;