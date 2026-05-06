"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './LoadingScreen';

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('has-visited');
    
    if (hasVisited) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('has-visited', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        {children}
      </div>
    </>
  );
}
