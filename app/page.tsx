import Encryption from "@/components/main/Encryption"
import Hero from "@/components/main/Hero"
import Project from "@/components/main/Project"
import Skills from "@/components/main/Skills"


export default function Home (){
  return (
  <main className="h-full w-full">
    <div className="flex-col flex gap-20 ">
      <Hero />
      <Skills />
      <Encryption />
      <Project />
    </div>
  </main>
  )
}