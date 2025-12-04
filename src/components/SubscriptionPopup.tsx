import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Sparkles, Zap, Crown, AlertTriangle } from "lucide-react";

interface SubscriptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionPopup = ({ isOpen, onClose }: SubscriptionPopupProps) => {
  const [showPrototypeAlert, setShowPrototypeAlert] = useState(false);

  const handlePlanSelect = () => {
    setShowPrototypeAlert(true);
  };

  const handleAlertClose = () => {
    setShowPrototypeAlert(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-2xl animate-scale-in">
        {/* Prototype Alert Modal */}
        {showPrototypeAlert && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/90 backdrop-blur-sm rounded-xl animate-fade-in">
            <div className="p-6 text-center max-w-md animate-scale-in">
              <div className="inline-block mb-4 animate-wiggle">
                <AlertTriangle className="h-16 w-16 text-secondary mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gradient-cosmic mb-3">
                🎉 Prototype Version
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This is a prototype version of your favourite AI. The real GenZ AI is under development. 
                You will be notified when it releases. Enjoy the free GenZ AI chatbot available here!
              </p>
              <Button onClick={handleAlertClose} className="btn-cosmic">
                <Sparkles className="mr-2 h-4 w-4" />
                Got it, Thanks!
              </Button>
            </div>
          </div>
        )}

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
              <div className="animate-float">
                <Crown className="h-12 w-12 text-secondary mx-auto" />
              </div>
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
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-30 group-hover:opacity-50 transition" />
                <Card 
                  className="relative bg-card border-2 border-primary/30 hover:border-primary/60 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  onClick={handlePlanSelect}
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
                    <Button className="w-full btn-cosmic">Subscribe</Button>
                  </CardContent>
                </Card>
              </div>

              {/* One-time Plan */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-xl blur opacity-30 group-hover:opacity-50 transition" />
                <Card 
                  className="relative bg-card border-2 border-secondary/30 hover:border-secondary/60 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  onClick={handlePlanSelect}
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
              </div>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              * All plans include ad-free browsing and priority support
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionPopup;
