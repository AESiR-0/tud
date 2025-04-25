import { socialMedia } from "@/data";
import Image from "next/image";
import { mfont} from "./fonts";
import { ImInstagram, ImLinkedin2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlEnvolope } from "react-icons/sl";
import { LeftDuckling } from "./Duckling";
import { Contact } from "./Contact";


const Footer = () => {
  return (
    <footer className="w-full mt-12 pb-4 max-w-6xl mx-auto" id="us">
    {/* background grid */}
    

      <div className="flex flex-col justify-center items-center mx-auto">
        <div id='us' className="grid grid-cols-1 md:grid-cols-2 w-full mb-10 gap-4">
          <div className="flex flex-col justify-center items-center order-2 md:order-1 mt-3 md:mt-0">
            <div className="border-2 border-black-200 rounded-full my-4">
              <h1 className={`${mfont.variable} font-sans text-lg font-bold md:text-xl px-6`}>Featured In</h1>
            </div>
            <div className="grid grid-cols-2 w-full gap-2 justify-center">
              <div className="relative h-[2.5rem] md:h-[4rem] justify-center my-auto ">
                  <Image src="/images/TUD Portfolio-09.png" alt="featured time" fill={true} 
                    className="mix-blend-normal h-full w-full object-contain"/>
              </div>
              <div className="relative h-[2.5rem] md:h-[4rem] justify-center  my-auto">
                    <Image src="/images/TUD Portfolio-10.png" alt="featured time" fill={true}
                    className="mix-blend-normal h-full w-full object-contain"/>
              </div>
              {/* <div className=" col-span-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div> */}
            </div>
          </div>
          <Image src='/images/Founder Section-23.png' alt='may profile' height={500} width={800} className='order-1'/>
        </div>
        <LeftDuckling />
        <Contact />
        <div id='contact' className="flex flex-col mt-[2rem] justify-content items-center w-full mx-auto">
            <h1 className={`${mfont.variable} font-sans text-3xl md:text-5xl font-medium mb-2`}>Get In Touch</h1>
        </div>
        
        <div className="flex flex-row mx-auto justify-center items-center">
            
            <div className="flex items-center justify-center w-[3rem] h-[3rem] md:mx-2">
                    
                <a
                href="mailto:May@theuglyducklings.in"
                target="_blank"
                key="1234"
                className=" w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-full cursor-pointer  flex flex-col justify-center items-center bg-black  border border-black"
                >
                <SlEnvolope color="#f6ef57" className="w-full h-[80%]"/>
                </a>
            </div>
            <div className="flex items-center justify-center  w-[3rem] h-[3rem] md:mx-2">
                    
                <a
                href="tel:9148585600"
                target="_blank"
                key="2342"
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-full cursor-pointer flex justify-center items-center   bg-black  border border-black"
                >
                <BsFillTelephoneFill color="#f6ef57" className="w-full h-[60%]" />
                </a>
            </div>
            
                    {socialMedia.map((info) => (
                      <div key={info.id} className="flex items-center justify-center  w-[3rem] h-[3rem] md:mx-2">
                        <a
                          href={info.href}
                          target="_blank"
                          className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-full  cursor-pointer bg-black flex justify-center items-center   border border-black"
                          >
                            {info.name === 'linkedin' ?
                              <ImLinkedin2  color="#f6ef57" className="w-full h-[70%]"/>
                             :
                              <ImInstagram color="#f6ef57" className="w-full h-[70%]"/>
                              }
                          </a>
                        </div>
            ))}
            
            
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-4 md:mb-0">
          Copyright © 2024 TUD
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;