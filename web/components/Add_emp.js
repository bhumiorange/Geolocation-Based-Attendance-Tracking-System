"use client";
import React, { useState } from "react";
import { BiSolidUserRectangle } from "react-icons/bi";

const Add_emp = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    jobTitle: "",
    department: "",
    businessUnit: "",
    photo: null, // Adding photo to formData
  });
  const [preview, setPreview] = useState(null); // State to store preview of uploaded photo

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: file,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setFormData({
      employeeName: "",
      employeeId: "",
      jobTitle: "",
      department: "",
      businessUnit: "",
      photo: null,
    });
    setPreview(null); // Reset preview after submission
  };

  const handleCancel = () => {
    setFormData({
      employeeName: "",
      employeeId: "",
      jobTitle: "",
      department: "",
      businessUnit: "",
      photo: null,
    });
    setPreview(null); // Reset preview on cancel
  };

  return (
    <>
      <div className="bg-[#93abc6] m-16 inline-block rounded-lg  p-6">
        <div className="flex gap-8"> {/* Flexbox container for form and photo */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
            <div className="grid grid-cols-[150px_1fr] items-center gap-8">
              <label className="text-left text-xl whitespace-nowrap">Employee Name:</label>
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="grid grid-cols-[150px_1fr] items-center gap-8">
              <label className="text-left text-xl whitespace-nowrap">Employee ID:</label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="grid grid-cols-[150px_1fr] items-center gap-8">
              <label className="text-left text-xl whitespace-nowrap">Job Title:</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="grid grid-cols-[150px_1fr] items-center gap-8">
              <label className="text-left text-xl whitespace-nowrap">Department:</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="grid grid-cols-[150px_1fr] items-center gap-8">
              <label className="text-left text-xl whitespace-nowrap">Business Unit:</label>
              <input
                type="text"
                name="businessUnit"
                value={formData.businessUnit}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
            <div className="flex gap-4 mt-4 items-center justify-center">
              <button type="submit" className="bg-blue-500 text-white p-2 rounded text-xl px-2 hover:scale-105 hover:shadow-md">
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-red-500 text-white p-2 rounded text-xl px-2 hover:scale-105 hover:shadow-md"
              >
                Cancel
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center justify-center justify-items-center align-middle p-2 rounded-lg border h-fit  bg-[#b7d4ed]">
            <h1>Upload Photo</h1>
            <div className="w-48 h-48 border-[4px] border-[#0b223a] rounded-lg flex items-center justify-center">
              {preview ? (
                <img
                  src={preview}
                  alt="Uploaded"
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <BiSolidUserRectangle className="text-9xl" />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-4 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_emp;
