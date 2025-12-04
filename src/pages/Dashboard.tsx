import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import PrototypeBadge from "@/components/PrototypeBadge";
import SubscriptionPopup from "@/components/SubscriptionPopup";
import { LogoutEffect } from "@/components/EmotionalEffects";
import { Sparkles, Star, Moon, Sun, HelpCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [showLogoutEffect, setShowLogoutEffect] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);

  const handleStartJourney = () => {
    navigate("/journey");
  };

  const handleLogout = () => {
    setShowLogoutEffect(true);
  };

  const handleLogoutComplete = async () => {
    setShowLogoutEffect(false);
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-ethereal">
      <Navbar 
        showLogout 
        onLogout={handleLogout} 
        onSubscribe={() => setShowSubscription(true)}
      />
      <PrototypeBadge />
      <LogoutEffect show={showLogoutEffect} onComplete={handleLogoutComplete} />
      <SubscriptionPopup isOpen={showSubscription} onClose={() => setShowSubscription(false)} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Welcome Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-full animate-float hover:bg-muted/70 transition-colors highlight-pulse"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-5 w-5 text-secondary animate-cosmic-pulse" />
              <span className="text-sm font-medium text-muted-foreground">Your AI Edge</span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient-cosmic animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              Welcome to genZ – Your 24/7 AI Mentor for Mind & Life
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
              genZ is a modern AI-powered life support platform built for today's students and young adults. Get instant help for academic stress, mental wellness, career doubts, and personal growth — all in one place. From study hacks to mood boosters, our AI mentor is here 24/7 to guide, motivate, and help you thrive in every area of life
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="card-mystical text-center hover:scale-105 transition-transform duration-300 group h-full highlight-pulse">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-cosmic rounded-lg mx-auto flex items-center justify-center mb-2 group-hover:animate-float">
                    <Star className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform bg-amber-500 rounded-xl" />
                  </div>
                  <CardTitle className="text-gradient-cosmic">Study & Exam Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Personalized study tips, learning techniques, and academic strategies to improve performance and reduce exam stress.</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="card-mystical text-center hover:scale-105 transition-transform duration-300 group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-celestial rounded-lg mx-auto flex items-center justify-center mb-2 group-hover:animate-float [animation-delay:0.5s]">
                    <Moon className="h-6 w-6 text-secondary-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-gradient-celestial">Focus & Motivation Boosters</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Quick exercises, goal-setting tools, and mood-lifting activities to help you stay on track and energized.</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Card className="card-mystical text-center hover:scale-105 transition-transform duration-300 group h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg mx-auto flex items-center justify-center mb-2 group-hover:animate-float [animation-delay:1s]">
                    <Sun className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-gradient-cosmic">Mental Wellness Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>AI-guided coping techniques for stress, anxiety, and burnout, plus practical advice for a healthier mind.</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* CTA Section */}
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gradient-mystical">
                Ready to Connect with Your Higher Self?
              </h2>
              <p className="text-muted-foreground">
                AI magic
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleStartJourney} 
                size="lg" 
                className="btn-cosmic text-lg px-8 py-6 h-auto hover:animate-cosmic-pulse transition-all duration-300 group highlight-pulse"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Start Your Journey
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Help Section */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gradient-celestial">
                Need Help Getting Started?
              </h2>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => window.open('https://www.chatbase.co/dD2UdH0OD16_2Bq0JfqPI/help', '_blank')} 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
              >
                <HelpCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get Help & Support
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
