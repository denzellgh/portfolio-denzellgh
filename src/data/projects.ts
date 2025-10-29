export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  role: string;
  impact?: string;
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with real-time inventory management and payment processing.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
    role: 'Full Stack Developer',
    impact:
      'Increased conversion rate by 35% and reduced cart abandonment by 20%',
    demoUrl: 'https://demo.example.com',
    repoUrl: 'https://github.com/denzellgh/ecommerce-platform',
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description:
      'Collaborative task management tool with real-time updates and team analytics.',
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Chakra UI'],
    role: 'Lead Developer',
    impact: 'Improved team productivity by 40% for 500+ active users',
    demoUrl: 'https://tasks.example.com',
    repoUrl: 'https://github.com/denzellgh/task-manager',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description:
      'Data visualization platform for business intelligence with custom reporting.',
    stack: ['React', 'D3.js', 'Python', 'Django', 'PostgreSQL'],
    role: 'Frontend Lead',
    impact: 'Reduced report generation time from hours to minutes',
    repoUrl: 'https://github.com/denzellgh/analytics-dashboard',
  },
  {
    id: 'social-media-app',
    title: 'Social Media Platform',
    description:
      'Community-focused social platform with content moderation and engagement features.',
    stack: ['Vue.js', 'Express', 'MongoDB', 'Redis', 'AWS S3'],
    role: 'Full Stack Developer',
    impact: 'Scaled to 10,000+ daily active users with 99.9% uptime',
    demoUrl: 'https://social.example.com',
  },
];
