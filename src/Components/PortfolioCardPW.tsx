import React, { FunctionComponent } from "react";
import { isPropertySignature } from "typescript";
import PersonalWebsite from "../PortfolioContent/PersonalWebsite";

function PortfolioCard(portfolioName: string, linkCode: string, image: string, frontBGColour:string, photoSize:string, description:any){
  return (
    <div className="cardContainer">
    <div className="flip-container" >
	<div className="flipper">
		<div className="front" style={{backgroundColor: frontBGColour}}>
      <div className={photoSize+"Div"}>
        <img src={require('../Images/'+image)} className={photoSize}></img>
      </div>
		</div>
		<div className="back" style={{backgroundColor: "white"}}>
			<h1 className="cardHeading">{portfolioName}</h1>
      <div className="cardDetailsDiv">
        {description}
      </div>
      <div className="cardLink">
      <p className="linkCode"><b>Code:</b> {linkCode}</p>
      </div>
      
		</div>
	</div>
</div>
</div>
  );
}

export default PortfolioCard;
