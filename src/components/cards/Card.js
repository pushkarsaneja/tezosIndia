import React from "react";
import "./card.scss";

export const Card1 = ({ icon, description, title, img }) => {
  return (
    <div className="card-1">
      <img src={img} alt="" />
      <div className="card-content" img={img}>
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="gradient" />
    </div>
  );
};
