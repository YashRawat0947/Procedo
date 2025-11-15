// src/components/ThemeToggleButton.jsx
import React from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggleButton({ small = false }) {
  const { theme, toggleTheme, isLoading } = useTheme();

  return (
    <button
      onClick={() => toggleTheme()}
      disabled={isLoading}
      title="Toggle theme"
      style={{
        padding: small ? '6px 10px' : '8px 12px',
        borderRadius: 8,
        border: '1px solid rgba(0,0,0,0.06)',
        background: 'transparent',
        color: 'inherit',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        opacity: isLoading ? 0.6 : 1,
        fontWeight: 600,
      }}
    >
      {isLoading ? 'Switching…' : theme === 'bright' ? 'Dark' : 'Bright'}
    </button>
  );
}
