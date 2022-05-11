import React from "react";

export default function followHastags() {
  const text = "#cattongam22e";
  console.log(text.length);
  return (
    <div className="w-[278px] bg-white  rounded-md grid grid-cols-3 p-4">
      <p className="bg-gray-200 rounded-sm p-1 m-2">#video</p>
      <p className="bg-gray-200 rounded-sm p-1 m-2">#cricket</p>

      <span
        className={`bg-gray-200 rounded-sm p-1 m-2  ${
          text.length > 10 && text.length < 13 && "col-span-2"
        }`}
      >
        #cattongame
      </span>
      <span className="bg-gray-200 rounded-sm p-1 m-2">#gaming</span>
    </div>
  );
}
