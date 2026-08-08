import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link, BrowserRouter, Routes, Route, NavLink, Outlet, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import About from './About.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', backgroundColor: '#0c1287', display: 'flex', gap: '20px',  }}>
          <Link to="/" >Home</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* Route Configuration */}
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
