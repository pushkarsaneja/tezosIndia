import React, { useRef } from "react";
import { useAnimationTrigger } from "../../customHooks/customHooks";
import { IconButton } from "../buttons/Buttons";
import "./cards.scss";

export const InitiativesCard = ({ icon, description, title, img, index }) => {
  const cardRef = useRef();

  const animationTrigger = useAnimationTrigger(cardRef);

  return (
    <div
      className={`initiatives-card ${animationTrigger ? "animate" : ""}`}
      style={{ animationDelay: `${index / 10 + 0.3}s` }}
      ref={cardRef}
    >
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

export const TeamCard = ({
  img,
  designation,
  name,
  description,
  className,
  light,
}) => {
  const cardRef = useRef();
  const animationTrigger = useAnimationTrigger(cardRef);

  return (
    <div
      className={`team-card ${className} ${animationTrigger ? "animate" : ""} ${
        light ? "light" : ""
      }`}
      ref={cardRef}
    >
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

export const TestimonialCard = ({ quote, by, program, img, index }) => {
  const cardRef = useRef();
  const animationTrigger = useAnimationTrigger(cardRef);
  return (
    <div
      className={`testimonial-card ${animationTrigger ? "animate" : ""}`}
      style={{ animationDelay: `${index / 10 + 0.3}s` }}
      ref={cardRef}
    >
      <p>{quote}</p>
      <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="name">{by}</div>
      <div className="program">{program}</div>
    </div>
  );
};
