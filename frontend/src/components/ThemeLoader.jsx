import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeLoader = () => {
  const { isTransitioning, theme } = useTheme();
  const isDark = theme === 'dark';

  if (!isTransitioning) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] transition-opacity duration-700 ease-in-out ${
        isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background gradient based on theme */}
      <div 
        className={`absolute inset-0 transition-colors duration-700 ${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-[#FFF6EC] via-white to-[#FFE8D6]'
        }`} 
      />

      {/* Animated Logo - center position during transition */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-140 z-[100] opacity-100 transition-all duration-700"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/Procedo-logo4.png"
          alt="Procedo Logo"
          className="w-38 md:w-40 h-11 md:h-14 transition-all duration-300"
        />
      </div>

      {/* Optional: Loading spinner or animation */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2">
        <div className="flex space-x-2">
          <div 
            className={`w-3 h-3 rounded-full animate-bounce ${
              isDark ? 'bg-[#F24E1E]' : 'bg-[#F24E1E]'
            }`}
            style={{ animationDelay: '0ms' }}
          ></div>
          <div 
            className={`w-3 h-3 rounded-full animate-bounce ${
              isDark ? 'bg-[#F24E1E]' : 'bg-[#F24E1E]'
            }`}
            style={{ animationDelay: '150ms' }}
          ></div>
          <div 
            className={`w-3 h-3 rounded-full animate-bounce ${
              isDark ? 'bg-[#F24E1E]' : 'bg-[#F24E1E]'
            }`}
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeLoader;