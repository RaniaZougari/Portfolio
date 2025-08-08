import { ArrowRight, ExternalLink, Github, Cake, Atom, Palette, FunctionSquare, Brain, LineChart } from "lucide-react";

const tagColors = {
  // Core CS
  "C++": "bg-blue-600 text-white",
  "C": "bg-gray-700 text-white",
  "OpenGL": "bg-orange-600 text-white",
  "Physics": "bg-red-500 text-white",
  "Simulation": "bg-pink-500 text-white",
  "GUI": "bg-green-600 text-white",
  "Widgets": "bg-emerald-600 text-white",
  "Algorithms": "bg-indigo-600 text-white",
  "Numerical Methods": "bg-purple-600 text-white",
  "Euler": "bg-cyan-600 text-white",
  // Web/micro
  "JavaScript": "bg-yellow-500 text-black",
  "HTML": "bg-orange-500 text-white",
  "CSS": "bg-blue-500 text-white",
  "Games": "bg-fuchsia-600 text-white",
  // Data/ML
  "Python": "bg-blue-500 text-white",
  "LLMs": "bg-purple-600 text-white",
  "RAG": "bg-indigo-600 text-white",
  "Reranking": "bg-violet-600 text-white",
  "Podman": "bg-teal-600 text-white",
  "Research": "bg-rose-600 text-white",
  "Scikit-learn": "bg-green-600 text-white",
  "Pandas": "bg-emerald-500 text-white",
  "Logistic Regression": "bg-sky-600 text-white",
};

const projects = [
  // EXPERIENCE PROJECTS (Data Science first)
  {
    id: "exp-rag",
    title: "RAG System for Literature Reviews (CNRS)",
    description:
      "High-precision Retrieval-Augmented Generation pipeline with reranking; containerized for reproducibility.",
    tags: ["Python", "LLMs", "RAG", "Reranking", "Podman"],
    period: "2025",
    icon: Brain,
    gradient: "from-indigo-500/20 to-purple-500/20",
    demoUrl: "/CV_RaniaZ_ENG.pdf", // case study in resume
    githubUrl: null,
  },
  {
    id: "exp-tennis-ml",
    title: "Roland‑Garros Winner Prediction",
    description:
      "Supervised learning on historical tournaments; feature engineering and logistic regression baseline.",
    tags: ["Python", "Scikit-learn", "Pandas", "Logistic Regression"],
    period: "2025",
    icon: LineChart,
    gradient: "from-blue-500/20 to-emerald-500/20",
    demoUrl: "/CV_RaniaZ_ENG.pdf",
    githubUrl: null,
  },
  // REPO PROJECTS
  {
    id: "sim-particles",
    title: "Particle Collision Simulation (C++)",
    description:
      "Physics‑based particle system with collision handling and clean architecture; tests and docs.",
    tags: ["C++", "Physics", "Simulation"],
    period: "2025",
    icon: Atom,
    gradient: "from-purple-500/20 to-blue-500/20",
    githubUrl:
      "https://github.com/RaniaZougari/myportfolio/tree/main/projetcxx_zougarir_zimmerh/Simulation_particules",
    demoUrl: null,
  },
  {
    id: "c-gui",
    title: "C GUI Toolkit & Demos",
    description:
      "Custom GUI in C with geometry, widgets, events, and demos (2048, Minesweeper, Frames, Buttons).",
    tags: ["C", "GUI", "Widgets", "Games"],
    period: "2024–2025",
    icon: Palette,
    gradient: "from-pink-500/20 to-rose-500/20",
    githubUrl:
      "https://github.com/RaniaZougari/myportfolio/tree/main/projet-c-ig",
    demoUrl: null,
  },
  {
    id: "cake",
    title: "Interactive Birthday Cake",
    description:
      "Fun HTML/CSS/JS micro‑project: interactive cake with animations and responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    period: "2024",
    icon: Cake,
    gradient: "from-fuchsia-500/20 to-violet-500/20",
    githubUrl:
      "https://github.com/RaniaZougari/myportfolio/tree/main/BDCake",
    demoUrl: null,
  },
  {
    id: "euler",
    title: "Numerical Methods (Euler) in C++",
    description:
      "Implementation of explicit/implicit Euler integrators with clean structure and traces.",
    tags: ["C++", "Numerical Methods", "Euler", "Algorithms"],
    period: "2024",
    icon: FunctionSquare,
    gradient: "from-cyan-500/20 to-teal-500/20",
    githubUrl:
      "https://github.com/RaniaZougari/myportfolio/tree/main/projetcxx_zougarir_zimmerh/TP1",
    demoUrl: null,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Data‑science–focused highlights and selected CS projects. Case studies are available in my resume.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                {/* Stylized thumbnail */}
                <div className={`h-56 relative bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-40 h-40 rounded-full bg-white/40 dark:bg-white/10 blur-2xl" />
                    <Icon className="relative h-14 w-14 text-primary drop-shadow-sm" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 shadow">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className={`px-2 py-1 text-xs font-medium rounded-full shadow-sm ${tagColors[tag] || 'bg-gray-500 text-white'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{project.description}</p>
                  <p className="text-primary text-xs font-medium mb-4">{project.period}</p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300 p-1 rounded hover:bg-primary/10"
                          title="Open case study"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300 p-1 rounded hover:bg-primary/10"
                          title="View Code"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>

                    {project.tags.length > 2 && (
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(2).map((tag) => (
                          <span key={tag} className={`px-2 py-1 text-xs font-medium rounded-full ${tagColors[tag] || 'bg-gray-500 text-white'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/RaniaZougari"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
