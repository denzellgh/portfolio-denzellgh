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
      { name: 'Zustand' },
      { name: 'Angular' },
      { name: 'Material-UI' },
      { name: 'Shadcn' },
      { name: 'Storybook' },
      { name: 'TanStack' },
      { name: 'Vite' },
      { name: 'PNPM' },
      { name: 'Capacitor' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Laravel' },
      { name: 'API REST' },
      { name: 'XML' },
      { name: 'Mongoose' },
      { name: 'Sequelize' },
      { name: 'Drizzle' },
      { name: 'Eloquent' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'SQL Server' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [{ name: 'Docker' }, { name: 'Azure' }, { name: 'CI/CD' }],
  },
  {
    category: 'Tools & Methodologies',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Figma' },
      { name: 'Make' },
      { name: 'Clickup' },
      { name: 'Azure DevOps' },
      { name: 'Github Actions' },
      { name: 'Jest' },
      { name: 'Figma' },
    ],
  },
  {
    category: 'AI Development Tools',
    skills: [
      { name: 'ChatGPT' },
      { name: 'Gemini' },
      { name: 'Claude' },
      { name: 'GitHub Copilot' },
      { name: 'V0' },
      { name: 'Windsurf' },
    ],
  },
  {
    category: 'Currently Learning',
    skills: [
      { name: 'Python' },
      { name: 'AWS' },
      { name: 'N8N ' },
      { name: 'Vibe Coding' },
    ],
  },
];
