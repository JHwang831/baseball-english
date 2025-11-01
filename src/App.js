import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './MainPage';
import Week1Lesson from './Week1Lesson';
import Week1Vocab from './Week1Vocab';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/week1-lesson" element={<Week1Lesson />} />
        <Route path="/week1-vocab" element={<Week1Vocab />} />
      </Routes>
    </Router>
  );
}

export default App;