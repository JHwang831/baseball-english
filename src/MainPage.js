import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, BookOpen, Target, CheckCircle, Lock, Check } from 'lucide-react';

const MainPage = () => {
  // 완료한 주차 상태 관리
  const [completedWeeks, setCompletedWeeks] = useState(() => {
    const saved = localStorage.getItem('completed-weeks');
    return saved ? JSON.parse(saved) : {};
  });

  // 완료한 주차 저장
  useEffect(() => {
    localStorage.setItem('completed-weeks', JSON.stringify(completedWeeks));
  }, [completedWeeks]);

  // 주차 완료 토글
  const toggleWeekCompletion = (week) => {
    setCompletedWeeks(prev => ({
      ...prev,
      [week]: !prev[week]
    }));
  };

  // 완료한 주차 수 계산
  const completedWeeksCount = Object.values(completedWeeks).filter(Boolean).length;

  // 학습한 단어 수 계산
  const getLearnedVocabCount = () => {
    let total = 0;
    
    // Week 1 단어 (41개)
    const week1 = localStorage.getItem('week1-vocab-progress');
    if (week1) {
      const week1Checked = JSON.parse(week1);
      total += Object.values(week1Checked).filter(Boolean).length;
    }
    
    // Week 2 단어 (54개)
    const week2 = localStorage.getItem('week2-vocab-progress');
    if (week2) {
      const week2Checked = JSON.parse(week2);
      total += Object.values(week2Checked).filter(Boolean).length;
    }
    
    // Week 3 단어 (50개)
    const week3 = localStorage.getItem('week3-vocab-progress');
    if (week3) {
      const week3Checked = JSON.parse(week3);
      total += Object.values(week3Checked).filter(Boolean).length;
    }
    
    // Week 4 단어 (53개)
    const week4 = localStorage.getItem('week4-vocab-progress');
    if (week4) {
      const week4Checked = JSON.parse(week4);
      total += Object.values(week4Checked).filter(Boolean).length;
    }
    
    // Week 5 단어 (52개)
    const week5 = localStorage.getItem('week5-vocab-progress');
    if (week5) {
      const week5Checked = JSON.parse(week5);
      total += Object.values(week5Checked).filter(Boolean).length;
    }
    
    return total;
  };

  const learnedVocab = getLearnedVocabCount();

  const curriculum = [
    {
      week: 1,
      title: "팀 첫날 생존 영어",
      subtitle: "자기소개 & 팀원과의 첫 대화",
      topics: ["첫 만남 인사", "자기소개 템플릿", "자주 묻는 질문 10가지", "리액션 표현", "발음 주의사항", "미국 야구팀 문화"],
      difficulty: "⭐⭐☆☆☆",
      duration: "30-40분",
      status: "available",
      vocab: 41
    },
    {
      week: 2,
      title: "연습장에서 코치 지시 이해하기",
      subtitle: "명령문, 축약형, 야구 용어",
      topics: ["코치 명령문", "연습 용어", "피드백 받기", "질문하는 법", "야구 동작 표현"],
      difficulty: "⭐⭐⭐☆☆",
      duration: "40-50분",
      status: "available",
      vocab: 54
    },
    {
      week: 3,
      title: "라커룸 토크 - 슬랭 & 야구 은어",
      subtitle: "팀원들과 진짜 친해지는 법",
      topics: ["라커룸 기본 표현", "야구 슬랭 10개", "긍정 에너지", "팀 서포트", "Do's & Don'ts", "라커룸 문화"],
      difficulty: "⭐⭐⭐☆☆",
      duration: "40-50분",
      status: "available",
      vocab: 50
    },
    {
      week: 4,
      title: "부상 & 컨디션 표현",
      subtitle: "I'm feeling sore / My arm's acting up",
      topics: ["부상 표현 8개", "신체 부위 12개", "트레이너 대화", "컨디션 보고", "예방 팁", "Do's & Don'ts"],
      difficulty: "⭐⭐⭐☆☆",
      duration: "40-50분",
      status: "available",
      vocab: 53
    },
    {
      week: 5,
      title: "팀 미팅 - 전술 용어 & 반응 표현",
      subtitle: "Got it / I'm on it",
      topics: ["공격 전술 8개", "수비 전술 8개", "미팅 표현", "확인 & 질문", "신호 이해", "실전 시나리오"],
      difficulty: "⭐⭐⭐⭐☆",
      duration: "40-50분",
      status: "available",
      vocab: 52
    }
  ];

  const progress = {
    totalWeeks: 36,
    completedWeeks: completedWeeksCount,
    currentWeek: completedWeeksCount + 1,
    totalVocab: 2500,
    learnedVocab: learnedVocab
  };

  const studentInfo = {
    name: "황준석",
    position: "투수 (Pitcher)",
    startDate: "2024년 11월",
    targetDate: "2026년 8월"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6 sm:mb-8">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3">⚾ Baseball English</h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100">미국 대학 야구 실전 영어 마스터</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-4xl sm:text-5xl font-bold">{progress.currentWeek}</div>
              <div className="text-base sm:text-lg">/ {progress.totalWeeks} 주차</div>
            </div>
          </div>

          {/* Student Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <p className="text-blue-200 text-xs sm:text-sm mb-1">학습자</p>
                <p className="text-xl sm:text-2xl font-bold">{studentInfo.name}</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-blue-200 text-xs sm:text-sm mb-1">포지션</p>
                <p className="text-xl sm:text-2xl font-bold">{studentInfo.position}</p>
              </div>
              <div className="text-center sm:text-left col-span-2 sm:col-span-1">
                <p className="text-blue-200 text-xs sm:text-sm mb-1">출국일</p>
                <p className="text-xl sm:text-2xl font-bold">{studentInfo.targetDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dashboard */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                <Calendar className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-xs sm:text-sm">완료한 주차</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{progress.completedWeeks} / {progress.totalWeeks}</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
              <div 
                className="bg-blue-600 h-2 sm:h-3 rounded-full transition-all duration-500"
                style={{ width: `${(progress.completedWeeks / progress.totalWeeks) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                <BookOpen className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-xs sm:text-sm">학습한 단어</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{progress.learnedVocab} / {progress.totalVocab}</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
              <div 
                className="bg-green-600 h-2 sm:h-3 rounded-full transition-all duration-500"
                style={{ width: `${(progress.learnedVocab / progress.totalVocab) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Curriculum List */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">📚 커리큘럼</h2>
            <div className="text-xs sm:text-sm text-gray-600">
              Phase 1: 야구장 영어 생존 키트 (Week 1-12)
            </div>
          </div>

          <div className="space-y-4">
            {curriculum.map((week) => (
              <div 
                key={week.week}
                className={`border-2 rounded-xl p-4 sm:p-6 transition-all ${
                  completedWeeks[week.week]
                    ? 'border-green-300 bg-green-50'
                    : week.status === 'available' 
                    ? 'border-blue-300 bg-blue-50 hover:shadow-lg' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    {/* 체크박스 */}
                    <button
                      onClick={() => toggleWeekCompletion(week.week)}
                      className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg border-2 flex items-center justify-center transition-all ${
                        completedWeeks[week.week]
                          ? 'bg-green-500 border-green-500'
                          : 'bg-white border-gray-300 hover:border-blue-500'
                      }`}
                    >
                      {completedWeeks[week.week] && <Check className="text-white" size={20} />}
                    </button>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                        <span className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-lg">
                          Week {week.week}
                        </span>
                        {week.status === 'available' ? (
                          <CheckCircle className="text-green-600" size={20} />
                        ) : (
                          <Lock className="text-gray-400" size={20} />
                        )}
                        <span className="text-xs sm:text-sm text-gray-600">{week.difficulty}</span>
                        <span className="text-xs sm:text-sm text-gray-600">⏱️ {week.duration}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{week.title}</h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">{week.subtitle}</p>

                      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        {week.topics.map((topic, idx) => (
                          <span 
                            key={idx}
                            className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-200 text-blue-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                        <span>📝 {week.vocab}개 단어/표현</span>
                        {week.status === 'available' && (
                          <>
                            <span>•</span>
                            <span className="text-green-600 font-semibold">✅ 수업 가능</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {week.status === 'available' && (
                    <Link 
                      to={`/week${week.week}-lesson`}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      시작하기
                      <ChevronRight size={20} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
          <p className="text-lg sm:text-2xl font-bold mb-2">🎯 목표: 2026년 8월 미국 대학 야구팀 성공적인 적응</p>
          <p className="text-sm sm:text-lg text-gray-300 mb-4">36주 완주하면 실전 영어 완벽 마스터!</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <span>총 36주 커리큘럼</span>
            <span>•</span>
            <span>2,500+ 필수 단어</span>
            <span>•</span>
            <span>실전 중심 학습</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;