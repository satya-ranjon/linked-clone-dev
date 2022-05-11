import React from "react";
import Avatar from "@mui/material/Avatar";
import {
  AiFillLinkedin,
  AiOutlineLike,
  AiOutlineComment,
} from "react-icons/ai";
import { FiMoreVertical, FiSend } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import Badge from "@mui/material/Badge";

export default function PostList() {
  return (
    <div className="my-5 p-4 bg-white rounded-md">
      <div className="flex  justify-between ">
        <div className="flex space-x-2">
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            className="cursor-pointer"
          />
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
      <div className="w-full max-h-96 overflow-hidden bg-[#F6F6F6] mt-4 rounded-md">
        <img
          src="https://images.unsplash.com/photo-1649835655774-fb976bf37d4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt=""
        />
      </div>
      <div className="flex">
        <div className="flex space-x-2 my-4">
          <AiOutlineLike />
          <FaRegComment />
          <Badge badgeContent={4} color="primary">
            <FaRegComment />
          </Badge>
          <FiSend />
        </div>
      </div>
    </div>
  );
}
