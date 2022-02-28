import React, { useRef } from "react";
import { TeamCard } from "../../../components/cards/Cards";
import { ourTeam } from "../../../data/ourTeam";
import { useAnimationTrigger } from "../../../customHooks/customHooks";
import { TextButton } from "../../../components/buttons/Buttons";
import { Carousel2 } from "../../../components/carousel/Carousel";

const MeetOurTeam = () => {
  const componentRef = useRef();
  const animationTrigger = useAnimationTrigger(componentRef);

  return (
    <section
      className={`meet-our-team ${animationTrigger ? "animate" : ""}`}
      ref={componentRef}
    >
      <h2>
        Meet Our Team
        <TextButton className="view-more">View More</TextButton>
      </h2>
      <hr />

      <Carousel2 totalSlides={ourTeam.length}>
        {ourTeam.map(({ img, designation, name, description }, key) => {
          return (
            <TeamCard
              img={img}
              designation={designation}
              name={name}
              description={description}
              key={key}
            />
          );
        })}
        {/* {testimonials.map(({ quote, by, program, img }, key) => {
          return (
            <div
              className="carousel-slide"
              key={key}
              ref={carouselSlideRef}
              style={{ minWidth: `${100 / noOfSlides}%` }}
            >
              <div className="slide-content" ref={slideContentRef}>
                <TestimonialCard
                  quote={quote}
                  by={by}
                  program={program}
                  index={key}
                  img={img}
                />
              </div>
            </div>
          );
        })} */}
      </Carousel2>
    </section>
  );
};
export default MeetOurTeam;
