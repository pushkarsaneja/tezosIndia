import React from "react";
import { PrimaryButton } from "../../../components/buttons/Buttons";
import Counter from "../../../components/counter/Counter";

const ProjectCommunity = () => {
  return (
    <section className="project-and-comm">
      <div className="projects">
        <div>
          <div className="heading">Projects</div>
          <Counter number={13}></Counter>
        </div>
      </div>
      <div className="community">
        <div>
          <div className="heading">Community</div>
          <Counter number={75000}></Counter>
        </div>
      </div>
      <div className="difference">
        <div>
          <div className="heading">The Difference</div>
          Tezos India Is Making In The Blockchain Ecosystem
          <PrimaryButton className="learn-more">Learn More</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectCommunity;
