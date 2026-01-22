import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Main from "./Components/Main";
import HomeVersion from "./Components/HomeVersion";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import HousingPortal from "./Components/HousingPortal";
import Owners from "./Components/Owners"; // Ensure this matches your filename
import HousingFooter from "./Components/Footer";
import HomeLoanLandingPage from "./Components/HomeLoanLandingPage";
import HouseProtect from "./Components/HouseProtect";
import HousingPremium from "./Components/HousingPremium";
import EmiCalculator from "./Components/EmiCalculator";
import PropertyValueCalculator from "./Components/PropertyValueCalculator";
import RentReceipt from "./Components/Receipt";
import News from "./Components/News"; // Import the News component
import FindingAHouse from "./Components/FindingAHouse";
import Research from "./Components/Research";
import Bangalore from "./Components/Bangalore";
import RegisterPage from "./Components/RegisterPage";


const SellersPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get('type') || 'broker'; 

  return (
    <>
      <div className="sellers-page-content">
        <HousingPortal activeTab={type} />
      </div>
      <HousingFooter />
    </>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState("BUY");

  return (
    <Router>
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Main activeTab={activeTab} setActiveTab={setActiveTab} />
              <HomeVersion activeTab={activeTab} />
            </>
          }
        />
        {/* --- ADDED REGISTER ROUTE --- */}
        <Route 
          path="/register" 
          element={
            <div style={{ backgroundColor: '#f4f5f7', minHeight: '100vh' }}>
              {/* Adding Navbar here so user can still navigate */}
               
              <div style={{ paddingTop: '100px', paddingBottom: '50px' }}>
                <RegisterPage />
              </div>
              <HousingFooter />
            </div>
          } 
        />
         {/* BUYING GUIDE / FINDING A HOUSE ROUTE */}
{/* BUYING GUIDE ROUTE */}
<Route 
  path="/guide" 
  element={
    <div style={{ backgroundColor: '#f4f5f7', minHeight: '100vh' }}>
      <FindingAHouse />
      <HousingFooter />
    </div>
  } 
/>

        {/* SELLERS ROUTE (Brokers/Developers) */}
        <Route path="/sellers" element={<SellersPage />} />
        {/* NEW HOME LOANS ROUTE */}
        <Route path="/home-loans" element={<HomeLoanLandingPage />} />
           <Route 
          path="/premium" 
          element={
            <>
              <HousingPremium />
              <HousingFooter />
            </>
          } 
        />
        <Route 
          path="/news" 
          element={
            <div className="news-portal">
              {/* Use the specific News Navbar here instead of HousingNavbar */}
             
              
              {/* No padding-top needed because NewsNavbar is sticky-top, not absolute */}
              <News />
              
              <HousingFooter />
            </div>
          } 
        />
        <Route 
          path="/emi-calculator" 
          element={
            <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
              <EmiCalculator />
              <HousingFooter />
            </div>
          } 
        />
        <Route 
          path="/property-value" 
          element={
            <>
              <PropertyValueCalculator />
              <HousingFooter />
            </>
          } 
        />
        <Route 
          path="/rent-receipt" 
          element={
            <>
              <RentReceipt />
              <HousingFooter />
            </>
          } 
        />
        
        {/* OWNERS ROUTE - Pure page without Navbar */}
        <Route 
          path="/owners" 
          element={
            <>
              <Owners />
              <HousingFooter />
            </>
          } 
        />

        {/* OTHER ROUTES */}
        <Route path="/buy/:city" element={<Buy />} />
        <Route path="/rent/:city" element={<Rent />} />
        <Route 
          path="/protect" 
          element={
            <>
              <HouseProtect />
              <HousingFooter />
            </>
          } 
        />
        <Route 
          path="/research" 
          element={
            <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
              <Research />
              <HousingFooter />
            </div>
          } 
        />
        {/* --- ADDED OVERVIEW / BANGALORE ROUTE --- */}
        <Route 
          path="/overview" 
          element={
            <>
              <Bangalore />
              <HousingFooter />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;