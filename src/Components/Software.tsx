import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Collapse } from "reactstrap";
import SkillsBar from "./Skills-bar";
import Grid from "@material-ui/core/Grid";

function Software() {
  //Section for handling the opening and closing of the Murrumba section
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

  return (
    <div>
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
          Software/Other
        </h2>
      </div>

      <Collapse isOpen={isOpen}>
        <Grid container>
          <Grid item xs={6}>
            {SkillsBar("Node", 6)}
            {SkillsBar("React", 7)}
            {SkillsBar("AWS/Cloud", 7)}
            {SkillsBar("Database Managment/Creation", 7)}
            {SkillsBar("Cryptography", 5)}
          </Grid>
          <Grid item xs={6}>
            {SkillsBar("Algorithm Development/Analysis", 6)}
            {SkillsBar("Information Security", 7)}
            {SkillsBar("User Centered Design", 8)}
            {SkillsBar("Web Design", 7)}
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
}

export default Software;
