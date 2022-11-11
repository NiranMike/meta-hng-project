import React from "react";
import metaLogo from "../Assets/landingPageAssets/Groupt.png";
import facebookLogo from "../Assets/landingPageAssets/facebook-263-721950.png";
import instagram from "../Assets/landingPageAssets/instagram-216-721958.png";
import twitter from "../Assets/landingPageAssets/twitter-241-721979.png";

const Footer = () => {
  return (
    <div className="text-[#F7F7F7] px-5 md:px-[60px] bg-[#1D1D1E] py-10">
      <div className="grid gap-9 sm:gap-x-[200px] lg:gap-9 grid-cols-2 lg:grid-cols-4">
        <div className="">
          <img src={metaLogo} className="mb-[125px] w-40" alt="" />
          <div className="flex gap-3">
            <img src={facebookLogo} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <ul className=" grid font-normal text-[14px] gap-y-3">
          <li className=" font-bold text-[18px]">Community</li>
          <li className="">NFT</li>
          <li className="">Tokens</li>
          <li className="">Landlords</li>
          <li className="">Discord</li>
        </ul>
        <ul className=" grid font-normal text-[14px] gap-y-3">
          <li className=" font-bold text-[18px]">Places</li>
          <li className="">Castle</li>
          <li className="">Forms</li>
          <li className="">Beach</li>
          <li className="">Lean more</li>
        </ul>
        <ul className=" grid font-normal text-[14px] gap-y-3">
          <li className=" font-bold text-[18px]">About us</li>
          <li className="">Road map</li>
          <li className="">Creators</li>
          <li className="">Career</li>
          <li className="">Contact us</li>
        </ul>
        <p className="text-[#F7F7F7]">&copy; 2022 Metabnb</p>
      </div>
    </div>
  );
};

export default Footer;
