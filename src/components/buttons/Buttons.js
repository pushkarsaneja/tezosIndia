import React from "react";
import "./buttons.scss";

export const PrimaryButton = ({ children, className = "" }) => {
  return (
    <button className={`primary-button ${className}`}>
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

export const SideNavButton = ({
  active,
  children,
  onClick,
  className = "",
  index,
}) => {
  return (
    <button
      className={`side-nav-button ${active ? "dark" : ""} ${className}`}
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {children}
    </button>
  );
};

export const IconButton = ({ dark, children, onClick, className = "" }) => {
  return (
    <button
      className={`${className} icon-button ${dark ? "dark" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const TextButton = ({ dark, children, onClick, className = "" }) => {
  return (
    <button
      className={`${className} text-button ${dark ? "dark" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const CircularButton = ({ children, onClick, className = "" }) => {
  return (
    <button className={`circular-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export const ViewMoreButton = ({ children, onClick, className = "" }) => {
  return <button className={`view-more-btn ${className}`}>{children}</button>;
};
