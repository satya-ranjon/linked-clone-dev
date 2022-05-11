import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { CgInsights } from "react-icons/cg";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function LeftMenuSection() {
  return (
    <div className="text-xl text-[#666666] bg-white rounded-md  my-4 w-[278px] space-y-4">
      <Link
        to=""
        className="flex justify-start space-x-4 hover:bg-slate-100 p-4"
      >
        <FiUserPlus className=" my-auto" />
        <p className="text-lg my-auto">Learnig</p>
      </Link>
      <Link to="" className="flex justify-start space-x-4">
        <CgInsights className=" my-auto" />
        <p className="text-lg my-auto">Insights</p>
      </Link>
      <Link to="" className="flex justify-start space-x-4">
        <BsBookmarkPlus className=" my-auto" />
        <p className="text-lg my-auto">Bookmarks</p>
      </Link>
      <Link to="" className="flex justify-start space-x-4">
        <MdSlowMotionVideo className=" my-auto" />
        <p className="text-lg my-auto">Find colleagues</p>
      </Link>
      <Link to="" className="flex justify-start space-x-4">
        <IoLogoGameControllerB className=" my-auto" />
        <p className="text-lg my-auto">Gaming</p>
      </Link>
      <Link to="" className="flex justify-start space-x-4">
        <AiOutlineSetting className=" my-auto" />
        <p className="text-lg my-auto">Setting</p>
      </Link>
    </div>
  );
}
