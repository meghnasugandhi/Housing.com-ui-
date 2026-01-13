import React from "react";
import { Container, Nav, Form, Button } from "react-bootstrap";

// Import your images
import buyImg from "../Images/buy.jpg";
import rentImg from "../Images/rent.jpg";
import commercialImg from "../Images/commercial.jpg";
import pgImg from "../Images/pg.jpg";
import plotsImg from "../Images/plots.jpg";

const tabData = {
  BUY: { title: "Properties for sale in India", image: buyImg },
  RENT: { title: "Properties for rent in India", image: rentImg },
  COMMERCIAL: { title: "Commercial Real Estate in India", image: commercialImg },
  "PG/CO-LIVING": { title: "PG/Co-Living in India", image: pgImg },
  PLOTS: { title: "Plots for sale in India", image: plotsImg },
};

const Main = ({ activeTab, setActiveTab }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${tabData[activeTab].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        width: "100%",
        transition: "background-image 0.6s ease-in-out",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.35)",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        <Container className="text-center text-white">
          <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
            {tabData[activeTab].title}
          </h1>

          {/* Tabs */}
          <Nav
            variant="tabs"
            activeKey={activeTab}
            onSelect={(key) => setActiveTab(key)}
            className="justify-content-center mb-4 bg-dark rounded border-0 d-inline-flex"
            style={{ padding: "5px" }}
          >
            {Object.keys(tabData).map((tab) => (
              <Nav.Item key={tab}>
                <Nav.Link
                  eventKey={tab}
                  className={`text-white fw-semibold border-0 px-4 ${
                    activeTab === tab ? "bg-success rounded" : ""
                  }`}
                >
                  {tab}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Search */}
          <div
            className="d-flex align-items-center bg-white rounded-pill p-2 mx-auto"
            style={{ maxWidth: "750px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
          >
            <Form.Control
              placeholder="Select City"
              className="border-0 shadow-none px-3"
              style={{ fontSize: "1.1rem" }}
            />
            <Button
              className="rounded-pill px-5 fw-bold"
              style={{
                backgroundColor: "#2fd181",
                border: "none",
                height: "50px",
              }}
            >
              Search
            </Button>
          </div>

          {/* Owner CTA */}
          <div className="mt-4">
            <span className="bg-dark px-4 py-2 rounded-pill small" style={{ opacity: "0.9" }}>
              Are you a Property Owner?{" "}
              <span className="text-success fw-bold">Sell / Rent for FREE</span>
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Main;
