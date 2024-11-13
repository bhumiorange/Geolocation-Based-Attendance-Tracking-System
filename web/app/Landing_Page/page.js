// // app/page.js
// import React, { useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import '../globals.css';
// import Landing from '@/components/Landing';
// import VantaBackground from '@/components/VantaBackground';

// const Page = () => {
//   const pathname = usePathname();

//   useEffect(() => {
//     // Remove any previously added page-specific background class
//     document.body.classList.remove('page-specific-background');

//     // Apply the custom class based on the route
//     if (pathname === '/Landing_Page') {
//       document.body.classList.add('page-specific-background');
//     }
//   }, [pathname]);

//   return (
//     <div className='relative'>
//       <VantaBackground />
//       <Landing />
//     </div>
//   );
// };

// export default Page;
// "use client";
// import React from 'react'
// import VantaBackground from '@/components/VantaBackground';
// import Landing from '@/components/Landing';
// const page = () => {
//   return (
//     <>
//     <script
//       src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
//       strategy="beforeInteractive"
//     />
//     <script
//       src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
//       strategy="beforeInteractive"
//       onLoad={() => {
//         // Initialize Vanta background here if necessary
//       }}
//     />
//     <VantaBackground />
//     <Landing />
//   </>
//   )
// }

// export default page
"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import VantaBackground from '@/components/VantaBackground';
import Landing from '@/components/Landing';
import '../globals.css';

const Page = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Remove any previously added page-specific background class
    document.body.classList.remove('page-specific-background');

    // Apply the custom class based on the route
    if (pathname === '/Landing_Page') {
      document.body.classList.add('page-specific-background');
    }
  }, [pathname]);

  return (
    <>
      {/* Include necessary scripts for Vanta.js */}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="beforeInteractive"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          // Initialize Vanta background here if necessary
        }}
      />
      <div className='relative'>
        <VantaBackground />
        <Landing />
      </div>
    </>
  );
};

export default Page;
