import React, { FunctionComponent } from "react";
import { render } from "react-dom";
import MySkills from "./MySkils";

function PortfolioCard(
  portfolioName: string,
  image: string,
  frontBGColour: string,
  photoSize: string,
  description: any,
  skills: string[]
) {

  return (
    <div className="cardContainer">
      <div className="flip-container">
        <div className="flipper">
          <div className="front" style={{ backgroundColor: frontBGColour }}>
            <div className={photoSize + "Div"}>
              <img
                src={require("../Images/" + image)}
                className={photoSize}
              ></img>
            </div>
          </div>
          <div className="back" style={{ backgroundColor: "#2f2f2f" }}>
            <h1 className="cardHeading">{portfolioName}</h1>
            <div className="cardDetailsDiv">{description}</div>
            <div className="cardSkillsDiv">{skills.map(skill => <p className="skillTag">{skill}</p>)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
