import React from "react";
import data from "../data.json";
import ll from "./place-to-page-img/Frame 151.png"
const PlaceList = () => {
  return (
    <div className=" my-9">
      <div className="grid gap-4 mx-3 xs:mx-[40px] ms:mx-[60px] sm:mx-[170px] axs:mx-[150px] as:mx-[100px] md:mx-16 mb-12 md:grid-cols-2 lg:grid-cols-4">
        {data.map((info) => {
          const { id, img, name, price, duration, distance, stars } = info;
          const newImage = require(`${img}`);
          return (
            <>
              <div key={id} className=" border p-3 mx-2  rounded-xl">
                <img className=" cursor-pointer" src={newImage} alt="" />
                <div className="  py-2 flex justify-between">
                  <p className=" font-normal text-[12px]">{name}</p>
                  <p className="font-bold text-[12px]">{price}</p>
                </div>
                <div className=" py-2 flex justify-between">
                  <p className=" font-normal text-[12px]">{distance}</p>
                  <p className=" font-normal text-[12px]">{duration}</p>
                </div>
                <div className=" flex gap-2">
                  {stars.map((star) => {
                    const newStar = require(`${star}`)
                    console.log(newStar)
                    return (<img src={newStar} alt="" />);
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PlaceList;
