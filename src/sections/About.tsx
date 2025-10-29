import { FlipCard } from '@/components/shared/FlipCard';
import { SectionTitle } from '../components/ui/SectionTitle';

export const About = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center py-20 lg:py-0"
    >
      <div className="mx-auto max-w-[1200px] px-6 xl:px-0">
        <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>

        <div className="grid items-center gap-12 max-lg:max-w-[700px] sm:px-5 lg:grid-cols-2">
          <div className="mx-2 space-y-6 lg:mx-0">
            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              Hi! I'm Denzell, a Full Stack Software Engineer focused on
              building{' '}
              <span className="font-semibold text-[#23C6FF]">
                products with a genuine impact.
              </span>{' '}
            </p>

            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              My work blends creativity and technical precision—bringing ideas
              to life through clean code, modern design principles, and a strong
              sense of collaboration. I believe great development is about
              deeply understanding{' '}
              <span className="font-semibold text-[#6E74FF]">
                product goals and user needs.
              </span>
            </p>

            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              Beyond code, I’m passionate about solving real problems, leading
              by example, and creating{' '}
              <span className="font-semibold text-[#BE43FF]">
                technology that truly helps people.
              </span>{' '}
              I enjoy building on the frontend and I’m currently deepening my
              backend skills, learning DevOps, and exploring{' '}
              <span className="font-semibold text-[#6480C5]">
                how AI can shape
              </span>{' '}
              the future of software.
            </p>

            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              My goal is to{' '}
              <span className="font-semibold text-[#43A59E]">
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
