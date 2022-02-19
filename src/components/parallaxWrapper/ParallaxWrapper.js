import React, { useEffect, useState, useRef } from "react";
import Header from "../header/Header";
import "./parallaxWrapper.scss";

// this component creates a page with parallax scrolling effect
// pageDescription takes the component to be placed over the image
// pageContent takes the component to be inserted after the image

const ParallaxWrapper = ({ img, pageDescription, pageContent }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const parallaxWrapperRef = useRef();
  const scrollHeight = useRef(0);

  console.log(scrollHeight);

  useEffect(() => {
    parallaxWrapperRef.current.addEventListener("scroll", (e) => {
      if (e.target.scrollTop > scrollHeight.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      if (e.target.scrollTop < 100) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
      scrollHeight.current = e.target.scrollTop;
    });
  }, []);

  return (
    <div className="parallax-wrapper" ref={parallaxWrapperRef}>
      <Header isHidden={isHidden} isTransparent={isTransparent} />
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
