'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const skills: string[] = [
   'Project Management', 
   'Community Development',
   'Personal Development',
   'Web Development',
   'Soft Skills',
   'Process Improvement'
]

const About = () => {
   return (
      <section id="about" className="py-20 bg-muted/30">
         <div className='container px-4 mx-auto'>
            <motion.div initial={{opacity : 0, y : 20}} whileInView={{ opacity : 1, y : 0}} transition={{ duration : 0.5}} viewport={{ once : true}} className="max-w-4xl mx-auto">
               <h2 className="text-3xl font-bold text-center md:text-4xl">About Me</h2>
               <div className="flex flex-col items-center gap-8 md:flex-row">
                  <div className="flex justify-center w-full md:w-1/3">
                     <div className="relative overflow-hidden border-4 rounded-full w-60 h-60 border-primary">
                        <Image src="/profile.png" alt="profile"  width={500} height={500} />
                     </div>
                  </div>

                  <div className="w-full md:w-1/2">
                     <p className="mb-6 text-lg">
                     &quot;I am Min Khant Lin Thein, a results-driven professional with experience in account management, digital marketing, and quality assurance. I have 3 years of experience as a Community Developer at World Vision, where I worked on human rights and peacebuilding initiatives. This role strengthened my leadership, problem-solving, and communication skills. Passionate about delivering high-quality work, I adapt quickly to diverse industries and thrive in fast-paced environments.&quot;
                     </p>
                     

                     <div>
                        <h3 className="mb-3 text-xl font-semibiold">Skills Summary</h3>
                           <div className="flex flex-wrap gap-2">
                             {skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="px-3 py-1">
                                 {skill}
                              </Badge>
                             ))}
                           </div>
                        
                     </div>
                     
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   )
}

export default About;