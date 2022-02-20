import React, { useEffect, useState, useRef } from "react";
import Logo from "../logo/Logo";
import "./parallaxWrapper.scss";

import {
  useCurrentPage,
  useSetCurrentPage,
} from "../../contexts/CurrentPageProvider";
import { IconButton, NavButton, SideNavButton } from "../buttons/Buttons";
import ParallaxContent from "./ParallaxContent";
import { useSetBodyRef } from "../../contexts/BodyRefProvider";
// this component creates a page with parallax scrolling effect and header
// pageDescription takes the component to be placed over the image
// pageContent takes the component to be inserted after the image

const navLinks = [
  "Home",
  "Events",
  "Resources",
  "Consulting",
  "Blog",
  "Contact",
];

const ParallaxWrapper = ({
  img,
  pageDescription,
  pageContent,
  noParallax = false,
}) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isTop, setIsTop] = useState(true); //isTop is true if the scrollTop is at 0px from top
  const [showSideNav, setShowSideNav] = useState(false);
  const parallaxWrapperRef = useRef();
  const scrollTop = useRef(0);
  const currentPage = useCurrentPage();
  const setCurrentPage = useSetCurrentPage();
  const setBodyRef = useSetBodyRef();

  useEffect(() => {
    // add an eventlistener on load to determine the scrolling direction
    // and manipulate the header styles
    setBodyRef(parallaxWrapperRef);

    parallaxWrapperRef.current.addEventListener("scroll", (e) => {
      e.target.scrollTop > scrollTop.current
        ? setIsScrollingDown(true)
        : setIsScrollingDown(false);

      e.target.scrollTop < 10 ? setIsTop(true) : setIsTop(false);

      scrollTop.current = e.target.scrollTop;
    });
  }, [setBodyRef]);

  useEffect(() => {
    //disable scroll if side nav is open

    parallaxWrapperRef.current.style.overflowY = showSideNav
      ? "hidden"
      : "auto";
  }, [showSideNav]);

  return (
    <div
      className={`parallax-wrapper ${noParallax ? "no-parallax" : ""}`}
      ref={parallaxWrapperRef}
    >
      {/* HEADER */}

      <header
        className={`${isScrollingDown ? "hide" : ""} ${
          isTop ? "transparent" : ""
        }`}
      >
        <Logo dark={!isTop} />

        <nav className="header-nav">
          {navLinks.map((name, key) => {
            return (
              <NavButton
                dark={!isTop}
                active={name === currentPage}
                key={key}
                onClick={() => {
                  setCurrentPage(name);
                }}
              >
                {name}
              </NavButton>
            );
          })}
        </nav>

        {/* Hamburger Side Nav Icon */}

        <IconButton
          className="open-side-nav"
          onClick={() => {
            setShowSideNav(true);
          }}
          dark={!isTop}
        >
          <i className="fas fa-bars" />
        </IconButton>

        {/* Side Nav Menu */}
        <nav className={`side-nav ${showSideNav ? "show" : ""}`}>
          {/* Close Side Nav Icon */}
          {showSideNav && (
            <IconButton
              className="close-side-nav"
              onClick={() => {
                setShowSideNav(false);
              }}
            >
              <i className="fas fa-times" />
            </IconButton>
          )}

          {navLinks.map((name, key) => {
            return (
              <SideNavButton
                active={name === currentPage}
                key={key}
                onClick={() => {
                  setCurrentPage(name);
                }}
              >
                {name}
              </SideNavButton>
            );
          })}
        </nav>
      </header>
      <ParallaxContent
        img={img}
        pageContent={pageContent}
        pageDescription={pageDescription}
      />
    </div>
  );
};

export default ParallaxWrapper;
