import React from "react";
import { successStories } from "../../../data/successStories";

const SuccessStories = () => {
  return (
    <div>
      <section className="success-stories">
        <h2>Some Of Our Success Stories At Tezos India</h2>
        <div className="brands">
          {successStories.map(({ name, img }, key) => (
            <img key={key} src={img} alt={name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
