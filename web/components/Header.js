"use client";
import React, { useRef, useState, useEffect } from "react";
import { Merriweather } from "@next/font/google";
import { RiDashboardFill } from "react-icons/ri";
import { FaDatabase, FaUserPlus, FaLocationDot } from "react-icons/fa6";
import { MdFactory } from "react-icons/md";
import { PiNewspaperFill } from "react-icons/pi";
import { IoLogOut, IoCloseCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { gsap } from 'gsap';
import Link from 'next/link';

const bebasNeue = Merriweather({
  subsets: ["latin-ext"],
  weight: ["400"],
});

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const maindashboardRef = useRef();
  const hamburgerRef = useRef();
  const closeRef = useRef();
  const dashboardRef = useRef(null);
  const employeeRef = useRef(null);
  const userRef = useRef(null);
  const officeRef = useRef(null);
  const offsiteRef = useRef(null);
  const leaveRef = useRef(null);
  const logoutRef = useRef(null);
  const blurryRef = useRef(null);

  useEffect(() => {
    // Hamburger button timeline
    const tlHamburger = gsap.timeline({ paused: true })
      .to(hamburgerRef.current, { rotation: 180, duration: 0.5, ease: 'power2.out' });

    // Close button timeline
    const tlClose = gsap.timeline({ paused: true })
      .to(closeRef.current, { rotation: 360, duration: 0.5, ease: 'power2.out' });

    // Play hamburger timeline on menu open
    if (showMenu) {
      tlHamburger.play();
    } else {
      tlHamburger.reverse();
    }

    // Play close timeline on menu close
    if (!isVisible) {
      tlClose.play();
    } else {
      tlClose.reverse();
    }
  }, [showMenu, isVisible]);

  const handleMouseEnter = (ref) => {
    gsap.fromTo(ref.current,
      { scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' },
      { scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', duration: 0.3 }
    );
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
      duration: 0.3,
      clearProps: 'all',
    });
  };

  const handleMenuClick = () => {
    setShowMenu(false);
    setIsVisible(true);

    // Animate the blur effect
    // gsap.to(blurryRef.current, {
    //   filter: "blur(200px)",
    //   pointerEvents: "none",
    //   duration: 0.5,
    //   ease: 'power2.inOut'
    // });

    // Animate the header component

    // console.log("first")
  };

  const handleClose = () => {
    gsap.to(maindashboardRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsVisible(false);
        setShowMenu(true);
      }
    });
  };

  return (
    <div>
      {isVisible && <div id="blurry" ref={blurryRef} className="fixed top-0 left-0 w-full h-full bg-[#f0f0f086] bg-opacity-50 backdrop-blur-[2px] z-49" />}
      {showMenu && (
        <div className="bg-white rounded-full flex items-center ">
          <div className=" top-4 left-4 cursor-pointer absolute z-50 bg-white rounded-full flex items-cente p-2" ref={hamburgerRef} onClick={handleMenuClick}>
            <GiHamburgerMenu className="text-3xl" />
          </div>
        </div>
      )}

      {isVisible && (
        <div ref={maindashboardRef} className="w-[40vh] h-[100vh] bg-[#DBDADF] fixed z-50">
          <div onClick={handleClose} ref={closeRef}>
            <IoCloseCircleOutline className="bg-[#DBDADF] text-3xl absolute top-4 left-2 cursor-pointer" />
          </div>
          <div className="w-[25vh] m-auto">
            <Link href="/Landing_Page">
              <img src="/gail.png" alt="GAIL Logo" className="bg-[#DBDADF] cursor-pointer" />
            </Link>
          </div>
          <div className="mt-[1vh] p-2 bg-[#DBDADF] m-auto">
            <p className={`text-[3.4vh] font-extrabold bg-[#DBDADF] text-center ${bebasNeue.className}`}>
              Employee Monitoring Portal
            </p>
          </div>
          <div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(dashboardRef)}
              onMouseLeave={() => handleMouseLeave(dashboardRef)}
              ref={dashboardRef}
            >
              <RiDashboardFill className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <Link href="/Dashboard" className="bg-[#DBDADF]"><span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Dashboard</span></Link>
            </div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(employeeRef)}
              onMouseLeave={() => handleMouseLeave(employeeRef)}
              ref={employeeRef}
            >
              <FaDatabase className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <Link href="/Empdata"><span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Employees Data</span></Link>
            </div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(userRef)}
              onMouseLeave={() => handleMouseLeave(userRef)}
              ref={userRef}
            >
              <FaUserPlus className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <Link href="/User_create" className="bg-[#DBDADF]"><span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">User Creation</span></Link>
            </div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(officeRef)}
              onMouseLeave={() => handleMouseLeave(officeRef)}
              ref={officeRef}
            >
              <FaLocationDot className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Office Location</span>
            </div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(offsiteRef)}
              onMouseLeave={() => handleMouseLeave(offsiteRef)}
              ref={offsiteRef}
            >
              <MdFactory className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <Link href="/Offsite"><span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Offsites</span></Link>
            </div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(leaveRef)}
              onMouseLeave={() => handleMouseLeave(leaveRef)}
              ref={leaveRef}
            >
              <PiNewspaperFill className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Leave Application</span>
            </div>
          </div>
          <div
            className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
            onMouseEnter={() => handleMouseEnter(logoutRef)}
            onMouseLeave={() => handleMouseLeave(logoutRef)}
            ref={logoutRef}
          >
            <IoLogOut className="text-2xl text-gray-700 bg-[#DBDADF]" />
            <Link href="/Landing_Page" ><span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Logout</span></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
