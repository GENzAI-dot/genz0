import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          if (mounted) {
            setIsComplete(true);
            // Call onComplete after fade out animation
            setTimeout(() => {
              if (mounted) {
                onComplete();
              }
            }, 500);
          }
          return 100;
        }
        return prev + 2;
      });
    }, 30); // Faster progress

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted",
      "transition-opacity duration-500",
      isComplete ? "opacity-0" : "opacity-100"
    )}>
      {/* App Logo */}
      <div className="mb-8 relative">
        <div className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-[var(--glow-mystical)] animate-pulse">
          <img src={logo} alt="GenZ AI Logo" className="w-full h-full object-contain" />
        </div>
        
        {/* Cosmic rings animation */}
        <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 animate-ping"></div>
        <div className="absolute -inset-2 rounded-3xl border border-accent/20 animate-pulse"></div>
      </div>

      {/* App Name */}
      <h1 className="text-3xl font-bold text-gradient-cosmic mb-2">GenZ AI</h1>
      <p className="text-muted-foreground mb-12 text-center max-w-xs">
        Your AI-powered buddy to explore prompts and chat like GenZ 🚀
      </p>

      {/* Progress Bar Container */}
      <div className="w-64 mb-4">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        
        {/* Horizontal Progress Bar */}
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>

      {/* Loading dots */}
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "w-2 h-2 bg-primary rounded-full animate-pulse",
              `animation-delay-${i * 200}`
            )}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};