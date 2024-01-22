import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
        
    const projectData = [
      { 
        src:'/images/threads.jpeg',
        title:'threads 2.0',
        description:'a complete MERN stack moden social media app, with auth and user CRUD operation . users can create post and intract others post like share your thoughts about others post and can intract with messages  '
      },
      {
        src:'/images/threads.jpeg',
        title:'threads 2.0',
        description:'a complete MERN stack moden social media app, with auth and user CRUD operation . users can create post and intract others post like share your thoughts about others post and can intract with messages  '
      },


    ] 

  return (
   <div className="flex flex-col items-center justify-center py-20"     id='projects'>
<h1 className="font-semibold text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500
to-cyan-500 py-20"> My Projects</h1>
<div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">  
{projectData.map((project)=>(
  <ProjectCard key={project.title} title={project.title} src={project.src} description={project.description}/>
))}
</div>
   </div>
  )
}

export default Project