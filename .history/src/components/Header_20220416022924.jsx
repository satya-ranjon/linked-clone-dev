import React from "react";
import Logo from "../assets/Logo.png";
import MenuBar from "./MenuBar";
import Search from "./Search";

export default function Header() {
  return (
    <div className="md:px-20 xl:px-52  bg-white">
      <div className="sm:flex justify-center ">
        <div className="py-2">
          <img className="sm:block hidden " src={Logo} alt="" />
        </div>
        <div className="w-[600px]">
          <MenuBar />
        </div>
        <div className="">
          <Search />
        </div>
      </div>
    </div>
  );
}
