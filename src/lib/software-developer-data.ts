
import type { ResumeData } from './types';

export const softwareDeveloperData: ResumeData = {
  name: 'Aisha Khan',
  location: 'Toronto, ON',
  email: 'aisha.khan@email.com',
  phone: '(416) 555-0142',
  description:
    'Passionate and proficient Software Developer with 5+ years of experience in building and deploying robust, scalable backend systems. Expertise in Python, Django, and cloud infrastructure on AWS.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'FinTech Solutions',
      role: 'Backend Software Developer',
      date: 'Jul 2019 - Present',
      description:
        '• Designed and implemented RESTful APIs for a high-traffic financial services platform.\n• Optimized database queries, improving API response times by 40%.\n• Developed and maintained CI/CD pipelines using Jenkins and Docker.',
    },
    {
      id: crypto.randomUUID(),
      company: 'CodeCrafters',
      role: 'Junior Developer',
      date: 'May 2017 - Jun 2019',
      description:
        '• Wrote and maintained unit and integration tests for backend services.\n• Collaborated with frontend developers to integrate user-facing elements.\n• Participated in code reviews and contributed to team knowledge sharing.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'University of Waterloo',
      degree: 'B.S. in Computer Science',
      date: 'Sept 2013 - Apr 2017',
    },
  ],
  skills: ['Python', 'Django', 'RESTful APIs', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD', 'Git'],
  projects: [],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: 'AWS Certified Developer - Associate',
      issuingBody: 'Amazon Web Services',
      date: '2021',
    },
  ],
};
