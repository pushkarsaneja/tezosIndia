import React, { memo } from "react";

//separated from Parallax Wrapper for optimization and avoid rerenders

const ParallaxContent = ({ img, pageDescription, pageContent }) => {
  return (
    <>
      <section className="page-description">
        <img src={img} alt="" className="parallax-img" />
        <div className="img-overlay" />
        {pageDescription}
      </section>
      <section className="page-content">{pageContent}</section>
    </>
  );
};

export default memo(ParallaxContent);
