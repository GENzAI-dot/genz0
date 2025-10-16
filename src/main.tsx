import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { SplashScreen } from './components/SplashScreen.tsx'
import './index.css'

const Root = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <App />
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
    </React.Fragment>
  );
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
