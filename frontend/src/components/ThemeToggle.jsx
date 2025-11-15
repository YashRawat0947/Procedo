import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F24E1E] focus:ring-offset-2 ${
        isDark ? 'bg-gray-700' : 'bg-[#F24E1E]'
      } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      aria-label={`Switch to ${isDark ? 'bright' : 'dark'} theme`}
    >
      {/* Toggle Circle */}
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {/* Icon inside circle */}
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-gray-700" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-[#F24E1E]" />
        )}
      </div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <Sun 
          className={`w-3.5 h-3.5 transition-opacity duration-300 ${
            isDark ? 'opacity-30 text-gray-400' : 'opacity-0'
          }`} 
        />
        <Moon 
          className={`w-3.5 h-3.5 transition-opacity duration-300 ${
            isDark ? 'opacity-0' : 'opacity-30 text-white'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;