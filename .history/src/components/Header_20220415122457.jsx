import React from "react";
import Logo from "../assets/Logo.png";
import { FaUsers } from "react-icons/fa";
import {
  BusinessCenter,
  Notifications,
  Message,
  Home,
} from "@mui/icons-material";

export default function Header() {
  return (
    <div className=" px-10">
      <div className="flex justify-between p-2 ">
        <img src={Logo} alt="" />
        <div className="flex text-2xl justify-between w-full px-10 my-auto text-neutral-500 ">
          <Home className="cursore-pointer" />
          <FaUsers className="cursore-pointer" />
          <BusinessCenter className="cursore-pointer" />
          <Notifications className="cursore-pointer" />
          <Message className="cursore-pointer" />
        </div>
        <div className="">khokon</div>
      </div>
    </div>
  );
}
