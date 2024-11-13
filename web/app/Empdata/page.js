
"use client";
import React from "react";
import Emp_info from "@/components/Emp_info";
import Emp_info_2 from "@/components/Emp_info_2";

// Sample employee data
const employeeData = [
    { name: "Aarav Sharma", employeeId: "E123", checkIn: "09:00 AM", checkOut: "05:00 PM", workingHours: "8", email: "aarav.sharma@example.com", mobile: "9876543210", address: "123 Main Street, Mumbai", totalAttendance: "20", leaves: "1", onsite: "15", offsite: "5" },
    { name: "Vivaan Patel", employeeId: "E124", checkIn: "09:15 AM", checkOut: "05:15 PM", workingHours: "8", email: "vivaan.patel@example.com", mobile: "8765432109", address: "456 Elm Street, Delhi", totalAttendance: "18", leaves: "2", onsite: "13", offsite: "5" },
    { name: "Aditya Verma", employeeId: "E125", checkIn: "08:45 AM", checkOut: "04:45 PM", workingHours: "8", email: "aditya.verma@example.com", mobile: "7654321098", address: "789 Oak Avenue, Bangalore", totalAttendance: "22", leaves: "1", onsite: "17", offsite: "5" },
    { name: "Isha Gupta", employeeId: "E126", checkIn: "09:30 AM", checkOut: "05:30 PM", workingHours: "8", email: "isha.gupta@example.com", mobile: "6543210987", address: "101 Pine Road, Chennai", totalAttendance: "21", leaves: "0", onsite: "16", offsite: "5" },
    { name: "Mihir Kapoor", employeeId: "E127", checkIn: "09:00 AM", checkOut: "05:00 PM", workingHours: "8", email: "mihir.kapoor@example.com", mobile: "5432109876", address: "202 Maple Street, Hyderabad", totalAttendance: "19", leaves: "1", onsite: "14", offsite: "5" },
    { name: "Ananya Singh", employeeId: "E128", checkIn: "09:05 AM", checkOut: "05:05 PM", workingHours: "8", email: "ananya.singh@example.com", mobile: "4321098765", address: "303 Cedar Lane, Pune", totalAttendance: "20", leaves: "2", onsite: "15", offsite: "5" },
    { name: "Arjun Reddy", employeeId: "E129", checkIn: "08:50 AM", checkOut: "04:50 PM", workingHours: "8", email: "arjun.reddy@example.com", mobile: "3210987654", address: "404 Birch Street, Kolkata", totalAttendance: "23", leaves: "0", onsite: "18", offsite: "5" },
    { name: "Sanya Patel", employeeId: "E130", checkIn: "09:20 AM", checkOut: "05:20 PM", workingHours: "8", email: "sanya.patel@example.com", mobile: "2109876543", address: "505 Walnut Avenue, Jaipur", totalAttendance: "20", leaves: "1", onsite: "15", offsite: "5" },
    { name: "Karan Kumar", employeeId: "E131", checkIn: "09:10 AM", checkOut: "05:10 PM", workingHours: "8", email: "karan.kumar@example.com", mobile: "1098765432", address: "606 Fir Road, Ahmedabad", totalAttendance: "18", leaves: "2", onsite: "13", offsite: "5" },
    { name: "Neha Agarwal", employeeId: "E132", checkIn: "09:00 AM", checkOut: "05:00 PM", workingHours: "8", email: "neha.agarwal@example.com", mobile: "0987654321", address: "707 Poplar Lane, Surat", totalAttendance: "22", leaves: "0", onsite: "17", offsite: "5" },
    { name: "Rohan Mehta", employeeId: "E133", checkIn: "09:25 AM", checkOut: "05:25 PM", workingHours: "8", email: "rohan.mehta@example.com", mobile: "9876501234", address: "808 Redwood Street, Indore", totalAttendance: "21", leaves: "1", onsite: "16", offsite: "5" },
    { name: "Kiara Joshi", employeeId: "E134", checkIn: "09:15 AM", checkOut: "05:15 PM", workingHours: "8", email: "kiara.joshi@example.com", mobile: "8765432101", address: "909 Cedar Lane, Bhopal", totalAttendance: "20", leaves: "2", onsite: "15", offsite: "5" },
    { name: "Rajesh Singh", employeeId: "E135", checkIn: "08:55 AM", checkOut: "04:55 PM", workingHours: "8", email: "rajesh.singh@example.com", mobile: "7654321091", address: "1010 Maple Avenue, Chandigarh", totalAttendance: "19", leaves: "1", onsite: "14", offsite: "5" },
    { name: "Ayesha Khan", employeeId: "E136", checkIn: "09:00 AM", checkOut: "05:00 PM", workingHours: "8", email: "ayesha.khan@example.com", mobile: "6543210981", address: "1111 Pine Street, Lucknow", totalAttendance: "18", leaves: "2", onsite: "13", offsite: "5" },
    { name: "Vikram Chauhan", employeeId: "E137", checkIn: "09:10 AM", checkOut: "05:10 PM", workingHours: "8", email: "vikram.chauhan@example.com", mobile: "5432109871", address: "1212 Oak Road, Kanpur", totalAttendance: "22", leaves: "0", onsite: "17", offsite: "5" }
  ];

  const page = () => {
    return (
      <div className="relative min-h-screen">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://e1.pxfuel.com/desktop-wallpaper/543/782/desktop-wallpaper-employee-management-systems-consulting-employee.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Keeps the background image fixed
            zIndex: -1, // Ensure the background image is behind the content
          }}
        ></div>
        
        {/* Content with transparent and blurred background */}
        <div className="relative z-10 p-4 bg-white bg-opacity-70 backdrop-blur-sm rounded-lg">
          <h1 className="text-4xl font-bold text-center my-4">Employee List</h1>
          <div className="flex flex-col items-center justify-items-center gap-4">
            {employeeData.map((employee, index) => {
              const isEven = index % 2 === 0;
              return isEven ? (
                <Emp_info key={index} employee={employee} />
              ) : (
                <Emp_info_2 key={index} employee={employee} />
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default page;