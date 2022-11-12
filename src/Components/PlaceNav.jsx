import React from "react";
import settingImg from "./place-to-page-img/setting-5.png";

const PlaceNav = () => {
  return (
    <div className="px-3 md:px-[30px] lg:px-[55px]">
      <div>
        <ul className="flex justify-around items-center">
          <li className=" cursor-pointer">Resturant</li>
          <li className=" cursor-pointer">Cottage</li>
          <li className="hidden cursor-pointer sm:block">Castle</li>
          <li className="hidden cursor-pointer md:block">Fantast city</li>
          <li className="hidden cursor-pointer lg:block">Beach</li>
          <li className="hidden cursor-pointer lg:block">Cabins</li>
          <li className="hidden cursor-pointer lg:block">Off-grid</li>
          <li className="hidden cursor-pointer lg:block">Farm</li>
          <button className=" px-3 py-2 rounded-[8px] border flex gap-3">
            <p>Location</p>
            <img src={settingImg} alt="" />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default PlaceNav;
