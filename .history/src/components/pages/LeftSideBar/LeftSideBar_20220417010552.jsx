import React from "react";
import ProfileSection from "./ProfileSection";

export default function LeftSideBar() {
  return (
    <div className="w-[176px] hidden lg:block">
      <div className="h-screen fixed w-[235px] bg-red-100 left-0">
        <ProfileSection />
      </div>
    </div>
  );
}
