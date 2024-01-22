import Image from 'next/image';
import React from 'react'

interface Props{
    src:string;
    title : string;
    description:string
}

const ProjectCard = ({src,title,description}:Props) => {
  return (
    <div  className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
      <Image 
      src={src}
      alt={title}
      width={1000}
      height={1000}
      className='w-full object-contain'
      />
      <div className="relative p-4">
        <h1 className="semi-bold text-2xl text-white">{title}</h1>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
      </div>
  )
}

export default ProjectCard