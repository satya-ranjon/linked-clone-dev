import React from "react";

export default function Search() {
  return (
    <div className="mx-10 py-5 rounded-xl ">
      <form>
        <input
          className="p-2 overflow-hidden bg-neutral-100 w-full outline-none placeholder:text-sm"
          placeholder="Search for anything (jobs)"
        />
        <button></button>
      </form>
    </div>
  );
}
