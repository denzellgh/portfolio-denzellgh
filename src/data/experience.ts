export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'senior-dev',
    company: 'Tech Innovations Inc.',
    role: 'Senior Full Stack Developer',
    duration: 'Jan 2023 - Present',
    location: 'Remote',
    description:
      'Leading development of enterprise web applications and mentoring junior developers.',
    achievements: [
      'Architected and deployed microservices infrastructure serving 100K+ users',
      'Reduced application load time by 60% through optimization',
      'Mentored 5 junior developers and conducted code reviews',
      'Implemented CI/CD pipeline reducing deployment time by 75%',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
  },
  {
    id: 'fullstack-dev',
    company: 'Digital Solutions Co.',
    role: 'Full Stack Developer',
    duration: 'Mar 2021 - Dec 2022',
    location: 'New York, NY',
    description:
      'Developed and maintained multiple client-facing web applications.',
    achievements: [
      'Built 10+ responsive web applications from concept to deployment',
      'Improved API response time by 45% through database optimization',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Integrated third-party APIs and payment gateways',
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'TailwindCSS'],
  },
  {
    id: 'junior-dev',
    company: 'StartUp Labs',
    role: 'Junior Software Engineer',
    duration: 'Jun 2020 - Feb 2021',
    location: 'San Francisco, CA',
    description:
      'Contributed to frontend development and participated in agile development cycles.',
    achievements: [
      'Developed reusable React components used across 5+ projects',
      'Fixed 100+ bugs and implemented new features',
      'Participated in daily standups and sprint planning',
      'Wrote comprehensive unit tests achieving 85% code coverage',
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'Jest', 'CSS3'],
  },
];
