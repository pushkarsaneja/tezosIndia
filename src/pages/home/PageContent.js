import React from "react";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { Card1 } from "../../components/cards/Card";
import Counter from "../../components/counter/Counter";

const initiatives = [
  {
    img: "https://tezosindia.org.in/wp-content/uploads/2021/12/brooke-cagle-g1Kr4Ozfoac-unsplash-scaled.jpg",
    icon: <i className="fas fa-university" />,
    title: "Education",
    description:
      "We conduct regular education programs to enable the community to build on Tezos & learn about Tezos.",
  },
  {
    img: "https://tezosindia.org.in/wp-content/uploads/2021/12/charles-forerunner-3fPXt37X6UQ-unsplash-scaled.jpg",
    icon: <i className="fas fa-calendar-alt" />,
    title: "Events",
    description:
      "We conduct events with ecosystem partners to bring rich discussions around the role of blockchains today.",
  },
  {
    img: "https://tezosindia.org.in/wp-content/uploads/2021/12/md-duran-rE9vgD_TXgM-unsplash.jpg",
    icon: <i className="fas fa-medal" />,
    title: "Hackathons",
    description:
      "We actively conduct and support hackathons & other developer activities including our flagship program, Tezos India Fellowship, to enable individuals and teams to build innovative projects, PoCs on Tezos.",
  },
  {
    img: "https://tezosindia.org.in/wp-content/uploads/2022/01/austin-distel-rxpThOwuVgE-unsplash-scaled.jpg",
    icon: <i className="fas fa-suitcase" />,
    title: "Business Development",
    description:
      "We help our ecosystem partners to leverage the power of Tezos by making relevant connections and help with grants on a case-by-case basis.",
  },
];

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
    </div>
  );
};

export default PageContent;
