import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Collapse } from "reactstrap";
import SkillsBar from "./Skills-bar";
import Grid from "@material-ui/core/Grid";

function ProjectDevelopment() {
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
          Project Development
        </h2>
      </div>

      <Collapse isOpen={isOpen}>
        <Grid container>
          <Grid item xs={6}>
            {SkillsBar("Good Listener", 7)}
            {SkillsBar("Hard Worker", 8)}
            {SkillsBar("Eagar to Learn", 7)}
          </Grid>
          <Grid item xs={6}>
            {SkillsBar("Good Time Managment", 7)}
            {SkillsBar("Punctual", 7)}
            {SkillsBar("Organised", 8)}
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
}

export default ProjectDevelopment;
