// app/layout.js
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// Import the font
const inter = Roboto_Serif({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [hasNavigated, setHasNavigated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (!hasNavigated) {
        router.push('/Landing_Page'); // Redirect to Landing_Page
        setHasNavigated(true);
      }
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [hasNavigated, router]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
