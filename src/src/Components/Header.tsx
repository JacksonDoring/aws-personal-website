import React from "react";
import "../Style/general.css";
import Jackson from "../Images/JacksonDoring.png";
import { blue, red } from "@material-ui/core/colors";

function Header() {
  return (
    <div className="header-background">
      <div className="mynameDiv">
        <p className="my-name">Jackson Doring</p>
      </div>

      <div className="imageJackson">
        <img src={Jackson} id="image"></img>
      </div>
      <p></p>
    </div>
  );
}

export default Header;
