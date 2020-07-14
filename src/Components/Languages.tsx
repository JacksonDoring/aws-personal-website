import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Collapse } from "reactstrap";
import SkillsBar from "./Skills-bar";
import Grid from "@material-ui/core/Grid";

function Languages() {
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
          Languages
        </h2>
      </div>

      <Collapse isOpen={isOpen}>
        <Grid container>
          <Grid item xs={6}>
            {SkillsBar("C#", 8)}
            {SkillsBar("Javascript", 7)}
            {SkillsBar("Typescript", 7)}
            {SkillsBar("PHP", 6)}
          </Grid>
          <Grid item xs={6}>
            {SkillsBar("SQL", 7)}
            {SkillsBar("Java", 5)}
            {SkillsBar("HTML", 8)}
            {SkillsBar("CSS", 8)}
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
}

export default Languages;
