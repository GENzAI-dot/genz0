import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'
import App from './App.tsx'
import { SplashScreen } from './components/SplashScreen.tsx'
import './index.css'

const Root = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsAppReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash && !isAppReady) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return <App />;
};

createRoot(document.getElementById("root")!).render(<Root />);
