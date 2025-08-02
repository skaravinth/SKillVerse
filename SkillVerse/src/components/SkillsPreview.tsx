import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Star, TrendingUp } from "lucide-react";

const programmingLanguages = [
  {
    name: "Python",
    icon: "🐍",
    difficulty: "Beginner",
    emotion: "Joy",
    description: "Perfect for beginners with readable syntax",
    popularity: 95
  },
  {
    name: "JavaScript",
    icon: "⚡",
    difficulty: "Intermediate", 
    emotion: "Focus",
    description: "Build interactive web applications",
    popularity: 92
  },
  {
    name: "Java",
    icon: "☕",
    difficulty: "Intermediate",
    emotion: "Determination",
    description: "Enterprise-grade object-oriented programming",
    popularity: 88
  },
  {
    name: "C++",
    icon: "⚡",
    difficulty: "Advanced",
    emotion: "Challenge",
    description: "High-performance system programming",
    popularity: 85
  },
  {
    name: "React",
    icon: "⚛️",
    difficulty: "Intermediate",
    emotion: "Creativity",
    description: "Modern frontend library for building UIs",
    popularity: 90
  },
  {
    name: "Go",
    icon: "🐹",
    difficulty: "Intermediate",
    emotion: "Efficiency",
    description: "Fast and simple language for modern systems",
    popularity: 78
  }
];

const SkillsPreview = () => {
  return (
    <section id="languages" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Choose Your Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your coding journey with languages tailored to your learning style and emotional state
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmingLanguages.map((lang, index) => (
            <div
              key={lang.name}
              className="card-glow p-6 rounded-xl group hover:scale-105 transition-bounce cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{lang.icon}</span>
                  <h3 className="text-xl font-semibold">{lang.name}</h3>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm">{lang.popularity}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{lang.description}</p>

              <div className="flex items-center justify-between mb-4">
                <Badge variant={
                  lang.difficulty === "Beginner" ? "secondary" :
                  lang.difficulty === "Intermediate" ? "default" : "destructive"
                }>
                  {lang.difficulty}
                </Badge>
                <Badge variant="outline" className="text-primary border-primary">
                  {lang.emotion}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span>Popular</span>
                </div>
                <Button variant="glow" size="sm" className="group-hover:shadow-intense">
                  <Code2 className="h-4 w-4 mr-2" />
                  Start Learning
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Explore All Languages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;