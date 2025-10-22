export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Next.js' },
      { name: 'TailwindCSS' },
      { name: 'HTML5 & CSS3' },
      { name: 'Redux' },
      { name: 'Vue.js' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Python' },
      { name: 'Django' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'Vercel' },
      { name: 'Vite' },
      { name: 'Webpack' },
      { name: 'Jest' },
      { name: 'Figma' },
    ],
  },
];
