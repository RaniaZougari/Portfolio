import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Settings, Globe, Users, Target, Brain, Zap, Palette, Cpu } from "lucide-react";

const technicalSkills = [
  // Programming Languages
  { name: "Python", level: 90, category: "programming" },
  { name: "Java", level: 85, category: "programming" },
  { name: "C++", level: 80, category: "programming" },
  { name: "C", level: 75, category: "programming" },
  { name: "R", level: 80, category: "programming" },
  { name: "SQL", level: 85, category: "programming" },
  { name: "HTML/CSS/JS", level: 70, category: "programming" },

  // AI/ML Technologies
  { name: "TensorFlow", level: 85, category: "ai" },
  { name: "PyTorch", level: 80, category: "ai" },
  { name: "Scikit-learn", level: 90, category: "ai" },
  { name: "Pandas", level: 90, category: "ai" },

  // Engineering & Tools
  { name: "Docker", level: 85, category: "tools" },
  { name: "Podman", level: 80, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "DevOps", level: 75, category: "tools" },
  { name: "MySQL", level: 80, category: "tools" },
  { name: "Oracle", level: 70, category: "tools" },
  { name: "PostgreSQL", level: 75, category: "tools" },
  { name: "Jupyter Notebook", level: 90, category: "tools" },
  { name: "RStudio", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const languages = [
  { name: "French", level: "Native" },
  { name: "Arabic", level: "Native"},
  { name: "English", level: "Fluent (C1)"},
  { name: "Spanish", level: "Intermediate (B2)" },
];


const categories = ["all", "programming", "ai", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = technicalSkills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Brain className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary"> Expertise</span>
          </h2>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize font-medium",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                {category === "programming" ? "Programming Languages" : 
                 category === "ai" ? "AI/ML Technologies" :
                 category === "tools" ? "Engineering & Tools" : "All Skills"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-left mb-4">
                  <h4 className="font-semibold text-lg">{skill.name}</h4>
                </div>
                <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-3 rounded-full origin-left transition-all duration-1000"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                <div className="text-right mt-2">
                  <span className="text-sm font-medium text-primary">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold">{lang.name}</h4>
                  <span className="text-primary font-medium">{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
