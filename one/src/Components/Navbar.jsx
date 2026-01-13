import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Row, Col, Offcanvas, Badge } from 'react-bootstrap';
import { 
  FaUserCircle, FaBars, FaCity, FaHome, FaBuilding, 
  FaLayerGroup, FaWarehouse, FaMobileAlt, FaGem, 
  FaExchangeAlt, FaStar, FaBellSlash, FaExclamationTriangle, 
  FaQuestionCircle, FaQrcode 
} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'; 
import { properties } from "../data/properties"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const HousingNavbar = () => {
  const { city = "mumbai" } = useParams();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMouseEnter = (menuId) => setActiveDropdown(menuId);
  const handleMouseLeave = () => setActiveDropdown(null);
  
  const handleCloseSidebar = () => setShowSidebar(false);
  const handleShowSidebar = () => setShowSidebar(true);

  // DYNAMIC DATA EXTRACTION
  const uniqueLocalities = [...new Set(properties
    .filter(p => p.city.toLowerCase() === city.toLowerCase())
    .map(p => p.locality)
  )].slice(0, 6);

  const PROPERTY_TYPES = [
    { label: "Flats", type: "flat", icon: <FaCity className="menu-icon" /> },
    { label: "Houses", type: "house", icon: <FaHome className="menu-icon" /> },
    { label: "Builder floors", type: "builder_floor", icon: <FaBuilding className="menu-icon" /> },
    { label: "Plots", type: "plot", icon: <FaLayerGroup className="menu-icon" /> },
    { label: "Villas", type: "villa", icon: <FaHome className="menu-icon" /> },
    { label: "Commercial properties", type: "commercial", icon: <FaWarehouse className="menu-icon" /> },
  ];

  return (
    <>
      <style>{`
        /* --- FIXED NAVBAR LAYERING --- */
        .housing-navbar {
          position: absolute; top: 0; left: 0; width: 100%; 
          z-index: 1030 !important; /* Lowered so sidebar stays on top */
          background: transparent !important; 
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 0; font-family: 'Open Sans', sans-serif;
        }

        /* --- FIXED SIDEBAR APPEARANCE --- */
        .custom-sidebar {
          background-color: #ffffff !important; /* Solid background to hide navbar behind it */
          z-index: 1060 !important; /* Higher than navbar */
          box-shadow: -5px 0 25px rgba(0,0,0,0.15);
        }

        .logo-container { display: flex; align-items: center; text-decoration: none; }
        .logo-box {
          background-color: #ffda00; width: 26px; height: 26px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 4px; margin-right: 8px;
        }
        .logo-arrow { color: #3e2b5d; font-size: 12px; transform: translateY(-1px); }
        .logo-text { color: white; font-weight: 800; font-size: 1.4rem; letter-spacing: 0.5px; }
        .logo-dot-com { font-weight: 400; font-size: 0.85rem; opacity: 0.9; }
        
        .housing-navbar .nav-link, 
        .housing-navbar .dropdown-toggle {
          color: white !important; font-weight: 500; font-size: 0.92rem;
          padding-left: 10px !important; padding-right: 10px !important;
        }

        .mega-menu {
          display: none; position: absolute; border-radius: 12px; border: none;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2); padding: 25px;
          background-color: white !important; z-index: 1000; top: 100%;
          left: 50%; transform: translateX(-50%);
        }
        .nav-item.dropdown.show .mega-menu { display: block !important; }

        .dropdown-buyers .mega-menu, .dropdown-tenants .mega-menu { width: 920px; }
        .dropdown-services .mega-menu { width: 500px; }
        .dropdown-sellers .mega-menu, .dropdown-news .mega-menu { width: 280px; padding: 20px; }

        .mega-menu::before {
          content: ""; position: absolute; top: -10px; left: 50%; 
          border-left: 10px solid transparent; border-right: 10px solid transparent;
          border-bottom: 10px solid white; transform: translateX(-50%);
        }
        
        .menu-column-title { font-size: 0.85rem; color: #999; margin-bottom: 15px; font-weight: 600; }
        .menu-item { display: flex; align-items: center; padding: 8px 0; color: #333 !important; text-decoration: none; font-size: 0.95rem; }
        
        .info-item-title { font-weight: 600; color: #333; font-size: 0.95rem; margin-bottom: 2px; display: block; }
        .info-item-sub { color: #888; font-size: 0.75rem; display: block; margin-bottom: 15px; }
        .info-link { text-decoration: none; display: block; }
        .info-link:hover .info-item-title { color: #5e4499; }

        .service-link { color: #333 !important; text-decoration: none; display: block; font-size: 0.95rem; margin-bottom: 20px; }
        .service-link:hover { color: #5e4499 !important; }

        .menu-icon { margin-right: 12px; color: #666; font-size: 1.1rem; width: 20px; text-align: center; }
        .simple-link { color: #444 !important; display: block; padding: 6px 0; text-decoration: none; font-size: 0.9rem; }
        .simple-link:hover { color: #5e4499 !important; }
        .explore-link { color: #5e4499 !important; font-weight: 600; font-size: 0.9rem; margin-top: 15px; display: inline-block; text-decoration: none; }
        .col-divider { border-right: 1px solid #eee; }
        
        .post-prop-wrapper { position: relative; display: flex; align-items: center; margin-right: 20px; margin-left: 10px; }
        .post-prop-btn { color: white !important; text-decoration: none; font-weight: 600; font-size: 0.95rem; padding: 0; }
        .free-badge { background-color: #df356e; color: white; font-size: 0.65rem; font-weight: 700; padding: 2px 5px; border-radius: 3px; margin-left: 6px; text-transform: uppercase; }
        .user-pill { background-color: white; padding: 5px 10px; border-radius: 30px; display: flex; align-items: center; gap: 10px; cursor: pointer; border: none; }
        .avatar-icon { color: #5e4499; font-size: 26px; }

        /* SIDEBAR STYLING */
        .sidebar-user-info { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .login-btn-sidebar { background-color: #00cf95; border: none; color: white; font-weight: 600; padding: 6px 18px; border-radius: 6px; font-size: 0.9rem; }
        .activity-card { background: #f9f9f9; border-radius: 12px; padding: 15px; margin-bottom: 15px; }
        .activity-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 12px; }
        .activity-box { 
            background: white; border: 1px solid #eee; border-radius: 8px; padding: 8px 2px; 
            text-align: center; font-size: 0.65rem; color: #666; 
        }
        .activity-box.active { border: 1px solid #5e4499; background: #f4f2ff; }
        .activity-box strong { display: block; font-size: 0.9rem; color: #333; }
        
        .start-search-btn { 
            background: #f4f2ff; color: #5e4499; border: none; width: 100%; 
            margin-top: 20px; padding: 10px; border-radius: 8px; font-weight: 600; 
        }
        
        .sell-rent-ad { 
            background: #fff9e6; border: 1px solid #ffeeba; border-radius: 12px; 
            padding: 15px; display: flex; align-items: center; gap: 15px; margin-bottom: 20px;
        }
        .sell-rent-ad p { margin: 0; font-size: 0.85rem; font-weight: 600; color: #444; }
        .post-free-inline { background: white; border: 1px solid #ddd; font-size: 0.75rem; font-weight: 700; padding: 4px 8px; border-radius: 4px; margin-top: 5px; }

        .sidebar-link { 
            display: flex; align-items: center; gap: 15px; padding: 15px 0; 
            color: #444; text-decoration: none; border-bottom: 1px solid #f1f1f1; font-size: 0.9rem;
        }
        .sidebar-link svg { color: #777; font-size: 1.1rem; }
        .sidebar-badge { background: #ff4d4d; font-size: 0.6rem; margin-left: 5px; }

        .help-center-bar { 
            border: 1px solid #eee; border-radius: 10px; padding: 12px; 
            display: flex; justify-content: space-between; margin-top: 20px; 
            text-decoration: none; color: #333; font-weight: 500; font-size: 0.9rem;
        }

        .download-footer { background: #f8f9fa; border-radius: 12px; padding: 15px; margin-top: 20px; }
        .app-store-icons { display: flex; gap: 10px; margin-top: 10px; }
        .app-store-icons img { height: 26px; }

        @media (max-width: 991px) {
          .mega-menu { width: 100% !important; position: static; transform: none; box-shadow: none; }
          .mega-menu::before { display: none; }
          .col-divider { border-right: none; }
        }
        .housing-navbar .dropdown-menu { background-color: transparent !important; border: none !important; }
      `}</style>

      <Navbar expand="lg" className="housing-navbar" variant="dark">
        <Container fluid className="px-lg-5">
          <Navbar.Brand as={Link} to="/" className="logo-container">
            <div className="logo-box"><span className="logo-arrow">▲</span></div>
            <span className="logo-text">HOUSING<span className="logo-dot-com">.COM</span></span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="housing-nav" />

          <Navbar.Collapse id="housing-nav">
            <Nav className="ms-auto align-items-center">
              
              <NavDropdown title="For Buyers" className="dropdown-buyers" show={activeDropdown === 'buyers'} onMouseEnter={() => handleMouseEnter('buyers')} onMouseLeave={handleMouseLeave}>
                <div className="mega-menu">
                  <Row>
                    <Col md={3} className="col-divider">
                      <div className="menu-column-title">Property type</div>
                      {PROPERTY_TYPES.map(pt => (
                        <Link key={pt.type} to={`/buy/${city}?type=${pt.type}`} className="menu-item">{pt.icon} {pt.label}</Link>
                      ))}
                      <Link to={`/buy/${city}`} className="explore-link">Explore all properties &gt;</Link>
                    </Col>
                    <Col md={2} className="ps-md-4 col-divider">
                      <div className="menu-column-title">Popular areas</div>
                      {uniqueLocalities.map((area, index) => (
                        <Link key={index} to={`/buy/${city}?locality=${area}`} className="simple-link">{area}</Link>
                      ))}
                    </Col>
                    <Col md={3} className="ps-md-4 col-divider">
                      <div className="menu-column-title">Search by BHK</div>
                      {[1, 2, 3, 4].map(bhk => (
                        <Link key={bhk} to={`/buy/${city}?bhk=${bhk}`} className="simple-link">{bhk} BHK Flats</Link>
                      ))}
                    </Col>
                    <Col md={4} className="ps-md-4">
                      <div className="menu-column-title">Popular searches</div>
                      <Link to={`/buy/${city}?brokerage=false`} className="simple-link">Flats without brokerage</Link>
                      <Link to={`/buy/${city}?status=ready`} className="simple-link">Ready to move-in projects</Link>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              <NavDropdown title="For Tenants" className="dropdown-tenants" show={activeDropdown === 'tenants'} onMouseEnter={() => handleMouseEnter('tenants')} onMouseLeave={handleMouseLeave}>
                <div className="mega-menu">
                  <Row>
                    <Col md={3} className="col-divider">
                      <div className="menu-column-title">Property type</div>
                      {PROPERTY_TYPES.slice(0, 5).map(pt => (
                        <Link key={pt.type} to={`/rent/${city}?type=${pt.type}`} className="menu-item">{pt.icon} {pt.label}</Link>
                      ))}
                    </Col>
                    <Col md={2} className="ps-md-4 col-divider">
                      <div className="menu-column-title">Popular areas</div>
                      {uniqueLocalities.map((area, index) => (
                        <Link key={index} to={`/rent/${city}?locality=${area}`} className="simple-link">{area}</Link>
                      ))}
                    </Col>
                    <Col md={3} className="ps-md-4 col-divider">
                      <div className="menu-column-title">Search by BHK</div>
                      {[1, 2, 3].map(bhk => (
                        <Link key={bhk} to={`/rent/${city}?bhk=${bhk}`} className="simple-link">{bhk} BHK Flats</Link>
                      ))}
                    </Col>
                    <Col md={4} className="ps-md-4">
                      <div className="menu-column-title">Popular searches</div>
                      <Link to={`/rent/${city}?furnished=fully`} className="simple-link">Fully furnished houses</Link>
                      <Link to={`/rent/${city}?furnished=semi`} className="simple-link">Semi furnished flats</Link>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              <NavDropdown title="For Sellers" className="dropdown-sellers" show={activeDropdown === 'sellers'} onMouseEnter={() => handleMouseEnter('sellers')} onMouseLeave={handleMouseLeave}>
                <div className="mega-menu">
                  <div className="menu-column-title">Packages for</div>
                  <Link to="/developers" className="info-link">
                    <span className="info-item-title">Developers</span>
                    <span className="info-item-sub">Launch or sell homes</span>
                  </Link>
                  <Link to="/brokers" className="info-link">
                    <span className="info-item-title">Brokers</span>
                    <span className="info-item-sub">List and grow business</span>
                  </Link>
                  <Link to="/post-property" className="info-link">
                    <span className="info-item-title">Owners</span>
                    <span className="info-item-sub">Sell or rent easily</span>
                  </Link>
                </div>
              </NavDropdown>

              <NavDropdown title="Services" className="dropdown-services" show={activeDropdown === 'services'} onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
                <div className="mega-menu">
                  <Row>
                    <Col md={6}>
                      <div className="menu-column-title">Housing Edge</div>
                      <Link to="/home-loans" className="service-link">Home Loan</Link>
                      <Link to="/protect" className="service-link">Housing Protect</Link>
                      <Link to="/premium" className="service-link">Housing Premium</Link>
                    </Col>
                    <Col md={6}>
                      <div className="menu-column-title">Tools</div>
                      <Link to="/emi-calculator" className="service-link">EMI calculator</Link>
                      <Link to="/property-value" className="service-link">Property value calculator</Link>
                      <Link to="/rent-receipt" className="service-link">Rent receipt generator</Link>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              <NavDropdown title="News & Guide" className="dropdown-news" show={activeDropdown === 'news'} onMouseEnter={() => handleMouseEnter('news')} onMouseLeave={handleMouseLeave}>
                <div className="mega-menu">
                  <div className="menu-column-title">Property market guide</div>
                  <Link to="/news" className="info-link">
                    <span className="info-item-title">Real Estate News</span>
                    <span className="info-item-sub">Latest market updates</span>
                  </Link>
                  <Link to="/guide" className="info-link">
                    <span className="info-item-title">Buying Guide</span>
                    <span className="info-item-sub">Expert homebuying tips</span>
                  </Link>
                  <Link to="/research" className="info-link">
                    <span className="info-item-title">Housing Research</span>
                    <span className="info-item-sub">Data-driven insights</span>
                  </Link>
                  <Link to="/overview" className="info-link">
                    <span className="info-item-title">{city.charAt(0).toUpperCase() + city.slice(1)} Overview</span>
                    <span className="info-item-sub">Real estate & area highlights</span>
                  </Link>
                </div>
              </NavDropdown>

              <Nav.Link as={Link} to="/download-app" className="download-app-link">
                <FaMobileAlt /> Download App
              </Nav.Link>

              <div className="post-prop-wrapper">
                <Button as={Link} to="/post-property" variant="link" className="post-prop-btn">Post Property</Button>
                <span className="free-badge">Free</span>
              </div>

              <button className="user-pill" onClick={handleShowSidebar}>
                <FaBars />
                <FaUserCircle className="avatar-icon" />
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas 
        show={showSidebar} 
        onHide={handleCloseSidebar} 
        placement="end" 
        style={{ width: '350px' }} 
        className="custom-sidebar"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="w-100">
            <div className="sidebar-user-info">
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <FaUserCircle style={{ fontSize: '40px', color: '#5e4499' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Hello 👋</div>
                  <div style={{ fontSize: '0.7rem', color: '#888' }}>Login for better experience</div>
                </div>
              </div>
              <Button className="login-btn-sidebar">Login</Button>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="activity-card">
            <h6 style={{ fontSize: '0.85rem', fontWeight: 700 }}>My Activity</h6>
            <div className="activity-grid">
              <div className="activity-box"><strong>00</strong> Contacted</div>
              <div className="activity-box active"><strong>00</strong> Seen</div>
              <div className="activity-box"><strong>00</strong> Saved</div>
              <div className="activity-box"><strong>00</strong> Searches</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
               <img src="https://cdn-icons-png.flaticon.com/512/202/202387.png" alt="search" width="80" style={{opacity: 0.5}} />
               <Button className="start-search-btn">Start new search</Button>
            </div>
          </div>

          <div className="sell-rent-ad">
            <img src="https://cdn-icons-png.flaticon.com/512/602/602182.png" alt="house" width="40" />
            <div>
              <p>Looking to sell / rent your property?</p>
              <button className="post-free-inline">Post property for FREE</button>
            </div>
          </div>

          <div className="sidebar-links-list">
            <Link to="/" className="sidebar-link"><FaGem /> Zero Brokerage Properties</Link>
            <Link to="/" className="sidebar-link"><FaExchangeAlt /> My Transactions</Link>
            <Link to="/" className="sidebar-link">
              <FaStar /> My Reviews <Badge className="sidebar-badge">NEW</Badge>
            </Link>
            <Link to="/" className="sidebar-link"><FaBellSlash /> Unsubscribe Alerts</Link>
            <Link to="/" className="sidebar-link"><FaExclamationTriangle /> Report a Fraud</Link>
          </div>

          <Link to="/" className="help-center-bar">
            <span><FaQuestionCircle style={{marginRight: '10px'}} /> Visit Help Center</span>
            <span>&gt;</span>
          </Link>

          <div className="download-footer">
             <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
               <span style={{fontSize: '0.85rem', fontWeight: 600}}>Download Housing App</span>
               <FaQrcode style={{fontSize: '1.2rem'}} />
             </div>
             <div className="app-store-icons">
               <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
             </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HousingNavbar;