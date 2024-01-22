import React from 'react'
import {
    FaDiscord,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
FaYoutube
} from 'react-icons/fa'
// import {Threads} from 'react-icons'

const Footer = () => {
  return (
  <div className="w-full h-full bg-transparent text-gray-200 shadow-lgp-[15px]">
    <div className="flex w-full flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                <div className="font-bold text-[16px]"> Community</div>
                {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <FaYoutube />
                 <span className='text-[15px] ml-[15px]'>Youtube</span>
                </p> */}
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <a href="https://discord.gg/Z3Xb8jD" >
                    <FaGithub />
                 <span className='text-[15px] ml-[15px]'>Github</span>
                 </a>
                </p>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <FaDiscord />
                 <span className='text-[15px] ml-[15px]'>Discord</span>
                </p>
            </div>
            <div className="h-auto min-w-[200px] flex flex-col items-center justify-start">
                <div className="font-bold text-[16px]">Social Media</div>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <FaLinkedin />
                 <span className='text-[15px] ml-[15px]'>LinkedIn</span>
                </p>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <FaInstagram />
                 <span className='text-[15px] ml-[15px]'>Instagram</span>
                </p>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    < FaFacebook/>
                 <span className='text-[15px] ml-[15px]'>Facebook</span>
                </p>
            </div>
            <div className="h-auto min-w-[200px] flex flex-col items-center justify-start">
                <div className="font-bold text-[16px]">About</div>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                 <span className='text-[15px] ml-[15px] ml-[6px]'>Become Sponcer</span>
                </p>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                 
                 <span className='text-[15px] ml-[15px] ml-[6px]'>Learning about me</span>
                </p>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                 
                 <span className='text-[15px] ml-[15px] ml-[6px]'>007maniprithvi@gmail.com</span>
                </p>
            </div>

        </div>
        <div className="text-[15px] mb-[20px] text-center">
            &copy; {new Date().getFullYear()} Mani Prithvi | All rights reserved
        </div>
    </div>
  </div>
  )
}

export default Footer