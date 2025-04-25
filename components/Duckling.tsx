"use client"
import React from "react"
import {motion} from "framer-motion"
import Image from "next/image"

export const Duckling = ({right=true} : {right?:boolean}) => {
    const cls = right ? '' : '-scale-x-100'
    return (
        <div className='col-span-1 flex flex-col items-center md:items-end justify-center'>
            <div className=''>
                
                <Image src='/images/TUD Assets-20.png' height={40} width={40} alt='duckling' className=''/>
            </div>
            <motion.div 
                initial={{opacity: 0, y:-35, x:7, scale: 0.8}}
                whileInView={{opacity:1, scale:1, y:-41 }}
                transition={{ type: 'spring', stiffness: 100, duration: 1}}
                viewport={{
                    margin:"-5%",
                    once: true
                }}
                className=''>
                <Image src='/images/TUD Assets-06.png' height={50} width={50} alt='duckling' className={`${cls}`}/>
                
            </motion.div>
    </div>
    )
}

export const LeftDuckling = ({right=false} : {right?:boolean}) => {
    const cls = right ? '' : '-scale-x-100'
    return (
        <div className='col-span-1 flex flex-col items-end w-full justify-end mt-5 mr-10'>
            <div className=''>
                
                <Image src='/images/TUD Assets-20.png' height={40} width={40} alt='duckling' className=''/>
            </div>
            <motion.div 
                initial={{opacity: 0, y:-35, x:0, scale: 0.8}}
                whileInView={{opacity:1, scale:1, y:-41 }}
                transition={{ type: 'spring', stiffness: 100, duration: 1}}
                viewport={{
                    margin:"-5%",
                    once: true
                }}
                className=''>
                <Image src='/images/TUD Assets-06.png' height={50} width={50} alt='duckling' className={`${cls}`}/>
                
            </motion.div>
    </div>
    )
}