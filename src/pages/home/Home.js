import React from "react";
// import Header from "../../components/Header";
import lightHero from "../../assets/light-hero.png";
import PageDescription from "./PageDescription";
import PageContent from "./PageContent";
import ParallaxWrapper from "../../components/parallaxWrapper/ParallaxWrapper";
import "./home.scss";

const Home = () => {
  return (
    <ParallaxWrapper
      img={lightHero}
      pageDescription={<PageDescription />}
      pageContent={<PageContent />}
    />
  );
};

export default Home;
