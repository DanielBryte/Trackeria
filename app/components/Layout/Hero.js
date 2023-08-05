import Image from "next/image"
import Arrow from "/public/hero/arrow.svg"

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center my-5 mb-16 transition-all duration-0">

            <a href="#" target="_blank" className="flex justify-center items-center my-6 gap-2 md:gap-4 lg:gap-8 w-[350px] md:w-[450px] lg:w-[500px] h-10 bg-gradient-to-r from-blue-700 to-fuchsia-900 rounded-[60px] animate-pulse">
                <span className="text-center text-zinc-300 text-xs md:text-sm lg:text-base transition-all duration-500 hover:text-[12.3px] md:hover:text-[14.3] lg:hover:text-[16.3px] font-medium cursor-pointer">Check out product full case study here</span>
                <Image src={Arrow}/>
            </a>

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
                <a href="https://forms.gle/LRQ8rX6TqEEY6Etj9" target="_blank" className="text-white text-base md:text-xl lg:text-2xl font-medium">Get Started — free</a>
            </div>




        </div>
    )
}

export default Hero