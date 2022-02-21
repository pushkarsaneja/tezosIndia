import React from "react";
import { IconButton } from "../buttons/Buttons";
import "./cards.scss";

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

export const TeamCard = ({ img, designation, name, description }) => {
  return (
    <div className="team-card">
      <img src={img} alt={`${name}`} />
      <div className="designation">{designation}</div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="icon-container">
        <i className="fas fa-arrow-right" />
      </div>
    </div>
  );
};

export const VideoCard = ({ preview, heading, url, description }) => {
  return (
    <div className="video-card">
      <div className="preview-container">
        <img src={preview} alt="" />
        <IconButton className="play-button">
          <i className="fas fa-play-circle" />
        </IconButton>
      </div>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
};
