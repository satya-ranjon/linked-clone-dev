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
      <div className="lg:px-20 sm:px-5 xl:px-52 ">
        <div className=" flex justify-center lg:justify-between">
          <LeftSideBar />
          <div className=" lg:w-[600px] w-full p-5 mt-40 sm:mt-20">
            <NewPost />
            <PostList />
            <PostList />
            <PostList />
          </div>
          {/* <RightSideBar /> */}
        </div>
      </div>
    </div>
  );
}
