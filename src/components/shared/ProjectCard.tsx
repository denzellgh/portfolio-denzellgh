import { Card } from '../ui/Card';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex-1">
        <h3 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[#F5F5F5]">
          {project.title}
        </h3>
        <p className="mb-4 leading-relaxed text-[#A1A1AA]">
          {project.description}
        </p>

        <div className="mb-4">
          <p className="mb-2 text-sm text-[#A1A1AA]">
            <span className="font-semibold text-[#F5F5F5]">Role:</span>{' '}
            {project.role}
          </p>
          {project.impact && (
            <p className="text-sm text-[#A1A1AA]">
              <span className="font-semibold text-[#F5F5F5]">Impact:</span>{' '}
              {project.impact}
            </p>
          )}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 px-3 py-1 text-xs text-[#0EA5E9]"
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
            className="flex-1 rounded-lg bg-gradient-to-r from-[#0EA5E9] via-[#7C3AED] to-[#10B981] px-4 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
          >
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-[#0EA5E9] px-4 py-2 text-center text-sm font-medium text-[#F5F5F5] transition-all duration-300 hover:bg-[#0EA5E9]/10"
          >
            View Code
          </a>
        )}
      </div>
    </Card>
  );
};
