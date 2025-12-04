import { useEffect, useState } from "react";

// Floating flowers for login/signup success
const flowers = ["🌸", "🌺", "🌷", "🌼", "💐", "🌻", "🪻", "🌹"];

interface FloatingFlower {
  id: number;
  emoji: string;
  x: number;
  delay: number;
}

export const CelebrationEffect = ({ show, onComplete }: { show: boolean; onComplete?: () => void }) => {
  const [particles, setParticles] = useState<FloatingFlower[]>([]);
  const [confetti, setConfetti] = useState<{ id: number; x: number; color: string; delay: number }[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      // Generate floating flowers
      const newFlowers: FloatingFlower[] = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        emoji: flowers[Math.floor(Math.random() * flowers.length)],
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
      }));
      setParticles(newFlowers);

      // Generate confetti
      const colors = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))", "#FFD700", "#FF69B4"];
      const newConfetti = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.3,
      }));
      setConfetti(newConfetti);

      const timer = setTimeout(() => {
        setVisible(false);
        setParticles([]);
        setConfetti([]);
        onComplete?.();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Soft glow overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-fade-in" />

      {/* Floating flowers */}
      {particles.map((flower) => (
        <div
          key={flower.id}
          className="absolute text-2xl md:text-3xl animate-float-up"
          style={{
            left: `${flower.x}%`,
            animationDelay: `${flower.delay}s`,
          }}
        >
          {flower.emoji}
        </div>
      ))}

      {/* Confetti burst */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm animate-confetti-burst"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Bad mood effect for logout
export const LogoutEffect = ({ show, onComplete }: { show: boolean; onComplete?: () => void }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      // Add shake class to body
      document.body.classList.add("shake-effect");
      
      const timer = setTimeout(() => {
        document.body.classList.remove("shake-effect");
        setVisible(false);
        onComplete?.();
      }, 1500);

      return () => {
        clearTimeout(timer);
        document.body.classList.remove("shake-effect");
      };
    }
  }, [show, onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {/* Dim overlay */}
      <div className="absolute inset-0 bg-background/60 animate-dim-pulse" />
      
      {/* Dull color filter */}
      <div className="absolute inset-0 bg-muted/30 mix-blend-saturation animate-fade-in-out" />

      {/* Sad emoji floating away */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl animate-sad-float">
        😢
      </div>
    </div>
  );
};

// Button glow wrapper for auth buttons
export const AuthButtonGlow = ({ children, isActive }: { children: React.ReactNode; isActive?: boolean }) => {
  return (
    <div className="relative w-full">
      {isActive && (
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/40 via-accent/40 to-secondary/40 blur-lg animate-glow-pulse" />
      )}
      {children}
    </div>
  );
};
