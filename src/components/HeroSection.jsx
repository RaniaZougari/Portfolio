import { ArrowDown, Brain, Rocket, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-5xl mx-auto text-center z-10 relative pb-20 md:pb-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Rania
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Zougari
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground opacity-0 animate-fade-in-delay-3">
              AI Engineer & Data Scientist
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            Engineering student at <span className="text-primary font-semibold">Grenoble INP – Ensimag</span>, specializing in Artificial Intelligence, 
            Machine Learning, and Applied Mathematics.
          </p>



          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
            <a 
              href="/CV_RaniaZ_ENG.pdf" 
              target="_blank"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
            >
              Download Resume
            </a>
          </div>

          <div className="opacity-0 animate-fade-in-delay-4 mt-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Rocket className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Currently seeking opportunities at</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <span className="text-blue-500">Tech Companies</span>
              <span className="text-gray-600">•</span>
              <span className="text-orange-500">AI Startups</span>
              <span className="text-gray-600">•</span>
              <span className="text-blue-700">Innovation Centers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20 pointer-events-none">
        <span className="text-sm text-muted-foreground mb-2">Explore Portfolio</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
