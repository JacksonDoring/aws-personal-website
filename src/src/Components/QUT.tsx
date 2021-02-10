import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import "../Style/resume.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import GPA from "../Images/gpa2.jpg";
import Units from "./Units";
import Murrumba from "./Murrumba";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function QUT() {
  //Section that is responsible for handling the opening and closing of the QUT section
  const [isOpen, setIsOpen] = useState(false);
  const [openText, setOpenText] = useState(<ExpandMoreIcon />);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen === true) {
      setOpenText(<ExpandMoreIcon />);
    } else if (isOpen === false) {
      setOpenText(<ChevronRightIcon />);
    }
  }, [isOpen]);

  //Section that is responsible for handling the opening and closing of the Units Studied section
  const [isOpenUnits, setIsOpenUnits] = useState(false);
  const [openTextUnits, setOpenTextUnits] = useState(<ExpandMoreIcon />);

  const toggleUnits = () => {
    setIsOpenUnits(!isOpenUnits);
  };

  useEffect(() => {
    if (isOpenUnits === true) {
      setOpenTextUnits(<ExpandMoreIcon />);
    } else if (isOpenUnits === false) {
      setOpenTextUnits(<ChevronRightIcon />);
    }
  }, [isOpenUnits]);

  return (
    <div>
      <Container maxWidth="lg" className="info-container">
        <h1>Education</h1>

        <div className="education-header">
          <h2 className="education-name">
            <button
              color="primary"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
              className="education-button"
            >
              {openText}
            </button>
            Queensland University of Technology
          </h2>
          <h2 className="education-date">2018-2020</h2>
        </div>

        <Collapse isOpen={isOpen}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="education-info">
                <p>
                  <b>Degree: </b>Information Technology
                </p>

                <ul>
                  <li>
                    <b>Major: </b>Computer Science
                  </li>
                  <li>
                    <b>Minor: </b>Network and Security
                  </li>
                  <li>
                    <b>Minor: </b>User Experience
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={6}>
              <img src={GPA} alt="gpa" width="30%" className="gpa-image" />
            </Grid>
          </Grid>

          <h3 className="units-studied">
            <button
              color="primary"
              onClick={toggleUnits}
              style={{ marginBottom: "1rem" }}
              className="education-button"
            >
              {openTextUnits}
            </button>
            Units Studied
          </h3>

          <Collapse isOpen={isOpenUnits}>
            <Units />
          </Collapse>
        </Collapse>

        <Murrumba />
      </Container>
    </div>
  );
}

export default QUT;
