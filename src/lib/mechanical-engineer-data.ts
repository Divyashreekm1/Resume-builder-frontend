
import type { ResumeData } from './types';

export const mechanicalEngineerData: ResumeData = {
  name: 'John Smith',
  location: 'Detroit, MI',
  email: 'john.smith.eng@email.com',
  phone: '(313) 555-0123',
  description:
    'Dedicated and innovative Mechanical Engineer with a strong background in automotive design, product development, and finite element analysis (FEA). Proven ability to lead projects from concept through to manufacturing.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'AutoMotive Inc.',
      role: 'Senior Mechanical Engineer',
      date: 'May 2018 - Present',
      description:
        '• Led the design of a new transmission system, resulting in a 10% improvement in fuel efficiency.\n• Performed stress and thermal analysis on critical components using Ansys.\n• Managed a team of junior engineers and designers.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Future aEngines',
      role: 'Mechanical Engineer',
      date: 'Jun 2015 - Apr 2018',
      description:
        '• Developed 3D models and detailed drawings for engine components using SolidWorks.\n• Collaborated with manufacturing to optimize designs for production.\n• Conducted prototype testing and validation.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'University of Michigan',
      degree: 'B.S. in Mechanical Engineering',
      date: 'Sept 2011 - May 2015',
    },
  ],
  skills: ['SolidWorks', 'CATIA', 'Finite Element Analysis (FEA)', 'Thermodynamics', 'GD&T', 'Product Development'],
  projects: [],
  certificates: [
     {
      id: crypto.randomUUID(),
      name: 'Certified SolidWorks Professional (CSWP)',
      issuingBody: 'Dassault Systèmes',
      date: '2019',
    },
  ],
};
