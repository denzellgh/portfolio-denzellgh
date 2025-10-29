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
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#F5F5F5]">
                {experience.role}
              </h3>
              <a
                className="font-medium text-[#0EA5E9] underline"
                href={experience.link}
                target="_blank"
              >
                {experience.company}
              </a>
            </div>
            <span className="text-sm text-[#A1A1AA]">
              {experience.duration}
            </span>
          </div>

          <p className="mb-4 text-[#A1A1AA]">{experience.description}</p>

          <ul className="mb-4 space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-[#A1A1AA]">
                <span className="text-[#0EA5E9]">▹</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map(tech => (
              <span
                key={tech}
                className="rounded bg-[#0EA5E9]/10 px-2 py-1 text-xs text-[#0EA5E9]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </div>

      <div className="relative w-px bg-gradient-to-b from-[#0EA5E9] via-[#7C3AED] to-[#10B981]">
        <div className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#0EA5E9] shadow-[0_0_15px_rgba(14,165,233,0.6)]" />
      </div>

      <div className="flex-1 max-md:hidden" />
    </div>
  );
};
