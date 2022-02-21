import React from "react";
import Logo from "../logo/Logo";
import "./footer.scss";
import { navLinks } from "../../data/navlinks";
import { TextButton } from "../buttons/Buttons";
import post1 from "../../assets/post1.jpeg";
import post2 from "../../assets/post2.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <section className="footer-section one">
          <Logo className="footer-logo" />
          <div className="info">Copyright © 2022 Tezos India</div>
          <div className="info">Built with love in India</div>
          <div className="info">All rights reserved.</div>
        </section>
        <section className="footer-section two">
          {navLinks.map((navItem, key) => {
            return (
              <TextButton key={key} className="nav-button">
                {navItem}
              </TextButton>
            );
          })}
        </section>
        <section className="footer-section three">
          <h4>Recent Posts</h4>

          <div className="post-link">
            <img className="post-img" src={post1} alt="" />
            <div className="post-description">
              <div className="post-heading">
                Plenty Global Hackathon: Plenty X Tezos India To Advance Tezos
                DeFi Ecosystem
              </div>
              <div className="post-date">November 25, 2021</div>
            </div>
          </div>

          <div className="post-link">
            <img className="post-img" src={post2} alt="" />
            <div className="post-description">
              <div className="post-heading">
                TEZASIA: Tezos India &amp; TZ APAC Collaborate To Host An
                Asia-Wide Hackathon
              </div>
              <div className="post-date">July 15, 2021</div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
