import React from "react";
import { FaUsers } from "react-icons/fa";
import {
  BusinessCenter,
  Notifications,
  Message,
  Home,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
export default function MenuBar() {
  const activeStyle =
    "text-[#00ACFF] border-b-[3px]  border-gray-600 transition-all duration-100";
  return (
    <div className="flex justify-between my-auto text-neutral-500 w-full pl-4 ssm:pl-8 ">
      <NavLink
        to="/home"
        className={(navInfo) =>
          navInfo.isActive ? activeStyle : "border-b-[3px] border-transparent"
        }
      >
        <Home className=" cursor-pointer " fontSize="large" />
      </NavLink>
      <NavLink
        to="/friends"
        className={(navInfo) => (navInfo.isActive ? activeStyle : null)}
      >
        <FaUsers className=" cursor-pointer text-4xl" />
      </NavLink>
      <NavLink
        to="/jobs-list"
        className={(navInfo) => (navInfo.isActive ? activeStyle : null)}
      >
        <BusinessCenter className=" cursor-pointer" fontSize="large" />
      </NavLink>
      <NavLink
        to="/notification"
        className={(navInfo) => (navInfo.isActive ? activeStyle : null)}
      >
        <Notifications className=" cursor-pointer" fontSize="large" />
      </NavLink>
      <NavLink
        to="/messeage"
        className={(navInfo) => (navInfo.isActive ? activeStyle : null)}
      >
        <Message className=" cursor-pointer" fontSize="large" />
      </NavLink>
    </div>
  );
}
