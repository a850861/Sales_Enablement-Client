import React, { useEffect, useRef, useState } from "react";
import search from "../Images/search.svg";
import plant from "../Images/plant.svg";

const Searchbar = ({ handleToggle, showMarkers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select crop");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
      <div className="dropdown-container" ref={dropdownRef}>
        <div className="dropdown">
          <div className="plant-container">
            <img src={plant} alt="#serachicon" className="plant-icon" />
          </div>
          <div className="dropdown-select" onClick={toggleDropdown}>
            <span className="selected-option">{selectedOption}</span>
            <div className="dropdown-arrow"></div>
          </div>
          {/* <ul className="dropdown-menu">
          <li className="dropdown-option">Option 1</li>
          <li className="dropdown-option">Option 2</li>
          <li className="dropdown-option">Option 3</li>
        </ul> */}
          {isOpen && (
            <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
              <li
                className="dropdown-option"
                onClick={() => handleOptionClick("Option 1")}
              >
                Option 1
              </li>
              <li
                className="dropdown-option"
                onClick={() => handleOptionClick("Option 2")}
              >
                Option 2
              </li>
              <li
                className="dropdown-option"
                onClick={() => handleOptionClick("Option 3")}
              >
                Option 3
              </li>
            </ul>
          )}
        </div>
      </div>
      {/* <script
        src="/Users/chetansingh/Sales-Enablement/client/src/Components/ScreenOne/script.js"
        type="text/jsx"
      ></script> */}
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            className="toggle-checkbox"
            checked={showMarkers}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>
        <span className="toggle-text">Show retailer on map</span>
      </div>
    </div>
  );
};

export default Searchbar;
