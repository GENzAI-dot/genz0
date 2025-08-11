import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Sparkles, Star, Moon, Sun } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
const Dashboard = () => {
  const {
    signOut
  } = useAuth();
  const navigate = useNavigate();
  const handleStartJourney = () => {
    navigate("/journey");
  };
  return <div className="min-h-screen bg-gradient-ethereal">
      <Navbar showLogout onLogout={signOut} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Welcome Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-full animate-float hover:bg-muted/70 transition-colors">
              <Sparkles className="h-5 w-5 text-secondary animate-cosmic-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Your spiritual guide awaits
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient-cosmic animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              Welcome to genZ – Your 24/7 AI Mentor for Mind & Life
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
              genZ is a modern AI-powered life support platform built for today’s students and young adults. Get instant help for academic stress, mental wellness, career doubts, and personal growth — all in one place. From study hacks to mood boosters, our AI mentor is here 24/7 to guide, motivate, and help you thrive in every area of life
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-mystical text-center animate-scale-in [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards] hover:scale-105 transition-transform duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-cosmic rounded-lg mx-auto flex items-center justify-center mb-2 group-hover:animate-float">
                  <Star className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-gradient-cosmic">Study & Exam Insights

              </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Personalized study tips, learning techniques, and academic strategies to improve performance and reduce exam stress.

              </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-mystical text-center animate-scale-in [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards] hover:scale-105 transition-transform duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-celestial rounded-lg mx-auto flex items-center justify-center mb-2 group-hover:animate-float [animation-delay:0.5s]">
                  <Moon className="h-6 w-6 text-secondary-foreground group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-gradient-celestial">Focus & Motivation Boosters

              </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Quick exercises, goal-setting tools, and mood-lifting activities to help you stay on track and energized.

              </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-mystical text-center animate-scale-in [animation-delay:1s] opacity-0 [animation-fill-mode:forwards] hover:scale-105 transition-transform duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg mx-auto flex items-center justify-center mb-2 group-hover:animate-float [animation-delay:1s]">
                  <Sun className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-gradient-cosmic">Mental Wellness Hub

              </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>AI-guided coping techniques for stress, anxiety, and burnout, plus practical advice for a healthier mind.</CardDescription>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="text-center space-y-8 animate-fade-in-up [animation-delay:1.2s] opacity-0 [animation-fill-mode:forwards]">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gradient-mystical">
                Ready to Connect with Your Higher Self?
              </h2>
              <p className="text-muted-foreground">
                Experience personalized spiritual guidance powered by advanced AI technology
              </p>
            </div>
            
            <Button onClick={handleStartJourney} size="lg" className="btn-cosmic text-lg px-8 py-6 h-auto hover:animate-cosmic-pulse transition-all duration-300 group">
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
              Start Your Journey
            </Button>
          </div>
        </div>
      </main>
    </div>;
};
export default Dashboard;