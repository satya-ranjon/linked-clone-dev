import React from "react";
import ProfileSection from "./ProfileSection";

export default function LeftSideBar() {
  return (
    <div className="w-[176px] hidden lg:block pt-20">
      <div className="h-screen fixed xxl:w-[360px] w-[290px] bg-red-100 left-0 p-2">
        <ProfileSection />
      </div>
    </div>
  );
}
