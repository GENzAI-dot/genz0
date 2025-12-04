import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Sparkles, Zap, Crown, AlertTriangle } from "lucide-react";

interface SubscriptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionPopup = ({ isOpen, onClose }: SubscriptionPopupProps) => {
  const [showPrototypeAlert, setShowPrototypeAlert] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    setShowPrototypeAlert(true);
  };

  const handleAlertClose = () => {
    setShowPrototypeAlert(false);
    setSelectedPlan(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl"
          >
            {/* Prototype Alert Modal */}
            <AnimatePresence>
              {showPrototypeAlert && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-background/90 backdrop-blur-sm rounded-xl"
                >
                  <motion.div
                    initial={{ scale: 0.8, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.8, y: 20 }}
                    className="p-6 text-center max-w-md"
                  >
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="inline-block mb-4"
                    >
                      <AlertTriangle className="h-16 w-16 text-secondary mx-auto" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gradient-cosmic mb-3">
                      🎉 Prototype Version
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      This is a prototype version of your favourite AI. The real GenZ AI is under development. 
                      You will be notified when it releases. Enjoy the free GenZ AI chatbot available here!
                    </p>
                    <Button
                      onClick={handleAlertClose}
                      className="btn-cosmic"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Got it, Thanks!
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <Card className="card-mystical border-2 border-primary/20 shadow-2xl">
              <CardHeader className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 hover:bg-muted"
                  onClick={onClose}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="text-center space-y-2">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Crown className="h-12 w-12 text-secondary mx-auto" />
                  </motion.div>
                  <CardTitle className="text-2xl text-gradient-cosmic">
                    Upgrade to Premium
                  </CardTitle>
                  <CardDescription>
                    Remove ads & get more AI credits
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Monthly Plan */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-30 group-hover:opacity-50 transition" />
                    <Card className="relative bg-card border-2 border-primary/30 hover:border-primary/60 transition-all cursor-pointer"
                      onClick={() => handlePlanSelect("monthly")}
                    >
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-gradient-cosmic rounded-full mx-auto flex items-center justify-center">
                          <Zap className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly</p>
                          <p className="text-3xl font-bold text-gradient-cosmic">₹10</p>
                          <p className="text-xs text-muted-foreground">/month</p>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p className="flex items-center justify-center gap-2">
                            <Sparkles className="h-4 w-4 text-secondary" />
                            10 AI Credits
                          </p>
                          <p className="flex items-center justify-center gap-2">
                            <span className="text-green-500">✓</span>
                            Ad-free Experience
                          </p>
                        </div>
                        <Button className="w-full btn-cosmic">
                          Subscribe
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* One-time Plan */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-xl blur opacity-30 group-hover:opacity-50 transition" />
                    <Card className="relative bg-card border-2 border-secondary/30 hover:border-secondary/60 transition-all cursor-pointer"
                      onClick={() => handlePlanSelect("onetime")}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                          BEST VALUE
                        </span>
                      </div>
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-gradient-celestial rounded-full mx-auto flex items-center justify-center">
                          <Crown className="h-6 w-6 text-secondary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">One-time</p>
                          <p className="text-3xl font-bold text-gradient-celestial">₹40</p>
                          <p className="text-xs text-muted-foreground">one-time payment</p>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p className="flex items-center justify-center gap-2">
                            <Sparkles className="h-4 w-4 text-secondary" />
                            80 AI Credits
                          </p>
                          <p className="flex items-center justify-center gap-2">
                            <span className="text-green-500">✓</span>
                            Ad-free Experience
                          </p>
                        </div>
                        <Button className="w-full bg-gradient-celestial hover:opacity-90 text-secondary-foreground">
                          Buy Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                  * All plans include ad-free browsing and priority support
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionPopup;
