
import type { ResumeData } from './types';

const softwareEngineer: ResumeData = {
  name: 'Jamie Patel',
  location: 'Seattle, WA',
  email: 'jamie.patel@email.com',
  phone: '(206) 555-0100',
  github: 'github.com/jamiepatel',
  linkedin: 'linkedin.com/in/jamiepatel',
  description:
    'Results-driven Software Engineer with 5+ years of experience in developing, testing, and maintaining scalable software applications. Proficient in multiple programming languages and cloud technologies.',
  experience: [
    {
      id: 'se-exp-1',
      company: 'CloudNova Inc.',
      role: 'Senior Software Engineer',
      date: 'Aug 2021 - Present',
      description: '• Lead a team of 4 engineers in developing a new microservices-based architecture.\n• Improved API response times by 40% through performance tuning.\n• Mentor junior engineers on best practices.',
    },
  ],
  education: [
    { id: 'se-edu-1', school: 'University of Washington', degree: 'M.S. in Computer Science', date: '2019 - 2021' },
  ],
  skills: ['Java', 'Python', 'Go', 'Kubernetes', 'AWS', 'Microservices'],
  projects: [],
  certificates: [{ id: 'se-cert-1', name: 'AWS Certified Developer', issuingBody: 'Amazon Web Services', date: '2022' }],
};

const dataAnalyst: ResumeData = {
  name: 'Ben Carter',
  location: 'Chicago, IL',
  email: 'ben.carter@email.com',
  phone: '(312) 555-0111',
  github: 'github.com/bencarter',
  linkedin: 'linkedin.com/in/bencarter',
  description:
    'Detail-oriented Data Analyst with a passion for uncovering insights from complex datasets. Experienced in data visualization, statistical analysis, and predictive modeling.',
  experience: [
    {
      id: 'da-exp-1',
      company: 'MarketFlow Analytics',
      role: 'Data Analyst',
      date: 'July 2020 - Present',
      description: '• Developed dashboards in Tableau that provided key business insights, leading to a 15% increase in marketing ROI.\n• Performed A/B testing analysis to optimize user conversion rates.',
    },
  ],
  education: [
    { id: 'da-edu-1', school: 'University of Illinois', degree: 'B.S. in Statistics', date: '2016 - 2020' },
  ],
  skills: ['SQL', 'Python (Pandas, NumPy)', 'R', 'Tableau', 'Power BI'],
  projects: [],
  certificates: [],
};

const accountant: ResumeData = {
  name: 'Maria Garcia',
  location: 'New York, NY',
  email: 'maria.garcia@email.com',
  phone: '(212) 555-0122',
  github: 'github.com/mariagarcia',
  linkedin: 'linkedin.com/in/mariagarcia',
  description:
    'Certified Public Accountant (CPA) with 8 years of experience in financial reporting, auditing, and tax preparation. Proven ability to manage financial operations and ensure regulatory compliance.',
  experience: [
    {
      id: 'ac-exp-1',
      company: 'FinCorp Partners',
      role: 'Senior Accountant',
      date: 'Jan 2018 - Present',
      description: '• Managed month-end closing processes and prepared financial statements for a portfolio of 10+ clients.\n• Identified cost-saving opportunities that reduced operational expenses by 10%.',
    },
  ],
  education: [
    { id: 'ac-edu-1', school: 'NYU Stern School of Business', degree: 'B.S. in Accounting', date: '2010 - 2014' },
  ],
  skills: ['GAAP', 'Financial Reporting', 'Auditing', 'QuickBooks', 'SAP'],
  projects: [],
  certificates: [{ id: 'ac-cert-1', name: 'Certified Public Accountant (CPA)', issuingBody: 'AICPA', date: '2015' }],
};

