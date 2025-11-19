import { Card } from '../ui/Card';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex-1">
        <h3 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-primary-text">
          {project.title}
        </h3>
        <p className="mb-4 leading-relaxed text-primary-muted">
          {project.description}
        </p>

        <div className="mb-4">
          <p className="mb-2 text-sm text-primary-muted">
            <span className="font-semibold text-primary-text">Role:</span>{' '}
            {project.role}
          </p>
          {project.impact && (
            <p className="text-sm text-primary-muted">
              <span className="font-semibold text-primary-text">Impact:</span>{' '}
              {project.impact}
            </p>
          )}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 text-xs text-accent-blue"
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
            className="flex-1 rounded-lg bg-gradient-to-r from-accent-blue via-accent-violet to-accent-green px-4 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
          >
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-accent-blue px-4 py-2 text-center text-sm font-medium text-primary-text transition-all duration-300 hover:bg-accent-blue/10"
          >
            View Code
          </a>
        )}
      </div>
    </Card>
  );
};
