import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  showLogout?: boolean;
  onLogout?: () => void;
}

const Navbar = ({ showLogout = false, onLogout }: NavbarProps) => {
  return (
    <nav className="w-full bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-mystical rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">✦</span>
          </div>
          <h1 className="text-2xl font-bold text-gradient-cosmic">AstroAI</h1>
        </div>
        
        {showLogout && (
          <Button
            variant="outline"
            size="sm"
            onClick={onLogout}
            className="hover:bg-muted transition-colors"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;