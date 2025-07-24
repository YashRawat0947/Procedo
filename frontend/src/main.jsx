import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home.jsx'
import Mission from './Pages/Mission.jsx'
import Overview from './Pages/Overview.jsx'
import Career from './Pages/career.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/company/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
