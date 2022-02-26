import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "../../customHooks/customHooks";
import { IconButton } from "../buttons/Buttons";
import "./cards.scss";

export const InitiativesCard = ({ icon, description, title, img, index }) => {
  const cardRef = useRef();
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const isInViewPort = useInViewport(cardRef);

  useEffect(() => {
    if (isInViewPort) {
      setAnimationTrigger(true);
    }
  }, [isInViewPort]);

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

export const TeamCard = ({ img, designation, name, description }) => {
  const cardRef = useRef();
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const isInViewPort = useInViewport(cardRef);

  useEffect(() => {
    if (isInViewPort) {
      setAnimationTrigger(true);
    }
  }, [isInViewPort]);

  return (
    <div
      className={`team-card ${animationTrigger ? "animate" : ""}`}
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

export const TestimonialCard = ({ quote, by, program, index }) => {
  const cardRef = useRef();
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const isInViewPort = useInViewport(cardRef);

  useEffect(() => {
    if (isInViewPort) {
      setAnimationTrigger(true);
    }
  }, [isInViewPort]);
  return (
    <div
      className={`testimonial-card ${animationTrigger ? "animate" : ""}`}
      style={{ animationDelay: `${index / 10 + 0.3}s` }}
      ref={cardRef}
    >
      <p>{quote}</p>
      <div className="name">{by}</div>
      <div className="program">{program}</div>
    </div>
  );
};
