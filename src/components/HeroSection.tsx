import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Upload, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-gaming bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-foreground">Overwatch Coaching</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload your replays, get personalized AI insights, and climb the ranks with data-driven coaching.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Upload className="h-5 w-5" />
              Upload Your First Replay
            </Button>
            <Button variant="outline-gaming" size="lg" className="text-lg px-8 py-6">
              <Brain className="h-5 w-5" />
              See How It Works
            </Button>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-primary transition-all duration-300">
              <Brain className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-muted-foreground">
                Advanced AI analyzes your gameplay patterns and identifies improvement opportunities
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-secondary transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
              <p className="text-muted-foreground">
                Track your progress over time with detailed statistics and performance metrics
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-gaming transition-all duration-300">
              <Zap className="h-12 w-12 text-gaming mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Instant Feedback</h3>
              <p className="text-muted-foreground">
                Get actionable coaching tips instantly after uploading your replay files
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};