import React from "react";
import "./AnchorTags.scss";

export const A1 = ({ href, children }) => {
  return (
    <a className="a1" href={href}>
      {children}
    </a>
  );
};
