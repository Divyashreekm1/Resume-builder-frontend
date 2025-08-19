import type { ResumeData } from './types';

export const medicalData: ResumeData = {
  name: 'Dr. Emily Carter',
  location: 'Chicago, IL',
  email: 'emily.carter.md@email.com',
  phone: '(312) 555-0145',
  description:
    'Compassionate and dedicated General Practitioner with 8 years of experience in providing comprehensive medical care to patients of all ages. Committed to evidence-based medicine and patient-centered care.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Chicago General Hospital',
      role: 'General Practitioner',
      date: 'July 2016 - Present',
      description:
        '• Diagnosed and treated a wide range of acute and chronic illnesses.\n• Conducted routine check-ups and preventative care.\n• Maintained detailed and accurate patient records using Epic EMR system.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Lakeside Clinic',
      role: 'Resident Physician',
      date: 'July 2013 - June 2016',
      description:
        '• Completed residency in Family Medicine, rotating through various specialties.\n• Gained hands-on experience in emergency medicine, pediatrics, and internal medicine.\n• Assisted in clinical research and published a paper in a peer-reviewed journal.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'Northwestern University Feinberg School of Medicine',
      degree: 'Doctor of Medicine (M.D.)',
      date: 'Aug 2009 - May 2013',
    },
    {
      id: crypto.randomUUID(),
      school: 'University of Illinois Urbana-Champaign',
      degree: 'B.S. in Biology',
      date: 'Aug 2005 - May 2009',
    },
  ],
  skills: ['Patient Care', 'Diagnosis and Treatment', 'Electronic Medical Records (EMR)', 'Preventative Medicine', 'Clinical Research', 'Patient Education'],
  projects: [],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: 'Board Certified in Family Medicine',
      issuingBody: 'American Board of Family Medicine',
      date: '2016',
    },
    {
      id: crypto.randomUUID(),
      name: 'Basic Life Support (BLS)',
      issuingBody: 'American Heart Association',
      date: 'Renewed 2023',
    },
  ],
};
