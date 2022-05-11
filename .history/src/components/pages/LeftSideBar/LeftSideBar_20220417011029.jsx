import React from "react";
import ProfileSection from "./ProfileSection";

export default function LeftSideBar() {
  return (
    <div className="w-[176px] hidden lg:block pt-20">
      <div className="h-screen fixed w-[335px] bg-red-100 left-0">
        <ProfileSection />
      </div>
    </div>
  );
}
