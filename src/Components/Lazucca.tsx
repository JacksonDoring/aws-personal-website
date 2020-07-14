import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Collapse } from "reactstrap";

function HJs() {
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
          La_Zucca
        </h2>
        <h2 className="education-date">January 2016 - Current</h2>
      </div>

      <Collapse isOpen={isOpen}>testing</Collapse>
    </div>
  );
}

export default HJs;
