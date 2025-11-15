// Theme configuration file - centralized theme colors and styles

export const themeConfig = {
  bright: {
    // Background colors
    bg: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      tertiary: 'bg-gray-100',
      gradient: 'bg-gradient-to-br from-gray-50 to-gray-100',
      hero: 'bg-gradient-to-br from-gray-50 to-gray-100',
      navbar: 'bg-[rgba(255,246,236,0.85)]',
      footer: 'bg-[#FFF6EC]',
      card: 'bg-white',
      cta: 'bg-[rgba(255,225,219,0.82)]',
    },
    // Text colors
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      tertiary: 'text-gray-500',
      accent: 'text-[#F24E1E]',
      heading: 'text-gray-900',
      muted: 'text-gray-400',
      ctaPrimary: 'text-[#1A355D]',
    },
    // Border colors
    border: {
      primary: 'border-gray-200',
      accent: 'border-[#F24E1E]',
      navbar: 'border-[rgba(242,78,30,0.08)]',
    },
    // Button colors
    button: {
      primary: 'bg-[#F24E1E] hover:bg-[#d63e13] text-white',
      secondary: 'bg-[#FFF6EC] text-[#1A355D] hover:bg-[#FFD9C0]',
      outline: 'border-[#F24E1E] text-[#F24E1E] hover:bg-[#FFF6EC]',
    },
    // Shadow
    shadow: 'shadow-md hover:shadow-lg',
  },
  dark: {
    // Background colors
    bg: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      tertiary: 'bg-gray-700',
      gradient: 'bg-gradient-to-br from-gray-900 to-gray-800',
      hero: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      navbar: 'bg-[rgba(17,24,39,0.85)]',
      footer: 'bg-gray-900',
      card: 'bg-gray-800',
      cta: 'bg-gradient-to-br from-gray-800 to-gray-900',
    },
    // Text colors
    text: {
      primary: 'text-gray-100',
      secondary: 'text-gray-300',
      tertiary: 'text-gray-400',
      accent: 'text-[#F24E1E]',
      heading: 'text-white',
      muted: 'text-gray-500',
      ctaPrimary: 'text-gray-100',
    },
    // Border colors
    border: {
      primary: 'border-gray-700',
      accent: 'border-[#F24E1E]',
      navbar: 'border-[rgba(242,78,30,0.15)]',
    },
    // Button colors
    button: {
      primary: 'bg-[#F24E1E] hover:bg-[#d63e13] text-white',
      secondary: 'bg-gray-700 text-gray-100 hover:bg-gray-600',
      outline: 'border-[#F24E1E] text-[#F24E1E] hover:bg-gray-800',
    },
    // Shadow
    shadow: 'shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40',
  }
};

// Helper function to get theme classes
export const getThemeClasses = (theme, category, key) => {
  return themeConfig[theme]?.[category]?.[key] || '';
};