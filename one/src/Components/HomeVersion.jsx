// Components/HomeVersion.jsx
import React from "react";
import HousingNavbar from "./Navbar";
// BUY components (you can create later)
import PropertyCarousel from "./PropertyCarousel";
import { properties } from "../data/properties";
import ProminentProjectsSection from "./Prominentprojects";
import TopHighlightedProjects from "./TopHighlightedProjects";
import FeaturedDevelopers from "./FeaturedDevelopers";

// RENT components
;

// PG / CO-LIVING


// COMMERCIAL


const HomeVersion = ({ activeTab }) => {
  switch (activeTab) {
    case "BUY":
      return (
        <>
        <HousingNavbar />
         <PropertyCarousel properties={properties} />
          <ProminentProjectsSection />
          <TopHighlightedProjects />
          <FeaturedDevelopers />
        </>
      );

    case "RENT":
      return (
        <>
        <HousingNavbar />
          
        </>
      );

    case "PG/CO-LIVING":
      return (<>
        <HousingNavbar />
      
      </>);

    case "COMMERCIAL":
      return (<>
        <HousingNavbar />
      
      </>);

    default:
      return null;
  }
};

export default HomeVersion;
