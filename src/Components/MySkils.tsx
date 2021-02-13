import React from "react";
import "../Style/general.scss";
import "react-circular-progressbar/dist/styles.css";
import LoadingBar from "./LoadingBar";

function MySkills() {
  return (
    <div className="skillsBG">
      <h1 className="headings" id="skills">
        My Skills
      </h1>
      <div className="slidingBar">
        <div className="loadingBar1">
          {LoadingBar("React", 80, "reactLogo.png", "#61dafb")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("", 40, "awsLogo.png", "#ff9900")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("Agile", 95, "agileLogo.png", "#1e7cc0")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("Team Work", 97, "teamWorkLogo.png", "#5faa4d")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("Leadership", 85, "leadershipLogo.png", "#1d607a")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("Communication", 98, "communicationLogo.png", "#33adff")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("Organisation", 90, "pencil.png", "#ffc334")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("", 90, "phpLogo.svg", "#777bb3")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("HTML", 99, "htmlLogo.png", "#e44d26")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("CSS", 95, "cssLogo.png", "#0170ba")}
        </div>
        <div className="loadingBar1">
          {LoadingBar(
            "Javascript/Typescript",
            90,
            "javascriptLogo.png",
            "#d6ba32"
          )}
        </div>
        <div className="loadingBar1">
          {LoadingBar("Java", 70, "javaLogo.png", "#5382a1")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("", 70, "csharpLogo.png", "#2d006e")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("", 85, "sqlLogo.png", "#00a9ea")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("Networking", 75, "networkingLogo.png", "#1486b3")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("Databases", 89, "databaseLogo.png", "blue")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("Complex Algorithms", 81, "algoLogo.png", "#3dc8b3")}
        </div>
        <div className="loadingBar1">
          {LoadingBar(
            "Security & Cryptography",
            78,
            "cryptLogo.png",
            "#ff3333"
          )}
        </div>
        <div className="loadingBar1">
          {LoadingBar("WordPress", 97, "wordpressLogo.png", "#49a6c8")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("", 80, "nodeLogo.png", "#4caf50")}
        </div>
        <div className="loadingBar1">
          {LoadingBar("Github/Versioning", 99, "gitLogo.png", "#f05033")}
        </div>
      </div>
    </div>
  );
}

export default MySkills;
