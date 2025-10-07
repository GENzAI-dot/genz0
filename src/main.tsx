import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { SplashScreen } from './components/SplashScreen.tsx'
import './index.css'

const Root = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a timeout to hide splash screen after animation
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Give enough time for the splash screen to complete

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return <App />;
};

createRoot(document.getElementById("root")!).render(<Root />);
