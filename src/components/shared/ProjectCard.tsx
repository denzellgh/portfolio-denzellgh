import { Card } from '../ui/Card';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex-1">
        <h3 className="text-primary-text mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold">
          {project.title}
        </h3>
        <p className="text-primary-muted mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4">
          <p className="text-primary-muted mb-2 text-sm">
            <span className="text-primary-text font-semibold">Role:</span>{' '}
            {project.role}
          </p>
          {project.impact && (
            <p className="text-primary-muted text-sm">
              <span className="text-primary-text font-semibold">Impact:</span>{' '}
              {project.impact}
            </p>
          )}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="border-accent-blue/30 bg-accent-blue/10 text-accent-blue rounded-full border px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="from-accent-blue via-accent-violet to-accent-green flex-1 rounded-lg bg-gradient-to-r px-4 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
          >
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-accent-blue text-primary-text hover:bg-accent-blue/10 flex-1 rounded-lg border px-4 py-2 text-center text-sm font-medium transition-all duration-300"
          >
            View Code
          </a>
        )}
      </div>
    </Card>
  );
};
