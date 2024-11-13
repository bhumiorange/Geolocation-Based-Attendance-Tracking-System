// Emp_info_2.jsx
"use client";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Emp_info_2 = ({ employee }) => {
  return (
    <div className="bg-[#f8e58d] m-10 inline-flex pr-4 py-4 rounded-xl items-center whitespace-pre-wrap relative">
      <div>
        <FaUserCircle className="bg-transparent m-4 text-[150px]" />
      </div>
      <div className="flex flex-col ml-3">
        <div className="absolute top-2">
          <div className="flex">
            <h1 className="text-2xl font-bold m-4 text-nowrap">{employee.name}</h1>
            <h1 className="text-xl font-semibold m-4 font-mono text-[#605b5b]">
              {employee.employeeId}
            </h1>
          </div>
          <div className="flex flex-col -mt-2">
            <div className="flex gap-[70px]">
              <span className="ml-4">Check-In</span>
              <span>{employee.checkIn}</span>
            </div>
            <div className="flex gap-[44px]">
              <span className="ml-4">Check-Out</span>
              <span>{employee.checkOut}</span>
            </div>
            <div className="flex gap-[70px]">
              <span className="ml-4">Working Hours</span>
              <span>{employee.workingHours}</span>
            </div>
          </div>
        </div>
        <div className="bg-[#fff4b7] p-3 rounded-xl -mb-4 mt-[120px]">
          <div className="flex">
            <h1 className="text-lg font-bold ml-4 text-nowrap">Contact</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-[70px]">
              <span className="ml-4">Email</span>
              <span>: {employee.email}</span>
            </div>
            <div className="flex gap-[44px]">
              <span className="ml-4">Mob. No.</span>
              <span>: {employee.mobile}</span>
            </div>
            <div className="flex gap-[62px]">
              <span className="ml-4">Address</span>
              <span>: {employee.address}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-9">
        <div className="bg-[#d8a12e] rounded-xl">
          <div className="flex">
            <h1 className="text-xl font-bold m-4 text-nowrap">Total Attendance -</h1>
            <span className="text-2xl font-bold m-4 text-nowrap font-mono">{employee.totalAttendance}</span>
          </div>
          <div className="flex -mt-5">
            <h1 className="text-xl font-bold m-4 text-nowrap">Number of Leaves -</h1>
            <span className="text-2xl font-bold mt-4 mb-4 mr-4 ml-2 text-nowrap font-mono">{employee.leaves}</span>
          </div>
        </div>
        <div className="flex mt-4 justify-between">
          <div className="bg-[#d2a123] flex flex-col justify-center items-center rounded-xl px-3 h-20">
            <h1 className="text-xl font-medium m-4 text-nowrap">Onsite </h1>
            <h1 className="text-4xl font-bold m-4 text-nowrap -mt-3 font-mono">{employee.onsite}</h1>
          </div>
          <div className="bg-[#d2a123] flex flex-col justify-center items-center rounded-xl px-3 h-20">
            <h1 className="text-xl font-medium m-4 text-nowrap">Offsite </h1>
            <h1 className="text-4xl font-bold m-4 text-nowrap -mt-3 font-mono">{employee.offsite}</h1>
          </div>
        </div>
        <div className="mt-2 m-auto mt-5">
          <button className="bg-[#e06565] p-2 rounded-xl">
            <div className="flex flex-wrap gap-x-2 px-2">
              <MdDelete className="text-2xl text-[#1a1818]" />
              <h3 className="text-xl font-semibold text-[#1a1818]">Delete</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Emp_info_2;
