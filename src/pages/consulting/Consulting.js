import React from "react";
import ParallaxWrapper from "../../components/parallaxWrapper/ParallaxWrapper";
import PageContent from "./PageContent";
import PageDescription from "./PageDescription";
import "./consulting.scss";

const Consulting = () => {
  return (
    <ParallaxWrapper
      img={
        "https://tezosindia.org.in/wp-content/uploads/2022/01/tezos-NKcWd6hru3U-unsplash-scaled.jpg"
      }
      pageContent={<PageContent />}
      pageDescription={<PageDescription />}
    />
  );
};

export default Consulting;
