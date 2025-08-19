
import type { ResumeData } from './types';

export const electricalEngineerData: ResumeData = {
  name: 'David Wilson',
  location: 'San Jose, CA',
  email: 'david.wilson@email.com',
  phone: '(408) 555-0189',
  description:
    'Innovative Electrical Engineer with expertise in PCB design, embedded systems, and power electronics. Skilled in taking projects from concept to production, with a strong focus on quality and efficiency.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Future Electronics',
      role: 'Electrical Engineer',
      date: 'Apr 2019 - Present',
      description:
        '• Designed and tested PCBs for consumer electronics products.\n• Developed firmware for microcontrollers in C/C++.\n• Collaborated with cross-functional teams to ensure project success.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Circuit Solutions',
      role: 'Junior Electrical Engineer',
      date: 'Jun 2017 - Mar 2019',
      description:
        '• Assisted in the design and layout of printed circuit boards.\n• Conducted testing and validation of electronic components.\n• Prepared technical documentation and test reports.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'Stanford University',
      degree: 'B.S. in Electrical Engineering',
      date: 'Sept 2013 - June 2017',
    },
  ],
  skills: ['PCB Design', 'Altium Designer', 'Embedded Systems', 'C/C++', 'Power Electronics', 'Circuit Simulation'],
  projects: [],
  certificates: [],
};
