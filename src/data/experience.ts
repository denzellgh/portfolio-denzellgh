export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  link: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'software-engineer',
    company: 'TENGO (Fintech)',
    role: 'Software Engineer',
    duration: 'July 2024 - Feb 2025',
    location: 'Tegucigalpa, Honduras',
    link: 'https://www.tengo.hn/',
    description:
      'Led backend development and system optimization for fintech platforms supporting thousands of users. Focused on performance, automation, and user experience.',
    achievements: [
      'Reduced internal response times by 98% through API automation for commission payments, balance transfers, and vendor onboarding.',
      'Improved app usability and security by redesigning critical user flows such as password recovery and bank account integration.',
      'Accelerated compliance and support operations by automating data extraction from Excel files and third-party APIs.',
      'Enhanced business performance by fixing and optimizing bank connection services.',
      'Resolved critical production issues, maintaining uptime and minimizing user impact.',
      'Integrated third-party APIs and payment gateways',
    ],
    technologies: [
      'Java ',
      'Angular',
      'PostgreSQL',
      'Azure',
      'Capacitor',
      'REST',
      'XML',
    ],
  },
  {
    id: 'fullstack-dev',
    company: 'Red Medicatel (HealthTech & InsurTech)',
    role: 'Full Stack Software Developer',
    duration: 'Mar 2023 - July 2024',
    location: 'Tegucigalpa, Honduras',
    link: 'https://redmedicatel.com/',
    description:
      'Worked on modernizing legacy systems and developing digital health solutions with a strong focus on scalability, automation, and cross-team collaboration.',
    achievements: [
      'Co-led the migration from a legacy stack to a modern architecture, improving maintainability and scalability.',
      'Streamlined UI development across many products by contributing to a shared NPM component library.',
      'Boosted user engagement by implementing automated WhatsApp workflows for real-time notifications',
      'Increased code quality and team efficiency by creating GitHub workflows for PRs, reviews, and testing pipelines.',
      'Delivered product demos to executives and leads, aligning new features with business goals and user needs.',
      'Collaborated with design team to implement pixel-perfect UIs',
    ],
    technologies: [
      'React',
      'Next.js',
      'Zustand',
      'Shadcn',
      'TailwindCSS',
      'Node.js',
      'MySQL',
      'Laravel',
      'GitHub Actions',
    ],
  },
  {
    id: 'junior-dev',
    company: 'Lummina Technologies',
    role: 'Junior Web Developer',
    duration: 'Aug 2021 - Dec 2021',
    location: 'Tegucigalpa, Honduras',
    link: 'https://www.linkedin.com/company/lumminatechnologies/',
    description:
      'Supported frontend development for logistics and transportation platforms using modern web technologies.',
    achievements: [
      'Delivered core UI features for a heavy-transport platform built with Angular 12 and TypeScript.',
      'Improved development efficiency by connecting frontend modules to APIs and building reusable components focused on performance and maintainability.',
      'Participated in daily standups and sprint planning',
      'Wrote comprehensive unit tests achieving 85% code coverage',
    ],
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Git', 'Bitbucket'],
  },
];
