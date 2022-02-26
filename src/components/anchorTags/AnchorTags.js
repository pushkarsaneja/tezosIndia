import React from "react";
import "./AnchorTags.scss";

export const SocialLink = ({ href, children, type }) => {
  return (
    <a className="social-link" href={href}>
      <span>{children}</span>
      <i className={`fab fa-${type}`} />
    </a>
  );
};
