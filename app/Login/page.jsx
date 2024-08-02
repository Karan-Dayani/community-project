import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-[100%]">
      <div className="bg-secondary text-primary p-5 rounded-md w-[20%]">
        <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
        <div className=" flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-lg">Email</label>
            <input
              placeholder="Enter Email here"
              className="p-[10px] border-[2px] border-[solid] border-[#ccc] rounded-[5px] text-[16px] text-[#555] outline-[none]"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Password</label>
            <input
              placeholder="Password"
              className="p-[10px] border-[2px] border-[solid] border-[#ccc] rounded-[5px] text-[16px] text-[#555] outline-[none]"
              type="password"
            />
          </div>
        </div>
        <div className="my-4">
          <button className="border-[2px] border-[solid] border-[#24b4fb] bg-[#24b4fb] rounded-md w-full pl-[1em] pr-[1.2em] py-[0.5em] [transition:all_ease-in-out_0.2s] text-[16px] hover:bg-[#0071e2]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
