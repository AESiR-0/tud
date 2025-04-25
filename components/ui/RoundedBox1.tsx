"use client"

import React from 'react'
import { motion } from "framer-motion"


const RoundedBox = ({service} :{service: string}) => {
  return (
        
        <motion.div
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.3}}
            viewport={{
                margin:"-40px",
                once: true
            }}
            
            className="flex min-h-[3.5vw] flex-cols items-center justify-center border border-black rounded-full px-1.5 py-1.5 mx-1 my-1
            md:px-4 md:py-1.5 md:mx-2 md:my-1">
            <div className="w-full">
                <h1 className='text-xs sm:text-sm md:text-lg lg:text-xl text-center font-extrabold'>{service}</h1>
            </div>
            
        </motion.div>
        
  )
}

export default RoundedBox