const manager: ResumeData = {
  name: 'David Lee',
  location: 'Los Angeles, CA',
  email: 'david.lee@email.com',
  phone: '(213) 555-0133',
  github: 'github.com/davidlee',
  linkedin: 'linkedin.com/in/davidlee',
  description:
    'Dynamic and motivational Manager with over 10 years of experience in leading high-performing teams to exceed business objectives. Expertise in strategic planning, project management, and operational efficiency.',
  experience: [
    {
      id: 'ma-exp-1',
      company: 'Global Innovations Corp',
      role: 'Operations Manager',
      date: 'June 2015 - Present',
      description: '• Managed a team of 25+ employees, fostering a culture of collaboration and continuous improvement.\n• Implemented a new project management framework that increased on-time project delivery by 25%.',
    },
  ],
  education: [
    { id: 'ma-edu-1', school: 'UCLA Anderson School of Management', degree: 'MBA', date: '2013 - 2015' },
  ],
  skills: ['Team Leadership', 'Project Management', 'Agile', 'Budgeting', 'Strategic Planning'],
  projects: [],
  certificates: [],
};

const executive: ResumeData = {
  name: 'Chen Wang',
  location: 'Austin, TX',
  email: 'chen.wang@email.com',
  phone: '(512) 555-0144',
  github: 'github.com/chenwang',
  linkedin: 'linkedin.com/in/chenwang',
  description: 'Visionary Executive with a 15-year track record of driving growth, innovation, and profitability in the tech sector. Adept at C-level strategy, M&A, and market expansion.',
  experience: [
    {
      id: 'ex-exp-1',
      company: 'FutureTech Holdings',
      role: 'Chief Operating Officer',
      date: '2018 - Present',
      description: '• Grew annual revenue from $50M to $200M in 4 years through strategic acquisitions and international expansion.\n• Championed a company-wide digital transformation initiative.',
    },
  ],
  education: [
    { id: 'ex-edu-1', school: 'Stanford GSB', degree: 'MBA', date: '2005 - 2007' },
  ],
  skills: ['P&L Management', 'Corporate Strategy', 'M&A', 'Venture Capital', 'Board Relations'],
  projects: [],
  certificates: [],
};

const financeProfessional: ResumeData = {
  name: 'Emily Johnson',
  location: 'Boston, MA',
  email: 'emily.j@email.com',
  phone: '(617) 555-0155',
  github: 'github.com/emilyjohnson',
  linkedin: 'linkedin.com/in/emilyjohnson',
  description: 'Analytical Finance Professional with expertise in financial modeling, valuation, and investment analysis. Strong understanding of capital markets and corporate finance.',
  experience: [
    {
      id: 'fp-exp-1',
      company: 'Capital Investments Group',
      role: 'Financial Analyst',
      date: 'July 2019 - Present',
      description: '• Developed complex financial models to support a $500M investment fund.\n• Conducted due diligence on potential acquisition targets.',
    },
  ],
  education: [
    { id: 'fp-edu-1', school: 'Boston College', degree: 'B.S. in Finance', date: '2015 - 2019' },
  ],
  skills: ['Financial Modeling', 'DCF Valuation', 'LBO Analysis', 'Bloomberg Terminal', 'Excel'],
  projects: [],
  certificates: [{ id: 'fp-cert-1', name: 'CFA Level II Candidate', issuingBody: 'CFA Institute', date: 'Ongoing' }],
};

const civilEngineer: ResumeData = {
    name: 'Samuel Green',
    location: 'Denver, CO',
    email: 'samuel.green@email.com',
    phone: '(303) 555-0166',
    github: 'github.com/samuelgreen',
    linkedin: 'linkedin.com/in/samuelgreen',
    description: 'Licensed Professional Engineer (PE) specializing in structural design and project management for large-scale infrastructure projects. Proficient in AutoCAD and construction management.',
    experience: [
      {
        id: 'ce-exp-1',
        company: 'Apex Engineering',
        role: 'Civil Engineer',
        date: 'June 2016 - Present',
        description: '• Designed and managed the construction of a new highway interchange, completing the project under budget.\n• Performed structural analysis for commercial buildings.',
      },
    ],
    education: [
      { id: 'ce-edu-1', school: 'Colorado School of Mines', degree: 'B.S. in Civil Engineering', date: '2012 - 2016' },
    ],
    skills: ['Structural Engineering', 'AutoCAD', 'Project Management', 'Geotechnical Engineering'],
    projects: [],
    certificates: [{ id: 'ce-cert-1', name: 'Professional Engineer (PE)', issuingBody: 'State of Colorado', date: '2021' }],
};

