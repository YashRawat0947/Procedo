import React, { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Bright Theme Pages
import BrightHome from './themes/bright/Home.jsx'
import BrightMission from './themes/bright/Mission.jsx'
import BrightCareer from './themes/bright/Career.jsx'
import BrightOverview from './themes/bright/Overview.jsx'
import BrightPrivacy from './themes/bright/Privacy.jsx'
import BrightCookiePolicy from './themes/bright/CookiePolicy.jsx'
import BrightTermsOfService from './themes/bright/TermsOfService.jsx'

// Dark Theme Pages
import DarkHome from './themes/dark/Home.jsx'
import DarkMission from './themes/dark/Mission.jsx'
import DarkCareer from './themes/dark/Career.jsx'
import DarkOverview from './themes/dark/Overview.jsx'
import DarkPrivacy from './themes/dark/Privacy.jsx'
import DarkCookiePolicy from './themes/dark/CookiePolicy.jsx'
import DarkTermsOfService from './themes/dark/TermsOfService.jsx'

import { ThemeProvider, useTheme } from './context/ThemeContext'
import ThemeLoader from './components/ThemeLoader'

// Theme Router Component
const ThemedRoutes = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Routes>
      <Route path="/" element={isDark ? <DarkHome /> : <BrightHome />} />
      <Route path="/mission" element={isDark ? <DarkMission /> : <BrightMission />} />
      <Route path="/career" element={isDark ? <DarkCareer /> : <BrightCareer />} />
      <Route path="/privacy" element={isDark ? <DarkPrivacy /> : <BrightPrivacy />} />
      <Route path="/company/overview" element={isDark ? <DarkOverview /> : <BrightOverview />} />
      <Route path="/terms-of-service" element={isDark ? <DarkTermsOfService /> : <BrightTermsOfService />} />
      <Route path="/cookie-policy" element={isDark ? <DarkCookiePolicy /> : <BrightCookiePolicy />} />
    </Routes>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true)
  const [fadeInContent, setFadeInContent] = useState(false)
  const [overlayMounted, setOverlayMounted] = useState(true)
  const [overlayVisible, setOverlayVisible] = useState(true)

  useEffect(() => {
    const moveTimer = setTimeout(() => {
      setLoading(false)
      const startContentTimer = setTimeout(() => {
        setFadeInContent(true)
        setOverlayVisible(false)
        const removeOverlayTimer = setTimeout(() => {
          setOverlayMounted(false)
        }, 800)
        return () => clearTimeout(removeOverlayTimer)
      }, 1000)
      return () => clearTimeout(startContentTimer)
    }, 1000)

    return () => clearTimeout(moveTimer)
  }, [])

  return (
    <ThemeProvider>
      {/* Initial Page Load Overlay + Animated Logo */}
      {overlayMounted && (
        <div
          className={`fixed inset-0 z-[90] transition-opacity duration-700 ease-in-out ${
            overlayVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF6EC] via-white to-[#FFE8D6]" />

          {/* Animated Logo - center -> navbar */}
          <div
            className={`fixed transition-all duration-1000 ease-in-out flex items-center gap-3 ${
              loading
                ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-140 z-[100] opacity-100'
                : 'top-4 left-4 md:left-[calc(0.5rem+max((100vw-80rem)/2,0px))] translate-x-0 translate-y-0 scale-100 z-[100] opacity-100'
            }`}
            style={{ willChange: 'transform, top, left, opacity' }}
          >
            <img
              src="/Procedo-logo-3-only.png"
              alt="Procedo Logo"
              className="w-38 md:w-12 h-11 md:h-14 transition-all duration-300"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[#F24E1E] font-bold text-xl md:text-3xl tracking-tight"style={{ fontFamily: "'Nunito', 'Quicksand', 'Rounded Mplus 1c', 'Comfortaa', sans-serif" }}>procedo</span>
              <span className="text-[#1D3557] font-bold ml-2 text-xs md:text-sm tracking-wide">INFOSYSTEMS</span>
            </div>
          </div>
        </div>
      )}

      {/* Theme Transition Loader */}
      <ThemeLoader />

      {/* Main Content - fades in smoothly */}
      <BrowserRouter>
        <div
          className={`transition-all duration-700 ease-out ${
            fadeInContent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ThemedRoutes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)