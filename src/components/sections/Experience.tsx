"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { professionalExperience, volunteerExperience } from "@/data/experience";
import { Experience } from "@/types";
import Link from "next/link";

const ExperienceSection = () => {
  const [defaultTab] = useState("professional");

  // Define animation variants inside the component
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Render the experience card directly within the main component
  const renderExperienceCard = (experience: Experience, index: number) => {
    return (
      <motion.div key={index} variants={itemVariants}>
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold">{experience.company}</h3>
                <p className="mt-1 text-muted-foreground">
                  {experience.period}
                </p>
                <p className="mt-2 font-medium">{experience.role}</p>
              </div>

              <div className="md:w-2/3">
                <ul className="mb-4 space-y-2">
                  {experience.description.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="py-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold">Work Experience</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A timeline of my professional journey and the skills I&apos;ve
            developed along the way.
          </p>
        </motion.div>

        <Tabs defaultValue={defaultTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="professional">Professional Work</TabsTrigger>
            <TabsTrigger value="freelance">Volunteer Work</TabsTrigger>
          </TabsList>

          <TabsContent value="professional">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {professionalExperience.map((exp, index) =>
                renderExperienceCard(exp, index)
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="freelance">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {volunteerExperience.map((exp, index) =>
                renderExperienceCard(exp, index)
              )}
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Link href="/Personal.pdf" download target="_blank">
            <Button variant="outline" size="lg">
              Download Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
