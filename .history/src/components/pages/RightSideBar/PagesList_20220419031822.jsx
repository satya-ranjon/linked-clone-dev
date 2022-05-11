import React from "react";
import UXImg from "../../../assets/ux.png";
import UIImg from "../../../assets/swatches.png";
import { CgPlayListAdd } from "react-icons/cg";

export default function PagesList() {
  return (
    <div className=" bg-white rounded-md">
      <div className="flex justify-start hover:bg-slate-100 cursor-pointer transition-all duration-300 p-5 space-x-5 py-4">
        <img src={UXImg} alt="" />
        <p>UX Design</p>
      </div>
      <div className="flex transition-all duration-300 justify-start cursor-pointer space-x-5 hover:bg-slate-100 p-5 py-4">
        <img src={UIImg} alt="" />
        <p>UI Design</p>
      </div>
      <div className="flex transition-all duration-300 justify-start cursor-pointer space-x-5 hover:bg-slate-100 p-5 py-4">
        <CgPlayListAdd className="my-auto" />
        <p> Add pages</p>
      </div>
    </div>
  );
}
