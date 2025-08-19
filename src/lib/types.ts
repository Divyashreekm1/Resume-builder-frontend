
export interface ResumeData {
  name: string;
  location: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  description: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: Project[];
  certificates: Certificate[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  date: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  date: string;
}

export interface Project {
  id: string;
  name: string;
  link: string;
  description: string;
}

export interface Certificate {
  id:string;
  name: string;
  issuingBody: string;
  date: string;
}

export interface Theme {
  name: string;
  primary: string;
  bg: string;
  text: string;
  sidebarBg: string;
}
