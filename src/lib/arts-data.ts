
import type { ResumeData } from './types';

export const artsData: ResumeData = {
  name: 'Leo Rivera',
  location: 'Brooklyn, NY',
  email: 'leo.rivera.art@email.com',
  phone: '(917) 555-0155',
  description:
    'Versatile and creative Arts Professional with a strong background in gallery management and exhibition curation. Passionate about contemporary art and fostering community engagement through artistic events.',
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Brooklyn Art Gallery',
      role: 'Gallery Manager',
      date: 'Jun 2018 - Present',
      description:
        '• Curated and organized over 20 exhibitions, featuring emerging and established artists.\n• Managed gallery operations, including budget, staff, and artist relations.\n• Increased gallery foot traffic by 40% through targeted marketing campaigns.',
    },
    {
      id: crypto.randomUUID(),
      company: 'The Culture Center',
      role: 'Curatorial Assistant',
      date: 'Jan 2016 - May 2018',
      description:
        '• Assisted in the research and development of exhibition concepts.\n• Managed the art collection database and loan agreements.\n• Coordinated art installations and public programming.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      school: 'Pratt Institute',
      degree: 'M.A. in History of Art and Design',
      date: 'Sept 2013 - May 2015',
    },
  ],
  skills: ['Curation', 'Exhibition Management', 'Art History', 'Artist Relations', 'Fundraising', 'Community Outreach'],
  projects: [
    {
      id: crypto.randomUUID(),
      name: 'Community Mural Project',
      link: 'brooklynart.com/mural',
      description:
        'Organized a large-scale community mural project, collaborating with local artists and schools to create a public art piece.',
    },
  ],
  certificates: [],
};
