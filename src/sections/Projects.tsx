import { SectionTitle } from '../components/ui/SectionTitle';
import { ProjectCard } from '../components/shared/ProjectCard';
import { projectsData } from '../data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="relative flex min-h-screen items-center">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="Featured work and case studies">
          Projects
        </SectionTitle>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