const teacher: ResumeData = {
    name: 'Jessica Davis',
    location: 'Portland, OR',
    email: 'jessica.d@email.com',
    phone: '(503) 555-0177',
    github: 'github.com/jessicadavis',
    linkedin: 'linkedin.com/in/jessicadavis',
    description: 'Dedicated and passionate High School English Teacher with 7 years of experience in curriculum development, student assessment, and creating inclusive learning environments.',
    experience: [
      {
        id: 'te-exp-1',
        company: 'Northwood High School',
        role: 'English Teacher',
        date: 'Aug 2017 - Present',
        description: '• Developed engaging lesson plans for 9th and 10th-grade English literature.\n• Increased average student test scores by 15% through innovative teaching methods.',
      },
    ],
    education: [
      { id: 'te-edu-1', school: 'University of Oregon', degree: 'M.A. in Teaching', date: '2015 - 2017' },
    ],
    skills: ['Curriculum Development', 'Classroom Management', 'Differentiated Instruction', 'Educational Technology'],
    projects: [],
    certificates: [],
};

const uxUiDesigner: ResumeData = {
    name: 'Olivia Martinez',
    location: 'San Francisco, CA',
    email: 'olivia.m@email.com',
    phone: '(415) 555-0188',
    github: 'github.com/oliviamartinez',
    linkedin: 'linkedin.com/in/oliviamartinez',
    description: 'Creative UX/UI Designer with a strong portfolio of user-centered designs for mobile and web applications. Proficient in Figma, Sketch, and Adobe Creative Suite.',
    experience: [
      {
        id: 'ux-exp-1',
        company: 'InnovateApp',
        role: 'UX/UI Designer',
        date: 'May 2019 - Present',
        description: '• Led the redesign of a mobile banking app, resulting in a 30% improvement in user satisfaction scores.\n• Conducted user research and usability testing to inform design decisions.',
      },
    ],
    education: [
      { id: 'ux-edu-1', school: 'California College of the Arts', degree: 'BFA in Interaction Design', date: '2015 - 2019' },
    ],
    skills: ['Figma', 'Sketch', 'User Research', 'Wireframing', 'Prototyping'],
    projects: [],
    certificates: [],
};

const graphicDesigner: ResumeData = {
    name: 'Leo Chen',
    location: 'New York, NY',
    email: 'leo.chen@email.com',
    phone: '(646) 555-0199',
    github: 'github.com/leochen',
    linkedin: 'linkedin.com/in/leochen',
    description: 'Talented Graphic Designer with expertise in branding, print design, and digital illustration. A strong conceptual thinker with a keen eye for detail and aesthetics.',
    experience: [
      {
        id: 'gd-exp-1',
        company: 'Creative Haus Agency',
        role: 'Graphic Designer',
        date: 'Mar 2018 - Present',
        description: '• Developed brand identities for a diverse range of clients, from startups to established corporations.\n• Created marketing collateral for digital and print campaigns.',
      },
    ],
    education: [
      { id: 'gd-edu-1', school: 'School of Visual Arts', degree: 'BFA in Graphic Design', date: '2014 - 2018' },
    ],
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'Branding', 'Typography', 'Print Design'],
    projects: [],
    certificates: [],
};

