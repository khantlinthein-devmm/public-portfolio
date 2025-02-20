"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen
} from "lucide-react";
import education from "@/data/education";
import Image from 'next/image';

const EducationSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-background to-background/60"
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold tracking-tight">Education</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-6"
            >
              <div
                className={`p-6 overflow-hidden rounded-xl border bg-gradient-to-br ${
                  expanded === index
                    ? "from-background/80 to-background shadow-lg"
                    : "from-background/40 to-background/20 hover:shadow-md"
                } transition-all duration-300`}
              >
                <div
                  className="flex flex-col gap-4 cursor-pointer md:flex-row md:items-center"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="items-center justify-center flex-none hidden w-16 h-16 text-xl font-bold rounded-lg bg-primary/10 text-from-primary md:flex">
                    {edu.logo && <Image src={edu.logo} alt={edu.institution} width={100} height={100} />}
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <div className="flex flex-wrap mt-1 gap-x-6">
                      <p className="font-medium text-primary">
                        {edu.degree} in {edu.field}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center mt-2 text-sm gap-x-4 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                {/*  Expand Icon */}
                <div className="flex-none">
                  <motion.div animate={{ rotate : expanded === index ? 180 : 0}} transition={{ duration : 0.3}} className="flex items-center justify-center w-8 h-8 rounded-full bg-muted/50">
                     <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/*  Continuous Learning Banner */}
        <motion.div initial={{ opacity : 0, y : 20}} whileInView={{ opacity : 1, y : 0}} viewport={{ once: true}} transition={{ delay : 0.4, duration : 0.5}} className="max-w-3xl mx-auto mt-16 overflow-hidden rounded-xl">
         <div className="p-6 bg-gradient-to-r from-primary/10 to-background-border border-primary/20 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text=left">
               <div className="p-3 rounded-full bg-primary/20">
                  <BookOpen className="w-8 h-8 text-primary"/>
               </div>
               <div>
                  <h3 className="mb-1 text-xl font-semibold"> Continuous Learning</h3>
                  <p>
                     I&apos;m constantly expanding my knowledge through online courses, workshops, and conderences.Recent platform : <span className="font-medium text-foreground">Udemy, Coursera, Fronend Masters,and FreeCodeCamp</span>
                  </p>
               </div>
            </div>
         </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
