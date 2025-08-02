import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Brain, Zap } from "lucide-react";
import heroBackground from "../assets/image.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-glow" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 floating-animation">
        <Code className="h-8 w-8 text-primary glow-effect" />
      </div>
      <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <Brain className="h-10 w-10 text-secondary glow-effect" />
      </div>
      <div className="absolute bottom-32 left-20 floating-animation" style={{ animationDelay: '4s' }}>
        <Zap className="h-6 w-6 text-accent glow-effect" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
          Learn Code with
          <br />
          <span className="text-secondary">Emotion</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience the future of programming education. Our AI-powered platform adapts to your emotions, 
          creating a personalized learning journey that evolves with you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="xl" className="group">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl">
            Watch Demo
          </Button>
        </div>
        
        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="card-glow p-6 rounded-lg">
            <Brain className="h-12 w-12 text-primary mb-4 mx-auto glow-effect" />
            <h3 className="text-lg font-semibold mb-2">Emotion Detection</h3>
            <p className="text-muted-foreground text-sm">
              Real-time facial analysis adapts content to your emotional state
            </p>
          </div>
          
          <div className="card-glow p-6 rounded-lg">
            <Code className="h-12 w-12 text-secondary mb-4 mx-auto glow-effect" />
            <h3 className="text-lg font-semibold mb-2">Interactive Coding</h3>
            <p className="text-muted-foreground text-sm">
              Hands-on coding environment with real-time feedback and hints
            </p>
          </div>
          
          <div className="card-glow p-6 rounded-lg">
            <Zap className="h-12 w-12 text-accent mb-4 mx-auto glow-effect" />
            <h3 className="text-lg font-semibold mb-2">Adaptive Learning</h3>
            <p className="text-muted-foreground text-sm">
              Personalized pathways that adjust difficulty based on your progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;