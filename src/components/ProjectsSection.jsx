import { ArrowRight, Cake, Atom, Palette, FunctionSquare, Brain, LineChart, X } from "lucide-react";
import { useState } from "react";

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
    title: "RAG System for Literature Reviews (CNRS internship)",
    shortDescription:
      "High-precision Retrieval-Augmented Generation pipeline with reranking; containerized for reproducibility.",
    longDescription:
      "End-to-end RAG pipeline for literature review assistance: retrieval, reranking and generation. Emphasis on precision and reproducibility using containers.",
    tags: ["Python", "LLMs", "RAG", "Reranking", "Podman"],
    period: "Summer 2025",
    icon: "Brain",
    gradient: "from-fuchsia-500/20 to-violet-500/20",
    demoUrl: "/CV_RaniaZ_ENG.pdf",
    githubUrl: null,
  },
  {
    id: "auction-ds",
    title: "Auction DataBase project",
    shortDescription:
      "Implemented distributed DB architecture with MySQL, ensuring ACID compliance and data consistency.",
    longDescription:
      "Implemented distributed DB architecture with MySQL, ensuring ACID compliance and data consistency.",
    tags: ["Java", "MySQL", "SQL"],
    period: "2025",
    icon: "LineChart",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    demoUrl: "/CV_RaniaZ_ENG.pdf",
    githubUrl: null,
  },
  {
    id: "exp-tennis-ml",
    title: "Roland Garros 2025 Winner Prediction",
    shortDescription:
      "Supervised learning on historical tournaments; feature engineering and logistic regression baseline.",
    longDescription:
      "Exploratory data analysis, feature engineering and baseline logistic regression to estimate win probabilities.",
    tags: ["Python", "Scikit-learn", "Pandas", "Logistic Regression"],
    period: "Summer 2025",
    icon: "LineChart",
    gradient: "from-blue-500/20 to-yellow-500/20",
    demoUrl: "/CV_RaniaZ_ENG.pdf",
    githubUrl: null,
  },
  {
    id: "blob-war",
    title: "AI Board Game (Blob War)",
    shortDescription:
      "Developed an AI-driven board game in C++ using Minimax and Alpha-Beta pruning.",
    longDescription:
      "Developed an AI-driven board game in C++ using Minimax and Alpha-Beta pruning.",
    tags: ["C++", "Algorithms", "AI", "Minimax", "Alpha-Beta"],
    period: "April 2025",
    icon: "Atom",
    gradient: "from-indigo-500/20 to-red-500/20",
    githubUrl: "https://github.com/RaniaZougari",
    demoUrl: null,
  },
  {
    id: "deca-compiler",
    title: "DECA Compiler",
    shortDescription:
      "Designed and implemented complete compiler from scratch in Java with BYTE extension.",
    longDescription:
      "Designed and implemented complete compiler from scratch in Java with BYTE extension.",
    tags: ["Java", "Compilers", "BYTE"],
    period: "December 2024",
    icon: "FunctionSquare",
    gradient: "from-cyan-500/20 to-blue-500/20",
    githubUrl: null,
    demoUrl: null,
  },
  {
    id: "sim-particles",
    title: "Particle Collision Simulation (C++)",
    shortDescription:
      "Physics-based particle system with collision handling and clean architecture",
    longDescription:
      "Physics-based particle system with collision handling and clean architecture",
    tags: ["C++", "VTK", "Simulation"],
    period: "2025",
    icon: "Atom",
    gradient: "from-purple-500/20 to-orange-500/20",
    githubUrl:
      "https://github.com/RaniaZougari/myportfolio/tree/main/projetcxx_zougarir_zimmerh/Simulation_particules",
    demoUrl: null,
  },
  {
    id: "c-gui",
    title: "C project : Graphic interface",
    shortDescription:
      "Custom GUI in C with geometry, widgets and events",
    longDescription:
      "Custom GUI in C with geometry, widgets and events",
    tags: ["C", "GUI", "Widgets", "Games"],
    period: "May 2024",
    icon: "C",
    gradient: "from-red-500/20 to-yellow-500/20",
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
    period: "Summer 2025",
    icon: "Cake",
    gradient: "from-fuchsia-500/20 to-cyan-500/20",
    githubUrl:
      "https://github.com/RaniaZougari/myportfolio/tree/main/BDCake",
    demoUrl: null,
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Empêche le scroll de la page
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restaure le scroll
  };

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
                onClick={() => openProjectModal(project)}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
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
            rel="noreferrer"
            href="https://github.com/RaniaZougari"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Modal pour les détails du projet */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Arrière-plan flouté */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeProjectModal}
          />
          
          {/* Rectangle du projet */}
          <div className="relative bg-card rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-7xl w-full max-h-[95vh] overflow-y-auto">
            {/* Header du modal */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-6 rounded-t-2xl">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedProject.gradient}`}>
                      {(() => {
                        const Icon = iconMap[selectedProject.icon] || Atom;
                        return <Icon className="h-6 w-6 text-primary" />;
                      })()}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
                      <p className="text-primary font-medium">{selectedProject.period}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className={`px-3 py-1 text-sm font-medium rounded-full ${tagColors[tag] || 'bg-gray-500 text-white'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Contenu du projet */}
            <div className="p-6 space-y-6">
              {/* Description courte */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
              </div>

              {/* Section pour plus de détails (vous pouvez l'étendre) */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Détails techniques</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ce projet démontre mes compétences enjhgdjkhvkduyfgs;jkbcvdhgsjqknbhvkdsjgfdsuqyf;dsfcg;ksdusedyjg;skfusdj;fkdsgfdsjvfkdsufdsf,dsujfdshfksdhfjdsgjfhkgdsfgsdjhfgdshjfgsdjhfhdhjhdsgfdjkhsfg dsjhgvgdhjskcdhgkfjkdfhfjkdggkldglfygrzifygrziyfzgrlfiygzryifgzryfgeryifgzebvgaryievzrkezuyv rgilzzvciyurbzuyrykauygerzytcuezvkvbcryueycrtebgzciruyezlirzchlzevirbegcburygkhekeuykfjkbcgarku'yvatruyrctvurbkyryktryuyretretyreyretyertyreytreyterytytreuzil trc i euyrvc euzyruyezgf ze    uye rcuezyg fuyezr fezg i eziry gvvdzfezg uy igiergzeufvuf veztfezuugil bzgeeuzytfgcrfahibzf euyfygebfuyefgezgyfezghrzerfezyfezyurezrkezrioezyitrezliytrezrezglregkerutgerutre rzyuLe chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés.

Selon les résultats de travaux menés en 2006 et 2007[1], le chat domestique est une sous-espèce du chat sauvage issue d’ancêtres appartenant à la sous-espèce du chat sauvage d’Afrique (Felis silvestris lybica). Les premières domestications ont probablement lieu il y a 8 000 à 10 000 ans au Néolithique dans le Croissant fertile, époque correspondant au début de la culture de céréales et à l'engrangement de réserves susceptibles d'être attaquées par des rongeurs, le chat devenant alors pour l’Homme un auxiliaire utile se prêtant à la domestication.

Le chat domestique est l’un des principaux animaux de compagnie et compte aujourd’hui une cinquantaine de races différentes reconnues par les instances de certification. Dans de très nombreux pays, le chat entre dans le cadre de la législation sur les carnivores domestiques à l’instar du chien et du furet. Essentiellement territorial, le chat est un prédateur de petites proies comme les rongeurs ou les oiseaux. Les chats ont diverses vocalisations dont les ronronnements, les miaulements, les feulements ou les grognements, bien qu’ils communiquent principalement par des positions faciales et corporelles et des phéromones.

Tout d’abord vénéré par les Égyptiens, il est diabolisé en Europe au Moyen Âge et ne retrouve ses lettres de noblesse qu’au XVIIIe siècle. En Asie, le chat reste synonyme de chance, de richesse ou de longévité. Ce félin laisse son empreinte dans la culture populaire et artistique, tant au travers d’expressions populaires que de représentations diverses au sein de la littérature, de la peinture ou encore de la musique. À partir de la fin du XXe siècle, les dommages qu'il occasionne à la biodiversité sont mieux compris, et il fait partie des cent espèces envahissantes parmi les plus nuisibles du monde. {selectedProject.tags.slice(0, 3).join(', ')}. 
                  {selectedProject.githubUrl && (
                    <span> Le code source est disponible sur GitHub.</span>
                  )}
                </p>
              </div>

              {/* Liens */}
              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Voir sur GitHub
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-200"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Voir la démo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
