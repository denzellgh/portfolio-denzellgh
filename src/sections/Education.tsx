import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { educationData, certificationsData } from '../data/education';

export const Education = () => {
  return (
    <section id="education" className="relative py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="Academic background and certifications">
          Education
        </SectionTitle>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {educationData.map(edu => (
            <Card key={edu.id} hover={false}>
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎓</div>
                <div className="flex-1">
                  <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-bold text-[#F5F5F5]">
                    {edu.degree}
                  </h3>
                  <p className="mb-2 font-medium text-[#A855F7]">
                    {edu.institution}
                  </p>
                  <p className="mb-3 text-sm text-[#A1A1AA]">{edu.year}</p>
                  {edu.description && (
                    <p className="text-sm text-[#A1A1AA]">{edu.description}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="mb-6 text-center font-[family-name:var(--font-heading)] text-2xl font-bold text-[#F5F5F5]">
            Certifications
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {certificationsData.map(cert => (
              <Card key={cert.id} hover={false}>
                <div className="text-center">
                  <div className="mb-3 text-3xl">📜</div>
                  <h4 className="mb-2 font-bold text-[#F5F5F5]">{cert.name}</h4>
                  <p className="mb-1 text-sm text-[#A855F7]">{cert.issuer}</p>
                  <p className="text-xs text-[#A1A1AA]">{cert.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
