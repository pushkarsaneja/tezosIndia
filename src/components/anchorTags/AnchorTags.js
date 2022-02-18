import React from "react";
import "./AnchorTags.scss";

export const A1 = ({ href, children }) => {
  return (
    <a className="anchor" href={href}>
      {children}
    </a>
  );
};
