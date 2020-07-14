import React from "react";
import Container from "@material-ui/core/Container";
import General from "./General";
import Languages from "./Languages";
import ProjectDevelopment from "./Project-Development";
import Software from "./Software";

function Skills() {
  return (
    <Container maxWidth="lg" className="info-container">
      <h1>Skills</h1>
      <General />
      <Languages />
      <ProjectDevelopment />
      <Software />
    </Container>
  );
}

export default Skills;
