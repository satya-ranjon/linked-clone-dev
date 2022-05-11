import React from "react";
import ProfileSection from "./ProfileSection";

export default function LeftSideBar() {
  return (
    <div className="smy:block hidden fixed top-0">
      <div className="">
        <ProfileSection />
      </div>
    </div>
  );
}
