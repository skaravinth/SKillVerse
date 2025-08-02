import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Play, Smile, Frown, Meh, Heart } from "lucide-react";

const emotions = [
  { icon: Smile, label: "Happy", color: "text-green-400", description: "Unlocks bonus challenges" },
  { icon: Heart, label: "Excited", color: "text-pink-400", description: "Advanced topics available" },
  { icon: Meh, label: "Neutral", color: "text-blue-400", description: "Standard learning pace" },
  { icon: Frown, label: "Frustrated", color: "text-orange-400", description: "Simplified explanations" },
];

const EmotionDemo = () => {
  const [currentEmotion, setCurrentEmotion] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <section id="demo" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            See Emotion AI in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how our platform adapts in real-time to your emotional state, 
            creating a truly personalized learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Interface */}
          <div className="space-y-6">
            <Card className="card-glow p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">Emotion Detection</h3>
                <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-400 pulse-glow' : 'bg-gray-400'}`} />
              </div>

              {/* Camera Preview */}
              <div className="bg-muted/20 rounded-lg aspect-video flex items-center justify-center mb-6 border-2 border-dashed border-border">
                <div className="text-center">
                  <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Camera Preview</p>
                  {isActive && (
                    <div className="mt-4 animate-pulse">
                      <div className="h-2 bg-primary rounded-full w-32 mx-auto"></div>
                      <p className="text-sm text-primary mt-2">Analyzing emotions...</p>
                    </div>
                  )}
                </div>
              </div>

              <Button 
                variant={isActive ? "destructive" : "hero"} 
                className="w-full"
                onClick={() => setIsActive(!isActive)}
              >
                <Play className="h-4 w-4 mr-2" />
                {isActive ? "Stop Demo" : "Start Demo"}
              </Button>
            </Card>

            {/* Current Emotion Display */}
            {isActive && (
              <Card className="card-glow p-6">
                <h4 className="text-lg font-semibold mb-4">Detected Emotion</h4>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    {React.createElement(emotions[currentEmotion].icon, {
                      className: `h-8 w-8 ${emotions[currentEmotion].color}`
                    })}
                  </div>
                  <div>
                    <p className="text-xl font-semibold">{emotions[currentEmotion].label}</p>
                    <p className="text-muted-foreground">{emotions[currentEmotion].description}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Adaptive Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Adaptive Learning Content</h3>
            
            {emotions.map((emotion, index) => (
              <Card
                key={emotion.label}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  currentEmotion === index
                    ? 'card-glow ring-2 ring-primary scale-105'
                    : 'bg-card/50 hover:bg-card/70'
                }`}
                onClick={() => setCurrentEmotion(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center`}>
                    {React.createElement(emotion.icon, {
                      className: `h-6 w-6 ${emotion.color}`
                    })}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{emotion.label} Learning Mode</h4>
                    <p className="text-sm text-muted-foreground">{emotion.description}</p>
                  </div>
                  {currentEmotion === index && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                </div>
                
                {currentEmotion === index && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      Content adapts to show {emotion.label.toLowerCase()} specific learning materials...
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionDemo;