"use client";
import React from 'react';
import IconCloud from '@/components/magicui/icon-cloud';
import Image from 'next/image';

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const loaderStyles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'rgba(255, 255, 255, 0.8)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  iconCloudContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100px', // Adjust the size as needed
    height: 'auto',
    zIndex: 1, // Ensure the image is on top of the cloud
  },
};

const Loader = () => (
  <div style={loaderStyles.loaderContainer}>
    <div style={loaderStyles.iconCloudContainer}>
      <IconCloud iconSlugs={slugs} />
      <Image
        src="/gn.png" // Path to your image in the public folder
        alt="Loading..."
        style={loaderStyles.image}
        width={200} // Adjust the width as needed
        height={200} // Adjust the height as needed
      />
    </div>
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `}</style>
  </div>
);

export default Loader;
