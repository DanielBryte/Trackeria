"use client";

import './styles/globals.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


export const metadata = {
  title: 'Trackeria',
  description: 'Your All-In-One Digital Security App',
}

export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
