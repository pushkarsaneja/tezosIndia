import React from "react";
import { Card1 } from "../../components/cards/Card";

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
    icon: <i class="fas fa-medal" />,
    title: "Hackathons",
    description:
      "We actively conduct and support hackathons & other developer activities including our flagship program, Tezos India Fellowship, to enable individuals and teams to build innovative projects, PoCs on Tezos.",
  },
  {
    img: "https://tezosindia.org.in/wp-content/uploads/2022/01/austin-distel-rxpThOwuVgE-unsplash-scaled.jpg",
    icon: <i class="fas fa-suitcase" />,
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
    </div>
  );
};

export default PageContent;
