import React from "react";
import Logo from "../assets/Logo.png";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <div className="md:px-20 xl:px-52  bg-white">
      <div className="sm:flex justify-between ">
        <div className="py-2">
          <img className="sm:block hidden " src={Logo} alt="" />
        </div>
        <div className="w-full">
          <MenuBar />
        </div>
        <div className="">khokon</div>
      </div>
    </div>
  );
}
