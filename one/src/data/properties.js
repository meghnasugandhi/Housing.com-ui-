// ================= IMAGE IMPORTS (src/Images) =================
//properties.js
// BUY
import avant1 from "../Images/avant1.jpg";
import avant2 from "../Images/avant2.jpg";
import avant3 from "../Images/avant3.jpg";

import builderfloor1 from "../Images/builderfloor.jpg";
import builderfloor2 from "../Images/builderfloor2.jpg";

import commercial1 from "../Images/commercial1.jpg";
import commercial2 from "../Images/commercial2.jpg";
import commercial3 from "../Images/commercial3.jpg";

import plots1 from "../Images/plots1.jpg";
import plots2 from "../Images/plots2.jpg";

import villas1 from "../Images/villas1.jpg";
import villas2 from "../Images/villas2.jpg";

// RENT
import chembur1 from "../Images/chembur1.jpg";
import chembur2 from "../Images/chembur2.jpg";

import lodha1 from "../Images/Lodha1.jpg";
import lodha2 from "../Images/Lodha2.jpg";

import house1 from "../Images/house1.jpg";
import house2 from "../Images/house2.jpg";

import godrej1 from "../Images/godrej1.jpg";
import godrej2 from "../Images/godrej2.jpg";

// ================= PROPERTIES DATA =================

export const properties = [
  /* ================= BUY / SALE PROPERTIES ================= */
  {
    id: 101,
    listingType: "sale",
    propertyType: "flat",
    city: "Mumbai",
    locality: "Goregaon East",
    title: "2 BHK Flat in Avant Hillway",
    project: "Avant Hillway",
    images: [avant1, avant2, avant3],
    price: { min: 19500000, max: 24300000, display: "₹1.95 Cr - ₹2.43 Cr" },
    bhk: 2,
    builtUpArea: 815,
    constructionStatus: "under_construction",
    listedBy: "developer",
    verified: true,
    amenities: ["Lift", "Gym", "Parking", "Gated Community"],
    updatedAt: "2w ago",
  },
  {
    id: 102,
    listingType: "sale",
    propertyType: "builder_floor",
    city: "Gurgaon",
    locality: "Sector 57",
    title: "Luxury 3 BHK Builder Floor",
    images: [builderfloor1, builderfloor2],
    price: { min: 18500000, max: 18500000, display: "₹1.85 Cr" },
    bhk: 3,
    builtUpArea: 1950,
    constructionStatus: "ready_to_move",
    listedBy: "Agent",
    verified: true,
    amenities: ["Parking", "Gated Community"],
    updatedAt: "3d ago",
  },
  {
    id: 103,
    listingType: "sale",
    propertyType: "commercial",
    city: "Mumbai",
    locality: "Chembur",
    title: "Commercial Office Space in Chembur",
    images: [commercial1, commercial2, commercial3],
    price: { min: 45000000, max: 55000000, display: "₹4.50 Cr - ₹5.50 Cr" },
    builtUpArea: 1200,
    constructionStatus: "ready_to_move",
    listedBy: "Featured Agents",
    verified: true,
    amenities: ["Parking", "Power Backup", "Lift"],
    updatedAt: "1w ago",
  },
  {
    id: 104,
    listingType: "sale",
    propertyType: "plot",
    city: "Pune",
    locality: "Wagholi",
    title: "Residential Plot for Sale",
    images: [plots1, plots2],
    price: { min: 4500000, max: 4500000, display: "₹45 Lakh" },
    plotArea: 1200,
    listedBy: "Owner",
    verified: true,
    updatedAt: "5d ago",
  },
  {
    id: 105,
    listingType: "sale",
    propertyType: "villa",
    city: "Mumbai",
    locality: "Thane",
    title: "4 BHK Luxury Villa",
    images: [villas1, villas2],
    price: { min: 65000000, max: 65000000, display: "₹6.50 Cr" },
    bhk: 4,
    builtUpArea: 3500,
    constructionStatus: "ready_to_move",
    listedBy: "developer",
    verified: true,
    amenities: ["Swimming Pool", "Gym", "Gated Community", "Parking"],
    updatedAt: "2d ago",
  },

  /* ================= RENT PROPERTIES ================= */
  {
    id: 201,
    listingType: "rent",
    propertyType: "Apartment",
    city: "Mumbai",
    locality: "Thane West",
    title: "3 BHK Flat for rent in Thane West",
    project: "Kalpataru Immensa Rent",
    images: [chembur1, chembur2],
    rent: { monthlyRent: 55000, deposit: 200000, display: "₹55,000 / month" },
    bhk: 3,
    bathrooms: "3+",
    builtUpArea: 1310,
    furnishingStatus: "Semi Furnished",
    leaseType: "Family",
    ageOfProperty: "Less than 5 years",
    availableFrom: "Within 15 days",
    powerBackup: "Full",
    listedBy: "Agent",
    verified: true,
    amenities: ["Lift", "Swimming Pool", "Gym", "Gas Pipeline", "Gated Community", "Parking"],
    updatedAt: "1w ago",
  },
  {
    id: 202,
    listingType: "rent",
    propertyType: "Apartment",
    city: "Mumbai",
    locality: "Thane West",
    title: "1 BHK Flat for rent in Lodha Quality Home",
    project: "Lodha Quality Home Tower 4 Rent",
    images: [lodha1, lodha2],
    rent: { monthlyRent: 22000, deposit: 100000, display: "₹22,000 / month" },
    bhk: 1,
    bathrooms: "1+",
    builtUpArea: 412,
    furnishingStatus: "Semi Furnished",
    leaseType: "Bachelor",
    availableFrom: "Within a week",
    listedBy: "Agent",
    verified: true,
    amenities: ["Lift", "Gated Community", "Parking"],
    updatedAt: "4d ago",
  },
  {
    id: 203,
    listingType: "rent",
    propertyType: "Houses",
    city: "Mumbai",
    locality: "Bandra West",
    title: "Independent House for Rent",
    images: [house1, house2],
    rent: { monthlyRent: 85000, deposit: 300000, display: "₹85,000 / month" },
    bhk: 2,
    bathrooms: "2+",
    builtUpArea: 1100,
    furnishingStatus: "Fully Furnished",
    ageOfProperty: "More than 10 years",
    listedBy: "Owner",
    verified: true,
    amenities: ["Parking", "Gas Pipeline"],
    updatedAt: "4h ago",
  },
  {
    id: 204,
    listingType: "rent",
    propertyType: "Apartment",
    city: "Mumbai",
    locality: "Thane West",
    title: "2 BHK Flat for rent in Godrej Emerald",
    project: "Godrej Emerald Rent",
    images: [godrej1, godrej2],
    rent: { monthlyRent: 26896, deposit: 120000, display: "₹26,896 / month" },
    bhk: 2,
    bathrooms: "2+",
    builtUpArea: 684,
    furnishingStatus: "Fully Furnished",
    leaseType: "Family",
    availableFrom: "Immediate",
    listedBy: "Agent",
    verified: true,
    amenities: ["Swimming Pool", "Gym", "Gated Community", "Lift", "Parking", "Gas Pipeline"],
    updatedAt: "Just now",
  },
];
