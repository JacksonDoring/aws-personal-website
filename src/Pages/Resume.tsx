import React from "react";
import "../Style/resume.css";
import Container from "@material-ui/core/Container";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HomeIcon from "@material-ui/icons/Home";
import Grid from "@material-ui/core/Grid";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import QUT from "../Components/QUT";
import SkillsBar from "../Components/Skills-bar";

function ContactInformation() {
  return (
    <Container maxWidth="lg" className="info-container">
      <h1>Contact Information</h1>
      <div className="birthday">
        <Grid container>
          <Grid item xs={6}>
            <div className="birthday">
              <CalendarTodayIcon fontSize="large" className="icon" />
              <p className="contact-info">02/09/2000</p>
            </div>
          </Grid>

          <Grid item xs={6} className="last-icon">
            <div className="birthday">
              <HomeIcon fontSize="large" className="icon" />
              <p className="contact-info">10 Meadows Drive, Kallangur</p>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="birthday">
              <PhoneIcon fontSize="large" className="icon" />
              <p className="contact-info">0401 429 998</p>
            </div>
          </Grid>

          <Grid item xs={6} className="last-icon">
            <div className="birthday">
              <EmailIcon fontSize="large" className="icon" />
              <p className="contact-info">jackson_doring@outlook.com</p>
            </div>
          </Grid>

          <Grid item xs={12}>
            <a href="https://github.com/JacksonDoring" id="website-link">
              https://github.com/JacksonDoring
            </a>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

function AboutMe() {
  return (
    <Container maxWidth="lg" className="info-container">
      <h1>About Me</h1>

      <div className="about-text">
        <p>I am a hard working person</p>
      </div>
    </Container>
  );
}

function Resume() {
  return (
    <div className="App">
      <ContactInformation />
      <AboutMe />
      <QUT />
      {SkillsBar("testing")}
    </div>
  );
}

export default Resume;
