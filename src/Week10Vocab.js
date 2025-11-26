import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import WeekHeader from './WeekHeader';

const Week10Vocab = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week10-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('week10-vocab-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vocabulary = [
    {
      category: "Performance Questions",
      items: [
        { word: "How many pitches?", meaning: "몇 개 던졌어?", pronunciation: "하우 매니 피치즈", example: "How many pitches today?", example2: "Pitch count?", freq: "⭐⭐⭐⭐⭐" },
        { word: "How'd the arm feel?", meaning: "팔 어땠어?", pronunciation: "하우드 디 암 필", example: "How'd the arm feel out there?", example2: "Arm feeling good?", freq: "⭐⭐⭐⭐⭐" },
        { word: "What was working?", meaning: "뭐가 됐어?", pronunciation: "왓 워즈 워킹", example: "What was working for you?", example2: "What pitch was working?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Command issues?", meaning: "제구 문제?", pronunciation: "커맨드 이슈즈", example: "Any command issues today?", example2: "Command was off?", freq: "⭐⭐⭐⭐" },
        { word: "See the ball well?", meaning: "공 잘 봤어?", pronunciation: "씨 더 볼 웰", example: "Did you see the ball well?", example2: "Seeing it okay?", freq: "⭐⭐⭐⭐⭐" },
        { word: "What was he throwing?", meaning: "뭐 던졌어?", pronunciation: "왓 워즈 히 쓰로잉", example: "What was he throwing mostly?", example2: "What'd you see from him?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Make any adjustments?", meaning: "조정했어?", pronunciation: "메이크 애니 어저스트먼츠", example: "Did you make any adjustments?", example2: "Adjust at all?", freq: "⭐⭐⭐⭐" },
        { word: "Swing decisions?", meaning: "스윙 판단?", pronunciation: "스윙 디시전즈", example: "How were your swing decisions?", example2: "Swing decisions good?", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Pitching Stats",
      items: [
        { word: "Threw X innings", meaning: "X이닝 던짐", pronunciation: "쓰루 엑스 이닝즈", example: "Threw 6 innings today.", example2: "Went 7 innings.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Pitch count at X", meaning: "투구 수 X개", pronunciation: "피치 카운트 앳 엑스", example: "Pitch count at 95.", example2: "Got to 102 pitches.", freq: "⭐⭐⭐⭐⭐" },
        { word: "X strikeouts", meaning: "X 삼진", pronunciation: "엑스 스트라익아웃츠", example: "Got 8 strikeouts.", example2: "7 K's today.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Walked X", meaning: "X 볼넷", pronunciation: "워크드 엑스", example: "Walked 2 batters.", example2: "Only walked 1.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Gave up X hits", meaning: "X 안타 맞음", pronunciation: "게이브 업 엑스 히츠", example: "Gave up 5 hits.", example2: "Only gave up 3 hits.", freq: "⭐⭐⭐⭐⭐" },
        { word: "X earned runs", meaning: "X 자책점", pronunciation: "엑스 언드 런즈", example: "2 earned runs today.", example2: "Only 1 earned run.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Hitting Stats",
      items: [
        { word: "X for X", meaning: "X타수 X안타", pronunciation: "엑스 포 엑스", example: "Went 2 for 4.", example2: "3 for 5 today.", freq: "⭐⭐⭐⭐⭐" },
        { word: "X RBI", meaning: "X 타점", pronunciation: "엑스 알비아이", example: "Got 2 RBI.", example2: "3 RBI on that homer.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Drew a walk", meaning: "볼넷 얻음", pronunciation: "드루 어 워크", example: "Drew a walk in the 5th.", example2: "Drew 2 walks.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Struck out X times", meaning: "X번 삼진", pronunciation: "스트럭 아웃 엑스 타임즈", example: "Struck out twice.", example2: "Struck out 3 times.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Left X on base", meaning: "X명 잔루", pronunciation: "레프트 엑스 온 베이스", example: "Left 2 runners on.", example2: "Team left 8 on base.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Hit with RISP", meaning: "득점권 안타", pronunciation: "힛 위드 알아이에스피", example: "Went 1 for 3 with RISP.", example2: "0 for 2 with RISP.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Video Review",
      items: [
        { word: "Let's watch video", meaning: "영상 보자", pronunciation: "렛츠 워치 비디오", example: "Let's watch video tomorrow.", example2: "We'll watch video.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Look at this pitch", meaning: "이 공 봐", pronunciation: "룩 앳 디스 피치", example: "Look at this pitch here.", example2: "Watch this pitch.", freq: "⭐⭐⭐⭐" },
        { word: "See your release point?", meaning: "릴리스포인트 보여?", pronunciation: "씨 유어 릴리스 포인트", example: "See your release point?", example2: "Release point's dropping.", freq: "⭐⭐⭐⭐" },
        { word: "Watch your front side", meaning: "앞쪽 봐", pronunciation: "워치 유어 프론트 사이드", example: "Watch your front side here.", example2: "Front side flying open.", freq: "⭐⭐⭐⭐" },
        { word: "Check your swing path", meaning: "스윙 궤도 봐", pronunciation: "첵 유어 스윙 패쓰", example: "Check your swing path.", example2: "Swing path was long.", freq: "⭐⭐⭐⭐" },
        { word: "You pulled off", meaning: "빠져나갔어", pronunciation: "유 풀드 오프", example: "You pulled off the ball.", example2: "Pulled off early.", freq: "⭐⭐⭐⭐" },
        { word: "Load was late", meaning: "로딩 늦었어", pronunciation: "로드 워즈 레이트", example: "Your load was late.", example2: "Late on the load.", freq: "⭐⭐⭐" },
        { word: "Head came off", meaning: "머리 떨어졌어", pronunciation: "헤드 케임 오프", example: "Head came off the ball.", example2: "Keep your head on it.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Training Assignments",
      items: [
        { word: "Extra bullpen tomorrow", meaning: "내일 추가 불펜", pronunciation: "엑스트라 불펜 투모로우", example: "Extra bullpen at 2.", example2: "Get extra bullpen work.", freq: "⭐⭐⭐⭐" },
        { word: "Cage work", meaning: "타격장 연습", pronunciation: "케이지 워크", example: "Cage work at 3.", example2: "Get some cage work in.", freq: "⭐⭐⭐⭐" },
        { word: "Side session", meaning: "사이드 세션", pronunciation: "사이드 세션", example: "Throw a side session.", example2: "Side tomorrow.", freq: "⭐⭐⭐⭐" },
        { word: "Live BP", meaning: "라이브 타격", pronunciation: "라이브 비피", example: "Live BP tomorrow.", example2: "Get live BP reps.", freq: "⭐⭐⭐⭐" },
        { word: "Film study", meaning: "영상 분석", pronunciation: "필름 스터디", example: "Film study at 10.", example2: "Do film study.", freq: "⭐⭐⭐⭐⭐" },
        { word: "You're going X days", meaning: "X일 쉬어", pronunciation: "유어 고잉 엑스 데이즈", example: "You're going 5 days.", example2: "Going 4 days rest.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Lined up for", meaning: "예정", pronunciation: "라인드 업 포", example: "Lined up for Friday.", example2: "You're lined up Sunday.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Recovery Protocol",
      items: [
        { word: "Ice your arm", meaning: "팔 아이싱", pronunciation: "아이스 유어 암", example: "Ice your arm now.", example2: "Make sure to ice.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Get on the table", meaning: "테이블 올라가", pronunciation: "겟 온 더 테이블", example: "Get on the table for treatment.", example2: "Hop on the table.", freq: "⭐⭐⭐⭐" },
        { word: "Stim treatment", meaning: "전기 자극", pronunciation: "스팀 트리트먼트", example: "Get stim treatment.", example2: "Stim on your shoulder.", freq: "⭐⭐⭐" },
        { word: "Stretch with trainer", meaning: "트레이너랑 스트레칭", pronunciation: "스트레치 위드 트레이너", example: "Stretch with the trainer.", example2: "Trainer will stretch you.", freq: "⭐⭐⭐⭐" },
        { word: "Contrast bath", meaning: "냉온탕", pronunciation: "컨트라스트 배쓰", example: "Do contrast bath.", example2: "Hot-cold cycle.", freq: "⭐⭐⭐" },
        { word: "Soft tissue work", meaning: "연조직 작업", pronunciation: "소프트 티슈 워크", example: "Need soft tissue work.", example2: "Get soft tissue done.", freq: "⭐⭐⭐" },
        { word: "Range of motion", meaning: "가동범위", pronunciation: "레인지 오브 모션", example: "Check range of motion.", example2: "ROM drills.", freq: "⭐⭐⭐⭐" },
        { word: "Report any soreness", meaning: "통증 보고해", pronunciation: "리포트 애니 소어니스", example: "Report any soreness.", example2: "Let me know if sore.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Schedule Info",
      items: [
        { word: "Same time tomorrow", meaning: "내일 같은 시간", pronunciation: "세임 타임 투모로우", example: "Same time tomorrow.", example2: "Tomorrow same time.", freq: "⭐⭐⭐⭐⭐" },
        { word: "First pitch at X", meaning: "X시 시작", pronunciation: "퍼스트 피치 앳 엑스", example: "First pitch at 7.", example2: "Game starts at 1.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Day game", meaning: "낮 경기", pronunciation: "데이 게임", example: "Day game tomorrow.", example2: "It's a day game.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Night game", meaning: "밤 경기", pronunciation: "나이트 게임", example: "Night game at 7.", example2: "It's a night game.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Travel day", meaning: "이동일", pronunciation: "트래블 데이", example: "Travel day tomorrow.", example2: "We travel Thursday.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Off day", meaning: "쉬는 날", pronunciation: "오프 데이", example: "Off day tomorrow.", example2: "We got an off day.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Report at X", meaning: "X시 집합", pronunciation: "리포트 앳 엑스", example: "Report at 2 PM.", example2: "Report time is 10 AM.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Team meeting at X", meaning: "X시 팀 미팅", pronunciation: "팀 미팅 앳 엑스", example: "Team meeting at 1.", example2: "Meeting at noon.", freq: "⭐⭐⭐⭐" }
      ]
    }
  ];

  const totalItems = vocabulary.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 pb-20">
      <WeekHeader 
        weekNumber={10}
        type="vocab"
        progress={progress}
        colorFrom="amber"
        colorTo="orange"
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Vocabulary by Category */}
        {vocabulary.map((category, catIdx) => {
          const categoryId = `cat-${catIdx}`;
          const categoryTotal = category.items.length;
          const categoryChecked = category.items.filter((_, idx) => 
            checkedItems[`${categoryId}-${idx}`]
          ).length;

          return (
            <section key={catIdx} className="mb-6">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-t-xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-300" size={20} />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{category.category}</h2>
                </div>
                <span className="text-amber-100 text-sm sm:text-base">
                  {categoryChecked}/{categoryTotal}
                </span>
              </div>
              
              <div className="bg-white/95 backdrop-blur rounded-b-xl p-4 sm:p-6 space-y-3">
                {category.items.map((item, idx) => {
                  const itemId = `${categoryId}-${idx}`;
                  const isChecked = checkedItems[itemId];

                  return (
                    <div 
                      key={idx}
                      className={`border-2 rounded-lg p-4 transition-all ${
                        isChecked 
                          ? 'border-green-400 bg-green-50 opacity-60' 
                          : 'border-amber-200 bg-white hover:border-amber-400'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleCheck(itemId)}
                          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                            isChecked 
                              ? 'bg-green-500 border-green-500' 
                              : 'bg-white border-gray-300 hover:border-amber-500'
                          }`}
                        >
                          {isChecked && <Check className="text-white" size={16} />}
                        </button>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline gap-2 mb-2">
                            <span className="text-xl sm:text-2xl font-bold text-amber-900">
                              {item.word}
                            </span>
                            <span className="text-sm text-gray-500">({item.pronunciation})</span>
                          </div>
                          
                          <div className="text-base sm:text-lg text-gray-700 mb-3">
                            = {item.meaning}
                          </div>

                          <div className="space-y-2">
                            <div className="bg-amber-50 px-3 py-2 rounded text-sm sm:text-base text-gray-800">
                              {item.example}
                            </div>
                            <div className="bg-orange-50 px-3 py-2 rounded text-sm sm:text-base text-gray-800">
                              {item.example2}
                            </div>
                          </div>

                          <div className="mt-2 text-xs sm:text-sm text-amber-600 font-medium">
                            {item.freq}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Completion Message */}
        {progress === 100 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 sm:p-8 text-center text-white mb-6">
            <div className="text-4xl sm:text-5xl mb-3">🎉</div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Week 10 Complete!</h3>
            <p className="text-lg sm:text-xl text-green-100">
              All post-game terms mastered
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/week10-lesson"
            className="flex-1 bg-white hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg border-2 border-gray-200"
          >
            ← Back to Lesson
          </Link>
          <Link 
            to="/"
            className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
          >
            Main Page
          </Link>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center text-amber-200 text-sm">
          <p>Total: {totalItems} terms • 7 categories</p>
          <p className="mt-2">Progress auto-saved</p>
        </div>
      </div>
    </div>
  );
};

export default Week10Vocab;
