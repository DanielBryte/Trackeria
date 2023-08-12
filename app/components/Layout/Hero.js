import Image from "next/image"
import Arrow from "/public/hero/arrow.svg"
import Left1 from "/public/hero/left-1.png"
import Left2 from "/public/hero/left-2.png"
import Left3 from "/public/hero/left-3.png"
import Left4 from "/public/hero/left-4.png"
import Left5 from "/public/hero/left-5.png"
import Left6 from "/public/hero/left-6.png"

import Right1 from "/public/hero/right-1.png"
import Right2 from "/public/hero/right-2.png"
import Right3 from "/public/hero/right-3.png"
import Right4 from "/public/hero/right-4.png"
import Right5 from "/public/hero/right-5.png"
import Right6 from "/public/hero/right-6.png"



const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center my-5 mb-16 transition-all duration-0">

            {/* Project alert box(updates) */}
            <a href="#" target="_blank" className="flex justify-center items-center my-6 gap-2 md:gap-4 lg:gap-8 w-[350px] md:w-[450px] lg:w-[500px] h-10 bg-gradient-to-r from-blue-700 to-fuchsia-900 rounded-[60px] animate-pulse">
                <span className="text-center text-zinc-300 text-xs md:text-sm lg:text-base transition-all duration-500 hover:text-[12.3px] md:hover:text-[14.3] lg:hover:text-[16.3px] font-medium cursor-pointer">Check out product full case study here</span>
                <Image src={Arrow} />
            </a>

            {/* Hero page assets */}


            {/* Left assets */}

            <div className="w-[60px] h-[60px] left-[2vw] top-[30%] absolute">
                <Image src={Left1} />
            </div>            <div className="w-[50px] h-[61.98px] left-[2vw] top-[50%] absolute">
                <Image src={Left2} />
            </div>
            <div className="w-[50px] h-[50px] left-[2vw] top-[70%] absolute">
                <Image src={Left3} />
            </div>

            <div className="w-[50px] h-[50px] left-[7vw] top-[38%] absolute">
                <Image src={Left4} />
            </div>            <div className="w-[50px] h-[61.98px] left-[7vw] top-[58%] absolute">
                <Image src={Left5} />
            </div>
            <div className="w-[50px] h-[50px] left-[7vw] top-[78%] absolute">
                <Image src={Left6} />
            </div>


            {/* Right assets */}
            <div className="w-[50px] h-[50px] right-[2vw] top-[30%] absolute">
                <Image src={Right1} />
            </div>            <div className="w-[50px] h-[50px] right-[2vw] top-[50%] absolute">
                <Image src={Right2} />
            </div>
            <div className="w-[50px] h-[50px] right-[2vw] top-[70%] absolute">
                <Image src={Right3} />
            </div>

            <div className="w-[50px] h-[54.1px] right-[7vw] top-[38%] absolute">
                <Image src={Right4} />
            </div>            <div className="w-[50px] h-[61.98px] right-[7vw] top-[58%] absolute">
                <Image src={Right5} />
            </div>
            <div className="w-[50px] h-[59px] right-[7vw] top-[78%] absolute">
                <Image src={Right6} />
            </div>




            {/* Hero Text */}

            <div className="w-[751px] text-center">
                <span className="text-[60px] md:text-[65px] lg:text-[70px] text-blue-900 font-bold">Secure</span>
                <span className="text-zinc-300 text-[60px] md:text-[65px] lg:text-[70px] font-bold"> with</span>
                <span className="text-[60px] md:text-[65px] lg:text-[70px] font-bold gradient"> Trackeria</span>
                <span className="text-zinc-100 text-[60px] md:text-[65px] lg:text-[70px] font-bold">. AI-driven security platform </span>
            </div>

            <div className="text-center my-8 text-zinc-300 text-base md:text-lg lg:text-2xl font-normal md:font-medium">
                We are solving identity theft, mobile and digital devices theft
            </div>

            {/* Hero Button */}

            <div className="w-[180px] h-[55px]  md:w-[220px] md:h-[65px] lg:w-[260px] lg:h-[75px] p-5 bg-gradient-to-r from-blue-700 via-violet-900 to-fuchsia-900 rounded justify-center items-center gap-2.5 inline-flex">
                <a href="https://forms.gle/LRQ8rX6TqEEY6Etj9" target="_blank" className="text-white text-base md:text-xl lg:text-2xl font-medium">Get Started — free</a>
            </div>




        </div>
    )
}

export default Hero