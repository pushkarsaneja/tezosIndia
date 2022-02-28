import React, { useEffect, useRef, useState } from "react";
import { useAnimationTrigger } from "../../customHooks/customHooks";
import { CircularButton, ViewMoreButton } from "../buttons/Buttons";
import "./carousel.scss";

export const Carousel1 = ({ mainCarouselContent }) => {
  const contentLength = mainCarouselContent.length;
  const carouselRef = useRef();
  const carouselSlideRef = useRef();
  const animationTrigger = useAnimationTrigger(carouselRef);
  const [currentSlide, setCurrentSlide] = useState(0);
  let myTimeout = null;
  useEffect(() => {
    if (animationTrigger) {
      const myTimeout = setTimeout(() => {
        triggerSlideAnimation();
        clearTimeout(myTimeout);
      }, 1000);
    }
  }, [animationTrigger]);

  const triggerSlideAnimation = () => {
    carouselSlideRef.current.style.opacity = "1";
    carouselSlideRef.current.classList.remove("animate");
    void carouselRef.current.offsetWidth;
    carouselSlideRef.current.classList.add("animate");
  };

  return (
    <section
      className={`tezos-carousel ${animationTrigger ? "animate" : ""}`}
      ref={carouselRef}
    >
      <div className="carousel-background" />
      <div className="carousel-body">
        <img
          className="logo"
          src="https://tezos.com/brand/TezosLogo_Horizontal_White.svg"
          alt="logo"
        />
        <img
          src="https://assets-global.website-files.com/61c3148e64788314b2c58064/61c3148e647883179bc58094_pattern.svg"
          alt=""
          className="illustration one"
        />
        <img
          src="https://assets-global.website-files.com/61c3148e64788314b2c58064/61c3148e647883179bc58094_pattern.svg"
          alt=""
          className="illustration two"
        />
        <div className="scroll-down-text">
          <i className="fas fa-arrow-left" />
          SCROLL DOWN
        </div>

        <div className="carousel-slide" ref={carouselSlideRef}>
          <div className="slide-content">
            <h2>FEATURED ARTICLE</h2>
            <h1>{mainCarouselContent[currentSlide]?.heading}</h1>
            <div className="category">
              {mainCarouselContent[currentSlide]?.category}
            </div>
            <div className="date">
              {mainCarouselContent[currentSlide]?.date}
            </div>
            <ViewMoreButton className="view-more">View More</ViewMoreButton>
          </div>
          <div className="slide-img">
            <img src={mainCarouselContent[currentSlide]?.img} alt="" />
          </div>
        </div>
        <CircularButton
          className="slide-left"
          onClick={() => {
            clearTimeout(myTimeout);
            carouselSlideRef.current.style.opacity = "0";
            myTimeout = setTimeout(() => {
              if (currentSlide <= 0) {
                setCurrentSlide(contentLength - 1);
              } else {
                setCurrentSlide((prev) => prev - 1);
              }
              triggerSlideAnimation();
              clearTimeout(myTimeout);
            }, 500);
          }}
        >
          <i className="fas fa-chevron-left" />
        </CircularButton>
        <CircularButton
          className="slide-right"
          onClick={() => {
            clearTimeout(myTimeout);
            carouselSlideRef.current.style.opacity = "0";
            myTimeout = setTimeout(() => {
              if (currentSlide >= contentLength - 1) {
                setCurrentSlide(0);
              } else {
                setCurrentSlide((prev) => prev + 1);
              }
              triggerSlideAnimation();
              clearTimeout(myTimeout);
            }, 500);
          }}
        >
          <i className="fas fa-chevron-right" />
        </CircularButton>
        <div className="navigation">
          {mainCarouselContent.map((ele, index) => {
            return (
              <div
                className={`dot ${index === currentSlide ? "active" : ""}`}
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  triggerSlideAnimation();
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Carousel2 = ({ children }) => {
  const carouselSlideRef = useRef();
  const carouselRef = useRef();
  const slideContentRef = useRef();
  const [noOfSlides, setNoOfSlides] = useState(1);

  useEffect(() => {
    setNoOfSlides(
      Math.floor(
        carouselRef?.current?.offsetWidth /
          slideContentRef?.current?.offsetWidth
      )
    );
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setNoOfSlides(
        Math.floor(
          carouselRef?.current?.offsetWidth /
            slideContentRef?.current?.offsetWidth
        )
      );
    });
  }, []);

  return (
    <div className="carousel-2">
      <CircularButton
        className="slide-left"
        onClick={() => {
          carouselRef.current.scrollBy(
            -carouselSlideRef.current.offsetWidth,
            0
          );
        }}
      >
        <i className="fas fa-chevron-left" />
      </CircularButton>
      <CircularButton
        className="slide-right"
        onClick={() => {
          console.log("clicked");
          carouselRef.current.scrollBy(carouselSlideRef.current.offsetWidth, 0);
        }}
      >
        <i className="fas fa-chevron-right" />
      </CircularButton>
      <div className="team-carousel" ref={carouselRef}>
        {children.map((ele, key) => {
          return (
            <div
              className="carousel-slide"
              key={key}
              ref={carouselSlideRef}
              style={{ minWidth: `${100 / noOfSlides}%` }}
            >
              <div className="slide-content" ref={slideContentRef}>
                {ele}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
