'use client';

import Image from "next/image"


const About = () => {

    return (
        <div className="bg-white my-8 py-10">
            <div className="flex justify-center items-center flex-col">
                <h1 className="section_text" id="about">
                    WITH TRACKERIA YOU
                </h1>
            </div>

            <div className="flex items-center flex-col">
                <div className=" flex justify-center items-center flex-wrap lg:flex-nowrap max-w-7xl mt-[65px] px-4 gap-1 lg:gap-[20rem]">
                    <div className="text-start lg:text-start  space-y-6 py-4 my-5 order-1 md:order-none" data-aos="fade-right" data-aos-duration="1000">
                        <p className="text-neutral-800 text-3xl font-bold tracking-tight">Gain Full Digital Control</p>
                        <p className="flex flex-col items-start space-y-5">
                            <span className="w-full md:w-[400px] text-neutral-800 text-2xl font-normal leading-[38px] tracking-tight">Control your digital life, identity and device, even when out of control, all at once in a personalized dashboard. With our AI driven tools and security system your identity, safety, and  devices  is highly protected.</span>
                        </p>
                    </div>

                    <div className="block mx-auto" data-aos="fade-left" data-aos-duration="1000">
                        <Image
                            className="rounded-[50px]"
                            src="/about/control.svg"
                            width="390"
                            height="367"
                            alt="Control"

                        />
                    </div>
                </div>
            </div>





            <div className="flex items-center flex-col">
                <div className=" flex justify-center items-center flex-wrap lg:flex-nowrap max-w-7xl mt-[65px] px-4 gap-1 lg:gap-[20rem]">
                    <div className="block mx-auto order-1 md:order-none" data-aos="fade-right" data-aos-duration="1000">
                        <Image
                            className="rounded-[50px]"
                            src="/about/track.svg"
                            width="390"
                            height="367"
                            alt="Control"

                        />
                    </div>

                    <div className="text-start lg:text-start  space-y-6 py-4 my-5 order-1 md:order-none" data-aos="fade-left" data-aos-duration="1000">
                        <p className="text-neutral-800 text-3xl font-bold tracking-tight">Track devices in real-time</p>
                        <p className="flex flex-col items-start space-y-5">
                            <span className="w-full md:w-[400px] text-neutral-800 text-2xl font-normal leading-[38px] tracking-tight">Track your digital devices and systems in real-time using the modern device tracking software and app. You can now recover, track and locate several devices just from the app, logged-in at any time</span>
                        </p>
                    </div>


                </div>
            </div>




            <div className="flex items-center flex-col">
                <div className=" flex justify-center items-center  flex-wrap lg:flex-nowrap max-w-7xl mt-[65px] px-4 gap-1 lg:gap-[20rem]">
                    <div className="text-start lg:text-start  space-y-6 py-4 my-5 order-1 md:order-none" data-aos="fade-right" data-aos-duration="1000">
                        <p className="text-neutral-800 text-3xl max-w-md font-bold tracking-tight">Emergency SOS lines and responses</p>
                        <p className="flex flex-col items-start space-y-5">
                            <span className="w-full md:w-[400px] text-neutral-800 text-2xl font-normal leading-[38px] tracking-tight">Emergency alarm, lines and alerts with all kinds of emergency issues individuals and companies can likely face. On a click or given speech security measures will be taken swiftly.</span>
                        </p>
                    </div>

                    <div className="block mx-auto" data-aos="fade-left" data-aos-duration="1000">
                        <Image
                            className="rounded-[50px]"
                            src="/about/secure.svg"
                            width="390"
                            height="367"
                            alt="Control"

                        />
                    </div>
                </div>
            </div>



        </div>)
}

export default About