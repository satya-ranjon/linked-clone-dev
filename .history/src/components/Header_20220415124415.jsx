import React from "react";
import Logo from "../assets/Logo.png";
import Linkind from "../assets/Linkind.png";
import { FaUsers } from "react-icons/fa";
import {
  BusinessCenter,
  Notifications,
  Message,
  Home,
} from "@mui/icons-material";

export default function Header() {
  return (
    <div className=" px-10 md:52">
      <div className="flex justify-between p-2 ">
        <div className=" w-full sm:w-72">
          <img className="sm:block hidden" src={Logo} alt="" />
          <img className="sm:hidden w-12" src={Linkind} alt="" />
        </div>
        <div className="flex w-[570px]  justify-between  px-10 my-auto text-neutral-500 ">
          <Home className=" cursor-pointer" fontSize="large" />
          <FaUsers className=" cursor-pointer text-4xl" />
          <BusinessCenter className=" cursor-pointer" fontSize="large" />
          <Notifications className=" cursor-pointer" fontSize="large" />
          <Message className=" cursor-pointer" fontSize="large" />
        </div>
        <div className=" w-72">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
}
