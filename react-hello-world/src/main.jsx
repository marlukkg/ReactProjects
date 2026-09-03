import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link, BrowserRouter, Routes, Route, NavLink, Outlet, useLocation } from 'react-router-dom'
import './index.css'
import "tailwindcss";
import App from './App.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import About from './About.jsx'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./components/ui/navigation-menu"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', backgroundColor: 'gray', display: 'flex', gap: '20px', }}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link to ="/" />}>Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link to ="/about" />}>About</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> 
        </nav>

        {/* Route Configuration */}
        <main className="main-content" style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
          </Routes>

          


          
        </main>
        <footer style={{ padding: '10px', backgroundColor: 'gray', display: 'flex', gap: '20px', }}>
          
        </footer>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
