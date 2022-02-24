import React from "react";
import { PrimaryButton } from "../../components/buttons/Buttons";

const PageDescription = () => {
  return (
    <section className="consulting-page-description">
      <div className="what-we-do">
        <h3>What do we do?</h3>
        <h2>Unlock The Web3 World.</h2>
        <h2>Build On Tezos.</h2>
        <h2>Collaborate Worldwide.</h2>
        <PrimaryButton className="learn-more">Learn More</PrimaryButton>
      </div>
    </section>
  );
};

export default PageDescription;
