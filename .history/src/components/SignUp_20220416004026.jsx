import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

export default function SignUp() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="sm:bg-[#f3f2ef] bg-white h-screen">
      <div className="mx-8 sm:mx-32 pt-20 text-center">
        <img className=" cursor-pointer" src={Logo} alt="" />
        <div className="grid place-items-center mt-40 space-y-4">
          <h1 className="text-xl ssm:text-3xl font-semibold">
            Make the most of your professional life
          </h1>
          <div className="p-0 ssm:p-8 py-10 ssm:w-96 bg-white space-y-3">
            {toggle ? (
              <>
                <button
                  onClick={() => setToggle((prv) => !prv)}
                  className="rounded-3xl bg-blue-500 w-full text-md font-semibold text-white p-4"
                >
                  Continue with email
                </button>
                <button className="rounded-3xl border-2 border-gray-700 w-full text-md font-semibold text-gray-700 p-3">
                  <div className="flex justify-center space-x-4">
                    <FcGoogle className="my-auto text-2xl" />
                    <p>Continue with Google</p>
                  </div>
                </button>
              </>
            ) : (
              <Form />
            )}

            <p>
              Already on LinkedIn?
              <span
                className=" text-blue-500 font-semibold cursor-pointer"
                onClick={() => navigate("/signin")}
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
