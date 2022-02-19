import React, { memo, useEffect, useState } from "react";
import Logo from "../logo/Logo";
import "./header.scss";
import {
  useCurrentPage,
  useSetCurrentPage,
} from "../../contexts/CurrentPageProvider";
import { IconButton, NavButton } from "../buttons/Buttons";

const navLinks = [
  "Home",
  "Events",
  "Resources",
  "Consulting",
  "Blog",
  "Contact",
];

const Header = ({
  isHidden = false,
  isTransparent = true,
  setIsNavOpen = null,
}) => {
  const currentPage = useCurrentPage();
  const setCurrentPage = useSetCurrentPage();
  const [showSideNav, setShowSideNav] = useState(false);

  console.log("Rendered");

  useEffect(() => {
    setIsNavOpen?.(showSideNav);
  }, [showSideNav, setIsNavOpen]);

  return (
    <header
      className={`${isHidden ? "hide" : ""} ${
        isTransparent ? "transparent" : ""
      }`}
    >
      <Logo dark={!isTransparent} />

      <nav className="header-nav">
        {navLinks.map((name, key) => {
          return (
            <NavButton
              dark={!isTransparent}
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

      <IconButton
        className="open-side-nav"
        onClick={() => {
          setShowSideNav(true);
        }}
        dark={!isTransparent}
      >
        <i className="fas fa-bars" />
      </IconButton>
      <nav className={`side-nav ${showSideNav ? "show" : ""}`}>
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
            <NavButton
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
    </header>
  );
};

export default memo(Header);
