import { NavBar } from "./components"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import React, { useEffect } from 'react';
// import Contact from './pages/Contact'; 

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    // Also disable system preference
    document.documentElement.style.colorScheme = 'light';
  }, []);
  
  return (
    <>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About classname="about-content"/>} />
            <Route path='/projects' element={<Projects />} />
            {/* <Route path='/contact' component={Contact} /> */}
          </Routes>
        </Router>
    </>
  )
}