export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export const educationData: Education[] = [
  {
    id: 'bs-swe',
    degree: 'Bachelor’s Degree in Systems Engineering',
    institution: 'National Autonomous University of Honduras (UNAH)',
    year: '2017 - 2023',
    description:
      'Focused on software architecture, database systems, and agile methodologies. Developed a strong foundation in full-stack development, project management, and problem-solving for real-world applications. Graduated with honors.',
  },
  {
    id: 'hachaton',
    degree: '2nd Place — UNAH Hackathon',
    institution: 'National Autonomous University of Honduras (UNAH)',
    year: '2023',
    description:
      'Co-founded an AI-driven startup focused on optimizing national energy efficiency through intelligent agents that balance demand, production costs, and regional market prices.',
  },
  {
    id: 'compdes',
    degree:
      'Participant — XV Ibero-American Congress on Computing for Development',
    institution: 'COMPDES',
    year: '2022',
    description:
      'Engaged with professionals, researchers, and innovators from across Ibero-America to exchange knowledge on technology’s role in sustainable development.',
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'aws-cert',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2022',
  },
  {
    id: 'react-cert',
    name: 'Advanced React and Redux',
    issuer: 'Udemy',
    year: '2021',
  },
  {
    id: 'fullstack-cert',
    name: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    year: '2020',
  },
];
