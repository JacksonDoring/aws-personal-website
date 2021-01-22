import React from "react";
import Me from "../Images/me2.jpg";


function PortfolioCardPW() {
  return (
    <div className="flip-container" >
	<div className="flipper">
		<div className="front" style={{backgroundColor: "yellow"}}>
      <img src={Me} width="100%"></img>
		</div>
		<div className="back" style={{backgroundColor: "white"}}>
			<h1 className="cardHeading">Personal Website</h1>
      <div className="cardDetailsDiv">
      <ul className="cardDetails">
        <li>Developed Using React</li>
        <li><b>Language:</b> Typescript</li>
        <li>Used Version Control</li>
        <li>Hosted On AWS</li>
      </ul>
      </div>
      <div className="cardLink">
      <p className="linkCode"><b>Code:</b> link to code</p>
      </div>
      
		</div>
	</div>
</div>
  );
}

export default PortfolioCardPW;
