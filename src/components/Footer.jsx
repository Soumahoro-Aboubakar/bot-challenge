import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white mt-20">
      <div className="flex flex-col items-center py-10 rounded-[60px] bg-gradient-to-r from-orange-500 to-purple-600 mb-4">
        <div className="text-center py-8 px-6 w-full md:w-8/12">
          <p className=" uppercase font-bold text-sm">Contact us</p>
          <h2 className="text-2xl md:text-4xl font-bold my-4">
            We are always happy to see
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold my-4">
            your incoming messages
          </h2>
          <div className="bg-white mt-4 rounded-full w-[200px] mx-auto">
            <button className="px-4 py-2 text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-10 md:px-20 pb-10">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-4">CryptoHype</h3>
          <p className="text-sm mb-4">
            Get the latest updates about CryptoHype
          </p>
          <div className="flex items-center border rounded-full p-2 bg-gray-800  mr-4 md:mr-10">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-transparent outline-none px-4 text-sm"
            />
            <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full px-4 py-2 pl-6">
              <FaInstagram />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-4">Solution</h3>
          <ul className="space-y-2 text-sm">
            <li>How to works</li>
            <li>NFT Market</li>
            <li>Token</li>
            <li>Discover</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Services</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="font-bold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQ</li>
            <li>Security</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 px-10 text-sm flex flex-col md:flex-row items-center justify-between">
        <p>&copy; 2021. All Rights Reserved. CryptoHype</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="p-2 hover:bg-gray-800 rounded-full bg-gradient-to-r from-orange-500 to-purple-600"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-gray-800 rounded-full bg-gradient-to-r from-orange-500 to-purple-600"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-gray-800 rounded-full bg-gradient-to-r from-orange-500 to-purple-600"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
