import type { ResumeData } from './types';

export const commerceData: ResumeData = {
  name: 'Chris Lema',
  location: 'New York, NY',
  email: 'chris.lema@email.com',
  phone: '(212) 555-0199',
  description:
    'Dynamic and results-oriented E-commerce Manager with over 5 years of experience in driving online sales growth, managing digital marketing campaigns, and optimizing customer experience for leading retail brands.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Global Retail Corp.',
      role: 'E-commerce Manager',
      date: 'Aug 2019 - Present',
      description:
        '• Managed end-to-end e-commerce operations, achieving a 40% year-over-year revenue growth.\n• Led SEO/SEM strategies that increased organic traffic by 60%.\n• Implemented a customer loyalty program that improved customer retention by 25%.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Shopify Plus Experts',
      role: 'E-commerce Specialist',
      date: 'June 2017 - July 2019',
      description:
        '• Optimized product listings and landing pages for conversion.\n• Managed email marketing campaigns and social media advertising.\n• Analyzed sales data to identify trends and opportunities.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'New York University',
      degree: 'B.A. in Marketing',
      date: 'Sept 2013 - May 2017',
    },
  ],
  skills: ['E-commerce Strategy', 'Digital Marketing', 'SEO/SEM', 'Conversion Rate Optimization', 'Google Analytics', 'Shopify'],
  projects: [
    {
      id: crypto.randomUUID(),
      name: 'Marketplace Integration',
      link: 'globalretail.com/marketplace',
      description:
        'Led the successful integration of company products onto Amazon and eBay marketplaces, increasing sales channels and revenue streams.',
    },
  ],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: 'Google Analytics Individual Qualification (GAIQ)',
      issuingBody: 'Google',
      date: '2021',
    },
  ],
};
