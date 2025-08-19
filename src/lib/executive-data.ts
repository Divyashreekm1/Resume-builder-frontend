
import type { ResumeData } from './types';

export const executiveData: ResumeData = {
  name: 'Jessica Nguyen',
  location: 'New York, NY',
  email: 'jessica.nguyen@email.com',
  phone: '(917) 555-0211',
  description:
    'Visionary and strategic Chief Executive Officer with over 15 years of experience leading technology companies through periods of rapid growth and transformation. Proven ability to build high-performing teams, drive innovation, and deliver exceptional financial results.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Global Tech Inc.',
      role: 'Chief Executive Officer',
      date: 'Jan 2018 - Present',
      description:
        '• Grew company revenue from $50M to $250M in 4 years.\n• Led the successful acquisition and integration of two startups.\n• Championed a company-wide digital transformation initiative.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Innovate Corp.',
      role: 'Chief Operating Officer',
      date: 'Jun 2012 - Dec 2017',
      description:
        '• Oversaw daily operations and improved operational efficiency by 30%.\n• Developed and executed business strategies to drive growth.\n• Managed a team of 200+ employees across multiple departments.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'Harvard Business School',
      degree: 'Master of Business Administration (MBA)',
      date: 'Aug 2010 - May 2012',
    },
  ],
  skills: ['Strategic Leadership', 'P&L Management', 'Mergers & Acquisitions', 'Business Development', 'Corporate Strategy', 'Team Building'],
  projects: [],
  certificates: [],
};
