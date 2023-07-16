import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe'
import Resume from './pages/Resume'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path='/portfolio' element={<Home />} />
          <Route path='/portfolio/projects' element={<Projects />} />
          <Route path='/portfolio/contactme' element={<ContactMe />}/>
          <Route path='/portfolio/resume' element = {<Resume />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
