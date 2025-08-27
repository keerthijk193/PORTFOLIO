

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Activities from './pages/Activities';
import Achievements from './pages/Achievements';
import PersonalDetails from './pages/PersonalDetails';

function App() {
  return (
    <Router>
      <div className="portfolio-container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/personal">Personal Details</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/personal" element={<PersonalDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
