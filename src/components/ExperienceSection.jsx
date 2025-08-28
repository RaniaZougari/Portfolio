import { Globe, Zap } from "lucide-react";
import NsigmaLogo from "../../images/Nsigma.png";
import RingLogo from "../../images/ring_labs_logo.png"; // Ajoutez images/RING.png au repo

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience
        </h2>

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
                <img src={RingLogo} alt="RING Lab Logo" className="h-6 w-6" />
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
    </section>
  );
}; 