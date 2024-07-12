import React from "react";
import "../css/Register.css";

import Background from "../img/register-image.png";

function LeftRegister() {
  return (
    <>
      <div className="background-cover">
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
      </div>
    </>
  );
}

export default LeftRegister;
