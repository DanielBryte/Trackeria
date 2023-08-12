"use client";

import About from './components/Layout/About'
import Faqs from './components/Layout/Faq'
import Feature from './components/Layout/Product'
import Footer from './components/Layout/Footer'
import Hero from './components/Layout/Hero'
import Navbar from './components/Layout/Navbar'
import Pricing from './components/Layout/Pricing'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Feature />
     <Faqs />
     <Pricing />
     <Footer/>
    </>
  )
}
