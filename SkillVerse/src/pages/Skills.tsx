import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Code2, 
  Star, 
  Search, 
  ArrowRight,
  Clock,
  Users,
  Brain
} from "lucide-react";

// Define TypeScript interface for programming languages
interface ProgrammingLanguage {
  name: string;
  icon: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  emotion: string;
  description: string;
  popularity: number;
  students: string;
  duration: string;
  topics: string[];
  featured: boolean;
}

const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const programmingLanguages: ProgrammingLanguage[] = [
    {
      name: "Python",
      icon: "🐍",
      difficulty: "Beginner",
      emotion: "Joy",
      description: "Perfect for beginners with readable syntax and powerful libraries",
      popularity: 95,
      students: "2.5M",
      duration: "8 weeks",
      topics: ["Basics", "Data Structures", "Web Development", "AI/ML"],
      featured: true
    },
    {
      name: "JavaScript",
      icon: "⚡",
      difficulty: "Intermediate", 
      emotion: "Focus",
      description: "Build interactive web applications and modern UIs",
      popularity: 92,
      students: "3.1M",
      duration: "10 weeks",
      topics: ["ES6+", "DOM", "Async Programming", "Frameworks"],
      featured: true
    },
    {
      name: "Java",
      icon: "☕",
      difficulty: "Intermediate",
      emotion: "Determination",
      description: "Enterprise-grade object-oriented programming language",
      popularity: 88,
      students: "1.8M",
      duration: "12 weeks",
      topics: ["OOP", "Spring Framework", "Android", "Enterprise"],
      featured: false
    },
    {
      name: "C++",
      icon: "⚡",
      difficulty: "Advanced",
      emotion: "Challenge",
      description: "High-performance system programming and game development",
      popularity: 85,
      students: "980K",
      duration: "14 weeks",
      topics: ["Memory Management", "STL", "Performance", "Systems"],
      featured: false
    },
    {
      name: "React",
      icon: "⚛️",
      difficulty: "Intermediate",
      emotion: "Creativity",
      description: "Modern frontend library for building user interfaces",
      popularity: 90,
      students: "2.2M",
      duration: "6 weeks",
      topics: ["Components", "Hooks", "State Management", "Testing"],
      featured: true
    },
    {
      name: "Go",
      icon: "🐹",
      difficulty: "Intermediate",
      emotion: "Efficiency",
      description: "Fast and simple language for modern backend systems",
      popularity: 78,
      students: "650K",
      duration: "8 weeks",
      topics: ["Concurrency", "Web Services", "Microservices", "DevOps"],
      featured: false
    },
    {
      name: "Rust",
      icon: "🦀",
      difficulty: "Advanced",
      emotion: "Precision",
      description: "Memory-safe systems programming without garbage collection",
      popularity: 82,
      students: "420K",
      duration: "16 weeks",
      topics: ["Memory Safety", "Concurrency", "WebAssembly", "Systems"],
      featured: false
    },
    {
      name: "TypeScript",
      icon: "📘",
      difficulty: "Intermediate",
      emotion: "Structure",
      description: "Typed superset of JavaScript for large-scale applications",
      popularity: 87,
      students: "1.5M",
      duration: "4 weeks",
      topics: ["Types", "Interfaces", "Generics", "Advanced Patterns"],
      featured: false
    }
  ];

  const filteredLanguages = programmingLanguages.filter(lang => {
    const matchesSearch = lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lang.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "all" || 
                             lang.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
    return matchesSearch && matchesDifficulty;
  });

  const featuredLanguages = programmingLanguages.filter(lang => lang.featured);

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover programming languages tailored to your interests and emotional learning style
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search languages..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            {["all", "beginner", "intermediate", "advanced"].map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "default" : "outline"}
                onClick={() => setSelectedDifficulty(difficulty)}
                className="capitalize"
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Languages */}
        {searchTerm === "" && selectedDifficulty === "all" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Star className="h-6 w-6 text-yellow-400 mr-2" />
              Featured Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredLanguages.map((lang, index) => (
                <Card
                  key={lang.name}
                  className="card-glow p-6 group hover:scale-105 transition-bounce cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className="bg-yellow-400/10 text-yellow-400 border-yellow-400">
                      Featured
                    </Badge>
                  </div>
                  
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

                  <p className="text-muted-foreground mb-4 line-clamp-2">{lang.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{lang.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{lang.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {lang.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant={
                        lang.difficulty === "Beginner" ? "secondary" :
                        lang.difficulty === "Intermediate" ? "default" : "destructive"
                      }>
                        {lang.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-primary border-primary">
                        <Brain className="h-3 w-3 mr-1" />
                        {lang.emotion}
                      </Badge>
                    </div>
                    <Button variant="default" size="sm" className="group-hover:shadow-intense">
                      Start
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Languages */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            All Languages ({filteredLanguages.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLanguages.map((lang, index) => (
              <Card
                key={lang.name}
                className="card-glow p-6 group hover:scale-105 transition-bounce cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{lang.icon}</span>
                    <h3 className="text-lg font-semibold">{lang.name}</h3>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{lang.popularity}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {lang.description}
                </p>

                <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{lang.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{lang.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <Badge variant={
                    lang.difficulty === "Beginner" ? "secondary" :
                    lang.difficulty === "Intermediate" ? "default" : "destructive"
                  } className="text-xs">
                    {lang.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-primary border-primary text-xs">
                    <Brain className="h-3 w-3 mr-1" />
                    {lang.emotion}
                  </Badge>
                </div>

                <Button variant="default" size="sm" className="w-full group-hover:shadow-glow">
                  <Code2 className="h-4 w-4 mr-2" />
                  Start Learning
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {filteredLanguages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No languages found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedDifficulty("all");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills; 