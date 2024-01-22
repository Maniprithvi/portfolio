import React from 'react'

import { Backend_skill,
Frontend_skill,
Full_stack,
// Other_skill,
Skill_data } from '@/constants'

import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
   <section id='skills'
   style={{transform:'scale(0.9)'}}
   className='flex flex-col items-center justify-center gap-3 h-full  relative overlow-hidden pb-80 py-20'>
    <SkillText />
    <div  className='flex flex-row justify-around flex-wrap mt-4 gap5 items-center'>
      {Skill_data.map((img,i)=>(
        <SkillDataProvider 
        key={i}
        src={img.Image}
        width={img.width}
        height={img.height}
        index={i}
        />
      ))}

    </div>
    <div  className='flex flex-row justify-around flex-wrap mt-4 gap5 items-center'>
      {Full_stack.map((img,i)=>(
        <SkillDataProvider 
        key={i}
        src={img.Image}
        width={img.width}
        height={img.height}
        index={i}
        />
      ))}

    </div>
    {/* <div  className='flex flex-row justify-around flex-wrap mt-4 gap5 items-center'>
      {Backend_skill.map((img,i)=>(
        <SkillDataProvider 
        key={i}
        src={img.Image}
        width={img.width}
        height={img.height}
        index={i}
        />
     ) )} */}

    {/* </div> */}
    <div  className='flex flex-row justify-around flex-wrap mt-4 gap5 items-center'>
      {Frontend_skill.map((img,i)=>(
        <SkillDataProvider 
        key={i}
        src={img.Image}
        width={img.width}
        height={img.height}
        index={i}
        />
      ))}

    </div>
    {/* <div  className='flex flex-row justify-around flex-wrap mt-4 gap5 items-center'>
      {Other_skill.map((img,i)=>(
        <SkillDataProvider 
        key={i}
        src={img.Image}
        width={img.width}
        height={img.height}
        index={i}
        />
      ))}

    </div> */}

   </section>
  )
}

export default Skills