import { Button } from "@/components/ui/button";
import { Target, BarChart3, Upload, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Target className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
            OverwatchCoach
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="#analysis" className="text-muted-foreground hover:text-foreground transition-colors">
            Analysis
          </a>
          <a href="#profile" className="text-muted-foreground hover:text-foreground transition-colors">
            Profile
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline-gaming" size="sm">
            <Upload className="h-4 w-4" />
            Upload Replay
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};