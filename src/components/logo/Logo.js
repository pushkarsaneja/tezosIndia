import React from "react";
import logo from "../../assets/TIF-White.png";
import logoDark from "../../assets/TIF.png";
import "./logo.scss";

const Logo = ({ dark, className = "" }) => {
  return (
    <div className={`logo-container ${className}`}>
      <img src={dark ? logoDark : logo} alt="logo" />
    </div>
  );
};

export default Logo;
