import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contactme' element={<ContactMe />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
