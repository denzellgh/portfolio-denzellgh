import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { SocialLinks } from '../components/ui/SocialLinks';
import ClickSpark from '@/components/ClickSpark';

export const Contact = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={20}
      sparkRadius={30}
      sparkCount={9}
      duration={400}
    >
      <section
        id="contact"
        className="relative flex min-h-screen items-center pt-20"
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle subtitle="Let’s build something meaningful together.">
            Get In Touch
          </SectionTitle>

          <div className="mx-auto max-w-2xl space-y-8 text-center">
            <p className="text-lg leading-relaxed text-[#A1A1AA]">
              I'm currently open to new opportunities and exciting projects.
              Whether you have a question, want to collaborate, or just want to
              say hi, feel free to reach out!
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" href="mailto:enrique213f@gmail.com">
                Send Email
              </Button>
            </div>

            <div className="pt-8">
              <p className="mb-4 text-sm text-[#A1A1AA]">Socials</p>
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </div>
      </section>
    </ClickSpark>
  );
};
