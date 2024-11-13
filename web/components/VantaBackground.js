// components/VantaBackground.js
"use client";
// components/VantaBackground.js
import { useEffect } from 'react';

const VantaBackground = () => {
  useEffect(() => {
    let vantaEffect;

    // Function to initialize Vanta.js
    const initVanta = () => {
      if (window.VANTA && window.THREE) {
        vantaEffect = window.VANTA.WAVES({
          el: "#vanta-background",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x885d00,
          shininess: 15.00,
          waveHeight: 5.00,
          waveSpeed: 0.20,
          zoom: 0.93,
          THREE: window.THREE
        });
      } else {
        console.error('VANTA or THREE not loaded');
      }
    };

    // Dynamically load Three.js and Vanta.js
    const loadScripts = () => {
      const threeScript = document.createElement('script');
      threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
      threeScript.onload = () => {
        const vantaScript = document.createElement('script');
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js";
        vantaScript.onload = initVanta;
        document.body.appendChild(vantaScript);
      };
      document.body.appendChild(threeScript);
    };

    loadScripts();

    // Cleanup function to destroy Vanta effect on unmount
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div id="vanta-background" style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
  );
};

export default VantaBackground;
