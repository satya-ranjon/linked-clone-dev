import React from "react";
import UXImg from "../../../assets/ux.png";
import UIImg from "../../../assets/swatches.png";

export default function PagesList() {
  return (
    <div className=" bg-white p-5 py-4 space-y-3">
      <div className="flex justify-start space-x-5">
        <img src={UXImg} alt="" />
        <p>UX Design</p>
      </div>
      <div className="flex justify-start space-x-5">
        <img src={UIImg} alt="" />
        <p>UI Design</p>
      </div>
    </div>
  );
}
