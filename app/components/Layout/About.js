import Image from "next/image"


const About = () => {
    return (
        <div className=" bg-white my-6">
            <div className="flex justify-center items-center flex-col">
                <h1 className="font-bold text-center py-3 text-2xl md:text-3xl lg:text-[45px] pt-14">
                    WITH TRACKERIA YOU
                </h1>
            </div>

            <div className="flex items-center flex-col">
                <div className=" flex items-center flex-wrap lg:flex-nowrap max-w-7xl mt-[65px] px-4 gap-1 lg:gap-[18rem]">
                    <div className="text-start lg:text-start  space-y-6 py-4 my-5 order-1 md:order-none" data-aos="fade-right" data-aos-duration="1000">
                        <p className="text-neutral-800 text-3xl font-bold tracking-tight">Gain Full Digital Control</p>
                        <p className="flex flex-col items-start space-y-5">
                            <span className="w-full md:w-[545px] text-neutral-800 text-2xl font-normal leading-[38px] tracking-tight">Control your digital life, identity and device, even when out of control, all at once in a personalized dashboard. With our AI driven tools and security system your identity, safety, and  devices  is highly protected.</span>
                        </p>
                    </div>

                    <div className="block mx-auto" data-aos="fade-right" data-aos-duration="1000">
                        <Image
                            className="rounded-[50px]"
                            src="/about/control.svg"
                            width="380"
                            height="357"
                            alt="Control"

                        />
                    </div>
                </div>

                <p className="text-6xl py-12 font-bold text-center"> WORK IN PROGRESS</p>
            </div>
        </div>)
}

export default About