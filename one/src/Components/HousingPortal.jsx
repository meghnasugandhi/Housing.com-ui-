import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Tabs, Tab } from 'react-bootstrap';
import BrokerPlans from './BrokerPlans';
import DeveloperProducts from './DeveloperProducts';

const HousingPortal = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('broker');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type === 'developer' || type === 'broker') {
      setActiveTab(type);
    }
  }, [location]);

  return (
    <div className="bg-light min-vh-100">
      {/* --- NEW HERO SECTION START --- */}
      <div 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 20px'
        }}
      >
        <h1 style={{ fontWeight: '700', fontSize: '2.5rem', marginBottom: '15px' }}>
          Want to List your property for sale or rent?
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '400', opacity: '0.9' }}>
          Explore our partner products tailor made just for you
        </p>
        <p style={{ fontSize: '1.5rem', fontWeight: '500', marginTop: '20px' }}>
          Parr...se Perfect
        </p>
      </div>
      {/* --- NEW HERO SECTION END --- */}

      <div className="bg-white pt-4 shadow-sm mb-5">
        <Container>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            id="housing-tabs"
            className="justify-content-center border-0 custom-tabs"
          >
            <Tab eventKey="broker" title="Broker">
              <div className="py-5">
                <BrokerPlans />
              </div>
            </Tab>
            <Tab eventKey="developer" title="Developer">
              <div className="py-5">
                <DeveloperProducts />
              </div>
            </Tab>
          </Tabs>
        </Container>
      </div>

      <style>{`
        .custom-tabs .nav-link {
          color: #666;
          font-weight: 600;
          border: none !important;
          padding: 10px 30px;
          font-size: 1.1rem;
        }
        .custom-tabs .nav-link.active {
          color: #df3b48 !important; /* Housing.com signature red */
          border-bottom: 3px solid #df3b48 !important;
          background: transparent !important;
        }
      `}</style>
    </div>
  );
};

export default HousingPortal;