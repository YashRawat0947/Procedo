import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home.jsx'
import Mission from './Pages/Mission.jsx'
import Career from './Pages/Career.jsx'
import Overview from './Pages/Overview.jsx'
import Privacy from './Pages/Privacy.jsx'
import CookiePolicy from './Pages/CookiePolicy.jsx'
import TermsOfService from './Pages/TermsOfService.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/company/overview" element={<Overview />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
