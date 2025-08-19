
import type { ResumeData } from './types';

export const managerData: ResumeData = {
  name: 'Robert Brown',
  location: 'Chicago, IL',
  email: 'robert.brown@email.com',
  phone: '(312) 555-0198',
  description:
    'Results-driven and motivational Project Manager with a decade of experience in leading cross-functional teams to deliver complex projects on time and within budget. PMP certified with a strong understanding of Agile and Waterfall methodologies.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Tech Solutions Inc.',
      role: 'Senior Project Manager',
      date: 'May 2018 - Present',
      description:
        '• Managed a portfolio of IT projects with budgets up to $5M.\n• Improved project delivery success rate by 25% through process optimization.\n• Mentored and coached junior project managers.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Innovate Systems',
      role: 'Project Manager',
      date: 'Mar 2014 - Apr 2018',
      description:
        '• Led the planning and execution of software development projects.\n• Facilitated sprint planning, daily stand-ups, and retrospectives.\n• Managed project scope, schedule, and resources using JIRA.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'University of Illinois',
      degree: 'B.A. in Business Administration',
      date: 'Sept 2009 - May 2013',
    },
  ],
  skills: ['Project Management', 'Agile Methodologies', 'Scrum', 'Risk Management', 'Stakeholder Communication', 'JIRA'],
  projects: [],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: 'Project Management Professional (PMP)',
      issuingBody: 'Project Management Institute',
      date: '2016',
    },
  ],
};
