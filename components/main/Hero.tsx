import React from 'react'
import HeroContet from '../sub/HeroContet'

const Hero = () => {
  return (
  <div className="relative h-full  w-full flex-col" id='#about-me'>
    <video
    autoPlay
    muted
    loop
    className='rotate-180 absolute top-[-300px] left-0 z-[-8] w-full h-full object-cover'
    >
<source src='/blackhole.webm' type='video/webm'/>
    </video>
    <HeroContet />
  </div>
  )
}

export default Hero