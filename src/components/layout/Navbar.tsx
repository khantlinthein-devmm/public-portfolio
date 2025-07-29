"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { NavLink } from "@/types";
import { useActiveSection } from "@/lib/useActiveSection";
import Link from "next/link";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 50));
  }, [scrollY]);

  const navLinks: NavLink[] = [
    { title: "Home", id: "hero" },
    { title: "About", id: "about" },
    { title: "Education", id: "education" },
    { title: "Experience", id: "experience" },
    { title: "Contact", id: "contact" },
  ];

  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

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
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between h-16 mx-auto">
        <button
          onClick={() => scrollToSection("hero")}
          className="mx-5 text-xl font-bold"
        >
          Khant Lin Thein
        </button>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => scrollToSection(link.id)}
              className={`transition-colors ${
                activeSection === link.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.title}
            </button>
          ))}
        </nav>

        <Link href="/MKLT_IT_RESUME.pdf" download target="_blank">
          <Button variant="outline" className="hidden md:inline-flex mx-[30px]">
            Resume
          </Button>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
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
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
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
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 border-t bg-background/95 backdrop-blur-sm">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.title}
                    onClick={() => scrollToSection(link.id)}
                    className={`py-2 transition;-colors ${
                      activeSection === link.id
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.title}
                  </button>
                ))}

                <Link href="/MKLT_IT_RESUME.pdf" download target="_blank">
                  <Button variant="outline" className="w-full mt-2">
                    Resume
                  </Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
