import React from "react";
import "../css/Login.css";

import Background from "../img/login-image.png";

function LeftLogin() {
  return (
    <>
      <div className="left-container">
        <img src={Background} alt="backgrounf.png" className="image" />
        <div className="gradient"></div>
        <div className="text-container">
          <div className="text">
            <p>Second</p>
            <p>Hand.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftLogin;
