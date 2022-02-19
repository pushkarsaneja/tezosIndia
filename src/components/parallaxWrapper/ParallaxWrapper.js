import React, { useEffect, useState, useRef } from "react";
import Header from "../header/Header";
import "./parallaxWrapper.scss";

// this component creates a page with parallax scrolling effect
// pageDescription takes the component to be placed over the image
// pageContent takes the component to be inserted after the image

const ParallaxWrapper = ({ img, pageDescription, pageContent }) => {
  const [isHidden, setIsHidden] = useState(false); //isHidden is being used to hide and unhide header
  const [isTransparent, setIsTransparent] = useState(true); //isTransparent sets the background colour of header to transparent if true
  const [isNavOpen, setIsNavOpen] = useState(false); // isNav is being used as a flag to enable and disable scolling when side menu is open
  const parallaxWrapperRef = useRef();
  const scrollTop = useRef(0);

  useEffect(() => {
    // add an eventlistener on load to determine the scrolling direction
    // and manipulate the header component's styles

    parallaxWrapperRef.current.addEventListener("scroll", (e) => {
      if (e.target.scrollTop > scrollTop.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      if (e.target.scrollTop < 100) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
      scrollTop.current = e.target.scrollTop;
    });
  }, []);

  useEffect(() => {
    //if side menu is open, scrolling is disabled

    if (isNavOpen) parallaxWrapperRef.current.style.overflowY = "hidden";
    else parallaxWrapperRef.current.style.overflowY = "auto";
  }, [isNavOpen]);

  return (
    <div className="parallax-wrapper" ref={parallaxWrapperRef}>
      <Header
        isHidden={isHidden}
        isTransparent={isTransparent}
        setIsNavOpen={setIsNavOpen}
      />
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
