import type { ResumeData } from './types';

export const designerData: ResumeData = {
  name: 'Olivia Chen',
  location: 'San Francisco, CA',
  email: 'olivia.chen@email.com',
  phone: '(415) 555-0110',
  description:
    'Creative and detail-oriented UX/UI Designer with a passion for creating intuitive and visually appealing digital experiences. Proficient in the entire design process, from user research to high-fidelity prototyping.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Innovatech',
      role: 'Senior UX/UI Designer',
      date: 'Jan 2020 - Present',
      description:
        '• Led the redesign of a flagship mobile app, resulting in a 30% increase in user satisfaction scores.\n• Conducted user research, usability testing, and created user personas and journey maps.\n• Developed and maintained a comprehensive design system.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Creative Minds Agency',
      role: 'UI Designer',
      date: 'Mar 2018 - Dec 2019',
      description:
        '• Designed wireframes, mockups, and prototypes for various web and mobile applications.\n• Collaborated with developers to ensure faithful implementation of designs.\n• Contributed to branding and visual identity projects.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'California College of the Arts',
      degree: 'BFA in Graphic Design',
      date: 'Sept 2014 - May 2018',
    },
  ],
  skills: ['UX/UI Design', 'Figma', 'Sketch', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems'],
  projects: [
    {
      id: crypto.randomUUID(),
      name: 'E-learning Platform Concept',
      link: 'oliviachendesign.com/elearning',
      description:
        'A personal concept project for an interactive e-learning platform focused on creative skills.',
    },
  ],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: 'Certified User Experience (UX) Professional',
      issuingBody: 'Nielsen Norman Group',
      date: '2022',
    },
  ],
};
