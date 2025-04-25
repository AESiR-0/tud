import React  from 'react'
import { WordFlip } from './WordF'
import RoundedBox from './ui/RoundedBox1'
import { ThreeDuckling } from './ThreeDuckling'
import Image from 'next/image'

const Services1 = () => {    
    return (
        <div id='services' className="flex flex-col justify-center items-center my-4 mt-10 mx-auto w-full">
            <div className='flex flex-rows mx-auto w-full justify-evenly items-center mb-2'>
                <ThreeDuckling />
            </div>
            <div className="w-full">
                <WordFlip />
            </div>
            <div className="flex flex-row justify-between items-center">
                <RoundedBox service='Media Buying'/>
                <RoundedBox service='Creative Strategy'/>
            </div>
            <div className="flex flex-row justify-evenly items-center">
                <RoundedBox service='Communication Strategy'/>
                <RoundedBox service='Script Writing'/>
            </div>
            <div className="flex flex-row justify-evenly items-center">
                <RoundedBox service='Video Ads'/>
                <RoundedBox service='Direct Response Copywriting'/>
            </div>
            <div className="flex flex-row justify-evenly items-center">
                <RoundedBox service='Image Creatives'/>
                <Image src="/images/TUD Assets-21.png" alt='duck feet' height={25} width={25} />
                <RoundedBox service='Business Strategy'/>
            </div>
        </div>
      )
}

export default Services1