import React from "react";
import Logo from "../assets/Logo.png";
import MenuBar from "./MenuBar";
import Search from "./Search";

export default function Header() {
  return (
    <div className="lg:px-20 sm:px-5 xl:px-52  bg-white pt-2 fixed top-0 z-10">
      <div className="sm:flex justify-between ">
        <div className="py-2 w-44 block">
          <img className="sm:block hidden  " src={Logo} alt="" />
        </div>
        <div className="xxl:w-[600px] w-full">
          <MenuBar />
        </div>
        <div className="">
          <Search />
        </div>
      </div>
    </div>
  );
}
