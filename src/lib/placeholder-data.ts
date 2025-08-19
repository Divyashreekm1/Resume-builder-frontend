import type { ResumeData } from './types';

export const placeholderData: ResumeData = {
  name: 'Alex Doe',
  location: 'San Francisco, CA',
  email: 'alex.doe@email.com',
  phone: '(123) 456-7890',
  github: 'github.com/alexdoe',
  linkedin: 'linkedin.com/in/alexdoe',
  description:
    'Innovative and deadline-driven Software Engineer with 3+ years of experience designing and developing user-centered digital products from initial concept to final, polished deliverable.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Tech Solutions Inc.',
      role: 'Frontend Developer',
      date: 'June 2021 - Present',
      description:
        '• Spearheaded the development of a new e-commerce platform using React and TypeScript, resulting in a 20% increase in user engagement.\n• Collaborated with UX/UI designers to implement responsive and accessible web designs.\n• Optimized application performance, reducing load times by 30%.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Digital Innovations LLC',
      role: 'Junior Web Developer',
      date: 'May 2020 - June 2021',
      description:
        '• Assisted in the maintenance and feature development of a large-scale SaaS application.\n• Wrote clean, maintainable code using HTML, CSS, and JavaScript.\n• Participated in agile development cycles and daily stand-ups.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'University of Technology',
      degree: 'B.S. in Computer Science',
      date: 'Sept 2016 - May 2020',
    },
  ],
  skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'Figma', 'Agile Methodologies'],
  projects: [
    {
      id: crypto.randomUUID(),
      name: 'Portfolio Website',
      link: 'alexdoe.dev',
      description:
        'A personal portfolio website built with Next.js and deployed on Vercel. Features a blog and showcases personal projects.',
    },
  ],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: 'Advanced TypeScript',
      issuingBody: 'Online Learning Platform',
      date: '2022',
    },
  ],
};
