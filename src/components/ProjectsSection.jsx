import { ArrowRight, Cake, Atom, Palette, FunctionSquare, Brain, LineChart } from "lucide-react";

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
  "Java": "bg-amber-600 text-white",
  "Compilers": "bg-slate-700 text-white",
  "Parsing": "bg-teal-700 text-white",
  "Code Generation": "bg-rose-700 text-white",
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
  "AI": "bg-purple-700 text-white",
};

const iconMap = { Brain, LineChart, Atom, Palette, FunctionSquare, Cake };

const projects = [
  {
    id: "exp-rag",
    title: "RAG System for Literature Reviews (CNRS)",
    shortDescription:
      "High-precision Retrieval-Augmented Generation pipeline with reranking; containerized for reproducibility.",
    longDescription:
      "End-to-end RAG pipeline for literature review assistance: retrieval, reranking and generation. Emphasis on precision and reproducibility using containers.",
    tags: ["Python", "LLMs", "RAG", "Reranking", "Podman"],
    period: "Summer 2025",
    icon: "Brain",
    gradient: "from-indigo-500/20 to-purple-500/20",
    demoUrl: "/CV_RaniaZ_ENG.pdf",
    githubUrl: null,
  },
  {
    id: "auction-ds",
    title: "Auction Price Prediction & Bidding Strategy",
    shortDescription:
      "Predict closing prices and derive bidding strategies with a robust ML pipeline.",
    longDescription:
      "Data preparation, feature engineering and supervised learning to model auction closing prices; simple strategy derivation for competitive bidding.",
    tags: ["Python", "Scikit-learn", "Pandas", "Logistic Regression"],
    period: "2025",
    icon: "LineChart",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    demoUrl: "/CV_RaniaZ_ENG.pdf",
    githubUrl: null,
  },
  {
    id: "exp-tennis-ml",
    title: "Roland‑Garros Winner Prediction",
    shortDescription:
      "Supervised learning on historical tournaments; feature engineering and logistic regression baseline.",
    longDescription:
      "Exploratory data analysis, feature engineering and baseline logistic regression to estimate win probabilities.",
    tags: ["Python", "Scikit-learn", "Pandas", "Logistic Regression"],
    period: "Summer 2025",
    icon: "LineChart",
    gradient: "from-blue-500/20 to-emerald-500/20",
    demoUrl: "/CV_RaniaZ_ENG.pdf",
    githubUrl: null,
  },
  {
    id: "blob-war",
    title: "AI Board Game (Blob War)",
    shortDescription:
      "AI board game project in Java with algorithmic decision-making.",
    longDescription:
      "Fidèle au CV. Détails complets à insérer (heuristiques/algorithmes exacts, évaluation, règles).",
    tags: ["Java", "Algorithms", "AI"],
    period: "April 2025",
    icon: "Atom",
    gradient: "from-violet-500/20 to-indigo-500/20",
    githubUrl: "https://github.com/RaniaZougari",
    demoUrl: null,
  },
  {
    id: "deca-compiler",
    title: "DECA Compiler",
    shortDescription:
      "Full compiler for the DECA language: lexing, parsing, semantic checks, and code generation.",
    longDescription:
      "Fidèle au CV. À compléter: pipeline (lexer, parser, AST), vérifications contextuelles/typage, optimisations, backend (IMA/ARM), suite de tests.",
    tags: ["Java", "Compilers", "Parsing", "Code Generation"],
    period: "December 2024",
    icon: "FunctionSquare",
    gradient: "from-indigo-500/20 to-cyan-500/20",
    githubUrl: null,
    demoUrl: null,
  },
  {
    id: "sim-particles",
    title: "Particle Collision Simulation (C++)",
    shortDescription:
      "Physics‑based particle system with collision handling and clean architecture; tests and docs.",
    longDescription:
      "Particle system, kinematics and collision handling; focus on clarity and testing.",
    tags: ["C++", "Physics", "Simulation"],
    period: "2025",
    icon: "Atom",
    gradient: "from-purple-500/20 to-blue-500/20",
    githubUrl:
      "https://github.com/RaniaZougari/myportfolio/tree/main/projetcxx_zougarir_zimmerh/Simulation_particules",
    demoUrl: null,
  },
  {
    id: "c-gui",
    title: "C GUI Toolkit & Demos",
    shortDescription:
      "Custom GUI in C with geometry, widgets, events, and demos (2048, Minesweeper, Frames, Buttons).",
    longDescription:
      "Educational toolkit including geometry primitives, event handling and several demo apps.",
    tags: ["C", "GUI", "Widgets", "Games"],
    period: "2024–2025",
    icon: "Palette",
    gradient: "from-pink-500/20 to-rose-500/20",
    githubUrl:
      "https://github.com/RaniaZougari/myportfolio/tree/main/projet-c-ig",
    demoUrl: null,
  },
  {
    id: "cake",
    title: "Interactive Birthday Cake",
    shortDescription:
      "Fun HTML/CSS/JS micro‑project: interactive cake with animations and responsive design.",
    longDescription:
      "Micro‑projet front-end pour explorer les animations et la responsivité.",
    tags: ["HTML", "CSS", "JavaScript"],
    period: "2024",
    icon: "Cake",
    gradient: "from-fuchsia-500/20 to-violet-500/20",
    githubUrl:
      "https://github.com/RaniaZougari/myportfolio/tree/main/BDCake",
    demoUrl: null,
  }
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
            const Icon = iconMap[project.icon] || Atom;
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
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{project.shortDescription}</p>
                  <p className="text-primary text-xs font-medium mb-4">{project.period}</p>
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
