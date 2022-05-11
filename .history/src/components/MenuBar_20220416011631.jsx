import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import {
  BusinessCenter,
  Notifications,
  Message,
  Home,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
export default function MenuBar() {
  const activeStyle = "text-green-600 border-b-[3px] border-gray-600";
  return (
    <div className="flex justify-between my-auto text-neutral-500 space-x-4">
      <NavLink to="/home" className={activeStyle}>
        <Home className=" cursor-pointer" fontSize="large" />
      </NavLink>
      <NavLink to="" className={activeStyle}>
        <FaUsers className=" cursor-pointer text-4xl" />
      </NavLink>
      <NavLink to="" className={activeStyle}>
        <BusinessCenter className=" cursor-pointer" fontSize="large" />
      </NavLink>
      <NavLink to="" className={activeStyle}>
        <IoIosNotifications
          className="text-3xl cursor-pointer"
          fontSize="large"
        />
      </NavLink>
      <NavLink to="" className={activeStyle}>
        <Message className=" cursor-pointer" fontSize="large" />
      </NavLink>
    </div>
  );
}
