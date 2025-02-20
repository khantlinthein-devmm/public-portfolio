export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  logo?: string;
}

export interface NavLink {
  title: string;
  id: string;
}
