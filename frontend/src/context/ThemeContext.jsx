import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('bright');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Always reset to bright on mount/refresh
  useEffect(() => {
    setTheme('bright');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('bright');
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    // Start transition after a brief moment
    setTimeout(() => {
      const newTheme = theme === 'bright' ? 'dark' : 'bright';
      setTheme(newTheme);
      
      // Update DOM classes
      if (newTheme === 'dark') {
        document.documentElement.classList.remove('bright');
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('bright');
      }
      
      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }, 100);
  };

  const value = {
    theme,
    toggleTheme,
    isTransitioning,
    isDark: theme === 'dark',
    isBright: theme === 'bright'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};