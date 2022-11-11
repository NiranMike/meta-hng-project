import React from "react";
import sponsor1 from "../Assets/landingPageAssets/Frame 4041.png";
import sponsor2 from "../Assets/landingPageAssets/Group 4040.png";
import sponsor3 from "../Assets/landingPageAssets/Group 59537.png";

const SponsorSection = () => {
  return (
    <div className=" bg-[#A02279] py-2">
      <div className=" flex justify-around ">
        <img className=" w-[100px] md:w-[160px]" src={sponsor1} alt="" />
        <img className=" w-[100px] md:w-[160px]" src={sponsor2} alt="" />
        <img className=" w-[100px] md:w-[160px]" src={sponsor3} alt="" />
      </div>
    </div>
  );
};

export default SponsorSection;
