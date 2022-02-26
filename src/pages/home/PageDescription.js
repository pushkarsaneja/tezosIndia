import React, { useEffect, useState, useRef } from "react";
import { SocialLink } from "../../components/anchorTags/AnchorTags";
import { PrimaryButton } from "../../components/buttons/Buttons";

const PageDescription = () => {
  const [heading, setHeading] = useState("");
  const string = "We Are Dedicated To Growing The Tezos Community In India.";
  const seekRef = useRef(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setHeading(
        (prev) => prev.slice(0, prev.length - 1) + string[seekRef.current] + "|"
      );
      if (seekRef.current === string.length - 1) {
        clearInterval(myInterval);
        setHeading((prev) => prev.slice(0, prev.length - 1));
      }
      seekRef.current += 1;
    }, 50);
  }, []);

  return (
    <div className="home-page-description">
      <div className="description-container">
        <h2>Our Mission</h2>
        <h1>{heading}</h1>
        <h3>
          Blockchain and Cryptocurrency have become the fastest-growing space in
          India, and we want to introduce Tezos to the next thousand developers,
          startups, organizations &amp; corporations.
        </h3>
        <div className="social-media">
          <SocialLink href="https://twitter.com/IndiaTezos" type="twitter">
            Twitter
          </SocialLink>
          <SocialLink
            href="https://discord.com/invite/2UEY4KAQcG"
            type="discord"
          >
            Discord
          </SocialLink>
          <SocialLink href="https://t.me/indiatezosdeveloper" type="telegram">
            Telegram
          </SocialLink>
        </div>
        <PrimaryButton>Learn More</PrimaryButton>
      </div>
    </div>
  );
};

export default PageDescription;
