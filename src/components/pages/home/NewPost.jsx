import React from "react";
import Avatar from "@mui/material/Avatar";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventNoteTwoToneIcon from "@mui/icons-material/EventNoteTwoTone";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import Profile from "../../../assets/profile.jpg";

export default function NewPost() {
  return (
    <div className="bg-white rounded-md overflow-hidden ">
      <div className="flex p-4">
        <Avatar className="cursor-pointer" alt="Remy Sharp" src={Profile} />
        <input
          type="text"
          className="w-full ml-3 outline-none p-2"
          placeholder="Write somthing .. &#x270E; "
        />
      </div>
      <div className="flex justify-between text-[16px] bg-[#D2F0FF] mt-4  text-neutral-500">
        <div className=" cursor-pointer py-4 pl-3 ">
          <InsertPhotoIcon className=" mx-1" />
          Photo
        </div>
        <div className=" cursor-pointer py-4 ">
          <VideocamIcon className=" mx-1" />
          Video
        </div>
        <div className=" cursor-pointer py-4 ">
          <EventNoteTwoToneIcon className=" mx-1" />
          Event
        </div>
        <div className=" cursor-pointer py-4 ">
          <AssignmentTwoToneIcon className=" mx-1" />
          Article
        </div>
        <div className="cursor-pointer bg-[#A1E1FF] hover:bg-[#85d1f5] w-16 text-center py-4">
          <SendTwoToneIcon className=" " />
        </div>
      </div>
    </div>
  );
}
