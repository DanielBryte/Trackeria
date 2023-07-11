import Image from "next/image"
import Arrow from "/assets/hero/arrow.svg"

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center my-14 transition-all duration-0">
            <div className="flex justify-center items-center w-[400px] md:w-[450px] lg:w-[500px] h-10 bg-gradient-to-r from-blue-700 to-fuchsia-900 rounded-[60px]">
                <span className="flex gap-6 text-center cursor-pointer text-zinc-300 text-xs md:text-sm lg:text-base transition-all duration-500 hover:text-[12.3px] md:hover:text-[14.3] lg:hover:text-[16.3px] font-semibold">Join the waitlist, to be updated when we launch <Image src={Arrow} /></span>
            </div>

            <div className="w-[751px] text-center">
                <span className="text-[60px] md:text-[65px] lg:text-[70px] text-blue-900 font-bold">Secure</span>
                <span className="text-zinc-300 text-[60px] md:text-[65px] lg:text-[70px] font-bold"> with</span>
                <span className="text-[60px] md:text-[65px] lg:text-[70px] font-bold gradient"> Trackeria</span>
                <span className="text-zinc-100 text-[60px] md:text-[65px] lg:text-[70px] font-bold">. AI-driven security platform </span>
            </div>

            <div className="text-center my-8 text-zinc-300 text-base md:text-lg lg:text-2xl font-normal md:font-medium">
                We are solving identity theft, mobile and digital devices theft
            </div>


            <div className="w-[180px] h-[55px]  md:w-[220px] md:h-[65px] lg:w-[260px] lg:h-[75px] p-5 bg-gradient-to-r from-blue-700 via-violet-900 to-fuchsia-900 rounded justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-base md:text-xl lg:text-2xl font-medium">Get Started — free</div>
            </div>



            <div className="w-[50px] h-[319.28px] flex-col justify-center items-center inline-flex">
                <div className="w-[50px] h-[319.28px] relative">
                    <div className="w-[50px] h-[50px] left-0 top-[115.28px] absolute" />
                    <div className="w-[50px] h-[50px] left-0 top-[269.28px] absolute">
                        <div className="w-[36.88px] h-[50px] left-[6.56px] top-[-0px] absolute">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero