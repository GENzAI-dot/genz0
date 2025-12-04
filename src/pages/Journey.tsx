import { useState } from "react";
import Navbar from "@/components/Navbar";
import PrototypeBadge from "@/components/PrototypeBadge";
import SubscriptionPopup from "@/components/SubscriptionPopup";
import { LogoutEffect } from "@/components/EmotionalEffects";
import { useAuth } from "@/hooks/useAuth";

const Journey = () => {
  const { signOut } = useAuth();
  const [showLogoutEffect, setShowLogoutEffect] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);

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
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-8 animate-fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold text-gradient-cosmic">
              Your Mind Upgrade Starts Here
            </h1>
            <p className="text-lg text-muted-foreground">"AI-powered guidance for your mind, goals, and daily hustle"</p>
          </div>
          
          {/* Chatbot Container */}
          <div className="card-mystical rounded-2xl overflow-hidden shadow-cosmic highlight-pulse animate-scale-in">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-mystical rounded-full flex items-center justify-center animate-spin-slow">
                  <span className="text-primary-foreground text-sm">✦</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gradient-cosmic">genZ</h3>
                  <p className="text-sm text-muted-foreground">Your personal AI Mentor</p>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
            
            {/* Embedded Chatbot - Enhanced Security */}
            <div className="relative" style={{ height: '700px' }}>
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/dD2UdH0OD16_2Bq0JfqPI"
                width="100%"
                style={{ height: '100%', minHeight: '700px' }}
                frameBorder="0"
              />
            </div>
          </div>
          
          {/* Footer Note */}
          <div className="text-center mt-8 animate-fade-in [animation-delay:0.5s] opacity-0 [animation-fill-mode:forwards]">
            <p className="text-sm text-muted-foreground">
              Your conversations are private and secure. Experience the wisdom of ancient traditions 
              enhanced by modern AI technology.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Journey;
