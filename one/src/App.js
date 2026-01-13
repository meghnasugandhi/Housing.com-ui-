import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Main from "./Components/Main";
import HomeVersion from "./Components/HomeVersion";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";

function App() {
  const [activeTab, setActiveTab] = useState("BUY");

  return (
    <Router>
      
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Main activeTab={activeTab} setActiveTab={setActiveTab} />
              <HomeVersion activeTab={activeTab} />
            </>
          }
        />

        {/* OTHER ROUTES */}
          {/* BUY & RENT PAGES */}
    <Route path="/buy/:city" element={<Buy />} />
    <Route path="/rent/:city" element={<Rent />} />
      </Routes>
    </Router>
  );
}

export default App;
