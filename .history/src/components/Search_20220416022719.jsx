import React from "react";
import { BiSearch } from "react-icons/bi";
export default function Search() {
  return (
    <div className="mx-5 py-5  sm:py-0 sm:mx-0 my-auto ">
      <form className="flex rounded-2xl bg-neutral-100 overflow-hidden">
        <input
          className="p-3  bg-neutral-100 w-full outline-none placeholder:text-sm"
          placeholder="Search for anything (jobs)"
        />
        <button className="px-5 bg-[#00ACFF] text-neutral-800 ">
          <BiSearch />
        </button>
      </form>
    </div>
  );
}
