import React from "react";
import "../Style/general.css";

function Menu() {
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x !== null) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  };
  return (
    <div className="topnav" id="myTopnav">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <a href="#about" className="active">
        About
      </a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Menu;
