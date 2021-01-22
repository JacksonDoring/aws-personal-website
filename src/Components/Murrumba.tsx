import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Grid from "@material-ui/core/Grid";
import { Collapse } from "reactstrap";

function Murrumba() {
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
          Murrumba State Secondary College
        </h2>
        <h2 className="education-date">2012-2017</h2>
      </div>

      <Collapse isOpen={isOpen}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="education-info">
              <p>
                <b>Subjects Studied:</b>
              </p>

              <ul>
                <li>
                  Information Processing Technologies (Achieved Academic
                  Excellence)
                </li>
                <li>
                  Information Technolgy Systems (Achieved Academic Excellence)
                </li>
                <li>
                  Information Communication Technologies (Achieved Academic
                  Excellence)
                </li>
                <li>Technolgy Studies (Achieved Academic Excellence)</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div>
              <h1 className="op-score">
                <u>OP- 6</u>
              </h1>
            </div>
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
}

export default Murrumba;
