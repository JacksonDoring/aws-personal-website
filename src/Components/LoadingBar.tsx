import React from "react";
import "../Style/general.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function LoadingBar(
  skillName: string,
  skillLevel: number,
  skillImage: string,
  colour: string
) {
  return (
    <div className="loadingBar">
      <CircularProgressbar
        value={skillLevel}
        text={`${skillLevel}%`}
        styles={{
          path: {
            // Path color
            stroke: colour,
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: "white",
          },
          // Customize the text
          text: {
            // Text color
            fill: "white",
            // Text size
            fontSize: "20px",
          },
        }}
      />
      <p className="loadingBarText">
        <img
          src={require("../Images/" + skillImage)}
          width="20px"
          className="loadingBarImage"
        /><br></br>
        {skillName}
      </p>
    </div>
  );
}

export default LoadingBar;
