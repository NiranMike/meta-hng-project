import React from "react";
import image from "../Assets/landingPageAssets/Frame-59546.png";

const DiscoverSection = () => {
  return (
    <div className=" py-[100px] px-6 md:px-16 text-white bg-[#A02279]">
      <div className=" grid lg:grid-cols-2 gap-16">
        <div>
          <p className="font-bold py-5 text-[36px] md:text-[48px]">
            Metabnb NFTs
          </p>
          <p className=" font-normal text-[18px] py-10">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            cards which are traded as NFTs. These NFTs gives our customer access
            to loads of our exclusive services.
          </p>
          <button className=" py-2 px-5 rounded-[8px] bg-white text-[#A02279]">
            Learn more
          </button>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
