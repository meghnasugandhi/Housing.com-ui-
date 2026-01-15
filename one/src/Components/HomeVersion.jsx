// Components/HomeVersion.jsx
import React from "react";
import HousingNavbar from "./Navbar";
// BUY components (you can create later)
import PropertyCarousel from "./PropertyCarousel";
import { properties } from "../data/properties";
import ProminentProjectsSection from "./Prominentprojects";
import TopHighlightedProjects from "./TopHighlightedProjects";
import FeaturedDevelopers from "./FeaturedDevelopers";
import TrustedDevelopers from "./TrustedDevelopers";
import ResearchAndInsights from "./ResearchAndInsights";
import RecommendedSellers from "./RecommendedSellers";
import AddedProperties from "./AddedProperties";
import PropertyBanner from "./PropertyBanner";
import NewsSection from "./NewsSection";
import BrowseLinks from "./BrowseLinks";
import HousingFooter from "./Footer";
import CommercialRentAndBuy from "./CommercialRentAndBuy";
import HousingExperts from "./HousingExperts";
import Image from "./Image";
import CoLiving from "./PartnerSlider";
import HomeAtFirstSight from "./HomeAtFirstSight";
import BenefitsSection from "./BenefitsSection";
import Handpicked from "./Handpicked";
import Neighbourhood from "./Neighbourhood";
import Establishments from "./Establishments";
import TestimonialComponent from "./Testimonial";
import PlotCollections from "./PlotCollections";
import PropertyShowcase from "./PropertyShowcase";
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
          <TrustedDevelopers />
          <ResearchAndInsights />
          <RecommendedSellers />
          <AddedProperties />
          <PropertyBanner />
          <NewsSection />
          <BrowseLinks />
          <HousingFooter />
          
        </>
      );

    case "RENT":
      return (
        <>
        <HousingNavbar />
        <AddedProperties />
        <ResearchAndInsights />
        <RecommendedSellers />
        <PropertyBanner />
        <NewsSection />
        <BrowseLinks/>
        <HousingFooter />
          
        </>
      );

    case "PG/CO-LIVING":
      return (<>
        <HousingNavbar />
       <CoLiving />
        <HomeAtFirstSight />
        <BenefitsSection />
        <Handpicked />
        <Neighbourhood />
        <Establishments />
        <NewsSection/>
        <TestimonialComponent />
        <Image />
        <HousingFooter />
      
      </>);

    case "COMMERCIAL":
      return (<>
        <HousingNavbar />
        <CommercialRentAndBuy />
        <HousingExperts />
        <NewsSection />
        <Image />
        <HousingFooter />
      
      </>);
      case "PLOTS":
      return (<>
        <HousingNavbar />
        <PlotCollections />
        <FeaturedDevelopers />
        <PropertyShowcase />
        <RecommendedSellers />
        <NewsSection />
        <Image />
        <HousingFooter />
        </>);

    default:
      return null;
  }
};

export default HomeVersion;
