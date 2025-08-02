import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Code2, 
  Trophy, 
  Calendar, 
  TrendingUp,
  Play,
  BookOpen,
  Target,
  Zap,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const userStats = {
    name: "Alex Johnson",
    level: 12,
    xp: 2840,
    nextLevelXp: 3000,
    streak: 7,
    totalHours: 48
  };

  const recentActivity = [
    { language: "Python", lesson: "Data Structures", emotion: "Focused", completed: true },
    { language: "JavaScript", lesson: "Async Programming", emotion: "Excited", completed: true },
    { language: "React", lesson: "State Management", emotion: "Challenged", completed: false },
  ];

  const skillProgress = [
    { language: "Python", progress: 85, level: "Advanced" },
    { language: "JavaScript", progress: 72, level: "Intermediate" },
    { language: "React", progress: 45, level: "Beginner" },
    { language: "Java", progress: 30, level: "Beginner" },
  ];

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">
            Welcome back, {userStats.name}!
          </h1>
          <p className="text-muted-foreground">Ready to continue your coding journey?</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-glow p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Trophy className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Level</p>
                <p className="text-2xl font-bold">{userStats.level}</p>
              </div>
            </div>
          </Card>

          <Card className="card-glow p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">XP Points</p>
                <p className="text-2xl font-bold">{userStats.xp}</p>
              </div>
            </div>
          </Card>

          <Card className="card-glow p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-success to-success/80 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-success-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Streak</p>
                <p className="text-2xl font-bold">{userStats.streak} days</p>
              </div>
            </div>
          </Card>

          <Card className="card-glow p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/80 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Hours</p>
                <p className="text-2xl font-bold">{userStats.totalHours}h</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* XP Progress */}
            <Card className="card-glow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Level Progress</h3>
                <Badge variant="outline">{userStats.xp}/{userStats.nextLevelXp} XP</Badge>
              </div>
              <Progress value={(userStats.xp / userStats.nextLevelXp) * 100} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                {userStats.nextLevelXp - userStats.xp} XP to level {userStats.level + 1}
              </p>
            </Card>

            {/* Skill Progress */}
            <Card className="card-glow p-6">
              <h3 className="text-lg font-semibold mb-6">Skill Progress</h3>
              <div className="space-y-6">
                {skillProgress.map((skill) => (
                  <div key={skill.language} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Code2 className="h-5 w-5 text-primary" />
                        <span className="font-medium">{skill.language}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={
                          skill.level === "Beginner" ? "secondary" :
                          skill.level === "Intermediate" ? "default" : "outline"
                        }>
                          {skill.level}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                      </div>
                    </div>
                    <Progress value={skill.progress} />
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="card-glow p-6">
              <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.completed ? 'bg-success/20' : 'bg-muted'
                      }`}>
                        {activity.completed ? (
                          <Trophy className="h-5 w-5 text-success" />
                        ) : (
                          <Play className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{activity.lesson}</p>
                        <p className="text-sm text-muted-foreground">{activity.language}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-primary border-primary">
                        {activity.emotion}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="card-glow p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="hero" className="w-full justify-start">
                  <Play className="h-4 w-4 mr-2" />
                  Continue Learning
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Take Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Brain className="h-4 w-4 mr-2" />
                  Emotion Analysis
                </Button>
              </div>
            </Card>

            {/* Emotion Insights */}
            <Card className="card-glow p-6">
              <h3 className="text-lg font-semibold mb-4">Today's Emotion Insights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Most Frequent</span>
                  <Badge variant="outline" className="text-primary border-primary">Focused</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Learning Mode</span>
                  <Badge variant="secondary">Standard</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Productivity</span>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="text-sm text-success">+15%</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="card-glow p-6">
              <h3 className="text-lg font-semibold mb-4">Recommended</h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted/20 rounded-lg">
                  <p className="font-medium text-sm">Python Advanced Patterns</p>
                  <p className="text-xs text-muted-foreground">Based on your progress</p>
                </div>
                <div className="p-3 bg-muted/20 rounded-lg">
                  <p className="font-medium text-sm">React Hooks Deep Dive</p>
                  <p className="text-xs text-muted-foreground">Perfect for your mood</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;