import { Briefcase, Code, User, GraduationCap, Target, Building, Award, Globe, Zap, Rocket } from "lucide-react";
import EnsimagLogo from "../../images/Ensimag.png";
import NsigmaLogo from "../../images/Nsigma.png";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Professional Summary */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-6">
            AI Research Engineer & Data Scientist
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Engineering student at Grenoble INP - Ensimag, France's #1 Computer Science Engineering School, 
            specializing in Artificial Intelligence, Machine Learning, and Statistics. Currently pursuing dual 
            MSc degrees in Computer Science Engineering & Applied Mathematics and AI.
          </p>
        </div>

        {/* Career Objective */}
        <div className="mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg border-l-4 border-primary relative">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">Career Objective</h3>
                <p className="text-muted-foreground mb-4">
                  Seeking opportunities as an AI Research Engineer or Data Scientist at leading technology companies 
                  where I can apply my expertise in machine learning, deep learning, and research methodologies 
                  to solve complex, large-scale problems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">AI Research</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">Deep Learning</span>
                  <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm">Research & Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Academic Background */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              <div className="gradient-border p-6 card-hover relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <img src={EnsimagLogo} alt="Ensimag Logo" className="h-6 w-6" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-lg">Grenoble INP - Ensimag</h4>
                    <p className="text-primary font-medium">MSc in Computer Science Engineering & Applied Mathematics + MSc in AI | 2023-2026</p>
                    <p className="text-sm text-muted-foreground mb-3">France's #1 Computer Science Engineering School (Le Figaro Étudiant 2025)</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">AI Specialization</span>
                      <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs">Machine Learning</span>
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">Statistics</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Deep Learning, Advanced Statistics & Probability</li>
                      <li>• Data Science, Data Engineering, Operational Research</li>
                      <li>• Computer Vision, NLP</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-lg">MPSI/MP* Preparatory Classes (CPGE)</h4>
                    <p className="text-primary font-medium">Mathematics, Physics, Engineering Sciences | 2021-2023</p>
                    <p className="text-sm text-muted-foreground mb-3">Mediterranean High School of Martil, Morocco</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">Top-tier Preparation</span>
                      <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs">Advanced Mathematics</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Rigorous training in mathematics and physics</li>
                      <li>• Problem-solving and analytical thinking</li>
                      <li>• Competitive examination preparation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              <div className="gradient-border p-6 card-hover relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-lg">AI Research Engineer Intern</h4>
                    <p className="text-primary font-medium">CNRS - University Grenoble Alpes | June-Aug 2025</p>
                    <div className="flex flex-wrap gap-2 my-3">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">RAG System</span>
                      <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs">LLMs</span>
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">Podman</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Developed high-precision RAG system for literature reviews</li>
                      <li>• Leveraged LLMs and reranking techniques</li>
                      <li>• Containerized full pipeline and ensured local deployment reproducibility</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <img src={NsigmaLogo} alt="Nsigma Logo" className="h-6 w-6" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-lg">Quality Manager</h4>
                    <p className="text-primary font-medium">Nsigma Junior Enterprise | March 2024-2025</p>
                    <div className="flex flex-wrap gap-2 my-3">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">Quality Assurance</span>
                      <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs">Legal Compliance</span>
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">Fund Management</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Conducted internal audits ensuring legal compliance</li>
                      <li>• Advised on fund management and helped reach €86,000 turnover</li>
                      <li>• Quality improvement within the structure</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-lg">Simulation & Modeling Research Intern</h4>
                    <p className="text-primary font-medium">RING Laboratory - University of Lorraine | July-Aug 2024</p>
                    <div className="flex flex-wrap gap-2 my-3">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">Python</span>
                      <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs">TIFLOW</span>
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">Geothermal Modeling</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Integrated geothermal modeling algorithms into TIFLOW</li>
                      <li>• Designed simulation algorithms for fluid absorption in porous media</li>
                      <li>• Applied Python for transdimensional inversion</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-lg">Events Manager</h4>
                    <p className="text-primary font-medium">Bureau Des Arts (BDA) - Ensimag | Mar 2024 - Apr 2025</p>
                    <div className="flex flex-wrap gap-2 my-3">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">Event Management</span>
                      <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs">Leadership</span>
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">Team Management</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Managed 5 events for 200 students</li>
                      <li>• Led teams of 25 volunteers</li>
                      <li>• Developed management and leadership skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/CV_RaniaZ_ENG.pdf"
            className="cosmic-button"
            target="_blank"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};
