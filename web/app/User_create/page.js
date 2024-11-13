"use client";
import Add_emp from '@/components/Add_emp';
import React from 'react';

const Page = () => {
  return (
    <div
      className="h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg')",
      }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-4xl">
        <Add_emp />
      </div>
    </div>
  );
};

export default Page;
