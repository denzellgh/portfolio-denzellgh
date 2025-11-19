import { Card } from '../ui/Card';
import type { Experience } from '../../data/experience';
import { cn } from '@/lib';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={cn(`flex flex-row-reverse gap-8`, isEven && 'md:flex-row')}>
      <div className="mb-12 flex-1">
        <Card hover={false}>
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-primary-text font-[family-name:var(--font-heading)] text-xl font-bold">
                {experience.role}
              </h3>
              <a
                className="text-accent-blue font-medium underline"
                href={experience.link}
                target="_blank"
              >
                {experience.company}
              </a>
            </div>
            <span className="text-primary-muted text-sm">
              {experience.duration}
            </span>
          </div>

          <p className="text-primary-muted mb-4">{experience.description}</p>

          <ul className="mb-4 space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="text-primary-muted flex gap-2 text-sm">
                <span className="text-accent-blue">▹</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map(tech => (
              <span
                key={tech}
                className="bg-accent-blue/10 text-accent-blue rounded px-2 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </div>

      <div className="from-accent-blue via-accent-violet to-accent-green relative w-px bg-gradient-to-b">
        <div className="bg-accent-blue absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.6)]" />
      </div>

      <div className="flex-1 max-md:hidden" />
    </div>
  );
};
