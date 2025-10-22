import { SectionTitle } from '../components/ui/SectionTitle';
import { TimelineItem } from '../components/shared/TimelineItem';
import { experienceData } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="My professional journey">
          Work Experience
        </SectionTitle>

        <div className="mx-auto max-w-4xl space-y-12">
          {experienceData.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
