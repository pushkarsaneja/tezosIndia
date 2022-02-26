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
        {/* icons */}
        {/* <i className="fab fa-ethereum ethereum" />
        <i className="fab fa-bitcoin bitcoin" />
        <i className="fab fa-hive hive" />
        <i className="fas fa-th blocks" />
        <i className="fas fa-code code" />
        <i className="fas fa-briefcase briefcase" />
        <i className="fas fa-building building" />
        <i className="fas fa-project-diagram blockchain" /> */}
      </section>

      {/* Main Content of the Page */}
      <section className="page-content">{pageContent}</section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ParallaxWrapper;
