"use client"

import React from "react"
import {motion} from "framer-motion"
import { mfont, sfont } from "./fonts"
import Image from "next/image"


export const HeadingText = () => {
    return (
        <div className="text-black leading-8 tracking-wide">
        {/* <motion.div 
            initial={{x:0, rotate: '0deg'}}
            animate={{x:20, rotate: '180deg'}}
            
            transition={{ type: "spring", stiffness: 100, repeat:1, repeatType: "reverse", delay: 0.3}}
            className="h-10 flex flex-col items-center justify-center w-full">
                <Image src="/images/TUD Assets-21.png" alt='duck feet' height={25} width={25} />
        </motion.div> */}
        <div 
            className="h-10 flex flex-col items-center justify-center w-full">
             <Image src="/images/TUD Assets-21.png" alt='duck feet' height={25} width={25} />
        </div>
        <motion.div
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            whileTap={{scale:1.05}}
        >
    <h2 className={`${mfont.variable} font-sans  text-center text-3xl md:text-4xl pt-6 lg:text-6xl font-bold pb-4 italic`}>Ugly is a POV!</h2>
    </motion.div>
    <motion.div
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            whileTap={{scale:1.05}}
        >
        <h2 
            className={`${mfont.variable} font-sans   text-center text-xl lg:text-4xl font-bold`}>So.. So.. So...Ugly that you stand out!</h2>
    </motion.div>
    <motion.div
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            whileTap={{scale:1.05}}
        >
            <h2 
            className={`${sfont.variable} text-center font-grock font-medium text-base lg:text-2xl tracking-tight pt-4`}>Be the Ugly Duckling to your market with us.</h2> 
    </motion.div>    
    </div>
    )
}