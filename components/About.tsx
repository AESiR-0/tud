import Image from 'next/image'
import React from 'react'
import profileImg from "@/public/images/may_profile.jpg"

const About = () => {
  return (
    <div id='us' className="flex w-full flex-col justify-center items-center mb-8">
        <h1 className='text-3xl font-bold '>About</h1>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 px-6">
            <div className='col-span-2 flex flex-col items-start justify-start my-auto mx-auto'>
                <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra velit non est tempus, a pellentesque elit vulputate.
                Nullam laoreet non est et pellentesque. In porttitor, ligula quis volutpat porttitor, urna mi pretium neque, quis pellentesque 
                magna est in ante. Donec eu turpis tempus, porta felis ut, pellentesque dolor. Praesent ut convallis urna, ut laoreet urna. 
                
                </p>
            </div>
            <div className='col-span-1 flex justify-center md:justify-end items-center rounded-3xl'>
                    <Image src={profileImg} alt="Profile" className=' rounded-3xl'/>
                
            </div>
            
        </div>
        </div>
  )
}

export default About