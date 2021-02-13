import React from "react";
import "../Style/general.scss";
import Jackson from "../Images/JacksonDoring.png";

function Header() {
  return (
    <div className="header-background">
      <div className="mynameDiv">
        <p className="my-name">Jackson Doring</p>
      </div>

      <div className="imageJackson">
        <img src={Jackson} id="image" alt="Jackson"></img>
      </div>
      <p></p>
    </div>
  );
}

export default Header;
