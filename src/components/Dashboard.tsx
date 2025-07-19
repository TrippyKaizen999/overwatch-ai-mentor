import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, Clock, Star, Brain } from "lucide-react";

export const Dashboard = () => {
  const stats = [
    { label: "SR Rating", value: "2,847", change: "+142", trend: "up" },
    { label: "Win Rate", value: "68%", change: "+12%", trend: "up" },
    { label: "Avg Eliminations", value: "24.3", change: "-2.1", trend: "down" },
    { label: "Accuracy", value: "73%", change: "+5%", trend: "up" },
  ];

  const recentMatches = [
    { map: "King's Row", hero: "Tracer", result: "Win", sr: "+25", duration: "8:42" },
    { map: "Hanamura", hero: "Genji", result: "Loss", sr: "-23", duration: "12:15" },
    { map: "Dorado", hero: "Soldier: 76", result: "Win", sr: "+27", duration: "9:33" },
  ];

  const aiInsights = [
    { insight: "Your positioning on Tracer has improved 34% over the last 10 games", priority: "high" },
    { insight: "Consider practicing Genji's blade timing - you're activating 2.3s too early on average", priority: "medium" },
    { insight: "Your ultimate usage efficiency is in the top 15% for your rank", priority: "low" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Performance Dashboard</h2>
            <p className="text-xl text-muted-foreground">
              Track your progress and get AI-powered insights
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border hover:shadow-primary transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{stat.value}</span>
                    <div className={`flex items-center space-x-1 ${
                      stat.trend === "up" ? "text-gaming" : "text-destructive"
                    }`}>
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="text-sm font-medium">{stat.change}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Matches */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Recent Matches</span>
                </CardTitle>
                <CardDescription>Your latest competitive games</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMatches.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm">
                          <div className="font-semibold">{match.map}</div>
                          <div className="text-muted-foreground">{match.hero}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={match.result === "Win" ? "default" : "destructive"}>
                          {match.result}
                        </Badge>
                        <span className={`text-sm font-medium ${
                          match.result === "Win" ? "text-gaming" : "text-destructive"
                        }`}>
                          {match.sr}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {match.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Matches
                </Button>
              </CardContent>
            </Card>
            
            {/* AI Insights */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-secondary" />
                  <span>AI Insights</span>
                </CardTitle>
                <CardDescription>Personalized coaching recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.map((item, index) => (
                    <div key={index} className="p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={
                          item.priority === "high" ? "default" : 
                          item.priority === "medium" ? "secondary" : "outline"
                        }>
                          {item.priority} priority
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground">{item.insight}</p>
                    </div>
                  ))}
                </div>
                <Button variant="gaming" className="w-full mt-4">
                  <Star className="h-4 w-4" />
                  Get More Insights
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};