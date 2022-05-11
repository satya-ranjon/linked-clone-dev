import React from "react";
import Avatar from "@mui/material/Avatar";

export default function NewPost() {
  return (
    <div className="bg-white p-4">
      <div className="flex">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <input
          type="text"
          className="w-full ml-3 outline-none p-2"
          placeholder="Write somthing .. "
        />
      </div>
      <div className="flex justify-between text-[16px] bg-[#D2F0FF]">
        <div className="">Photo</div>
        <div className="">Video</div>
        <div className="">Event</div>
        <div className="">Article</div>
        <div className="">🤐</div>
      </div>
    </div>
  );
}
