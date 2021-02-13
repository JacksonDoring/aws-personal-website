import React, { useState } from "react";
import "../Style/general.scss";
import Card from "./PortfolioCardPW";
import {
  personalWebsite,
  PWtechnologies,
} from "../PortfolioContent/PersonalWebsite";
import {QPS, QPStechnologies} from "../PortfolioContent/QueenslandPolice";
import {Liberty, Ltechnologies} from "../PortfolioContent/Liberty";
import {LaZucca, LZtechnologies} from "../PortfolioContent/LaZucca";
import {ASCF, ASCFtechnologies} from "../PortfolioContent/ASCF";
import {ConnectingBrisbane, CBtechnologies} from "../PortfolioContent/ConnectingBrisbane";
import {Billboard, Btechnologies} from "../PortfolioContent/Billboard";
import {LibertyE, LEtechnologies} from "../PortfolioContent/LibertyEnterprises";
import {Library, Libtechnologies} from "../PortfolioContent/Library";
import {LSV, LSVtechnologies} from "../PortfolioContent/LSV";
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
            LaZucca,
            LZtechnologies
          )}
          {Card(
            "Liberty Enterprises",
            "libertyEnterprises.png",
            "#111921",
            "portfolioLogoImage",
            LibertyE,
            LEtechnologies
          )}
          {Card(
            "Living Sound & Vision",
            "LSVLogo.png",
            "white",
            "portfolioLogoImage",
            LSV,
            LSVtechnologies
          )}
          {Card(
            "Australian Secure Capital Fund",
            "ASCFLogo.png",
            "#f59331",
            "portfolioLogoImage",
            ASCF,
            ASCFtechnologies
          )}
          {Card(
            "Connecting Brisbane",
            "connectingBrisbaneLogo.png",
            "black",
            "portfolioLogoImage",
            ConnectingBrisbane,
            CBtechnologies
          )}
          {Card(
            "Billboard Software",
            "billboardImage.png",
            "#eeeeee",
            "consoleImage",
            Billboard,
            Btechnologies
          )}
          {Card(
            "Library System",
            "librarySoftwarePhoto.PNG",
            "#0c0c0c",
            "consoleImage",
            Library,
            Libtechnologies
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
