import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { CgInsights } from "react-icons/cg";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { Navlink } from "react-router-dom";

export default function LeftMenuSection() {
  return (
    <div className="text-xl text-[#666666] bg-white rounded-md  my-4 w-[278px] ">
      <Navlink
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100  p-4 py-3"
      >
        <FiUserPlus className=" my-auto" />
        <p className="text-lg my-auto">Learnig</p>
      </Navlink>
      <Navlink
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100 py-3 p-4"
      >
        <CgInsights className=" my-auto" />
        <p className="text-lg my-auto">Insights</p>
      </Navlink>
      <Navlink
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100 py-3 p-4"
      >
        <BsBookmarkPlus className=" my-auto" />
        <p className="text-lg my-auto">Bookmarks</p>
      </Navlink>
      <Navlink
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100 py-3 p-4"
      >
        <MdSlowMotionVideo className=" my-auto" />
        <p className="text-lg my-auto">Find colleagues</p>
      </Navlink>
      <Navlink
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100 py-3 p-4"
      >
        <IoLogoGameControllerB className=" my-auto" />
        <p className="text-lg my-auto">Gaming</p>
      </Navlink>
      <Navlink
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100 py-3 p-4"
      >
        <AiOutlineSetting className=" my-auto" />
        <p className="text-lg my-auto">Setting</p>
      </Navlink>
    </div>
  );
}
