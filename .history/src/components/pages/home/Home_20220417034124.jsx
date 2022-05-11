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
        <div className=" flex justify-between">
          <LeftSideBar />
          <div className="pt-20 w-[600px]">
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
