import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const PrototypeBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      className="fixed top-20 right-4 z-[60]"
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 0 hsl(var(--secondary) / 0)",
            "0 0 20px 5px hsl(var(--secondary) / 0.3)",
            "0 0 0 0 hsl(var(--secondary) / 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative"
      >
        <div className="bg-gradient-to-r from-secondary to-primary px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-secondary/30">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-secondary-foreground" />
          </motion.div>
          <span className="text-xs font-bold text-secondary-foreground tracking-wide">
            PROTOTYPE
          </span>
        </div>
        
        {/* Animated ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-secondary/50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default PrototypeBadge;
