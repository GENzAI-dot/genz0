import { Sparkles } from "lucide-react";

const PrototypeBadge = () => {
  return (
    <div className="fixed top-20 right-4 z-[60] animate-slide-in-right">
      <div className="relative">
        <div className="bg-gradient-to-r from-secondary to-primary px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-secondary/30 highlight-pulse">
          <div className="animate-spin-slow">
            <Sparkles className="h-3.5 w-3.5 text-secondary-foreground" />
          </div>
          <span className="text-xs font-bold text-secondary-foreground tracking-wide">
            PROTOTYPE
          </span>
        </div>
        
        {/* Animated ring effect */}
        <div className="absolute inset-0 rounded-full border-2 border-secondary/50 animate-ping-slow" />
      </div>
    </div>
  );
};

export default PrototypeBadge;
