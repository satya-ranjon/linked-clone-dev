import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

export default function followHastags() {
  const tags = ["videos", "gaming", "chating", "tiktokvideowhach", "hotvideo"];
  return (
    <div className="w-[278px] bg-white  rounded-md grid grid-cols-3 p-1 ">
      <div className=" col-span-3 p-2 flex">
        Followed hashtags
        <AiOutlineAppstoreAdd />
      </div>
      {tags.map((tag) => (
        <span
          className={`bg-gray-200 rounded-sm p-1 m-2 cursor-pointer ${
            tag.length >= 9 && tag.length < 18 && "col-span-2"
          } ${tag.length > 18 && "col-span-3"}`}
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
