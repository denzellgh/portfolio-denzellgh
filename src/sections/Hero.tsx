import { Button } from '../components/ui/Button';
import { GradientBlob } from '../components/ui/GradientBlob';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Gradient Blobs */}
      <GradientBlob
        color="purple"
        size="lg"
        position={{ top: '10%', left: '10%' }}
        delay={0}
      />
      <GradientBlob
        color="pink"
        size="md"
        position={{ top: '60%', right: '15%' }}
        delay={5}
      />
      <GradientBlob
        color="orange"
        size="md"
        position={{ bottom: '10%', left: '50%' }}
        delay={10}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <div className="space-y-6">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
              Denzell Griffith
            </span>
          </h1>

          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#F5F5F5] md:text-3xl lg:text-4xl">
            Full Stack Software Engineer
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#A1A1AA] md:text-xl">
            I build exceptional digital experiences that combine elegant design
            with robust functionality. Specializing in modern web technologies
            and scalable solutions.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
            <Button variant="primary" href="#projects">
              View My Work
            </Button>
            <Button variant="secondary" href="#contact">
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <a
            href="#about"
            className="inline-block text-[#A855F7] transition-colors hover:text-[#EC4899]"
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
