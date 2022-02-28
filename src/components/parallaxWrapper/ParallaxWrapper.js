import React, { useEffect, useRef } from "react";
import "./parallaxWrapper.scss";
import { useSetBodyRef } from "../../contexts/BodyRefProvider";
import Footer from "../footer/Footer";
import Header from "../header/Header";
// this component creates a page with parallax scrolling effect and header
// pageDescription takes the component to be placed over the image
// pageContent takes the component to be inserted after the image

const ParallaxWrapper = ({
  img,
  pageDescription,
  pageContent,
  noParallax = false,
}) => {
  const parallaxWrapperRef = useRef();
  const setBodyRef = useSetBodyRef();

  useEffect(() => {
    setBodyRef(parallaxWrapperRef);
  }, [setBodyRef]);

  return (
    <div
      className={`parallax-wrapper ${noParallax ? "no-parallax" : ""}`}
      ref={parallaxWrapperRef}
    >
      {/* HEADER */}
      <Header />

      {/* Parallax Window */}
      <section className="page-description">
        <img src={img} alt="" className="parallax-img" />
        <div className="img-overlay" />
        {pageDescription}
      </section>

      {/* Main Content of the Page */}
      <section className="page-content">{pageContent}</section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ParallaxWrapper;
