import React from "react";
import "./parallaxWrapper.scss";

// this component creates a page with parallax scrolling effect
// pageDescription takes the component to be placed over the image
// pageContent takes the component to be inserted after the image

const ParallaxWrapper = ({ img, pageDescription, pageContent }) => {
  return (
    <div className="parallax-wrapper">
      <section className="page-description">
        <img src={img} alt="" className="parallax-img" />
        <div className="img-overlay" />
        {pageDescription}
      </section>
      <section className="page-content">{pageContent}</section>
    </div>
  );
};

export default ParallaxWrapper;
