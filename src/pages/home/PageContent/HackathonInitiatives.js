import React from "react";

const HackathonInitiatives = () => {
  return (
    <section className="hackathon-initiatives">
      <div className="hackathon">
        <h2>Our Hackathon Initiatives</h2>
        <p>
          Tezos India Fellowship is our flagship event. <span>Season 1</span>{" "}
          for <span>Tezos India</span> Fellowship was hosted in{" "}
          <span>July 2020</span>, which focused on upskilling the top Web3
          talent and onboarding them to the Tezos ecosystem over a period of{" "}
          <span>8 weeks</span>. The fellowship turned out to be a big hit among
          the hacker community in India.
        </p>
        <p>
          We received <span>1400+</span> applications in 2 weeks, out of which{" "}
          <span>10 developers</span> were selected. It is more like a
          pre-accelerator program where we facilitate workshops, mentorships for
          the participants to learn over the course of their journey. As a
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
  );
};

export default HackathonInitiatives;
