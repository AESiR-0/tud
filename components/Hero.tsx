import React from 'react'
import Image from 'next/image'
import Logo from "@/public/images/TUD Assets-07.png"
import { HeadingText } from './HeadingText'

const Hero = () => {
  return (
    <div id='home' className='pb-5 pt-[4.5rem]'>
            <div className="flex flex-col items-center justify-center relative-my-20 z-10 pb-5">
                <div className="max-w-[89vw]  md:max-w-[65vw] lg:max-w-[75vw] flex flex-col items-center justify-center">
                  <Image src={Logo} priority alt='logo' height="300" width="350" className='w-full h-full mt-[3rem]'/>
                
                <h2 className=' font-bold uppercase  text-base  py-3 text-center text-black-100'>
                  The Ugly Duckling
                </h2>
                <HeadingText />
                </div>

            </div>    
    </div>
    
  )
}

export default Hero 