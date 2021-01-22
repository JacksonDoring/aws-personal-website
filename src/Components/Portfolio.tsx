import React from "react";
import "../Style/general.css";
import CardPW from "./PortfolioCardPW";

function Portfolio() {
  return (
    <div className="portfolioBG">
      <h1 className="headings portfolioHeader" id="portfolio">Portfolio</h1>
      <CardPW/>
    </div>
  );
}

export default Portfolio;
