import React from "react";
import Grid from "@material-ui/core/Grid";
import SkillsBar from "./Skills-bar";
import Container from "@material-ui/core/Container";

function Skills() {
  return (
    <Container maxWidth="lg" className="info-container">
      <h1>Skills</h1>
      <Grid container>
        <Grid item xs={6}>
          <h2 className="skills-header">
            <u>General</u>
          </h2>
          {SkillsBar("Good Listener", 7)}
          {SkillsBar("Hard Worker", 8)}
          {SkillsBar("Eagar to Learn", 7)}
          {SkillsBar("Good Time Managment", 7)}
          {SkillsBar("Punctual", 7)}
          {SkillsBar("Organised", 8)}
        </Grid>

        <Grid item xs={6}>
          <h2 className="skills-header">
            <u>Languages</u>
          </h2>
          {SkillsBar("C#", 8)}
          {SkillsBar("Javascript", 7)}
          {SkillsBar("Typescript", 7)}
          {SkillsBar("PHP", 6)}
          {SkillsBar("SQL", 7)}
          {SkillsBar("Java", 5)}
          {SkillsBar("HTML", 8)}
          {SkillsBar("CSS", 8)}
        </Grid>

        <Grid item xs={6}>
          <h2 className="skills-header">
            <u>Project Development</u>
          </h2>
          {SkillsBar("Git/Version Control", 8)}
        </Grid>

        <Grid item xs={6}>
          <h2 className="skills-header">
            <u>Software/Other</u>
          </h2>
          {SkillsBar("Node", 6)}
          {SkillsBar("React", 7)}
          {SkillsBar("Database Managment/Creation", 7)}
          {SkillsBar("Cryptography", 5)}
          {SkillsBar("Algorithm Development/Analysis", 6)}
          {SkillsBar("Information Security", 7)}
          {SkillsBar("User Centered Design", 8)}
          {SkillsBar("Web Design", 7)}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Skills;
