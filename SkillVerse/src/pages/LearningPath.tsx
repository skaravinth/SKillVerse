import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code2, 
  Play, 
  CheckCircle, 
  Lock, 
  Clock,
  Brain,
  Star,
  Trophy,
  BookOpen,
  ArrowRight,
  Target
} from "lucide-react";

const LearningPath = () => {
  const [selectedPath, setSelectedPath] = useState("python");

  const learningPaths = {
    python: {
      name: "Python Mastery",
      description: "From beginner to advanced Python programming",
      totalLessons: 45,
      completedLessons: 12,
      estimatedTime: "8 weeks",
      difficulty: "Beginner to Advanced",
      modules: [
        {
          id: 1,
          title: "Python Fundamentals",
          description: "Variables, data types, and control structures",
          lessons: 8,
          completed: 8,
          unlocked: true,
          emotion: "Confident",
          topics: ["Variables", "Data Types", "Loops", "Functions"]
        },
        {
          id: 2,
          title: "Data Structures",
          description: "Lists, dictionaries, sets, and tuples",
          lessons: 6,
          completed: 4,
          unlocked: true,
          emotion: "Focused",
          topics: ["Lists", "Dictionaries", "Sets", "Tuples"]
        },
        {
          id: 3,
          title: "Object-Oriented Programming",
          description: "Classes, inheritance, and polymorphism",
          lessons: 10,
          completed: 0,
          unlocked: true,
          emotion: "Challenged",
          topics: ["Classes", "Inheritance", "Encapsulation", "Polymorphism"]
        },
        {
          id: 4,
          title: "Web Development with Flask",
          description: "Build web applications with Python",
          lessons: 12,
          completed: 0,
          unlocked: false,
          emotion: "Excited",
          topics: ["Flask Basics", "Routing", "Templates", "Databases"]
        },
        {
          id: 5,
          title: "Data Science & AI",
          description: "Machine learning and data analysis",
          lessons: 9,
          completed: 0,
          unlocked: false,
          emotion: "Curious",
          topics: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"]
        }
      ]
    },
    javascript: {
      name: "JavaScript Excellence",
      description: "Modern JavaScript and web development",
      totalLessons: 52,
      completedLessons: 8,
      estimatedTime: "10 weeks",
      difficulty: "Beginner to Advanced",
      modules: [
        {
          id: 1,
          title: "JavaScript Basics",
          description: "Syntax, variables, and basic programming concepts",
          lessons: 10,
          completed: 8,
          unlocked: true,
          emotion: "Confident",
          topics: ["Variables", "Functions", "Objects", "Arrays"]
        },
        {
          id: 2,
          title: "DOM Manipulation",
          description: "Interacting with web pages dynamically",
          lessons: 8,
          completed: 0,
          unlocked: true,
          emotion: "Creative",
          topics: ["DOM", "Events", "Forms", "Animations"]
        },
        {
          id: 3,
          title: "Async Programming",
          description: "Promises, async/await, and API calls",
          lessons: 12,
          completed: 0,
          unlocked: false,
          emotion: "Determined",
          topics: ["Promises", "Async/Await", "Fetch API", "Error Handling"]
        },
        {
          id: 4,
          title: "Modern JavaScript (ES6+)",
          description: "Latest JavaScript features and best practices",
          lessons: 15,
          completed: 0,
          unlocked: false,
          emotion: "Advanced",
          topics: ["Arrow Functions", "Destructuring", "Modules", "Classes"]
        },
        {
          id: 5,
          title: "React Fundamentals",
          description: "Building modern UIs with React",
          lessons: 7,
          completed: 0,
          unlocked: false,
          emotion: "Innovative",
          topics: ["Components", "Props", "State", "Hooks"]
        }
      ]
    }
  };

  const currentPath = learningPaths[selectedPath as keyof typeof learningPaths];
  const overallProgress = (currentPath.completedLessons / currentPath.totalLessons) * 100;

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Learning Pathways
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow structured learning paths designed to adapt to your emotional state and learning pace
          </p>
        </div>

        {/* Path Selector */}
        <Tabs value={selectedPath} onValueChange={setSelectedPath} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Current Path Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="card-glow p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{currentPath.name}</h2>
                  <p className="text-muted-foreground text-lg">{currentPath.description}</p>
                </div>
                <Badge variant="outline" className="text-primary border-primary">
                  {currentPath.difficulty}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <BookOpen className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-2xl font-bold">{currentPath.totalLessons}</p>
                  <p className="text-sm text-muted-foreground">Total Lessons</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <p className="text-2xl font-bold">{currentPath.estimatedTime}</p>
                  <p className="text-sm text-muted-foreground">Est. Duration</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy className="h-8 w-8 text-success-foreground" />
                  </div>
                  <p className="text-2xl font-bold">{Math.round(overallProgress)}%</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">
                    {currentPath.completedLessons}/{currentPath.totalLessons} lessons
                  </span>
                </div>
                <Progress value={overallProgress} className="h-3" />
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Next Lesson */}
            <Card className="card-glow p-6">
              <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
              <div className="space-y-4">
                <div className="p-4 bg-muted/20 rounded-lg">
                  <p className="font-medium">Data Structures</p>
                  <p className="text-sm text-muted-foreground">Lesson 5: Working with Sets</p>
                  <div className="flex items-center justify-between mt-3">
                    <Badge variant="outline" className="text-primary border-primary">
                      <Brain className="h-3 w-3 mr-1" />
                      Focused
                    </Badge>
                    <Button variant="hero" size="sm">
                      <Play className="h-4 w-4 mr-1" />
                      Resume
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="card-glow p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Module Complete</p>
                    <p className="text-xs text-muted-foreground">Python Fundamentals</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Perfect Score</p>
                    <p className="text-xs text-muted-foreground">Functions Quiz</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Learning Modules */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Learning Modules</h2>
          <div className="space-y-6">
            {currentPath.modules.map((module, index) => (
              <Card 
                key={module.id} 
                className={`p-6 transition-all duration-300 ${
                  module.unlocked ? 'card-glow hover:scale-[1.02] cursor-pointer' : 'bg-muted/50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      module.completed === module.lessons 
                        ? 'bg-success text-success-foreground'
                        : module.unlocked 
                        ? 'bg-gradient-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {module.completed === module.lessons ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : module.unlocked ? (
                        <Play className="h-6 w-6" />
                      ) : (
                        <Lock className="h-6 w-6" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold">{module.title}</h3>
                        <Badge variant="outline" className="text-primary border-primary">
                          <Brain className="h-3 w-3 mr-1" />
                          {module.emotion}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{module.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {module.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      {module.unlocked && (
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Progress</span>
                            <span>{module.completed}/{module.lessons} lessons</span>
                          </div>
                          <Progress value={(module.completed / module.lessons) * 100} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{module.lessons} lessons</p>
                    </div>
                    
                    {module.unlocked ? (
                      <Button variant={module.completed === module.lessons ? "success" : "hero"}>
                        {module.completed === module.lessons ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Review
                          </>
                        ) : module.completed > 0 ? (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            Continue
                          </>
                        ) : (
                          <>
                            <Target className="h-4 w-4 mr-2" />
                            Start
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button variant="outline" disabled>
                        <Lock className="h-4 w-4 mr-2" />
                        Locked
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;