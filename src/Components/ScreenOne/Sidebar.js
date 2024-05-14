
import React, { useState } from "react";
=======
import React from "react";

import Retailer from "../Images/Retailer.png";
import Salesman from "../Images/Salesman.svg";
import "../Css/Styles.css";

const Sidebar = () => {

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const divClassName = `retailers ${isClicked ? "highlighted" : ""}`;
  // const divStyle = {
  //   padding: "20px",
  //   backgroundColor: isClicked ? "yellow" : "lightgray",
  //   cursor: "pointer",
  // };

  return (
    <div className="sidebar-conatiner">
      <div className="sidebar">
        <div onClick={handleClick} className={divClassName}>
=======
  return (
    <div className="sidebar-conatiner">
      <div className="sidebar">
        <div className="retailers">

          <img src={Retailer} alt="#Retailer" className="sidebar-icon" />
          <span className="text1">Retailers</span>
        </div>
        <div className="salesman">
          <img src={Salesman} alt="#Salesman" className="sidebar-icon" />
          <span className="text2">Salesman</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
