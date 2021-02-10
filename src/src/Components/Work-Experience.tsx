import React from "react";
import Container from "@material-ui/core/Container";
import HJs from "./HJs";
import Lazucca from "./Lazucca";
import Liberty from "./Liberty";

function WorkExperience() {
  return (
    <Container maxWidth="lg" className="info-container">
      <h1>Work Experience</h1>
      <HJs />
      <Lazucca />
      <Liberty />
    </Container>
  );
}

export default WorkExperience;
