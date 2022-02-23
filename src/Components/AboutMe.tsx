import React from "react";
import "../Style/general.scss";

function AboutMe() {
  return (
    <div className="aboutMe">
      <h1 className="headings" id="about">
        About Me
      </h1>
      <p className="aboutMeParagraph">
        I am currently working as a software engineer for Flight Centre, on a
        daily basis I work with Java, Javascript, Spring, Sybase, Splunk and
        Azure. My current job requires me to work closely with the business to
        deliver critical enhancements through analysing, designing, testing and
        developing software solutions, provide support for various applications,
        and assist the wider team with deliveries. <br></br>
        <div className="certificatesList">
          <br></br>
          <b>My current certificates/qualifications include</b>
          <ul>
            <li>
              Bachelor's degree in Information Technology with Computer Science
              Major
            </li>
            <li>AWS Cloud Practitioner</li>
            <li>AWS Certified Developer - Associate</li>
          </ul>
        </div>
      </p>
    </div>
  );
}

export default AboutMe;