const electricalEngineer: ResumeData = {
    name: 'Fatima Ahmed',
    location: 'Houston, TX',
    email: 'fatima.a@email.com',
    phone: '(713) 555-0101',
    github: 'github.com/fatimaahmed',
    linkedin: 'linkedin.com/in/fatimaahmed',
    description: 'Electrical Engineer with a focus on power systems and renewable energy. Experienced in circuit design, simulation, and project implementation.',
    experience: [
      {
        id: 'ee-exp-1',
        company: 'NRG Solutions',
        role: 'Electrical Engineer',
        date: 'Sep 2017 - Present',
        description: '• Designed and implemented electrical systems for large-scale solar farm projects.\n• Performed power system analysis using ETAP software.',
      },
    ],
    education: [
      { id: 'ee-edu-1', school: 'Texas A&M University', degree: 'B.S. in Electrical Engineering', date: '2013 - 2017' },
    ],
    skills: ['Power Systems', 'AutoCAD Electrical', 'MATLAB', 'Circuit Design', 'ETAP'],
    projects: [],
    certificates: [],
};

const mechanicalEngineer: ResumeData = {
    name: 'Tom Kowalski',
    location: 'Detroit, MI',
    email: 'tom.k@email.com',
    phone: '(313) 555-0112',
    github: 'github.com/tomkowalski',
    linkedin: 'linkedin.com/in/tomkowalski',
    description: 'Mechanical Engineer with extensive experience in the automotive industry, specializing in powertrain design and analysis. Proficient in SolidWorks and FEA.',
    experience: [
      {
        id: 'me-exp-1',
        company: 'MotorWorks Automotive',
        role: 'Mechanical Engineer',
        date: 'June 2015 - Present',
        description: '• Led the design of a new fuel-efficient engine component, resulting in a 5% improvement in MPG.\n• Conducted finite element analysis (FEA) to ensure structural integrity.',
      },
    ],
    education: [
      { id: 'me-edu-1', school: 'University of Michigan', degree: 'M.S. in Mechanical Engineering', date: '2013 - 2015' },
    ],
    skills: ['SolidWorks', 'FEA', 'Thermodynamics', 'Automotive Design', 'GD&T'],
    projects: [],
    certificates: [],
};

const webDeveloper: ResumeData = {
    name: 'Aisha Khan',
    location: 'Toronto, ON',
    email: 'aisha.k@email.com',
    phone: '(416) 555-0123',
    github: 'github.com/aishakhan',
    linkedin: 'linkedin.com/in/aishakhan',
    description: 'Full-stack Web Developer with a knack for building beautiful and functional web applications. Expertise in the MERN stack and modern front-end frameworks.',
    experience: [
      {
        id: 'wd-exp-1',
        company: 'DevPoint',
        role: 'Web Developer',
        date: 'Jan 2020 - Present',
        description: '• Built and deployed a full-stack e-commerce application using React, Node.js, and MongoDB.\n• Developed reusable components that accelerated development time by 20%.',
      },
    ],
    education: [
      { id: 'wd-edu-1', school: 'Lighthouse Labs', degree: 'Web Development Bootcamp', date: '2019' },
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Next.js'],
    projects: [],
    certificates: [],
};

const devopsEngineer: ResumeData = {
    name: 'Mike Rodriguez',
    location: 'Raleigh, NC',
    email: 'mike.r@email.com',
    phone: '(919) 555-0134',
    github: 'github.com/mikerodriguez',
    linkedin: 'linkedin.com/in/mikerodriguez',
    description: 'DevOps Engineer passionate about automating infrastructure and streamlining the software development lifecycle. Experienced in CI/CD, containerization, and cloud infrastructure.',
    experience: [
      {
        id: 'do-exp-1',
        company: 'CodeStream Solutions',
        role: 'DevOps Engineer',
        date: 'Oct 2018 - Present',
        description: '• Built and maintained CI/CD pipelines using Jenkins and GitLab CI, reducing deployment times by 50%.\n• Managed Kubernetes clusters on AWS for container orchestration.',
      },
    ],
    education: [
      { id: 'do-edu-1', school: 'North Carolina State University', degree: 'B.S. in Computer Engineering', date: '2014 - 2018' },
    ],
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'Ansible'],
    projects: [],
    certificates: [{ id: 'do-cert-1', name: 'Certified Kubernetes Administrator (CKA)', issuingBody: 'The Linux Foundation', date: '2021' }],
};

