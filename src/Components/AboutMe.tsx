import React from "react";
import "../Style/general.scss";

function AboutMe() {
  return (
    <div className="aboutMe">
      <h1 className="headings" id="about">
        About Me
      </h1>
      <p className="aboutMeParagraph">
        I am in my final semester of{" "}
        <i>
          <b>Information Technology</b>{" "}
        </i>
        at QUT, with a major in{" "}
        <i>
          <b>Computer Science</b>{" "}
        </i>
        . I am seeking a position in{" "}
        <i>
          <b>software</b>
        </i>{" "}
        or{" "}
        <i>
          <b>web development</b>
        </i>{" "}
        to build upon the knowledge I have gained through education and work. I
        have a deep interest in technology and how it can be intergrated into
        everyday life. I am passionate about working and I'm excited to learn
        new things everyday.
      </p>
    </div>
  );
}

export default AboutMe;
