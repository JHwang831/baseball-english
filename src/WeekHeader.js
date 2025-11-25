import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const WeekHeader = ({ 
  weekNumber, 
  title, 
  type = 'lesson', // 'lesson' or 'vocab'
  progress = null, // vocab일 때만 progress 전달
  colorFrom = 'teal', // 색상 커스터마이징
  colorTo = 'cyan'
}) => {
  const titleText = type === 'vocab' ? `Week ${weekNumber} 단어장` : title;
  
  return (
    <div className="bg-white/10 backdrop-blur-md sticky top-0 z-10 border-b border-white/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
        <div className={`flex items-center justify-between ${type === 'vocab' ? 'mb-2' : ''}`}>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors" 
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
          >
            <Home size={18} />
            <span className="text-sm">Back to Main</span>
          </Link>
          <div 
            className="text-white font-bold text-sm sm:text-base" 
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
          >
            {titleText}
          </div>
        </div>
        
        {/* Progress Bar (Vocab 페이지만) */}
        {type === 'vocab' && progress !== null && (
          <>
            <div className="bg-white/20 rounded-full h-2 sm:h-3 overflow-hidden">
              <div 
                className={`bg-gradient-to-r from-${colorFrom}-400 to-${colorTo}-400 h-full transition-all duration-500 flex items-center justify-end pr-2`}
                style={{ width: `${progress}%` }}
              >
                {progress > 10 && (
                  <span 
                    className="text-xs font-bold text-white" 
                    style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
                  >
                    🔥 {progress}%
                  </span>
                )}
              </div>
            </div>
            {progress < 10 && (
              <div className="text-right mt-1">
                <span 
                  className="text-xs text-white/70" 
                  style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
                >
                  {progress}%
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WeekHeader;
