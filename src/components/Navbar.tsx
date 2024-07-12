import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsCameraVideo, BsBell } from "react-icons/bs";
import { IoAppsSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiMicrophone } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-14 py-8 px-4 lg:px-14 bg-white opacity-75 sticky top-0 z-50">
      <div className="flex gap-4 lg:gap-8 items-center text-3xl">
        <div>
          <RxHamburgerMenu className="text-black" />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <TiSocialYoutube className="text-3xl lg:text-6xl text-red-600" />
            <span className="hidden lg:inline text-3xl tracking-tighter text-black font-medium ms-2">
              YouTube
            </span>
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5 ">
        <form action="">
          <div className="flex items-center h-10 px-2 lg:px-4 pr-0 border border-1 rounded-full overflow-hidden">
            <div className="flex h-full items-center">
              <div className="pr-2">
                <AiOutlineClose />
              </div>
              <input
                type="text"
                className="w-40 sm:w-48 md:w-96 focus:outline-none border-none"
              />
              <button className="h-full flex items-center pl-2 w-[50px] border border-l-1 bg-slate-200 hover:bg-slate-300">
                <AiOutlineSearch className="text-black text-2xl " />
              </button>
            </div>
          </div>
        </form>
        <div className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] flex justify-center items-center rounded-full cursor-pointer bg-slate-200 hover:bg-slate-300">
          <TiMicrophone className="text-xl lg:text-2xl" />
        </div>
      </div>
      <div className="flex items-center  gap-3 text-2xl">
        <BsCameraVideo className="cursor-pointer w-[30px] lg:w-[45px] h-[30px] lg:h-[45px] rounded-full px-2 hover:bg-slate-300" />
        <div className="hidden md:flex cursor-pointer items-center relative w-[45px] h-[45px] rounded-full px-2 hover:bg-slate-300 overflow-hidden">
          <BsBell />
          <span className="absolute bottom-7 right-2 font-bold text-xs">
            9+
          </span>
        </div>
        <IoAppsSharp className="hidden md:block cursor-pointer w-[45px] h-[45px] rounded-full px-2 hover:bg-slate-300" />
        <img
          src="data:image/jpeg;base64,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"
          alt="logo"
          className="cursor-pointer w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;
