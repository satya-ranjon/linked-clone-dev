import React from "react";
import Logo from "../assets/Logo.png";
import Linkind from "../assets/Linkind.png";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <div className=" px-10 md:52">
      <div className="flex justify-between p-2 ">
        <div className=" w-full">
          <img className="sm:block hidden w-10" src={Logo} alt="" />
          <img className="sm:hidden  w-10 h-10" src={Linkind} alt="" />
        </div>
        <MenuBar />
        <div className=" w-72">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
}
