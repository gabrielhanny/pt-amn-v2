import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import LetsTalkPage from './pages/LetsTalkPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lets-talk" element={<LetsTalkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;