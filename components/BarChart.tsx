import Image from 'next/image'
import React from 'react'


const BarChart = () => {
  return (
    <div 
        className='flex flex-row justify-evenly items-start scroller z-20 sm:bg-white rounded-3xl max-w-7xl overflow-y-hidden overflow-x-auto no-scrollbar'>
        <div className="flex flex-col justify-center items-center bg-white  mr-4 lg:mr-0
                 w-full  rounded-2xl border-1">
            <div className="relative rounded-2xl h-[3rem] mx-auto mt-2">
                <Image
                src="/images/TUD Assets-08.png"
                alt="dot and key logo"
                width="180"
                height="200"
                className="rounded-4xl h-full w-[full]"
                 />    
            </div>
            <div className="relative shrink-0 gap-2 py-2 w-[15rem] h-[15rem] md:h-[20rem]
                flex-nowrap justify-center items-center sm:border-r-2 sm:border-black">
                <div className="w-[4rem] h-[5%] bg-[#d1ccc9] absolute bottom-0 left-[25%]  mb-4">
                    <h1 className="absolute -top-5 -left-0 text-xs md:text-ms">2 Lakh</h1>    
                </div>
                <div className="w-[4rem] h-[34%] bg-[#71797E] absolute bottom-0 border-1  hover:bg-yellow left-[50.5%] mb-4">
                    <h1 className="absolute -top-5 -left-0 text-xs md:text-ms font-bold">51 Lakh</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-sm font-semibold">Revenue/ Month</h1>
                <h1 className="text-sm font-semibold text-black-200">2400% Growth</h1>
            </div>
        </div>
        {/* second */}
        <div className="flex flex-col justify-center items-center  bg-white  mr-5 lg:mr-2
                 w-full  rounded-2xl border-1">
            <div className="relative rounded-2xl h-[3rem] mx-auto mt-2">
                <Image
                src="/images/TUD Assets-09.png"
                alt="dot and key logo"
                width="150"
                height="150"
                className="rounded-4xl h-full w-full"
                 />    
            </div>
            <div className="relative shrink-0 gap-2 py-2 w-[15rem] h-[15rem] md:h-[20rem]
                flex-nowrap justify-center items-center sm:border-r-2 sm:border-black">
                <div className="w-[4rem] h-[15%] bg-[#d1ccc9] absolute bottom-0 left-[25%] mb-4">
                    <h1 className="absolute -top-5 -left-0 text-xs md:text-ms">40 Lakh</h1>    
                </div>
                <div className="w-[4rem] h-[45%] bg-[#71797E] absolute bottom-0 border-1 border-white-200 hover:bg-yellow left-[50.5%] mb-4">
                    <h1 className="absolute -top-5 -left-0 text-xs md:text-ms font-bold ">1.2 crore</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-sm font-semibold">Revenue/ Month</h1>
                <h1 className="text-sm font-semibold text-black-200">175% Growth</h1>
            </div>
        </div>
        {/* third */}
        <div className="flex flex-col justify-center items-center  bg-white  mr-5 lg:mr-2
                 w-full  rounded-2xl border-1">
            <div className="relative rounded-2xl h-[3rem] mt-2 mx-auto">
                <Image
                src="/images/TUD Assets-17.png"
                alt="mother sparsh logo"
                width="150"
                height="150"
                className="rounded-4xl h-full w-full"
                 />    
            </div>
            <div className="relative shrink-0 gap-2 py-2 w-[15rem] h-[15rem] md:h-[20rem]
                flex-nowrap justify-center items-center sm:border-r-2 sm:border-black">
                <div className="w-[4rem] h-[3%] bg-[#d1ccc9] absolute bottom-0 left-[25%] mb-4">
                    <h1 className="absolute -top-5 left-[1.3rem] text-xs md:text-ms">0.9</h1>    
                </div>
                <div className="w-[4rem] h-[23%] bg-[#71797E] absolute bottom-0 border-1 border-white-200 hover:bg-yellow left-[50.5%] mb-4">
                    <h1 className="absolute -top-5 left-[1.3rem] text-xs md:text-ms font-bold">1.8</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-sm font-semibold">ROAs</h1>
                <h1 className="text-sm font-semibold text-black-200">100% Growth</h1>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center  bg-white  mr-5 lg:mr-2
                 w-full  rounded-2xl border-1">
            <div className="relative rounded-2xl h-[3rem] mt-2 mx-auto">
                <Image
                src="/images/TUD Assets-10.png"
                alt="mama earth logo"
                width="150"
                height="150"
                className="rounded-4xl h-full w-full"
                 />    
            </div>
            <div className="relative shrink-0 gap-2 py-2 w-[15rem] h-[15rem] md:h-[20rem]
                flex-nowrap justify-center items-center">
                <div className="w-[4rem] h-[5%] bg-[#d1ccc9] absolute bottom-0 left-[25%] mb-4">
                    <h1 className="absolute -top-5 left-[1.3rem] text-xs md:text-ms">1.2</h1>    
                </div>
                <div className="w-[4rem] h-[20%] bg-[#71797E] absolute bottom-0 border-1 border-white-200 hover:bg-yellow left-[50.5%] mb-4">
                    <h1 className="absolute -top-5 left-[1.3rem] text-xs md:text-ms font-bold ">1.7</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-sm font-semibold">ROAs Domestic</h1>
                <h1 className="text-sm font-semibold text-black-200">41% Growth</h1>
            </div>
        </div>
    
        
    </div>
  )
}

export default BarChart