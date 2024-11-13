"use client";
import React from "react";
import AdminLogin from "./AdminLogin";
import VantaBackground from "./VantaBackground";
import TypewriterComponent from "./TypewriterComponent";

const Landing = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Vanta background */}
      {/* <VantaBackground /> */}
      <div className="relative z-10 flex justify-between bg-transparent px-5 box-border items-center">
        <div >
          <div className="bg-transparent flex flex-col items-center justify-center -mt-6 left-[50px] z-5 absolute top-[18px]">
            <p className="text-[70px] font-semibold text-gray-800 bg-transparent">
              GEO
            </p>
            <p className="text-[70px] -mt-6 font-semibold text-gray-800 bg-transparent">
              NIRIKSHAN
            </p>
          </div>
          <div className="absolute z-5 top-[175px] left-[175px]">
            <TypewriterComponent />
          </div>
          <div className="absolute -bottom-[22px] z-5 scale-125 shadow-lg">
            <img src="./bgimg.png" alt="Background" />
          </div>
        </div>
        <div className="bg-transparent mr-[200px]">
          <AdminLogin />
        </div>
      </div>
    </div>
  );
};

export default Landing;
