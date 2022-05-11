import React from "react";
import { BiSearch } from "react-icons/bi";
export default function Search() {
  return (
    <div className="mx-10 py-5  ">
      <form className="flex rounded-2xl">
        <input
          className="p-2 overflow-hidden bg-neutral-100 w-full outline-none placeholder:text-sm"
          placeholder="Search for anything (jobs)"
        />
        <button>
          <BiSearch />
        </button>
      </form>
    </div>
  );
}
