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
    "text-[#00ACFF] border-b-[3px]  border-[#00ACFF] transition-all duration-100 py-3 ";
  const deactiveStyle = "border-b-[3px] border-transparent py-2 ";
  return (
    <div className="flex justify-between my-auto text-neutral-500 w-full pl-4 ssm:pl-8 ">
      <NavLink
        to="/home"
        className={(navInfo) =>
          navInfo.isActive ? activeStyle : deactiveStyle
        }
      >
        <Home className=" cursor-pointer " fontSize="large" />
      </NavLink>
      <NavLink
        to="/friends"
        className={(navInfo) =>
          navInfo.isActive ? activeStyle : deactiveStyle
        }
      >
        <FaUsers className=" cursor-pointer text-4xl" />
      </NavLink>
      <NavLink
        to="/jobs-list"
        className={(navInfo) =>
          navInfo.isActive ? activeStyle : deactiveStyle
        }
      >
        <BusinessCenter className=" cursor-pointer" fontSize="large" />
      </NavLink>
      <NavLink
        to="/notification"
        className={(navInfo) =>
          navInfo.isActive ? activeStyle : deactiveStyle
        }
      >
        <Notifications className=" cursor-pointer" fontSize="large" />
      </NavLink>
      <NavLink
        to="/messeage"
        className={(navInfo) =>
          navInfo.isActive ? activeStyle : deactiveStyle
        }
      >
        <Message className=" cursor-pointer" fontSize="large" />
      </NavLink>
    </div>
  );
}
