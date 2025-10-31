import { FlipCard } from '@/components/shared/FlipCard';
import { SectionTitle } from '../components/ui/SectionTitle';

export const About = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center py-20 2xl:py-0"
    >
      <div className="mx-auto max-w-[1200px] px-6 xl:px-0">
        <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>

        <div className="grid items-center gap-12 max-lg:max-w-[700px] sm:px-5 lg:grid-cols-2">
          <div className="mx-2 space-y-6 lg:mx-0">
            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              Hi! I'm Denzell, a Full Stack Software Engineer focused on
              building{' '}
              <span className="font-semibold text-[#5D7FEC]">
                products with a genuine impact.
              </span>{' '}
            </p>

            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              I’m passionate about solving real problems, leading by example,
              and creating{' '}
              <span className="font-semibold text-[#745EDD]">
                technology that truly helps people.
              </span>{' '}
              I believe great development is about deeply understanding{' '}
              <span className="font-semibold text-[#745EDD]">
                product goals and user needs.
              </span>
            </p>

            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              My goal is to{' '}
              <span className="font-semibold text-[#40AEDD]">
                grow within fast-paced startups
              </span>{' '}
              where innovation moves at the speed of thought—crafting products
              that inspire users and empower teams.
            </p>
          </div>
          <div className="relative">
            <FlipCard />
          </div>
        </div>
      </div>
    </section>
  );
};
