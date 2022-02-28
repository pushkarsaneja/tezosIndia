import React from "react";
import Counter from "../../../components/counter/Counter";

const TezosNumbers = () => {
  return (
    <section className="tezos-numbers">
      <h2>Tezos India In Numbers</h2>
      <div className="counters-container">
        <div className="projects">
          <Counter className="tezos-number-counter" number={13} />
          <h3>Projects Building actively on Tezos from India</h3>
        </div>
        <div className="hackathons">
          <Counter className="tezos-number-counter" number={100} />
          <h3>Hackathons conducted by Tezos India</h3>
        </div>
        <div className="blockchain">
          <Counter className="tezos-number-counter" number={6000} />
          <h3>Developers developing on Tezos Blockchain in India</h3>
        </div>
      </div>
    </section>
  );
};

export default TezosNumbers;
