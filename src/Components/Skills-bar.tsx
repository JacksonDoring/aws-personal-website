import React from "react";
import "../Style/skills-bar.css";

function Circle() {
  return (
    <div className="circle">
      <p></p>
    </div>
  );
}

function UnfilledCircle() {
  return (
    <div className="unfilled-circle">
      <p></p>
    </div>
  );
}

function SkillsBar(text: string, level: number) {
  let drawCircles = [];

  for (let i = 0; i < level; i++) {
    drawCircles.push(<Circle />);
  }

  let remaining = 8 - level;
  console.log(remaining);

  for (let i = 0; i < remaining; i++) {
    drawCircles.push(<UnfilledCircle />);
  }

  return (
    <div className="skills-name">
      <p className="skill-title">
        <b>{text}</b>
      </p>
      {drawCircles}
      <div>
        <div className="novice">
          <p>Novice</p>
        </div>
        <div className="expert">
          <p>Expert</p>
        </div>
      </div>
    </div>
  );
}

export default SkillsBar;
