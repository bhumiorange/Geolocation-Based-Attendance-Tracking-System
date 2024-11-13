"use client";
import React from "react";
import dynamic from "next/dynamic";
import { MdDelete } from "react-icons/md";

// Dynamically import the Offmap component with client-side rendering only
const Offmap = dynamic(() => import("./Offmap"), {
  ssr: false, // This disables server-side rendering for this component
});

const Offlocation = ({
  name,
  address,
  latitude,
  longitude,
  leader,
  employees,
  num,
  lname,
}) => {
  return (
    <div className="bg-[#f9d2c3] overflow-hidden m-10 inline-flex pr-4 py-4 rounded-xl items-center whitespace-pre-wrap z-10 relative">
      <div className="w-[400px] h-[200px] overflow-hidden z-10  ml-5">
        <Offmap
          className="bg-transparent m-4"
          latitude={latitude}
          longitude={longitude}
        />
      </div>
      <div className=" flex items-center justify-evenly justify-items-center">
        <div className="flex flex-col ml-3 w-[300px]">
          <div className="flex">
            <div className="text-2xl font-bold m-4">Location</div>
          </div>
          <div className="flex flex-col ml-4">
            <div className="flex gap-[70px]">
              <span>Latitude:</span>
              <span>{latitude}</span>
            </div>
            <div className="flex gap-[70px] mt-2">
              <span>Longitude:</span>
              <span>{longitude}</span>
            </div>
          </div>
          <div className="bg-[#fec2c2] p-3 rounded-xl mt-4">
            <div className="flex">
              <h1 className="text-lg font-bold ml-4">ADDRESS</h1>
            </div>
            <div className="ml-4 mt-2">{address}</div>
          </div>
        </div>
        <div className="flex flex-col ml-9">
          <div className="bg-[#fbefef] rounded-xl p-4">
            <div className="flex">
              <h1 className="text-xl font-bold">Leader</h1>
              <span className="text-2xl font-bold ml-4 font-mono text-[#464545]">{lname}</span>
            </div>
            <div className="flex mt-4">
              <h1 className="text-xl font-bold">Number of Employees </h1>
              <span className="text-2xl font-bold ml-2 font-mono text-[#464545]">{num}</span>
            </div>
          </div>
          <div className="m-auto mt-8 absolute bottom-2 right-2">
            <button className="bg-[#e06565] p-2 rounded-xl">
              <div className="flex flex-wrap gap-x-2 px-2">
                <MdDelete className="text-2xl text-[#1a1818]" />
                <h3 className="text-xl font-semibold text-[#1a1818]">Delete</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offlocation;
