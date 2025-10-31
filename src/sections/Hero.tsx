import { Button } from '../components/ui/Button';
import { GradientBlob } from '../components/ui/GradientBlob';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient Blobs */}
      <GradientBlob
        color="blue"
        size="lg"
        position={{ top: '10%', left: '10%' }}
        delay={0}
      />
      <GradientBlob
        color="violet"
        size="md"
        position={{ top: '60%', right: '15%' }}
        delay={5}
      />
      <GradientBlob
        color="green"
        size="md"
        position={{ bottom: '10%', left: '50%' }}
        delay={10}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <div className="space-y-6">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#0EA5E9] via-[#7C3AED] to-[#10B981] bg-clip-text text-transparent">
              Denzell Griffith
            </span>
          </h1>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#F5F5F5] md:text-3xl lg:text-4xl">
            Full Stack Software Engineer
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#dbdbe7] md:text-xl">
            I’m a software engineer passionate about building scalable, elegant,
            and impactful digital products. I craft user-centered experiences
            through full-stack development.
          </p>

          <div className="flex flex-col items-center justify-center pt-8">
            <div className="flex w-fit flex-col justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                href="#experience"
                className="font-bold"
              >
                View My Work
              </Button>
              <Button variant="secondary" href="#contact" className="font-bold">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <a
            href="#about"
            className="inline-block text-[#0EA5E9] transition-colors hover:text-[#7C3AED]"
            aria-label="Scroll to about section"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
