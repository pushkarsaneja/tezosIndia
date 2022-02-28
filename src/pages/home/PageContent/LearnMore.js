import React from "react";
import { VideoCard } from "../../../components/cards/Cards";
import { videos } from "../../../data/videos";

const LearnMore = () => {
  return (
    <section className="videos">
      <h2>Learn More About Tezos</h2>
      <div className="video-cards-container">
        {videos.map(({ preview, url, heading, description }, key) => {
          return (
            <VideoCard
              key={key}
              preview={preview}
              heading={heading}
              url={url}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LearnMore;
