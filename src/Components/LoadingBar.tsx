import React from "react";
import "../Style/general.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function LoadingBar(skillName: string, skillLevel: number, skillImage: string) {
  return (

    <div className="loadingBar">
        <CircularProgressbar value={skillLevel} text={`${skillLevel}%`} styles={{
    path: {
      // Path color
      stroke: `rgba(62, 152, 199)`,
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: 'white',
    },
    // Customize the text
    text: {
      // Text color
      fill: 'white',
      // Text size
      fontSize: '20px',
    },
  }}/>
        <p className="loadingBarText">
        <img src={require('../Images/'+skillImage)} width="30px" className="loadingBarImage"/>
        {skillName}
        </p> 
    </div>
  );
}

export default LoadingBar;
