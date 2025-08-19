import type { ResumeData } from './types';

export const engineerData: ResumeData = {
  name: 'Benjamin Carter',
  location: 'Austin, TX',
  email: 'ben.carter@email.com',
  phone: '(512) 555-0178',
  description:
    'Highly skilled and motivated Software Engineer with a proven track record of developing scalable, high-performance applications. Expertise in full-stack development with a focus on cloud-native technologies.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Cloudflare',
      role: 'Senior Software Engineer',
      date: 'Feb 2020 - Present',
      description:
        '• Architected and developed microservices for a distributed system handling millions of requests per second.\n• Improved system reliability and performance by implementing CI/CD pipelines and automated testing.\n• Mentored junior engineers and led code reviews.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Startup Inc.',
      role: 'Software Engineer',
      date: 'Jul 2017 - Jan 2020',
      description:
        '• Developed and maintained a full-stack web application using Node.js, React, and PostgreSQL.\n• Worked in an agile environment to deliver new features and improvements.\n• Gained experience with AWS services like EC2, S3, and Lambda.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'University of Texas at Austin',
      degree: 'B.S. in Electrical and Computer Engineering',
      date: 'Sept 2013 - May 2017',
    },
  ],
  skills: ['Go', 'Python', 'JavaScript', 'React', 'Kubernetes', 'Docker', 'AWS', 'Distributed Systems', 'PostgreSQL'],
  projects: [
    {
      id: crypto.randomUUID(),
      name: 'Open Source Contribution',
      link: 'github.com/bencarter/contribution',
      description:
        'Contributed to a popular open-source project by fixing bugs and adding new features.',
    },
  ],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: 'Certified Kubernetes Application Developer (CKAD)',
      issuingBody: 'Cloud Native Computing Foundation',
      date: '2021',
    },
  ],
};
