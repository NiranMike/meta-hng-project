import React, { useState } from "react";
import metabnblogo from "../Assets/landingPageAssets/Grouplogo.png";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import closeModal from "../Assets/landingPageAssets/close.png";
import metamaskLogo from "../Assets/landingPageAssets/image 66.png";
import walletConnectLogo from "../Assets/landingPageAssets/image 69.png";
import arrow from "../Assets/landingPageAssets/Vector4.png";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [walletModal, setWalletModal] = useState(false)
  const hamburgerMenuHandler = () => {
    setMenu(!menu);
  };

  const openModalHandler = () =>{
    setWalletModal(true)
  }

  const closeModalHandler = () =>{
    setWalletModal(false)
  }


  return (
    <div className=" py-8 px-3 md:px-[30px] lg:px-[90px]">
      <div className={walletModal ? "fixed z-30 left-0 right-0 bottom-0 top-0 bg-[#40404042] h-full w-full" : "hidden"}>
        <div className=" rounded-[16px] bg-white mt-[220px] mx-4 sm:mx-[100px] md:mx-[200px] lg:mx-[300px] 2xl:mx-[500px] ">
          <div className=" flex mx-5 justify-between">
            <p className="mt-5 mb-2 font-bold md:text-[24px] text-[#333333]">Connect Wallet</p>
            <button onClick={closeModalHandler}>
              <img src={closeModal} alt="" />
            </button>
          </div>
          <hr />
          <div className=" pb-4">
            <p className="mx-5 pt-5 font-normal text-[16px] text-[#333333]">Choose your preferred wallet:</p>
            <div className="mx-5 px-4 py-2 bg-[#F8F9FA] flex justify-between items-center rounded-[12px] border my-2">
              <div className=" flex gap-2  items-center">
                <img src={metamaskLogo} alt="" />
                <p className="wallet--font font-semibold text-[18px]">Metamask</p>
              </div>
              <button>
                <img src={arrow} alt="" />
              </button>
            </div>
            {/* wallec connect */}
            <div className="mx-5 px-4 py-2 bg-[#F8F9FA] flex justify-between items-center rounded-[12px] border my-2">
              <div className=" flex gap-2  items-center">
                <img src={walletConnectLogo} alt="" />
                <p className="wallet--font font-semibold text-[18px]">Metamask</p>
              </div>
              <button>
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <img
          src={metabnblogo}
          className=" w-[150px] sm:w-[233px] h-[26px] sm:h-[36.67px]"
          height={""}
          alt="meta-bnb-logo"
        />
        {/* navs */}
        <ul className=" hidden md:flex items-center justify-between">
          <li className=" mx-[15px] font-normal lg:text-[20px] text-[14px]">Home</li>
          <li className=" mx-[15px] font-normal lg:text-[20px] text-[14px]">Place to stay</li>
          <li className=" mx-[15px] font-normal lg:text-[20px] text-[14px]">NFTs</li>
          <li className=" mx-[15px] font-normal lg:text-[20px] text-[14px]">Community</li>
        </ul>
        <button onClick={openModalHandler} className=" md:block lg:block hidden btn text-white text-xs px-2 lg:px-5 py-3">
          Connect Wallet
        </button>
        <div onClick={hamburgerMenuHandler} className=" z-20 md:hidden">
          {!menu ? (
            <GiHamburgerMenu className="text-[#A02279]" size={26} />
          ) : (
            <AiOutlineClose className="text-[#000000]" size={26} />
          )}
        </div>
        {/* dropdown */}
      </div>
      <div className={menu ? " z-10 absolute top-0 right-0 left-0 h-[50vh] bg-[#A02279]" : "hidden"}>
        <div className=" pt-7">
          <ul>
            <li className=" pb-6 pl-3 cursor-pointer text-white">Home</li>
            <li className=" pb-6 pl-3 cursor-pointer text-white">Place to stay</li>
            <li className=" pb-6 pl-3 cursor-pointer text-white">NFTs</li>
            <li className=" pb-6 pl-3 cursor-pointer text-white">Community</li>
            <button onClick={openModalHandler} className=" pb-6 pl-3 cursor-pointer text-white">Connect Wallet</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
