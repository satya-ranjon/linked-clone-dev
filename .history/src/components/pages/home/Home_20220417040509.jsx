import React from "react";
import Header from "../../Header";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import NewPost from "./NewPost";
import PostList from "./PostList";
export default function Home() {
  return (
    <div className=" bg-neutral-100">
      <Header />
      <div className="lg:px-20 sm:px-0 xl:px-52 ">
        <div className=" flex justify-center mmd:justify-between">
          <LeftSideBar />
          <div className=" pt-52 mmd:pt-20 px-4 w-[500px] xl:w-[600px]">
            <NewPost />
            <PostList />
            <PostList />
            <PostList />
          </div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
