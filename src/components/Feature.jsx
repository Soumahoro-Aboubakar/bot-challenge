import React from "react";
import { FaShopify } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
import { BiSolidCalendarStar } from "react-icons/bi";
import "../styles/feature.css";

// Reusable Feature Component
const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-center space-x-6">
    <div className="bg-red-500 p-4 rounded-full">
      <Icon className="text-white text-2xl" />
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-white">{title}</span>
      <span className="text-white">{description}</span>
    </div>
  </div>
);

const Feature = () => {
  return (
    <section className="feature-container flex flex-wrap justify-between gap-8  py-6">
      <FeatureItem 
        icon={BiSolidCalendarStar} 
        title="Trusted with 10" 
        description="Achievement"
      />
      <FeatureItem 
        icon={FaShopify} 
        title="Trusted with 10" 
        description="Achievement"
      />
      <FeatureItem 
        icon={IoIosGift} 
        title="Trusted with 10" 
        description="Achievement"
      />
    </section>
  );
};

export default Feature;
