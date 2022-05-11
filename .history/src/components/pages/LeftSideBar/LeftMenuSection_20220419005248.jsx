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
    <div className="text-xl text-[#666666] bg-white rounded-md p-4 my-4 w-[278px] ">
      <Link to="" className="flex justify-start space-x-4">
        <FiUserPlus /> <p className="text-lg">Learnig</p>
      </Link>
      <Link to="">
        <CgInsights />
      </Link>
      <Link to="">
        <BsBookmarkPlus />
      </Link>
      <Link to="">
        <MdSlowMotionVideo />
      </Link>
      <Link to="">
        <IoLogoGameControllerB />
      </Link>
      <Link to="">
        <AiOutlineSetting />
      </Link>
    </div>
  );
}
