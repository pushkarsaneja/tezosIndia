import React from "react";
import { Carousel1 } from "../../../components/carousel/Carousel";
import { mainCarouselContent } from "../../../data/mainCarouselContent";

const MainCarousel = () => {
  return (
    <div>
      <Carousel1 mainCarouselContent={mainCarouselContent} />
    </div>
  );
};

export default MainCarousel;
