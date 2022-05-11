import React from "react";
import ProfileSection from "../LeftSideBar/ProfileSection";

export default function RightSideBar() {
  return (
    <div className="lg:w-[280px] w-[290px] hidden md:block">
      <div className="h-screen fixed xxl:w-[460px] w-[290px] bg-red-100 right-0 pt-10">
        <ProfileSection />
      </div>
    </div>
  );
}
