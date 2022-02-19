import React from "react";
import Logo from "../logo/Logo";
import "./header.scss";
import {
  useCurrentPage,
  useSetCurrentPage,
} from "../../contexts/CurrentPageProvider";
import { NavButton } from "../buttons/Buttons";

const Header = ({ isHidden = false, isTransparent = true }) => {
  const currentPage = useCurrentPage();
  const setCurrentPage = useSetCurrentPage();

  const navLinks = [
    "Home",
    "Events",
    "Resources",
    "Consulting",
    "Blog",
    "Contact",
  ];

  return (
    <header
      className={`${isHidden ? "hide" : ""} ${
        isTransparent ? "transparent" : ""
      }`}
    >
      <Logo dark={!isTransparent} />
      <nav>
        <ul>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
