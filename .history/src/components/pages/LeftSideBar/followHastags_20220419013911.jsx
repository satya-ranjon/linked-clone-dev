import React from "react";

export default function followHastags() {
  const tags = ["videos", "gaming", "chating", "tiktokvideowhach", "hotvideo"];
  return (
    <div className="w-[278px] bg-white  rounded-md grid grid-cols-3 p-1 ">
      {tags.map((tag) => (
        <span
          className={`bg-gray-200 rounded-sm p-1 m-2 cursor-pointer ${
            tag.length > 10 && tag.length < 18 && "col-span-2"
          } ${tag.length > 18 && "col-span-3"}`}
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
