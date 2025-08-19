
import type { ResumeData } from './types';

export const dataAnalystData: ResumeData = {
  name: 'Maria Garcia',
  location: 'Seattle, WA',
  email: 'maria.garcia@email.com',
  phone: '(206) 555-0167',
  description:
    'Data Analyst with a strong background in statistical analysis, data visualization, and machine learning. Adept at transforming complex datasets into actionable insights that drive business decisions.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Data Insights Inc.',
      role: 'Data Analyst',
      date: 'Oct 2020 - Present',
      description:
        '• Developed and maintained dashboards to track key performance indicators (KPIs).\n• Conducted A/B testing and statistical analysis to optimize product features.\n• Built predictive models to forecast sales trends with 95% accuracy.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Analytics Solutions',
      role: 'Junior Data Analyst',
      date: 'Aug 2018 - Sep 2020',
      description:
        '• Cleaned and preprocessed large datasets for analysis.\n• Created data visualizations and reports for internal stakeholders.\n• Assisted senior analysts with ad-hoc data requests.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'University of Washington',
      degree: 'B.S. in Statistics',
      date: 'Sept 2014 - June 2018',
    },
  ],
  skills: ['SQL', 'Python', 'R', 'Tableau', 'Power BI', 'Machine Learning', 'Statistical Analysis', 'Data Visualization'],
  projects: [],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: 'Tableau Desktop Specialist',
      issuingBody: 'Tableau',
      date: '2021',
    },
  ],
};
