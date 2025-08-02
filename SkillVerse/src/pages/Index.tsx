import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SkillsPreview from "@/components/SkillsPreview";
import EmotionDemo from "@/components/EmotionDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SkillsPreview />
      <EmotionDemo />
    </div>
  );
};

export default Index;