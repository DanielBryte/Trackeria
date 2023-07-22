import Image from "next/image"

const Feature = () => {
    return (
        <section>
            <h1 className="section_text text-white">Features You Need</h1>


            <div className="my-20 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">


                <div className="flex flex-col items-center text-zinc-300 gap-4">
                    <Image src="/feature/info.png" width="20" height="40" />
                    <p className=" text-[25px] font-semibold leading-tight tracking-tight">Explore Section
                    </p>
                    <span className="w-[258px] text-center text-base font-normal leading-tight tracking-tight">Read and share insecurity awareness, knowledge and experience</span>
                </div> 
                
                <div className="flex flex-col items-center text-zinc-300 gap-4">
                    <Image src="/feature/identity.png" width="44" height="40" />
                    <p className=" text-[25px] font-semibold leading-tight tracking-tight">Identity Protection
                    </p>
                    <span className="w-[258px] text-center text-base font-normal leading-tight tracking-tight">Scan, check and recover for any identity theft scenarios </span>
                </div>


                <div className="flex flex-col items-center text-zinc-300 gap-4">
                    <Image src="/feature/vault.png" width="40"  height="40"/>
                    <p className=" text-[25px] font-semibold leading-tight tracking-tight">Blue Vault
                    </p>
                    <span className="w-[258px] text-center text-base font-normal leading-tight tracking-tight">Save sensitive information in a secured vault.</span>
                </div>

                <div className="flex flex-col items-center text-zinc-300 gap-4">
                    <Image src="/feature/sos.png" width="40"  height="40"/>
                    <p className=" text-[25px] font-semibold leading-tight tracking-tight">Emergency SOS

                    </p>
                    <span className="w-[258px] text-center text-base font-normal leading-tight tracking-tight">Get situation under control with emergency SOS codes and lines. </span>
                </div>

                <div className="flex flex-col items-center text-zinc-300 gap-4">
                    <Image src="/feature/support.png" width="40"  height="40"/>
                    <p className=" text-[25px] font-semibold leading-tight tracking-tight">24/7 Support

                    </p>
                    <span className="w-[258px] text-center text-base font-normal leading-tight tracking-tight">Speak or report cases to several experts and emergency personnel.</span>
                </div>


                <div className="flex flex-col items-center text-zinc-300 gap-4">
                    <Image src="/feature/track.png" width="40"  height="40"/>
                    <p className=" text-[25px] font-semibold leading-tight tracking-tight">Track in real-time
                    </p>
                    <span className="w-[258px] text-center text-base font-normal leading-tight tracking-tight">Locate devices and items in real-time using Bluetooth and WiFi technology.</span>
                </div>
            </div>

        </section>
    )
}

export default Feature