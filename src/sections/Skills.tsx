import { SectionTitle } from '../components/ui/SectionTitle';
import { SkillBadge } from '../components/shared/SkillBadge';
import { skillsData } from '../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="relative flex min-h-screen items-center">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="Technologies I work with">
          Skills & Expertise
        </SectionTitle>

        <div className="grid gap-10 lg:grid-cols-3">
          {skillsData.map(category => (
            <div key={category.category}>
              <h3 className="mb-6 text-center font-[family-name:var(--font-heading)] text-2xl font-bold text-[#F5F5F5]">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map(skill => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
