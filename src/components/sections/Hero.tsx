"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen px-4 text-center "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Hi,I&apos;m <span className="text-primary">Khant Lin Thein</span>
        </h1>

        <h2 className="mb-8 text-2xl text-muted-foreground md:text-3xl">
           This is my portfolio website
        </h2>

        <motion.p
          className="max-w-2xl mx-auto mb-8 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          With experience in account management, digital marketing, and quality assurance, I bring a versatile skill set to any role. My background in human rights and peacebuilding has strengthened my ability to work with diverse teams and solve challenges effectively. This portfolio highlights my professional journey, skills, and achievements across multiple fields.
        </motion.p>
        <motion.div className="flex flex-col justify-center gap-4 sm:flex-row" initial={{opacity : 0}} animate={{ opacity : 1}} transition={{ delay : 0.4, duration : 0.5}}>
         <Button size="lg" onClick={() => scrollToSection('experience')}>
            View My Experience
         </Button>
         <Button size="lg" variant="outline" onClick={() =>scrollToSection('contact')}>
            Get In Touch
         </Button>
        </motion.div>

        <motion.div className="absolute bottom-10" initial={{ opacity : 0}} animate={{ opacity : 1}} transition={{ delay : 0.6, duration : 0.5}}>
         <Button variant="ghost" size="icon" onClick={() => scrollToSection('about')}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
         </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
