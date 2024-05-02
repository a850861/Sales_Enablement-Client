import React from "react";
import yara from "../Images/yara.svg";
import Icon from "../Images/Icon.svg";
import Icon1 from "../Images/Icon1.svg";
import Head from "../Images/Head.svg";
import "../Css/Styles.css";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <img src={yara} alt="Yara Logo" />
        <span className="text">Sales Enablement</span>
      </div>
      <div className="icon-container">
        <img src={Icon} alt="Info" className="icon" />
        <img src={Icon1} alt="Info" className="icon" />
        <img src={Head} alt="Info" className="icon" />
      </div>
    </div>
  );
};

export default Topbar;
