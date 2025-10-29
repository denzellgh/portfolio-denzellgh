import { EducationTimelineItem } from '@/components/shared/EducationTimelineItem';
import { SectionTitle } from '../components/ui/SectionTitle';
import { educationData } from '../data/education';

export const Education = () => {
  return (
    <section
      id="education"
      className="relative flex min-h-screen items-center py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="Academic background and certifications">
          Education
        </SectionTitle>

        <div className="mx-auto max-w-4xl">
          {educationData.map((education, index) => (
            <EducationTimelineItem
              key={education.id}
              education={education}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
