import React from "react";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { Card1, TeamCard, VideoCard } from "../../components/cards/Cards";
import Counter from "../../components/counter/Counter";
import { initiatives } from "../../data/initiatives";
import { ourTeam } from "../../data/ourTeam";
import { successStories } from "../../data/successStories";
import { videos } from "../../data/videos";

const PageContent = () => {
  return (
    <div className="page-content">
      {/* Sub Heading */}
      <section className="sub-heading-container">
        <h3>
          Empowering A Well Rounded
          <br />
          Tezos Ecosystem In India
        </h3>
        <h4>
          We believe that a great ecosystem is a sum of all its participants. We
          want to enable people to seamlessly participate in the Tezos ecosystem
          in India
        </h4>
      </section>

      {/* Initiatives */}
      <section className="initiatives">
        {initiatives.map(({ img, icon, title, description }, key) => {
          return (
            <Card1
              img={img}
              icon={icon}
              title={title}
              description={description}
              key={key}
            />
          );
        })}
      </section>

      {/* Project and Community */}
      <section className="project-and-comm">
        <div className="projects">
          <div>
            <div className="heading">Projects</div>
            <Counter number={13}></Counter>
          </div>
        </div>
        <div className="community">
          <div>
            <div className="heading">Community</div>
            <Counter number={75000}></Counter>
          </div>
        </div>
        <div className="difference">
          <div>
            <div className="heading">The Difference</div>
            Tezos India Is Making In The Blockchain Ecosystem
            <PrimaryButton className="learn-more">Learn More</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-members-container">
          {ourTeam.map(({ img, designation, name, description }, key) => {
            return (
              <TeamCard
                key={key}
                img={img}
                designation={designation}
                name={name}
                description={description}
              />
            );
          })}
        </div>
      </section>

      {/* Learn More About Tezos */}
      <section className="videos">
        <h2>Learn More About Tezos</h2>
        <div className="video-cards-container">
          {videos.map(({ preview, url, heading, description }) => {
            return (
              <VideoCard
                preview={preview}
                heading={heading}
                url={url}
                description={description}
              />
            );
          })}
        </div>
      </section>

      {/* Tezos India in Numbers */}
      <section className="tezos-numbers">
        <h2>Tezos India In Numbers</h2>
        <div className="counters-container">
          <div className="projects">
            <Counter className="tezos-number-counter" number={13} />
            <h3>Projects Building actively on Tezos from India</h3>
          </div>
          <div className="hackathons">
            <Counter className="tezos-number-counter" number={100} />
            <h3>Hackathons conducted by Tezos India</h3>
          </div>
          <div className="blockchain">
            <Counter className="tezos-number-counter" number={6000} />
            <h3>Developers developing on Tezos Blockchain in India</h3>
          </div>
        </div>
      </section>

      {/* Hackathon Initiatives */}
      <section className="hackathon-initiatives">
        <div className="hackathon">
          <h2>Our Hackathon Initiatives</h2>
          <p>
            Tezos India Fellowship is our flagship event. <span>Season 1</span>{" "}
            for <span>Tezos India</span> Fellowship was hosted in{" "}
            <span>July 2020</span>, which focused on upskilling the top Web3
            talent and onboarding them to the Tezos ecosystem over a period of{" "}
            <span>8 weeks</span>. The fellowship turned out to be a big hit
            among the hacker community in India.
          </p>
          <p>
            We received <span>1400+</span> applications in 2 weeks, out of which{" "}
            <span>10 developers</span> were selected. It is more like a
            pre-accelerator program where we facilitate workshops, mentorships
            for the participants to learn over the course of their journey. As a
            result, we received <span>7</span> amazing projects.
          </p>
        </div>
        <div className="hackathon-imgs">
          <div className="imgs-container">
            <img
              className="img1"
              src="https://tezosindia.org.in/wp-content/uploads/2021/12/E_vjTbqUcAIsSGq-768x402.jpeg"
              alt=""
            />
            <img
              className="img2"
              src="https://tezosindia.org.in/wp-content/uploads/2021/12/E9jt2pRVEAU7zfc.jpeg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>Some Of Our Success Stories At Tezos India</h2>
        <div className="brands">
          {successStories.map(({ name, img }) => (
            <img src={img} alt={name} />
          ))}
        </div>
      </section>

      {/* Get In Touch */}
      <section className="get-in-touch">
        <div className="image-overlay">
          <h2>Get In Touch</h2>
          <h3>We can help you build, market and grow your project on tezos.</h3>
          <PrimaryButton>Contact Us</PrimaryButton>
        </div>
      </section>
    </div>
  );
};

export default PageContent;
