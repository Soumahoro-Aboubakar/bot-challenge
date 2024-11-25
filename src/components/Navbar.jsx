import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoLogoUsd } from "react-icons/io";
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar-container flex justify-between mt-8">
      <div className="left-part flex">
        <span className="">
          <IoLogoUsd
            style={{  
              color: "orange",
              fontSize: "25px",
              marginTop:"5px"
            }}
          />
        </span>
        <span className="font-roboto text-2xl">cryptoHpe</span>
      </div>
      <div className="center-part space-x-8">
        <a href="#" className="hover:text-orange-400">
          Market
        </a>
        <a href="#" className="hover:text-orange-400">
          Discover
        </a>
        <a href="#" className="hover:text-orange-400">
          About
        </a>
        <a href="#" className="hover:text-orange-400">
          Artist
        </a>
      </div>
      <div className="right-part">
        <div className="flex h-[35px] relative rounded-full p-[2px] -translate-y-2 bg-gradient-to-r from-[#fdb454] via-[#bd73c0] to-blue-500">
          <input
            type="text"
            className="rounded-full w-[250px] h-full text-white font-mono text-md pl-2 border-0 focus:outline-none focus:ring-0"
            placeholder="Search related to NTF"
          />
          <span className="absolute top-1 right-3 text-lg rounded-full bg-gradient-to-r from-[#fdb454] via-[#bd73c0] to-blue-500 p-1">
            <IoSearchOutline />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
