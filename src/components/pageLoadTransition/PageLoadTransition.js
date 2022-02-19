import React from "react";
import "./pageLoadTransition.scss";

// pageWrapper provides the on load animation to the page it is wrapped around.

const PageLoadTransition = ({ children }) => {
  return (
    <div className="page-load">
      <div className="curtain left"></div>
      <div className="curtain right"></div>
      <div className="curtain top"></div>
      <div className="curtain bottom"></div>
      {children}
    </div>
  );
};

export default PageLoadTransition;
