import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Fontawesome React Global Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
