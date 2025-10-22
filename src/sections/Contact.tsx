import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { SocialLinks } from '../components/ui/SocialLinks';

export const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="Let's work together">Get In Touch</SectionTitle>

        <div className="mx-auto max-w-2xl space-y-8 text-center">
          <p className="text-lg leading-relaxed text-[#A1A1AA]">
            I'm currently open to new opportunities and exciting projects.
            Whether you have a question, want to collaborate, or just want to
            say hi, feel free to reach out!
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" href="mailto:denzell@example.com">
              Send Email
            </Button>
            <Button variant="secondary" href="/resume.pdf">
              Download Resume
            </Button>
          </div>

          <div className="pt-8">
            <p className="mb-4 text-sm text-[#A1A1AA]">
              Connect with me on social media
            </p>
            <SocialLinks className="justify-center" />
          </div>

          <div className="border-t border-[#A1A1AA]/10 pt-8">
            <p className="text-sm text-[#A1A1AA]">
              📍 Based in{' '}
              <span className="text-[#A855F7]">San Francisco, CA</span>
            </p>
            <p className="mt-2 text-sm text-[#A1A1AA]">
              Available for remote opportunities worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
