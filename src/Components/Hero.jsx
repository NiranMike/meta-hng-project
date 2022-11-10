import React from "react";
import image from '../Assets/landingPageAssets/Group 4028.png'

const Hero = () => {
  return (
    <div className="px-3 md:px-[90px] mt-16 mb-5">
      <div className=" grid lg:grid-cols-2 gap-9">
        <div >
          <div>
            <p className=" text-[30px] md:text-[57px] font-medium md:font-bold">
              Rent a <span className="text-[#A02279] font-bold">Place</span> away from
            </p>
            <p className=" text-[30px] md:text-[57px] font-medium md:font-bold">
              <span className="text-[#A02279] font-bold">Home</span> in the <span className="text-[#A02279]">Meterverse</span>
            </p>
          </div>
          <p className=" my-5 font-normal text-[18px] md:text-[24px]">
            we provide you access to luxury and
            affordable houses in the metaverse, get a chance to turn your
            imagination to reality at your comfort zone
          </p>

          <div className=" flex ">
            <input className=" border py-2 w-[200px] sm:w-[300px] md:w-[400px] px-3 rounded-l-[8px]" placeholder="Search for location" type="text" name="" id="btn-search" />
            <input className=" px-[25px] sm:px-[50px]  font-normal text-[16px] text-white rounded-r-[8px] bg-[#A02279] " type="submit" value="Search" />
          </div>
        </div>
        <div>
            <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
