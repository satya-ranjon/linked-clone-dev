import React from "react";
import Avatar from "@mui/material/Avatar";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
export default function NewPost() {
  return (
    <div className="bg-white rounded-md overflow-hidden ">
      <div className="flex p-4">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <input
          type="text"
          className="w-full ml-3 outline-none p-2"
          placeholder="Write somthing .. "
        />
      </div>
      <div className="flex justify-between text-[16px] bg-[#D2F0FF] mt-4 p-4 text-neutral-600">
        <div className="">
          <InsertPhotoIcon className="text-neutral-500 mx-1" />
          Photo
        </div>
        <div className="">
          <InsertPhotoIcon className="text-neutral-500 mx-1" />
          Video
        </div>
        <div className="">
          <InsertPhotoIcon className="text-neutral-500 mx-1" />
          Event
        </div>
        <div className="">
          <InsertPhotoIcon className="text-neutral-500 mx-1" />
          Article
        </div>
        <div className=" bg-blue-500 w-fit">🤐</div>
      </div>
    </div>
  );
}
