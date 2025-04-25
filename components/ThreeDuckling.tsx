"use client"
import React from "react"
import {motion} from "framer-motion"
import Image from "next/image"



export const ThreeDuckling = () => {
    return (
        <div className='flex flex-rows mx-auto w-full justify-evenly items-end '>
            <motion.div 
                initial={{opacity:0, x:20, y:10}}
                whileInView={{opacity:1, x:0, y:0}}

                transition={{ type: "spring", stiffness: 100, delay: 0.2, duration: 1}}
                viewport={{
                    margin:"-5%",
                    once: true
                }}
            className=''>
                <Image src='/images/TUD Assets-03.png' height={30} width={35} alt='duckling'
                    className='h-[4rem] w-auto md:h-[5rem]'/>
            </motion.div>

            
        </div>
    )
}