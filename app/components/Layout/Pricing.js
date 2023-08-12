import Image from "next/image"
import check from "/public/faq/check.svg"

const Pricing = () => {
    return (
        <section className='flex justify-center flex-col items-center'>
            <p className='section_text text-white' id='pricing'>Pricing</p>




            {/* Individual plan card */}


            <div className='card-wrappper grid grid-col-1 lg:grid-cols-3 gap-16 py-16' data-aos="fade-right" data-aos-duration="800">
                <div className="w-[355px] h-[595px] relative bg-white rounded-lg">
                    <div className="w-[83px] h-[21px] left-[21px] top-[44px] absolute">
                        <div className="w-[83px] h-[21px] left-0 top-0 absolute bg-blue-700 bg-opacity-50 rounded-[10px]" />
                        <div className="left-[17px] top-[4px] absolute text-blue-700 text-[10px] font-normal uppercase">Individual</div>
                    </div>

                    <div className="left-[17px] top-[86px] absolute text-blue-700 text-5xl font-bold">Free</div>

                    <div className="w-[283px] left-[21px] top-[155px] absolute text-black text-xs font-light">For people who want a simple and lightweight way to stay organized</div>

                    <div className="left-[17px] top-[228px] absolute flex-col justify-center items-start gap-[22px] inline-flex">
                        <div className="justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-start items-center gap-[18px] flex">
                                <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            </div>
                            <div className="text-black text-sm font-light">5 cards and devices</div>
                        </div>
                        <div className="justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-start items-center gap-[18px] flex">
                                <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            </div>
                            <div className="text-black text-sm font-light">5 cards and devices</div>
                        </div>
                        <div className="justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-start items-center gap-[18px] flex">
                                <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            </div>
                            <div className="text-black text-sm font-light">24/7 monitoring and emergency reports</div>
                        </div>
                        <div className="justify-start items-center gap-[18px] inline-flex">
                            <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            <div className="text-black text-sm font-light">Weekly reports</div>
                        </div>
                        <div className="justify-start items-center gap-[18px] inline-flex">
                            <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            <div className="text-black text-sm font-light">Email and push notifications</div>
                        </div>
                        <div className="justify-start items-center gap-[18px] inline-flex">
                            <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            <div className="text-black text-sm font-light">Password manager and tracker</div>
                        </div>
                    </div>

                    <div className=" pl-[99px] pr-[98px] pt-3.5 pb-[13px] left-[23px] top-[524px] absolute bg-blue-700 rounded-[5px] justify-center items-center inline-flex">
                        <div className="text-white text-xl font-bold">Try For Free</div>
                    </div>
                </div>




                {/* Family plan card */}
                <div className="w-[355px] h-[595px] relative bg-white rounded-lg" data-aos="fade-right" data-aos-duration="1200">
                    <div className="w-[83px] h-[21px] left-[21px] top-[44px] absolute">
                        <div className="w-[83px] h-[21px] left-0 top-0 absolute bg-blue-700 bg-opacity-50 rounded-[10px]" />
                        <div className="left-[25px] top-[4px] absolute text-blue-700 text-[10px] font-normal uppercase">FAMILY</div>
                    </div>

                    <div className="flex items-center left-[17px] top-[86px] absolute text-blue-700 text-5xl font-bold">$30<span className="text-3xl">/month</span></div>


                    <div className="w-[283px] left-[21px] top-[155px] absolute text-black text-xs font-light">For people who want a simple and lightweight way to stay organized</div>

                    <div className="left-[17px] top-[228px] absolute flex-col justify-center items-start gap-[22px] inline-flex">
                        <div className="justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-start items-center gap-[18px] flex">
                                <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            </div>
                            <div className="text-black text-sm font-light">5 cards and devices</div>
                        </div>
                        <div className="justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-start items-center gap-[18px] flex">
                                <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            </div>
                            <div className="text-black text-sm font-light">5 cards and devices</div>
                        </div>
                        <div className="justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-start items-center gap-[18px] flex">
                                <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            </div>
                            <div className="text-black text-sm font-light">24/7 monitoring and emergency reports</div>
                        </div>
                        <div className="justify-start items-center gap-[18px] inline-flex">
                            <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            <div className="text-black text-sm font-light">Weekly reports</div>
                        </div>
                        <div className="justify-start items-center gap-[18px] inline-flex">
                            <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            <div className="text-black text-sm font-light">Email and push notifications</div>
                        </div>
                        <div className="justify-start items-center gap-[18px] inline-flex">
                            <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            <div className="text-black text-sm font-light">Password manager and tracker</div>
                        </div>
                    </div>

                    <div className=" pl-[99px] pr-[98px] pt-3.5 pb-[13px] left-[23px] top-[524px] absolute bg-blue-700 rounded-[5px] justify-center items-center inline-flex">
                        <div className="text-white text-xl font-bold">Get Started</div>
                    </div>
                </div>



                {/* Business pricing card */}


                <div className="w-[355px] h-[595px] relative bg-white rounded-lg" data-aos="fade-right" data-aos-duration="1600">
                    <div className="w-[83px] h-[21px] left-[21px] top-[44px] absolute">
                        <div className="w-[83px] h-[21px] left-0 top-0 absolute bg-blue-700 bg-opacity-50 rounded-[10px]" />
                        <div className="left-[17px] top-[4px] absolute text-blue-700 text-[10px] font-normal uppercase">BUSINESS</div>
                    </div>

                        <div className="flex items-center left-[17px] top-[86px] absolute text-blue-700 text-5xl font-bold">$75<span className="text-3xl">/month</span></div>


                    <div className="w-[283px] left-[21px] top-[155px] absolute text-black text-xs font-light">For people who want a simple and lightweight way to stay organized</div>

                    <div className="left-[17px] top-[228px] absolute flex-col justify-center items-start gap-[22px] inline-flex">
                        <div className="justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-start items-center gap-[18px] flex">
                                <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            </div>
                            <div className="text-black text-sm font-light">5 cards and devices</div>
                        </div>
                        <div className="justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-start items-center gap-[18px] flex">
                                <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            </div>
                            <div className="text-black text-sm font-light">5 cards and devices</div>
                        </div>
                        <div className="justify-center items-center gap-[18px] inline-flex">
                            <div className="justify-start items-center gap-[18px] flex">
                                <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            </div>
                            <div className="text-black text-sm font-light">24/7 monitoring and emergency reports</div>
                        </div>
                        <div className="justify-start items-center gap-[18px] inline-flex">
                            <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            <div className="text-black text-sm font-light">Weekly reports</div>
                        </div>
                        <div className="justify-start items-center gap-[18px] inline-flex">
                            <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            <div className="text-black text-sm font-light">Email and push notifications</div>
                        </div>
                        <div className="justify-start items-center gap-[18px] inline-flex">
                            <div className="w-[25px] h-[25px] relative" ><Image src={check} width={25} height={25} /></div>
                            <div className="text-black text-sm font-light">Password manager and tracker</div>
                        </div>
                    </div>

                    <div className=" pl-[99px] pr-[98px] pt-3.5 pb-[13px] left-[23px] top-[524px] absolute bg-blue-700 rounded-[5px] justify-center items-center inline-flex">
                        <div className="text-white text-xl font-bold">Get Started</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing