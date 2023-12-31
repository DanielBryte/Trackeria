"use client";
import { useState} from "react";
import Logo from "/public/logo.svg"
import Image from "next/image";
export default function Header() {


    const [navbar, setNavbar] = useState(false);


    return (
        <header
            className="relative flex flex-col items-center text-white"
        >
            <div className="absolute z-40 m-auto max-w-7xl p-5 flex w-full flex-row flex-wrap items-center justify-between xl:flex-row">
                <div className="flex pl:1 lg:pl-4 gap-3 items-center justify-center">
                    <Image
                        src={Logo}
                        className="border-r-3 w-9 lg:w-10"
                        width="40"
                        height="40"
                        alt="logo"
                    />
                    <span className="text-zinc-300 text-2xl lg:text-3xl font-medium lg:font-bold">Trackeria</span>
                </div>

                {/* Menubar */}
                <div className="md:hidden">
                    <button
                        className="p-1 rounded-md outline-none "
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                {/* Menubar */}



                <div
                    className={
                        navbar
                            ? "flex flex-col items-center bg-[#333333] md:bg-transparent justify-center md:my-1 md:w-auto md:static md:inline-block relative gap-6 w-full my-6 space-x-0  md:space-x-6"
                            : "hidden sm:flex space-x-6 my-2"
                    }>                    
                    <a className="nav_text" href="#about">About</a>
                    <a className="nav_text" href="#product">Products</a>
                    <a className="nav_text" href="#faq">FAQs</a>
                    <a className="nav_text" href="#pricing">Pricing</a>
                </div>

                <div
                    className="hidden md:flex columns-1 gap-5"
                >
                    <a
                        href="https://forms.gle/LRQ8rX6TqEEY6Etj9" target="_blank"
                        className="flex justify-center items-center btn btn-active border text-1xl md:border-0 w-32 h-12 font-semibold text-lg lg:w-40 lg:h-[52px] bg-gradient-to-r from-blue-700 to-fuchsia-900 rounded-lg"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
}
