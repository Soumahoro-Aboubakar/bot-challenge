import React from "react";
import "../styles/collection.css"
const Collection = () => {
  return (
    <div className="collection-container flex justify-between items-center h-[80vh]">
      <div className="left">
        <div>
          <div className="font-lobster text-8xl title-container">
            <h3 className="title  space-x-4 -space-y-20">
              <span>Best</span>
              <span className="text-red-500">NTF</span>
            </h3>
            <h3 className="title  space-x-4 space-y-20">Collection For</h3>
            <h3 className="title  space-x-4 space-y-4">Your Future</h3>
          </div>
          <div className="btn flex space-x-6 mt-8">
            <button className="rounded-full bg-gradient-to-r from-[#fe891b] via-[#cba078] to-[#6d09f0] px-5 py-2 text-2xl font-mono">
              Explore Now
            </button>
            <div class="p-[1px] rounded-full bg-gradient-to-r from-[#fe891b] via-[#cba078] to-[#6d09f0] ">
              <button class="w-full h-full rounded-full px-5 py-2 text-white bg-black  focus:outline-none font-serif">
                Create NTF
              </button>
            </div>
          </div>
          <div className="collection-length flex h-[70px] mt-10">
            <div className="flex mr-4">
              <div className="flex flex-col justify-between mr-4 ">
                <div className="text-center">625000</div>
                <div className="text-center">Collection</div>
              </div>
              <div className="w-[1px]  h-[70%] bg-gray-400 grid place-items-center mt-[15%]"></div>
            </div>
            <div className="flex mr-4">
              <div className="flex flex-col justify-between mr-4">
                <div className="text-center">625000</div>
                <div className="text-center">Collection</div>
              </div>
              <div className="w-[1px]  h-[70%] bg-gray-400 grid place-items-center mt-[15%]"></div>
            </div>{" "}
            <div className="flex mr-4">
              <div className="flex flex-col justify-between mr-4">
                <div className="text-center">625000</div>
                <div className="text-center">Collection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="image-container rounded-full h-[30vw] w-[30vw] relative  bg-gradient-to-r from-[#fd9d02] via-pink-300 to-purple-700 ">
          <img
            src="./robot_image-pro.png"
            alt="bolt-image"
            className="-translate-x-4 translate-y-12 h-[30vw] image"
          />
        
        </div>
      </div>
    </div> 
  );
};

export default Collection;
