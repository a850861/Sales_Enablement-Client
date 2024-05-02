import React from "react";
import Retailer from "../Images/Retailer.png";
import Salesman from "../Images/Salesman.svg";
import "../Css/Styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar-conatiner">
      <div className="sidebar">
        <img src={Retailer} alt="#Retailer" className="sidebar-icon" />
        <img src={Salesman} alt="#Salesman" className="sidebar-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
