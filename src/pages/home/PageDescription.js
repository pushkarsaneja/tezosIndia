import React from "react";
import { A1 } from "../../components/anchorTags/AnchorTags";
import { PrimaryButton } from "../../components/buttons/Buttons";

const PageDescription = () => {
  return (
    <div className="home-page-description">
      <div className="description-container">
        <h2>Our Mission</h2>
        <h1>
          We Are Dedicated To Growing The
          <br />
          Tezos Community In India.
        </h1>
        <h3>
          Blockchain and Cryptocurrency have become the fastest-growing space in
          India, and we want to introduce Tezos to the next thousand developers,
          startups, organizations &amp; corporations.
        </h3>
        <div className="social-media">
          <A1 href="https://twitter.com/IndiaTezos">Twitter</A1>
          <A1 href="https://discord.com/invite/2UEY4KAQcG">Discord</A1>
          <A1 href="https://t.me/indiatezosdeveloper">Telegram</A1>
        </div>
        <PrimaryButton>Learn More</PrimaryButton>
      </div>
    </div>
  );
};

export default PageDescription;
