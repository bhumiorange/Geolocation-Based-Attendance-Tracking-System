import React from "react";

const RecentLogs = () => {
  // Sample data for logs with Indian names
  const logs = [
    { name: "Aarav Sharma", employeeId: "E123", checkIn: "09:00 AM", checkOut: "05:00 PM", workingHours: "8" },
    { name: "Vivaan Patel", employeeId: "E124", checkIn: "09:15 AM", checkOut: "05:15 PM", workingHours: "8" },
    { name: "Aditya Verma", employeeId: "E125", checkIn: "08:45 AM", checkOut: "04:45 PM", workingHours: "8" },
    { name: "Isha Gupta", employeeId: "E126", checkIn: "09:30 AM", checkOut: "05:30 PM", workingHours: "8" },
    { name: "Mihir Kapoor", employeeId: "E127", checkIn: "09:00 AM", checkOut: "05:00 PM", workingHours: "8" },
    { name: "Ananya Singh", employeeId: "E128", checkIn: "09:05 AM", checkOut: "05:05 PM", workingHours: "8" },
    { name: "Arjun Reddy", employeeId: "E129", checkIn: "08:50 AM", checkOut: "04:50 PM", workingHours: "8" },
    { name: "Sanya Patel", employeeId: "E130", checkIn: "09:20 AM", checkOut: "05:20 PM", workingHours: "8" },
    { name: "Karan Kumar", employeeId: "E131", checkIn: "09:10 AM", checkOut: "05:10 PM", workingHours: "8" },
    { name: "Neha Agarwal", employeeId: "E132", checkIn: "09:00 AM", checkOut: "05:00 PM", workingHours: "8" },
    { name: "Rohan Mehta", employeeId: "E133", checkIn: "09:25 AM", checkOut: "05:25 PM", workingHours: "8" },
    { name: "Kiara Joshi", employeeId: "E134", checkIn: "09:15 AM", checkOut: "05:15 PM", workingHours: "8" },
    { name: "Rajesh Singh", employeeId: "E135", checkIn: "08:55 AM", checkOut: "04:55 PM", workingHours: "8" },
    { name: "Ayesha Khan", employeeId: "E136", checkIn: "09:00 AM", checkOut: "05:00 PM", workingHours: "8" },
    { name: "Vikram Chauhan", employeeId: "E137", checkIn: "09:10 AM", checkOut: "05:10 PM", workingHours: "8" },
  ];

  return (
    <div className="p-4 relative overflow-visible">
      <h1 className="text-2xl font-bold mb-4">Recent Logs</h1>
      <div className="grid grid-cols-5 gap-4 text-sm font-semibold text-gray-700 mb-2">
        <span>Name</span>
        <span>Employee ID</span>
        <span>Check-In</span>
        <span>Check-Out</span>
        <span>Working Hours</span>
      </div>
      <div className="overflow-y-auto max-h-64">
        {logs.map((log, index) => (
          <div
            key={index}
            style={{ backgroundColor: index % 2 === 0 ? '#fab7b7' : '#a3d9a5' }} // Alternate red and green
            className="grid grid-cols-5 gap-4 rounded-md p-2 border-b overflow-hidden mb-2 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-x-10 hover:shadow-lg"
          >
            <span>{log.name}</span>
            <span>{log.employeeId}</span>
            <span>{log.checkIn}</span>
            <span>{log.checkOut}</span>
            <span>{log.workingHours}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentLogs;
