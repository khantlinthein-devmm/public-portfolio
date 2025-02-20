// src/lib/useActiveSection.ts
import { useState, useEffect } from 'react';

interface ObserverOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

export function useActiveSection(sectionIds: string[], observerOptions: ObserverOptions = {}): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const observers: Element[] = [];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const defaultObserverOptions: ObserverOptions = {
      rootMargin: '-80px 0px -80% 0px',
      threshold: 0,
      ...observerOptions,
    };
    
    const observer = new IntersectionObserver(
      observerCallback,
      defaultObserverOptions
    );
    
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push(element);
      }
    });
    
    return () => {
      observers.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [sectionIds, observerOptions]);
  
  return activeSection;
}