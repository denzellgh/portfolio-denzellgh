import { SectionTitle } from '../components/ui/SectionTitle';

export const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              I'm a passionate Full Stack Software Engineer with{' '}
              <span className="font-semibold text-[#A855F7]">
                3+ years of experience
              </span>{' '}
              building scalable web applications that solve real-world problems.
            </p>

            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              My journey in software development has been driven by curiosity
              and a commitment to continuous learning. I specialize in creating
              seamless user experiences backed by robust, efficient code.
            </p>

            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-lg border border-[#A855F7]/30 bg-[#A855F7]/10 p-4">
                <p className="mb-1 text-3xl font-bold text-[#A855F7]">100+</p>
                <p className="text-sm text-[#A1A1AA]">Projects Completed</p>
              </div>
              <div className="rounded-lg border border-[#EC4899]/30 bg-[#EC4899]/10 p-4">
                <p className="mb-1 text-3xl font-bold text-[#EC4899]">50K+</p>
                <p className="text-sm text-[#A1A1AA]">Lines of Code</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex aspect-square items-center justify-center rounded-2xl border border-[#A855F7]/30 bg-gradient-to-br from-[#A855F7]/20 via-[#EC4899]/20 to-[#F97316]/20 backdrop-blur-sm">
              <div className="text-center">
                <div className="mb-4 text-8xl">👨‍💻</div>
                <p className="text-sm text-[#A1A1AA]">
                  Crafting digital experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
