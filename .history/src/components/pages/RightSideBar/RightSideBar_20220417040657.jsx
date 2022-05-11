import React from "react";
import ProfileSection from "../LeftSideBar/ProfileSection";

export default function RightSideBar() {
  return (
    <div className="w-fit hidden mmd:block">
      <div className="h-screen fixed right-26 llg:right-[5%] pt-20">
        <ProfileSection />
      </div>
    </div>
  );
}
