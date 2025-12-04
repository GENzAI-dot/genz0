import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (show) {
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
        setParticles([]);
        setConfetti([]);
        onComplete?.();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {/* Soft glow overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"
          />

          {/* Floating flowers */}
          {particles.map((flower) => (
            <motion.div
              key={flower.id}
              initial={{ y: "100vh", x: `${flower.x}vw`, opacity: 0, scale: 0.5 }}
              animate={{
                y: "-20vh",
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 1, 0.8],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                delay: flower.delay,
                ease: "easeOut",
              }}
              className="absolute text-2xl md:text-3xl"
            >
              {flower.emoji}
            </motion.div>
          ))}

          {/* Confetti burst */}
          {confetti.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{
                y: "50vh",
                x: "50vw",
                opacity: 1,
                scale: 1,
              }}
              animate={{
                y: `${Math.random() * 100}vh`,
                x: `${piece.x}vw`,
                opacity: [1, 1, 0],
                rotate: [0, 720],
                scale: [1, 1.5, 0.5],
              }}
              transition={{
                duration: 2,
                delay: piece.delay,
                ease: "easeOut",
              }}
              className="absolute w-3 h-3 rounded-sm"
              style={{ backgroundColor: piece.color }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

// Bad mood effect for logout
export const LogoutEffect = ({ show, onComplete }: { show: boolean; onComplete?: () => void }) => {
  useEffect(() => {
    if (show) {
      // Add shake class to body
      document.body.classList.add("shake-effect");
      
      const timer = setTimeout(() => {
        document.body.classList.remove("shake-effect");
        onComplete?.();
      }, 1500);

      return () => {
        clearTimeout(timer);
        document.body.classList.remove("shake-effect");
      };
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 pointer-events-none z-[100]"
        >
          {/* Dim overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.4, 0] }}
            transition={{ duration: 1.5, times: [0, 0.2, 0.7, 1] }}
            className="absolute inset-0 bg-background/80"
          />
          
          {/* Dull color filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-muted/30 mix-blend-saturation"
          />

          {/* Sad emoji floating away */}
          <motion.div
            initial={{ y: "50%", x: "50%", scale: 1, opacity: 1 }}
            animate={{
              y: "-50%",
              scale: [1, 1.5, 0.5],
              opacity: [1, 1, 0],
              rotate: [0, -20, 20, 0],
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl"
          >
            😢
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Button glow wrapper for auth buttons
export const AuthButtonGlow = ({ children, isActive }: { children: React.ReactNode; isActive?: boolean }) => {
  return (
    <div className="relative">
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/40 via-accent/40 to-secondary/40 blur-lg"
        />
      )}
      {children}
    </div>
  );
};
