import React from "react";
import { BotItem } from "./BotsFeatures";
import { bots } from "../constant";
import "../styles/feature.css"
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const BotsCattegories = () => {
  return (
    <div className="container mt-20">
     <p className="bot-feature-container flex flex-wrap justify-between font-mono font-bold text-4xl ">
        <div className="flex space-x-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-[#cba078] to-purple-500">Tranding</span>
          <span className="">All</span>
          <span>Category</span>
        </div>
        <a href="#" className="block space-y-4 mt-4 flex  items-center space-x-4 ">
           <GoArrowLeft className="text-3xl"/>
           <GoArrowRight  className="text-6xl -translate-y-2"/>
          
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
