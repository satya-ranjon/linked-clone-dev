import React from "react";
import Avatar from "@mui/material/Avatar";
import { AiFillLinkedin, AiOutlineLike } from "react-icons/ai";
import { FiMoreVertical, FiSend } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BsBookmarkDash } from "react-icons/bs";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import Profile from "../../../assets/profile.jpg";
import Post from "../../../assets/post.jpg";

import Badge from "@mui/material/Badge";

export default function PostList() {
  return (
    <div className="my-5 p-4 bg-white rounded-md">
      <div className="flex  justify-between ">
        <div className="flex space-x-2">
          <Avatar alt="Remy Sharp" src={Profile} className="cursor-pointer" />
          <div>
            <h2 className="text-sm font-semibold flex cursor-pointer">
              Khokon Dev
              <AiFillLinkedin className="text-[#D8C281] my-auto mx-2" />
            </h2>
            <p className="text-[12px] text-neutral-500">UX/UI</p>
          </div>
        </div>
        <FiMoreVertical className="my-auto text-2xl text-neutral-500 cursor-pointer " />
      </div>
      <div className="w-full ssm:max-h-96 max-h-72 overflow-hidden bg-[#F6F6F6] mt-4 rounded-md">
        <img src={Post} alt="" />
      </div>
      <div className="flex text-2xl justify-between my-4">
        <div className="flex space-x-8  ">
          <AiOutlineLike className=" cursor-pointer" />
          <Badge badgeContent={4} color="primary">
            <FaRegComment className=" cursor-pointer" />
          </Badge>
          <FiSend className=" cursor-pointer" />
        </div>
        <BsBookmarkDash className=" cursor-pointer" />
      </div>
      <div className="rounded-md overflow-hidden flex bg-[#F6F6F6]">
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt="Remy Sharp"
          src={Profile}
          className="cursor-pointer my-auto mx-1"
        />
        <input
          placeholder="Write comment "
          type="text"
          className="w-full bg-[#F6F6F6] outline-none p-2 placeholder:text-sm "
        />
        <MdOutlineKeyboardVoice className="my-auto text-2xl text-neutral-600  cursor-pointer" />
        <BiImageAlt className="my-auto text-2xl text-neutral-600 mx-2 cursor-pointer " />
      </div>
    </div>
  );
}
