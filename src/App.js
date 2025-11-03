import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './MainPage';
import Week1Lesson from './Week1Lesson';
import Week1Vocab from './Week1Vocab';
import Week2Lesson from './Week2Lesson';
import Week2Vocab from './Week2Vocab';
import Week3Lesson from './Week3Lesson';
import Week3Vocab from './Week3Vocab';
import Week4Lesson from './Week4Lesson';
import Week4Vocab from './Week4Vocab';
import Week5Lesson from './Week5Lesson';
import Week5Vocab from './Week5Vocab';
import BottomNav from './BottomNav';
import './App.css';

// 페이지 이동 시 최상단으로 스크롤
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="pb-20">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/week1-lesson" element={<Week1Lesson />} />
          <Route path="/week1-vocab" element={<Week1Vocab />} />
          <Route path="/week2-lesson" element={<Week2Lesson />} />
          <Route path="/week2-vocab" element={<Week2Vocab />} />
          <Route path="/week3-lesson" element={<Week3Lesson />} />
          <Route path="/week3-vocab" element={<Week3Vocab />} />
          <Route path="/week4-lesson" element={<Week4Lesson />} />
          <Route path="/week4-vocab" element={<Week4Vocab />} />
          <Route path="/week5-lesson" element={<Week5Lesson />} />
          <Route path="/week5-vocab" element={<Week5Vocab />} />
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
}

export default App;