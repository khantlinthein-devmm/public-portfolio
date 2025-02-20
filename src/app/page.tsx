import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import EducationSection from '@/components/sections/Education';
import ExperienceSection from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';


export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <EducationSection/>
      <ExperienceSection/>
      <Contact/>
    </>
  )
}