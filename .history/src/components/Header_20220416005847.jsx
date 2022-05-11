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

        <div className=" w-72">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
}
