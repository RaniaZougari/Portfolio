import { GraduationCap, Award } from "lucide-react";
import EnsimagLogo from "../../images/Ensimag.png";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h2>
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
    </section>
  );
}; 