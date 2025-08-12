import { useParams, Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { projects } from "@/data/projects";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="cosmic-button">Back to Home</Link>
        </div>
      </section>
    );
  }

  const Icon = Icons[project.icon] || Icons.Folder;

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className={`rounded-xl border p-6 bg-gradient-to-br ${project.gradient}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/70 dark:bg-gray-900/50 rounded-full p-3">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{project.title}</h1>
              <p className="text-primary text-sm font-medium">{project.period}</p>
            </div>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">{t}</span>
            ))}
          </div>
          <p className="text-muted-foreground mb-4">{project.longDescription}</p>

          <div className="flex gap-3 mt-6">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" className="cosmic-button">Open case study</a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium">View code</a>
            )}
            <Link to="/" className="px-6 py-2 rounded-full border border-input hover:bg-secondary/40 transition-colors">Back</Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 