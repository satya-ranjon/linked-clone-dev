import React, { useState } from "react";
import TextField from "@mui/material/TextField";
export default function Form() {
  const [showhit, setShowhit] = useState(true);
  return (
    <form className="pt-4 space-y-4">
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Email or Phone"
        variant="outlined"
      />
      <div className="relative">
        <TextField
          className="w-full relative"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type={`${showhit ? "password" : "text"}`}
        />
        <p
          className="font-semibold text-blue-600 cursor-pointer w-fit hover:bg-blue-200 transition-all duration-300 rounded-xl absolute top-4 right-3"
          onClick={() => setShowhit((prv) => !prv)}
        >
          {showhit ? "show" : "hide"}
        </p>
      </div>
      <p className="font-semibold text-blue-600 cursor-pointer w-fit hover:bg-blue-200 transition-all duration-300 rounded-xl">
        Forgot password?
      </p>
      <div className=" p-2 flex justify-center font-semibold text-lg space-x-3 cursor-pointer rounded-md hover:bg-blue-600 transition-all duration-300 bg-blue-500 text-white">
        <p>Sign in</p>
      </div>
    </form>
  );
}
