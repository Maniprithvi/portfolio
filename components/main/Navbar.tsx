import { Socials } from "@/constants"
import Image from "next/image"


const Navbar = () => {
  return (
<div className="w-full h-[67px] fixed top-0 shadow-[#2A0E61]/50 bg-[#030001417] backdrop-blur-md z-50">
    <div className="flex w-full h-full flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me"
        className="h-auto w-auto flex-row flex items-center">
            <Image 
            src={'/NavLogo.png'}
            alt='logo'
            width={70}
            height={70}
            className="cursor-poiter hover:animate-slowpin"
            />
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                ManiKandan
            </span>
        </a>
        <div className="h-full flex flex-row items-center w-[500px] justify-between md:mr20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
                About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
             Projects
            </a>
            </div>
        </div>
        <div className="flex flex-row gap-5">
            {Socials.map((s)=>(
                <Image
                src={s.src}
                alt={s.name}
                key={s.name}
                width={24}
                height={24}
                />
            ))}
        </div>
    </div>
</div>
  )
}

export default Navbar