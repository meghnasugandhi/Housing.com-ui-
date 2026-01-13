import React from 'react';
import { Offcanvas, Button, Row, Col, Badge } from 'react-bootstrap';
import { 
  FaUserCircle, FaGem, FaExchangeAlt, FaStar, 
  FaBellSlash, FaExclamationTriangle, FaQuestionCircle, FaQrcode 
} from 'react-icons/fa';

const UserSidebar = ({ show, handleClose }) => {
  return (
    <>
      <style>{`
        .user-sidebar { width: 340px !important; border-radius: 12px 0 0 12px; }
        .sidebar-header { border: none; padding-bottom: 0; }
        .profile-section { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; }
        .user-info { display: flex; align-items: center; gap: 12px; }
        .user-avatar { font-size: 45px; color: #5e4499; }
        .login-btn { background-color: #00bfa5; border: none; font-weight: 600; padding: 5px 20px; border-radius: 6px; }
        
        .activity-card { background: #f8f9fa; border-radius: 12px; padding: 15px; margin-top: 20px; }
        .activity-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 10px; }
        .activity-item { 
          background: white; border: 1px solid #eee; border-radius: 8px; 
          padding: 8px 4px; text-align: center; font-size: 0.65rem; color: #666;
        }
        .activity-item.active { border-color: #5e4499; background: #f3f0ff; }
        .count { display: block; font-weight: 700; font-size: 0.9rem; color: #333; }
        
        .search-empty-state { text-align: center; padding: 30px 0; }
        .search-empty-img { width: 100px; opacity: 0.6; margin-bottom: 15px; }
        .start-search-btn { background: #f3f0ff; color: #5e4499; border: none; font-weight: 600; width: 100%; padding: 10px; border-radius: 8px; }

        .sell-ad-card { 
          background: #fff9e6; border: 1px solid #ffeeba; border-radius: 12px; 
          padding: 15px; margin: 20px 0; display: flex; align-items: center; gap: 15px;
        }
        .sell-ad-text { font-size: 0.85rem; font-weight: 600; color: #444; }
        .post-free-btn { background: white; border: 1px solid #ddd; font-size: 0.75rem; font-weight: 700; padding: 5px 10px; border-radius: 4px; }

        .menu-list-item { 
          display: flex; align-items: center; gap: 15px; padding: 14px 0; 
          color: #444; text-decoration: none; font-size: 0.9rem; border-bottom: 1px solid #f1f1f1;
        }
        .menu-list-item:last-child { border: none; }
        .menu-list-item svg { color: #666; font-size: 1.1rem; }
        .new-badge { background: #ff4d4d; font-size: 0.6rem; vertical-align: middle; margin-left: 5px; }
        
        .help-center-card { 
          border: 1px solid #eee; border-radius: 10px; padding: 12px 15px; 
          display: flex; justify-content: space-between; align-items: center; 
          margin-top: 20px; text-decoration: none; color: #444; font-weight: 500;
        }
        
        .app-download-footer { background: #f8f9fa; border-radius: 12px; padding: 15px; margin-top: 20px; }
        .store-btns { display: flex; gap: 10px; margin-top: 10px; }
        .store-btns img { height: 25px; }
      `}</style>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="user-sidebar">
        <Offcanvas.Header closeButton className="sidebar-header">
          <Offcanvas.Title className="w-100">
            <div className="profile-section">
              <div className="user-info">
                <FaUserCircle className="user-avatar" />
                <div>
                  <div style={{fontSize: '0.9rem', fontWeight: 600}}>Hello 👋</div>
                  <div style={{fontSize: '0.7rem', color: '#888'}}>Login for better experience</div>
                </div>
              </div>
              <Button className="login-btn">Login</Button>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body>
          <div className="activity-card">
            <h6 style={{fontSize: '0.85rem', fontWeight: 700}}>My Activity</h6>
            <div className="activity-grid">
              <div className="activity-item">
                <span className="count">00</span> Contacted
              </div>
              <div className="activity-item active">
                <span className="count">00</span> Seen
              </div>
              <div className="activity-item">
                <span className="count">00</span> Saved
              </div>
              <div className="activity-item">
                <span className="count">00</span> Searches
              </div>
            </div>

            <div className="search-empty-state">
              <img src="https://cdn-icons-png.flaticon.com/512/202/202387.png" className="search-empty-img" alt="empty" />
              <Button className="start-search-btn">Start new search</Button>
            </div>
          </div>

          <div className="sell-ad-card">
            <img src="https://cdn-icons-png.flaticon.com/512/602/602182.png" width="40" alt="house" />
            <div>
              <div className="sell-ad-text">Looking to sell / rent your property?</div>
              <button className="post-free-btn">Post property for FREE</button>
            </div>
          </div>

          <div className="menu-list">
            <a href="#" className="menu-list-item"><FaGem /> Zero Brokerage Properties</a>
            <a href="#" className="menu-list-item"><FaExchangeAlt /> My Transactions</a>
            <a href="#" className="menu-list-item">
              <FaStar /> My Reviews <Badge className="new-badge">NEW</Badge>
            </a>
            <a href="#" className="menu-list-item"><FaBellSlash /> Unsubscribe Alerts</a>
            <a href="#" className="menu-list-item"><FaExclamationTriangle /> Report a Fraud</a>
          </div>

          <a href="#" className="help-center-card">
            <span><FaQuestionCircle style={{marginRight: '10px'}} /> Visit Help Center</span>
            <span>&gt;</span>
          </a>

          <div className="app-download-footer">
             <div style={{fontSize: '0.8rem', fontWeight: 600, display: 'flex', justifyContent: 'space-between'}}>
               <span>Download Housing App</span>
               <FaQrcode />
             </div>
             <div className="store-btns">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
             </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UserSidebar;