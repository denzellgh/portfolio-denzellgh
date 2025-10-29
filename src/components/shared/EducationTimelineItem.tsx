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
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#F5F5F5]">
                {education.degree}
              </h3>
              <p className="font-medium text-[#0EA5E9]">
                {education.institution}
              </p>
            </div>
            <span className="text-sm text-[#A1A1AA]">{education.year}</span>
          </div>

          <p className="mb-4 text-[#A1A1AA]">{education.description}</p>
        </Card>
      </div>

      <div className="relative w-px bg-gradient-to-b from-[#0EA5E9] via-[#7C3AED] to-[#10B981]">
        <div className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#0EA5E9] shadow-[0_0_15px_rgba(14,165,233,0.6)]" />
      </div>

      <div className="flex-1 max-md:hidden" />
    </div>
  );
};
