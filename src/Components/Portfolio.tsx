import React, {useState} from "react";
import "../Style/general.css";
import Card from "./PortfolioCardPW";
import PersonalWebsite from "../PortfolioContent/PersonalWebsite";

function Portfolio() {

  const [divStyle, setDivStyle] = useState("smallCardGroupContainer");
  const [buttonText, setButtonText] = useState("Load More");

  const handleShowMorePosts = () => {
    if(divStyle === "cardGroupContainer"){
      setDivStyle("smallCardGroupContainer");
      setButtonText("Load More");
    }
    else{
      setDivStyle("cardGroupContainer");
      setButtonText("Show Less");
    }
  };

  return (
    <div>
    <div className="portfolioBG">
      <h1 className="headings portfolioHeader" id="portfolio">My Portfolio</h1>
      <div className={divStyle}>
      {Card ("Personal Website", "Link to Code", "me2.jpg", "black", "front")}
      {Card ("Queensland Police", "Link to Code", "QPS.png", "#374f6b", "portfolioLogoImage")}
      {Card ("Liberty Digital", "Link to Code", "libertyDigital.png", "black", "portfolioLogoImage")}
      {Card ("La Zucca", "Link to Code", "lazuccaLogo.png", "#222222", "portfolioLogoImage")}
      {Card ("Liberty Enterprises", "Link to Code", "libertyEnterprises.png", "#111921", "portfolioLogoImage")}
      {Card ("Living Sound & Vision", "Link to Code", "LSVLogo.png", "white", "portfolioLogoImage")}
      {Card ("Australian Secure Capital Fund", "Link to Code", "ASCFLogo.png", "#f59331", "portfolioLogoImage")}
      {Card ("Connecting Brisbane", "Link to Code", "connectingBrisbaneLogo.png", "black", "portfolioLogoImage")}
      {Card ("Billboard Software", "Link to Code", "billboardImage.png", "#eeeeee", "consoleImage")}
      {Card ("Library System", "Link to Code", "librarySoftwarePhoto.PNG", "#0c0c0c", "consoleImage")}
      
      </div>
      
      
    </div>
    <div className="portfolioButtonDiv">
    <button onClick={handleShowMorePosts} className="portfolioButton">{buttonText}</button>
  </div>
  </div>
  );
}

export default Portfolio;
