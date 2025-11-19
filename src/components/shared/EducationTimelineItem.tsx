import { Card } from '../ui/Card';
import type { Education } from '../../data/education';
import { cn } from '@/lib';

interface EducationTimelineItemProps {
  education: Education;
  index: number;
}

export const EducationTimelineItem = ({
  education,
  index,
}: EducationTimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={cn(`flex flex-row gap-8`, isEven && 'md:flex-row-reverse')}>
      <div className="mb-12 flex-1">
        <Card hover={false}>
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-primary-text font-[family-name:var(--font-heading)] text-xl font-bold">
                {education.degree}
              </h3>
              <p className="text-accent-blue font-medium">
                {education.institution}
              </p>
            </div>
            <span className="text-primary-muted text-sm">{education.year}</span>
          </div>

          <p className="text-primary-muted mb-4">{education.description}</p>
        </Card>
      </div>

      <div className="from-accent-blue via-accent-violet to-accent-green relative w-px bg-gradient-to-b">
        <div className="bg-accent-blue absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.6)]" />
      </div>

      <div className="flex-1 max-md:hidden" />
    </div>
  );
};
