import React, { useRef } from "react";
import { PrimaryButton } from "../../../components/buttons/Buttons";
import { TestimonialCard } from "../../../components/cards/Cards";
import { testimonials } from "../../../data/testimonials";
import { useAnimationTrigger } from "../../../customHooks/customHooks";
import { Carousel2 } from "../../../components/carousel/Carousel";

const CommunityTestimonials = () => {
  const componentRef = useRef();
  const animationTrigger = useAnimationTrigger(componentRef);

  return (
    <section
      className={`community-testimonials ${animationTrigger ? "animate" : ""}`}
      ref={componentRef}
    >
      <h2>
        Community Testimonials
        <PrimaryButton>Contact Us</PrimaryButton>
      </h2>
      <hr />

      <Carousel2>
        {testimonials.map(({ quote, by, program, img }, key) => {
          return (
            <TestimonialCard
              quote={quote}
              by={by}
              program={program}
              index={key}
              img={img}
              key={key}
            />
          );
        })}
      </Carousel2>
    </section>
  );
};

export default CommunityTestimonials;
