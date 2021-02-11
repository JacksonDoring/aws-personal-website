import React, { useState } from "react";
import "../Style/general.css";
import Card from "./PortfolioCardPW";
import {
  personalWebsite,
  PWtechnologies,
} from "../PortfolioContent/PersonalWebsite";
import {QPS, QPStechnologies} from "../PortfolioContent/QueenslandPolice";
import {Liberty, Ltechnologies} from "../PortfolioContent/Liberty";
import Button from "@material-ui/core/Button";

function Portfolio() {
  const [divStyle, setDivStyle] = useState("smallCardGroupContainer");
  const [buttonText, setButtonText] = useState("Load More");

  const handleShowMorePosts = () => {
    if (divStyle === "cardGroupContainer") {
      setDivStyle("smallCardGroupContainer");
      setButtonText("Load More");
    } else {
      setDivStyle("cardGroupContainer");
      setButtonText("Show Less");
    }
  };

  return (
    <div>
      <div className="portfolioBG">
        <h1 className="headings portfolioHeader" id="portfolio">
          My Portfolio
        </h1>
        
        <div className={divStyle}>
        <div className="cardContain">
          {Card(
            "Personal Website",
            "me2.jpg",
            "black",
            "front",
            personalWebsite,
            PWtechnologies
          )}
           {Card(
            "Queensland Police",
            "QPS.png",
            "#374f6b",
            "portfolioLogoImage",
            QPS,
            QPStechnologies
          )}
          {Card(
            "Liberty Digital",
            "libertyDigital.png",
            "black",
            "portfolioLogoImage",
            Liberty,
            Ltechnologies
          )}
          {Card(
            "La Zucca",
            "lazuccaLogo.png",
            "#222222",
            "portfolioLogoImage",
            personalWebsite,
            PWtechnologies
          )}
          {Card(
            "Liberty Enterprises",
            "libertyEnterprises.png",
            "#111921",
            "portfolioLogoImage",
            personalWebsite,
            PWtechnologies
          )}
          {Card(
            "Living Sound & Vision",
            "LSVLogo.png",
            "white",
            "portfolioLogoImage",
            personalWebsite,
            PWtechnologies
          )}
          {Card(
            "Australian Secure Capital Fund",
            "ASCFLogo.png",
            "#f59331",
            "portfolioLogoImage",
            personalWebsite,
            PWtechnologies
          )}
          {Card(
            "Connecting Brisbane",
            "connectingBrisbaneLogo.png",
            "black",
            "portfolioLogoImage",
            personalWebsite,
            PWtechnologies
          )}
          {Card(
            "Billboard Software",
            "billboardImage.png",
            "#eeeeee",
            "consoleImage",
            personalWebsite,
            PWtechnologies
          )}
          {Card(
            "Library System",
            "librarySoftwarePhoto.PNG",
            "#0c0c0c",
            "consoleImage",
            personalWebsite,
            PWtechnologies
          )}
         </div>
        </div>
      </div>
      <div className="portfolioButtonDiv">
        <Button
          id="portfolioButton"
          onClick={handleShowMorePosts}
          variant="contained"
          color="primary"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default Portfolio;
