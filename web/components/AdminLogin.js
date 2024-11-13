"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEyeSlash, FaRegEye } from "react-icons/fa"; // Font Awesome icons
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import ShimmerButton from "@/components/magicui/shimmer-button";

const fillAnimation = keyframes`
  0% { transform: scale(0); opacity: 0.5; }
  100% { transform: scale(1); opacity: 0; }
`;

const SuccessOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 0, 0.8); /* Semi-transparent green background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fillAnimation} 3s forwards;
`;

const SuccessContent = styled.div`
  text-align: center;
  color: white;
  font-size: 1.5rem;
  position: relative;
  z-index: 1;
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border: 8px solid white;
  border-radius: 50%;
  border-top: 8px solid green;
  animation: spin 2s linear infinite, fill 3s forwards;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fill {
    0% {
      transform: scale(0);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userId === "SIH" && password === "FRIENDS") {
      setLoginSuccessful(true);
      router.prefetch("/Dashboard"); // Prefetch the dashboard page
      setTimeout(() => {
        router.push("/Dashboard");
      }, 1000);
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent rounded-lg scale-125">
      <div className="bg-[#fff7cf] p-8  border-[3px] border-[#c7450e] rounded-lg shadow-xl w-full max-w-md relative">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome back!</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4 bg-[#fff7cf]">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 bg-[#fff7cf]"
              htmlFor="userId"
            >
              User ID
            </label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-3 py-2 border-[3px] border-[#ff9364]   rounded-md focus:outline-none bg-[#fff7cf] focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your User ID"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2  bg-[#fff7cf] border-[3px] border-[#ff9364]  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Password"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-3 flex items-center mt-6 text-gray-500"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                className="form-checkbox"
              />
              <span className="ml-2 text-gray-700">Keep me logged in</span>
            </label>
          </div>
          <div className="flex items-center justify-between mb-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
        {loginSuccessful && (
          <SuccessOverlay>
            <SuccessContent>
              <h2 className="text-3xl font-bold mb-4">Success!</h2>
              <p className="text-lg">Login successful.</p>
              <Circle />
            </SuccessContent>
          </SuccessOverlay>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
