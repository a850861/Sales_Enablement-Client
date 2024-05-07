import React from "react";
import search from "../Images/search.svg";
import plant from "../Images/plant.svg";

const Searchbar = () => {
  return (
    <div className="horizontal-container">
      <div className="search-container">
        <img src={search} alt="#serachicon" className="search-icon" />
        <input
          type="text"
          placeholder="Search by region"
          className="search-bar"
        />
      </div>

      <div className="dropdown">
        <div className="plant-container">
          <img src={plant} alt="#serachicon" className="plant-icon" />
        </div>
        <div className="dropdown-select">
          <span className="selected-option">Select crop</span>
          <div className="dropdown-arrow"></div>
        </div>
        <ul className="dropdown-menu">
          <li className="dropdown-option">Option 1</li>
          <li className="dropdown-option">Option 2</li>
          <li className="dropdown-option">Option 3</li>
        </ul>
      </div>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" className="toggle-checkbox" />
          <span className="slider"></span>
        </label>
        <span className="toggle-text">Show retailer on map</span>
      </div>
    </div>
  );
};

export default Searchbar;
