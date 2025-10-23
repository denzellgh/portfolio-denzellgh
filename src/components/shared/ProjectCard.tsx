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
              className="px-3 py-1 text-xs rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/30"
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
            className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#0EA5E9] via-[#7C3AED] to-[#10B981] text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300"
          >
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg border border-[#0EA5E9] text-[#F5F5F5] text-sm font-medium hover:bg-[#0EA5E9]/10 transition-all duration-300"
          >
            View Code
          </a>
        )}
      </div>
    </Card>
  );
};
