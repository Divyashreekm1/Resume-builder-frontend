import type { ResumeData } from './types';

export const salesData: ResumeData = {
  name: 'Michael Chen',
  location: 'Chicago, IL',
  email: 'michael.chen@email.com',
  phone: '(312) 555-0188',
  description:
    'Ambitious and results-driven Sales Executive with a consistent record of exceeding sales targets and building strong client relationships. Expert in consultative selling and negotiation.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'SaaS Solutions',
      role: 'Senior Sales Executive',
      date: 'Mar 2018 - Present',
      description:
        '• Exceeded annual sales quota by an average of 150% for three consecutive years.\n• Managed the full sales cycle from prospecting to closing.\n• Developed and executed strategic sales plans for key accounts.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Tech Innovators',
      role: 'Sales Development Representative',
      date: 'Jan 2016 - Feb 2018',
      description:
        '• Generated and qualified leads through cold calling, email campaigns, and social outreach.\n• Consistently met and exceeded monthly targets for qualified appointments.\n• Gained proficiency in Salesforce and other sales enablement tools.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'University of Illinois at Urbana-Champaign',
      degree: 'B.S. in Business Administration',
      date: 'Sept 2012 - Dec 2015',
    },
  ],
  skills: ['Salesforce', 'Consultative Selling', 'Lead Generation', 'Negotiation', 'Account Management', 'CRM'],
  projects: [],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: 'Certified Professional Sales Person (CPSP)',
      issuingBody: 'National Association of Sales Professionals',
      date: '2019',
    },
  ],
};
