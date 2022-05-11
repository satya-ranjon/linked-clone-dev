import React from "react";
import Logo from "../assets/Logo.png";
import Linkind from "../assets/Linkind.png";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <div className="px-2 md:52">
      <div className="flex justify-between p-2 ">
        <div className="">
          <img className="sm:block hidden " src={Logo} alt="" />
          <img className="sm:hidden w-20" src={Linkind} alt="" />
        </div>
        <MenuBar />
      </div>
    </div>
  );
}
