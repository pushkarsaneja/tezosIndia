import React from "react";
import CommunityTestimonials from "./CommunityTestimonials";
import GetInTouch from "./GetInTouch";
import HackathonInitiatives from "./HackathonInitiatives";
import Initiatives from "./Initiatives";
import LearnMore from "./LearnMore";
import MainCarousel from "./MainCarousel";
import MeetOurTeam from "./MeetOurTeam";
import ProjectCommunity from "./ProjectCommunity";
import TezosNumbers from "./TezosNumbers";

const PageContent = () => {
  return (
    <div className="home-page-content">
      <MainCarousel />
      <Initiatives />
      <ProjectCommunity />
      <CommunityTestimonials />
      <MeetOurTeam />
      <LearnMore />
      <TezosNumbers />
      <HackathonInitiatives />
      <GetInTouch />
    </div>
  );
};

export default PageContent;
