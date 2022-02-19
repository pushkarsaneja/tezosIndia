import React from "react";
import "./AnchorTags.scss";

export const A1 = ({ href, children }) => {
  return (
    <a className="a1" href={href}>
      {children}
    </a>
  );
};

export const A2 = ({ href, children, active }) => {
  return (
    <a className={`a2 ${active ? "active" : ""}`} href={href}>
      {children}
    </a>
  );
};
