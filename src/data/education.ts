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
    id: 'bs-cs',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    year: '2016 - 2020',
    description:
      'Focused on software engineering, algorithms, and web development. Graduated with honors.',
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
