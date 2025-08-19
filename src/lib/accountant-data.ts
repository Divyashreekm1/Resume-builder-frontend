
import type { ResumeData } from './types';

export const accountantData: ResumeData = {
  name: 'Sarah Kim',
  location: 'Boston, MA',
  email: 'sarah.kim@email.com',
  phone: '(617) 555-0134',
  description:
    'Detail-oriented and highly analytical Accountant with 6+ years of experience in financial reporting, auditing, and tax preparation. Proven ability to manage budgets, improve financial processes, and ensure regulatory compliance.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Finance Corp',
      role: 'Senior Accountant',
      date: 'Sep 2019 - Present',
      description:
        '• Manage general ledger and prepare monthly financial statements.\n• Led the annual audit process, coordinating with external auditors.\n• Implemented a new accounting software that reduced closing time by 15%.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Boston Consulting',
      role: 'Junior Accountant',
      date: 'Jul 2017 - Aug 2019',
      description:
        '• Assisted with accounts payable and receivable functions.\n• Reconciled bank statements and prepared expense reports.\n• Contributed to the preparation of federal and state tax returns.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'Boston University',
      degree: 'B.S. in Accounting',
      date: 'Sept 2013 - May 2017',
    },
  ],
  skills: ['GAAP', 'Financial Reporting', 'Auditing', 'QuickBooks', 'Excel', 'Tax Preparation', 'Budgeting'],
  projects: [],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: 'Certified Public Accountant (CPA)',
      issuingBody: 'AICPA',
      date: '2019',
    },
  ],
};
