"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function EmployeeHistogram() {
  // Example data from 7 AM to 10 AM with more entries
  const data = [
    { time: "7:00 AM", onsite: 10, offsite: 5 },
    { time: "7:30 AM", onsite: 12, offsite: 6 },
    { time: "8:00 AM", onsite: 15, offsite: 7 },
    { time: "8:30 AM", onsite: 18, offsite: 8 },
    { time: "9:00 AM", onsite: 20, offsite: 10 },
    { time: "9:30 AM", onsite: 22, offsite: 12 },
    { time: "10:00 AM", onsite: 25, offsite: 15 },
    { time: "10:30 AM", onsite: 28, offsite: 18 },
  ];

  // Handle click on bars
  const handleClick = (data, index, type) => {
    alert(`Clicked on ${type} bar at ${data.time}: ${data[type]} employees`);
  };

  return (
    <div >
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="onsite"
          fill="#f3997d"
          name="Onsite Employees"
          onClick={(data, index) => handleClick(data, index, 'onsite')}
        />
        <Bar
          dataKey="offsite"
          fill="#82ca9d"
          name="Offsite Employees"
          onClick={(data, index) => handleClick(data, index, 'offsite')}
        />
      </BarChart>
    </div>
  );
}
