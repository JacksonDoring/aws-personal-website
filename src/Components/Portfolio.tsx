import React, {useState} from "react";
import "../Style/general.css";
import Card from "./PortfolioCardPW";
import PersonalWebsite from '../PortfolioContent/PersonalWebsite';
import Button from '@material-ui/core/Button';

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
      {Card ("Personal Website", "Link to Code", "me2.jpg", "black", "front", PersonalWebsite)}
      {Card ("Queensland Police", "Link to Code", "QPS.png", "#374f6b", "portfolioLogoImage", PersonalWebsite)}
      {Card ("Liberty Digital", "Link to Code", "libertyDigital.png", "black", "portfolioLogoImage", PersonalWebsite)}
      {Card ("La Zucca", "Link to Code", "lazuccaLogo.png", "#222222", "portfolioLogoImage", PersonalWebsite)}
      {Card ("Liberty Enterprises", "Link to Code", "libertyEnterprises.png", "#111921", "portfolioLogoImage", PersonalWebsite)}
      {Card ("Living Sound & Vision", "Link to Code", "LSVLogo.png", "white", "portfolioLogoImage", PersonalWebsite)}
      {Card ("Australian Secure Capital Fund", "Link to Code", "ASCFLogo.png", "#f59331", "portfolioLogoImage", PersonalWebsite)}
      {Card ("Connecting Brisbane", "Link to Code", "connectingBrisbaneLogo.png", "black", "portfolioLogoImage", PersonalWebsite)}
      {Card ("Billboard Software", "Link to Code", "billboardImage.png", "#eeeeee", "consoleImage", PersonalWebsite)}
      {Card ("Library System", "Link to Code", "librarySoftwarePhoto.PNG", "#0c0c0c", "consoleImage", PersonalWebsite)}
      
      </div>
      
      
    </div>
    <div className="portfolioButtonDiv">
    <Button id="portfolioButton" onClick={handleShowMorePosts} variant="contained" color="primary">
    {buttonText}
      </Button>
  </div>
  </div>
  );
}

export default Portfolio;
