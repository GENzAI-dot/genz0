import React, { useEffect, useRef, useState } from "react";
import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

interface NavbarProps {
  showLogout?: boolean;
  onLogout?: () => void;
}

const Navbar = ({ showLogout = false, onLogout }: NavbarProps) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <nav className="w-full bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden">
            <img src={logo} alt="GenZ AI Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-gradient-cosmic">genZ</h1>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link to="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
            Privacy
          </Link>
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
              Profile
            </Button>

            {open && (
              <div
                id="profile-menu"
                role="menu"
                className="absolute right-0 mt-2 w-48 rounded-md border bg-popover text-popover-foreground shadow-lg z-50"
              >
                <button
                  role="menuitem"
                  onClick={() => {
                    setOpen(false)
                    onLogout?.()
                  }}
                  className="w-full flex items-center px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
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