const cloudEngineer: ResumeData = {
    name: 'Sarah Jenkins',
    location: 'Phoenix, AZ',
    email: 'sarah.j@email.com',
    phone: '(602) 555-0145',
    github: 'github.com/sarahjenkins',
    linkedin: 'linkedin.com/in/sarahjenkins',
    description: 'Certified Cloud Engineer with expertise in designing, deploying, and managing applications on Google Cloud Platform (GCP). Skilled in infrastructure as code and serverless architectures.',
    experience: [
      {
        id: 'ce-exp-1',
        company: 'SkyHigh Tech',
        role: 'Cloud Engineer',
        date: 'Dec 2019 - Present',
        description: '• Migrated on-premise applications to GCP, resulting in significant cost savings and improved scalability.\n• Developed serverless functions to automate data processing workflows.',
      },
    ],
    education: [
      { id: 'ce-edu-1', school: 'Arizona State University', degree: 'B.S. in Information Technology', date: '2015 - 2019' },
    ],
    skills: ['GCP', 'Terraform', 'Serverless', 'Cloud Functions', 'BigQuery', 'Python'],
    projects: [],
    certificates: [{ id: 'ce-cert-1', name: 'Google Certified Professional Cloud Architect', issuingBody: 'Google', date: '2022' }],
};

const technologyConsultant: ResumeData = {
    name: 'Chris Thompson',
    location: 'Atlanta, GA',
    email: 'chris.t@email.com',
    phone: '(404) 555-0156',
    github: 'github.com/christhompson',
    linkedin: 'linkedin.com/in/christhompson',
    description: 'Strategic Technology Consultant with a talent for bridging the gap between business needs and technical solutions. Experience advising Fortune 500 companies on digital transformation.',
    experience: [
      {
        id: 'tc-exp-1',
        company: 'Innovate Consulting Group',
        role: 'Technology Consultant',
        date: 'Sep 2017 - Present',
        description: '• Advised clients on cloud adoption strategies, resulting in multi-million dollar digital transformation projects.\n• Conducted technology assessments and developed strategic roadmaps.',
      },
    ],
    education: [
      { id: 'tc-edu-1', school: 'Georgia Institute of Technology', degree: 'B.S. in Business Administration', date: '2013 - 2017' },
    ],
    skills: ['IT Strategy', 'Digital Transformation', 'Cloud Computing', 'Project Management', 'Client Relations'],
    projects: [],
    certificates: [],
};

const salesAndMarketing: ResumeData = {
    name: 'Laura Bailey',
    location: 'Miami, FL',
    email: 'laura.b@email.com',
    phone: '(305) 555-0167',
    github: 'github.com/laurabailey',
    linkedin: 'linkedin.com/in/laurabailey',
    description: 'Results-oriented Sales & Marketing professional with a proven track record of driving revenue growth and market share. Expertise in digital marketing, lead generation, and CRM.',
    experience: [
      {
        id: 'sm-exp-1',
        company: 'GrowthX Inc.',
        role: 'Marketing Manager',
        date: 'Nov 2018 - Present',
        description: '• Developed and executed a multi-channel digital marketing strategy that increased lead generation by 40% year-over-year.\n• Managed a team of marketing specialists.',
      },
    ],
    education: [
      { id: 'sm-edu-1', school: 'University of Miami', degree: 'B.A. in Marketing', date: '2014 - 2018' },
    ],
    skills: ['Digital Marketing', 'SEO/SEM', 'Content Marketing', 'Salesforce', 'HubSpot'],
    projects: [],
    certificates: [],
};

