import React from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import "./togglestyle.css";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="theme-toggle"
        className="toggle"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="theme-toggle" className="toggle-label">
        <div className="slider">
          <div className="icon sun-icon">
            <IoMdSunny />
          </div>
          <div className="icon moon-icon">
            <IoMdMoon />
          </div>
        </div>
      </label>
    </div>
  );
};
