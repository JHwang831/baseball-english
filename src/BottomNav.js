import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Library } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  
  // 메인 페이지에서는 네비게이션 바 숨기기
  if (location.pathname === '/') {
    return null;
  }
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  // 현재 Week 파악
  const getCurrentWeek = () => {
    if (location.pathname.includes('week1')) return 1;
    if (location.pathname.includes('week2')) return 2;
    if (location.pathname.includes('week3')) return 3;
    if (location.pathname.includes('week4')) return 4;
    if (location.pathname.includes('week5')) return 5;
    if (location.pathname.includes('week6')) return 6;
    if (location.pathname.includes('week7')) return 7;
    if (location.pathname.includes('week8')) return 8;
    if (location.pathname.includes('week9')) return 9;
    if (location.pathname.includes('week10')) return 10;
    return null;
  };

  const currentWeek = getCurrentWeek();
  
  // Week에 따라 네비게이션 아이템 동적 생성
  const getNavItems = () => {
    if (!currentWeek) return [];
    
    return [
      { path: '/', icon: Home, label: '메인' },
      { path: `/week${currentWeek}-lesson`, icon: BookOpen, label: `Week ${currentWeek} 수업` },
      { path: `/week${currentWeek}-vocab`, icon: Library, label: `Week ${currentWeek} 단어장` }
    ];
  };

  const navItems = getNavItems();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/60 backdrop-blur-md border-t border-gray-200/30 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center px-4 sm:px-6 py-2 rounded-lg transition-all min-w-[80px] ${
                  active 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
              >
                <Icon size={24} />
                <span className="text-xs sm:text-sm font-medium mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
