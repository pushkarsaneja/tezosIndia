import React from "react";
import { blockchainSolutions } from "../../data/blockchainSolutions";

const PageContent = () => {
  return (
    <section className="consulting-page-content">
      {/* Blockchain Solutions By Tezos India */}
      <div className="blockchain-solutions">
        <h2>Blockchain Solutions By Tezos India</h2>
        <p>
          Tezos India is one of the leading blockchain adoption entities in
          India. We design blockchain strategies for companies and developers by
          working closely with experts and stakeholders in the Tezos ecosystem.
        </p>
        <div className="solutions-container">
          {blockchainSolutions.map(({ solution, description, icon }, key) => {
            return (
              <div className="solution" key={key}>
                <i className={icon} />
                <div className="heading">{solution}</div>
                <div className="description">{description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PageContent;
