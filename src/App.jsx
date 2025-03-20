import { NavBar } from "./components"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
// import Contact from './pages/Contact'; 

export default function App() {
  return (
    <>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About classname="about-content"/>} />
            {/* <Route path='/contact' component={Contact} /> */}
          </Routes>
        </Router>
    </>
  )
}