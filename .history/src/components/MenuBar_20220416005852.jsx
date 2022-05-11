import React from "react";

export default function MenuBar() {
  return (
    <div className="flex w-[570px]  justify-between  px-10 my-auto text-neutral-500 ">
      <Home className=" cursor-pointer" fontSize="large" />
      <FaUsers className=" cursor-pointer text-4xl" />
      <BusinessCenter className=" cursor-pointer" fontSize="large" />
      <Notifications className=" cursor-pointer" fontSize="large" />
      <Message className=" cursor-pointer" fontSize="large" />
    </div>
  );
}
