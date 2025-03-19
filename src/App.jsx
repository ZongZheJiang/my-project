import { NavBar } from "./components"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
// import Contact from './pages/Contact'; 

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        {/* <Route path='/contact' component={Contact} /> */}
      </Routes>
    </Router>
  )
}