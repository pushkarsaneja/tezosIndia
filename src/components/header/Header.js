import React, { useState, useRef, useEffect, memo } from "react";
import { useBodyRef } from "../../contexts/BodyRefProvider";
import "./header.scss";
import Logo from "../logo/Logo";
import { IconButton, NavButton, SideNavButton } from "../buttons/Buttons";
import { navLinks } from "../../data/navlinks";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isTop, setIsTop] = useState(true); //isTop is true if the scrollTop is at 0px from top
  const [showSideNav, setShowSideNav] = useState(false);
  const scrollTop = useRef(0);
  const bodyRef = useBodyRef();

  useEffect(() => {
    // add an eventlistener on load to determine the scrolling direction
    // and manipulate the header styles

    bodyRef?.current?.addEventListener("scroll", (e) => {
      e.target.scrollTop > scrollTop.current
        ? setIsScrollingDown(true)
        : setIsScrollingDown(false);

      e.target.scrollTop < 10 ? setIsTop(true) : setIsTop(false);

      scrollTop.current = e.target.scrollTop;
    });
  }, [bodyRef]);

  useEffect(() => {
    //disable scroll if side nav is open
    if (bodyRef?.current)
      bodyRef.current.style.overflowY = showSideNav ? "hidden" : "auto";
  }, [showSideNav, bodyRef]);

  return (
    <header
      className={`${isScrollingDown ? "hide" : ""} ${
        isTop ? "transparent" : ""
      }`}
    >
      <Logo dark={!isTop} />

      <nav className="header-nav">
        {navLinks.map((name, key) => {
          return (
            <Link key={key} to={`/${name.toLowerCase()}`}>
              <NavButton
                dark={!isTop}
                active={
                  name === "Home" && window.location.pathname === "/"
                    ? true
                    : name.toLowerCase() === window.location.pathname.slice(1)
                }
              >
                {name}
              </NavButton>
            </Link>
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
            <Link key={key} to={`/${name.toLowerCase()}`}>
              <SideNavButton
                active={
                  name === "Home" && window.location.pathname === "/"
                    ? true
                    : name.toLowerCase() === window.location.pathname.slice(1)
                }
              >
                {name}
              </SideNavButton>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default memo(Header);
