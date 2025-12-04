import React, { useEffect, useRef, useState } from "react";
import { LogOut, User, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

interface NavbarProps {
  showLogout?: boolean;
  onLogout?: () => void;
  onSubscribe?: () => void;
}

const Navbar = ({ showLogout = false, onLogout, onSubscribe }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="w-full bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <img src={logo} alt="GenZ AI Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-gradient-cosmic group-hover:animate-shimmer bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text">
            genZ
          </h1>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Contact
          </Link>
          <Link to="/privacy" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Privacy
          </Link>
          
          {showLogout && onSubscribe && (
            <Button
              variant="outline"
              size="sm"
              onClick={onSubscribe}
              className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 group highlight-pulse hover:scale-105 active:scale-95"
            >
              <Crown className="h-4 w-4 mr-1.5 text-secondary group-hover:animate-bounce" />
              <span className="hidden sm:inline">Subscribe</span>
            </Button>
          )}
        </div>
        
        {showLogout && (
          <div className="relative" ref={menuRef}>
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-muted transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls="profile-menu"
            >
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Profile</span>
            </Button>

            {open && (
              <div
                id="profile-menu"
                role="menu"
                className="absolute right-0 mt-2 w-48 rounded-md border bg-popover text-popover-foreground shadow-lg z-50 animate-fade-in"
              >
                <button
                  role="menuitem"
                  onClick={() => {
                    setOpen(false);
                    onLogout?.();
                  }}
                  className="w-full flex items-center px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
