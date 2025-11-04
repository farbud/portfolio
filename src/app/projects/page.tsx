import { projects } from "../../../data/projects";
import { ProjectCard } from "../../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        پروژه‌ها
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
