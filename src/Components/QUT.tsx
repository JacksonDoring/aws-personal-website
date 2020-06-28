import React, { useState, useEffect } from 'react';
import { Collapse} from 'reactstrap';
import '../Style/resume.css';
import Container from '@material-ui/core/Container';

function QUT() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(">");

  const toggle = () => {
      setIsOpen(!isOpen); 
    };

    useEffect(() => {
        if(isOpen === true){
            setText("^");
        }
        else if(isOpen === false){
            setText(">");
        }
        console.log(isOpen);
      }, [isOpen]);

  return (
    <div>
      <Container maxWidth="lg" className="info-container">
        <h1>Education</h1>

        <div className="education-header">
        <h2><button color="primary" onClick={toggle} style={{ marginBottom: '1rem'}} className="education-button">{text}</button>
          Queensland University of Technology</h2>
        </div>

        <Collapse isOpen={isOpen}>
          <p>info</p>
        </Collapse>

      </Container> 
    </div>

  );
}

export default QUT;