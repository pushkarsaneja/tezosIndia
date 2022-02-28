import React, { useRef } from "react";
import { InitiativesCard } from "../../../components/cards/Cards";
import { initiatives } from "../../../data/initiatives";
import { useAnimationTrigger } from "../../../customHooks/customHooks";

const Initiatives = () => {
  const animationTrigger = useAnimationTrigger();
  const headingRef = useRef();
  return (
    <section>
      <div
        className={`sub-heading-container ${animationTrigger ? "animate" : ""}`}
        ref={headingRef}
      >
        <h3>
          Empowering A Well Rounded
          <br />
          Tezos Ecosystem In India
        </h3>
        <h4>
          We believe that a great ecosystem is a sum of all its participants. We
          want to enable people to seamlessly participate in the Tezos ecosystem
          in India
        </h4>
      </div>
      <div className="initiatives">
        {initiatives.map(({ img, icon, title, description }, key) => {
          return (
            <InitiativesCard
              img={img}
              icon={icon}
              title={title}
              description={description}
              key={key}
              index={key}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Initiatives;
