import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './MainPage';
import Week1Lesson from './Week1Lesson';
import Week1Vocab from './Week1Vocab';
import Week2Lesson from './Week2Lesson';
import Week2Vocab from './Week2Vocab';
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
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
}

export default App;