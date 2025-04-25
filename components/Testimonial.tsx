import Image from 'next/image'
import React from 'react'
import dnk from "@/public/images/TUD Assets-09.png"
import mam from "@/public/images/TUD Assets-08.png"
import { mfont } from './fonts'
import { Duckling } from './Duckling'

const Testimonial = () => {
  return (
    <div id='testimonial' className={`${mfont.variable} max-w-xl md:max-w-6xl font-sans flex w-full flex-col mx-auto`}>
        {/* <h1 className='text-4xl font-bold '>Testimonials</h1> */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className='col-span-1 flex flex-col items-start justify-center w-full'>
                <h2 className="text-3xl md:text-4xl pt-6 lg:text-7xl font-bold w-full">
                    Scaled <div className='inline relative  '>
                        <Image
                             src={dnk}
                             alt="Profile"
                             height={150}
                             width={150}
                             
                             className='inline'/>
                </div> <br />Monthly Revenue <br />by 
                    <span className="text-bold text-[#CC5500]"> 3X</span>
                
                </h2>
            </div>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 pb-4">
            <div className="hidden md:flex"></div>
            <div className='col-span-1 flex flex-col items-end justify-center my-auto'>
                <h2 className="text-3xl md:text-4xl pt-6 lg:text-7xl font-bold text-end" ><div className='inline relative'><Image src={mam} alt="Profile" height="150" width="150"
                className='inline'/></div>  Scaled <br />Monthly Revenue <br /> by <span className="text-bold text-[#CC5500]">23X</span>
                </h2>
            </div>
        </div>
        <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="flex flex-cols items-start md:justify-center ml-4 md:ml-0 item-center">
                <Duckling />
            </div>
            <div className="hidden md:flex"></div>
        </div>
        </div>
  )
}

export default Testimonial