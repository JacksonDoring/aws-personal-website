import React from "react";
import "../Style/general.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LoadingBar from "./LoadingBar";

function MySkills() {
  return (
    <div className="skillsBG">
    <h1 className="headings" id="skills">My Skills</h1> 
    <div className="slidingBar">

        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
        <div className="loadingBar1">{LoadingBar("React", 69, 'reactLogo.png')}</div>
      
      
  </div>
  </div>
  );
}

export default MySkills;
