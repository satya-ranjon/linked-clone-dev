import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { CgInsights } from "react-icons/cg";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function LeftMenuSection() {
  const activeStyle = "flex justify-start space-x-4  bg-slate-100 p-4 py-3";
  const deactiveStyle =
    "flex justify-start space-x-4 hover:bg-slate-100 transition-all duration-300  p-4 py-3";
  return (
    <div className="text-xl text-[#666666] bg-white rounded-md  my-4 w-[278px] ">
      <NavLink
        to="learnig"
        className={(navInfo) =>
          navInfo.isActive ? activeStyle : deactiveStyle
        }
      >
        <FiUserPlus className=" my-auto" />
        <p className="text-lg my-auto">Learnig</p>
      </NavLink>
      <NavLink
        to=""
        className="flex justify-start  space-x-4 hover:bg-slate-100 py-3 p-4"
      >
        <CgInsights className=" my-auto" />
        <p className="text-lg my-auto">Insights</p>
      </NavLink>
      <NavLink
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100 py-3 p-4"
      >
        <BsBookmarkPlus className=" my-auto" />
        <p className="text-lg my-auto">Bookmarks</p>
      </NavLink>
      <NavLink
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100 py-3 p-4"
      >
        <MdSlowMotionVideo className=" my-auto" />
        <p className="text-lg my-auto">Find colleagues</p>
      </NavLink>
      <NavLink
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100 py-3 p-4"
      >
        <IoLogoGameControllerB className=" my-auto" />
        <p className="text-lg my-auto">Gaming</p>
      </NavLink>
      <NavLink
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100 py-3 p-4"
      >
        <AiOutlineSetting className=" my-auto" />
        <p className="text-lg my-auto">Setting</p>
      </NavLink>
    </div>
  );
}
