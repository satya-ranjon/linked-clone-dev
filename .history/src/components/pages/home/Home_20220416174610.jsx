import React from "react";
import Header from "../../Header";
export default function Home() {
  return (
    <div className=" bg-neutral-100 h-screen">
      <Header />
      <div className="lg:px-20 sm:px-5 xl:px-52 ">
        <div className=" flex justify-between">
          <div className="w-[176px]">khokon</div>
          <div className=" w-[600px] bg-red-200 p-5">khokon</div>
          <div className="w-[280px]">khokon</div>
        </div>
      </div>
    </div>
  );
}