const healthcareProfessional: ResumeData = {
    name: 'Dr. Robert Miller',
    location: 'Philadelphia, PA',
    email: 'robert.m@email.com',
    phone: '(215) 555-0178',
    github: 'github.com/robertmiller',
    linkedin: 'linkedin.com/in/robertmiller',
    description: 'Compassionate and dedicated Registered Nurse with over 12 years of experience in critical care and emergency medicine. Committed to providing high-quality patient care.',
    experience: [
      {
        id: 'hp-exp-1',
        company: 'City General Hospital',
        role: 'Registered Nurse, ICU',
        date: 'Mar 2012 - Present',
        description: '• Provided comprehensive care to critically ill patients in a fast-paced ICU environment.\n• Mentored new nursing graduates and served as a preceptor.',
      },
    ],
    education: [
      { id: 'hp-edu-1', school: 'University of Pennsylvania', degree: 'B.S. in Nursing (BSN)', date: '2008 - 2012' },
    ],
    skills: ['Critical Care', 'ACLS', 'Patient Advocacy', 'Wound Care', 'Electronic Health Records (EHR)'],
    projects: [],
    certificates: [{ id: 'hp-cert-1', name: 'Critical Care Registered Nurse (CCRN)', issuingBody: 'AACN', date: '2015' }],
};

const itSupportSpecialist: ResumeData = {
    name: 'Kevin Williams',
    location: 'Dallas, TX',
    email: 'kevin.w@email.com',
    phone: '(214) 555-0189',
    github: 'github.com/kevinwilliams',
    linkedin: 'linkedin.com/in/kevinwilliams',
    description: 'Customer-focused IT Support Specialist with a knack for troubleshooting complex technical issues. Proficient in hardware, software, and network support.',
    experience: [
      {
        id: 'it-exp-1',
        company: 'TechSupport Pro',
        role: 'IT Support Specialist',
        date: 'Feb 2019 - Present',
        description: '• Provided Tier 2 technical support to over 500 end-users, resolving 95% of issues on the first call.\n• Managed user accounts and permissions in Active Directory.',
      },
    ],
    education: [
      { id: 'it-edu-1', school: 'Dallas College', degree: 'A.A.S. in Network Administration', date: '2017 - 2019' },
    ],
    skills: ['Help Desk Support', 'Active Directory', 'Network Troubleshooting', 'Hardware Repair', 'Zendesk'],
    projects: [],
    certificates: [{ id: 'it-cert-1', name: 'CompTIA A+', issuingBody: 'CompTIA', date: '2019' }],
};

const productManager: ResumeData = {
    name: 'Rachel Kim',
    location: 'San Jose, CA',
    email: 'rachel.k@email.com',
    phone: '(408) 555-0190',
    github: 'github.com/rachelkim',
    linkedin: 'linkedin.com/in/rachelkim',
    description: 'Data-driven Product Manager with a strong technical background and a proven ability to ship successful products. Skilled in agile development, user research, and product strategy.',
    experience: [
      {
        id: 'pm-exp-1',
        company: 'SaaSify',
        role: 'Product Manager',
        date: 'Oct 2018 - Present',
        description: '• Owned the product roadmap for a B2B SaaS product, leading to a 50% increase in user adoption.\n• Worked closely with engineering and design teams to deliver features on time.',
      },
    ],
    education: [
      { id: 'pm-edu-1', school: 'UC Berkeley', degree: 'B.S. in Electrical Engineering & CS', date: '2014 - 2018' },
    ],
    skills: ['Product Strategy', 'Agile/Scrum', 'User Research', 'Roadmap Planning', 'JIRA'],
    projects: [],
    certificates: [],
};


export const sampleData = {
    "Software Engineer": softwareEngineer,
    "Data Analyst": dataAnalyst,
    "Accountant": accountant,
    "Manager": manager,
    "Executive": executive,
    "Finance Professional": financeProfessional,
    "Civil Engineer": civilEngineer,
    "Teacher": teacher,
    "UX/UI Designer": uxUiDesigner,
    "Graphic Designer": graphicDesigner,
    "Electrical Engineer": electricalEngineer,
    "Mechanical Engineer": mechanicalEngineer,
    "Web Developer": webDeveloper,
    "DevOps Engineer": devopsEngineer,
    "Cloud Engineer": cloudEngineer,
    "Technology Consultant": technologyConsultant,
    "Sales & Marketing": salesAndMarketing,
    "Healthcare Professional": healthcareProfessional,
    "IT Support Specialist": itSupportSpecialist,
    "Product Manager": productManager
};
