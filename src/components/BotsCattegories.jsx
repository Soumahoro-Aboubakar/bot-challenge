import React from "react";
import { BotItem } from "./BotsFeatures";
import { bots } from "../constant";
import "../styles/feature.css"

const BotsCattegories = () => {
  return (
    <div className="container mt-20">
     <p className="bot-feature-container flex flex-wrap justify-between font-mono font-bold text-4xl ">
        <div className="flex space-x-4">
          <span>Lastest</span>
          <span className="text-red-500">NTF</span>
          <span>Artwork</span>
        </div>
        <a href="#" className="block space-y-4 mt-4">
          View all artwork
        </a>
      </p>
      <section className="flex  mt-6 space-x-10   overflow-auto w-[90vw]">
        {bots.slice(3, 10).map((bot, index) => (
          <BotItem bot={bot} index={index} />
        ))}
      </section>
    </div>
  );
};

export default BotsCattegories;
