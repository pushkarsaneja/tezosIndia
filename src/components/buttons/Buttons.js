import React from "react";
import "./buttons.scss";

export const PrimaryButton = ({ children }) => {
  return (
    <button className="primary-button">
      {children}
      <span className="icon-container">
        <i className="fas fa-arrow-right" />
      </span>
    </button>
  );
};

export const NavButton = ({ dark, active, children, onClick }) => {
  return (
    <button
      className={`nav-button ${active ? "active" : ""} ${dark ? "dark" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
