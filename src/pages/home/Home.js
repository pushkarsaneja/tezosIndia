import React from "react";
import lightHero from "../../assets/light-hero.png";
import PageDescription from "./PageDescription";
import PageContent from "./PageContent";
import ParallaxWrapper from "../../components/parallaxWrapper/ParallaxWrapper";
import "./home.scss";
import PageWrapper from "../../components/pageWrapper/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <ParallaxWrapper
        img={lightHero}
        pageDescription={<PageDescription />}
        pageContent={<PageContent />}
      />
    </PageWrapper>
  );
};

export default Home;
