import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Volume2, Star, Home } from 'lucide-react';

const Week3Vocab = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week3-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('week3-vocab-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vocabulary = [
    {
      category: "라커룸 기본 표현",
      items: [
        { word: "What's good?", meaning: "어떻게 지내?", pronunciation: "왓츠굿", example: "What's good, man?", freq: "⭐⭐⭐⭐⭐" },
        { word: "You ready?", meaning: "준비됐어?", pronunciation: "유 레디", example: "You ready for the game?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Let's get it!", meaning: "해보자!", pronunciation: "레츠게릿", example: "Let's get it, boys!", freq: "⭐⭐⭐⭐⭐" },
        { word: "We got this!", meaning: "우리 할 수 있어!", pronunciation: "위 갓 디스", example: "We got this, no doubt!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Stay locked in!", meaning: "집중해!", pronunciation: "스테이 락트인", example: "Stay locked in, focus!", freq: "⭐⭐⭐⭐" },
        { word: "That's my guy!", meaning: "그게 바로 내 친구!", pronunciation: "댓츠 마이 가이", example: "That's my guy right there!", freq: "⭐⭐⭐⭐⭐" },
        { word: "You good?", meaning: "괜찮아?", pronunciation: "유굳", example: "You good, bro?", freq: "⭐⭐⭐⭐⭐" },
        { word: "My bad", meaning: "내 실수", pronunciation: "마이배드", example: "My bad, I'll fix it.", freq: "⭐⭐⭐⭐⭐" },
        { word: "No cap", meaning: "진짜로", pronunciation: "노캡", example: "That was insane, no cap.", freq: "⭐⭐⭐⭐" },
        { word: "On God", meaning: "진심으로", pronunciation: "안갓", example: "On God, I'm ready.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "야구 슬랭",
      items: [
        { word: "Dinger", meaning: "홈런", pronunciation: "딩거", example: "Nice dinger!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Heat", meaning: "빠른 공", pronunciation: "히트", example: "Bring the heat!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Gas", meaning: "강속구", pronunciation: "개스", example: "He's throwing gas!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Cheese", meaning: "강속구", pronunciation: "치즈", example: "Throw that cheese!", freq: "⭐⭐⭐⭐" },
        { word: "Painted the corner", meaning: "코너 정확히", pronunciation: "페인티드 더 코너", example: "He painted the corner!", freq: "⭐⭐⭐⭐" },
        { word: "Moonshot", meaning: "높은 홈런", pronunciation: "문샷", example: "That was a moonshot!", freq: "⭐⭐⭐⭐" },
        { word: "Can of corn", meaning: "쉬운 뜬공", pronunciation: "캔 어브 콘", example: "That's a can of corn.", freq: "⭐⭐⭐" },
        { word: "Wheels", meaning: "다리/발", pronunciation: "휠즈", example: "He's got wheels!", freq: "⭐⭐⭐⭐" },
        { word: "Cannon", meaning: "강한 어깨", pronunciation: "캐넌", example: "He's got a cannon!", freq: "⭐⭐⭐⭐" },
        { word: "Ribbie / RBI", meaning: "타점", pronunciation: "리비", example: "Nice ribbie!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Going yard", meaning: "홈런 치다", pronunciation: "고잉 야드", example: "Let's go yard!", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "긍정 에너지 표현",
      items: [
        { word: "Let's go!", meaning: "가자!", pronunciation: "레츠고우", example: "Let's go, team!", freq: "⭐⭐⭐⭐⭐" },
        { word: "That's what I'm talking about!", meaning: "그거야!", pronunciation: "댓츠 왓 아임 토킹 어바웃", example: "That's what I'm talking about!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Hell yeah!", meaning: "완전 좋아!", pronunciation: "헬 예", example: "Hell yeah, let's do it!", freq: "⭐⭐⭐⭐⭐" },
        { word: "We're rolling!", meaning: "우리 잘하고 있어!", pronunciation: "위어 롤링", example: "We're rolling now!", freq: "⭐⭐⭐⭐" },
        { word: "Keep it up!", meaning: "계속해!", pronunciation: "킵 잇 업", example: "Keep it up, boys!", freq: "⭐⭐⭐⭐⭐" },
        { word: "You're dialed in!", meaning: "완전 집중했네!", pronunciation: "유어 다이얼드 인", example: "You're dialed in today!", freq: "⭐⭐⭐⭐" },
        { word: "That's clutch!", meaning: "결정적이야!", pronunciation: "댓츠 클러치", example: "That was clutch!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Unreal!", meaning: "믿을 수 없어!", pronunciation: "언리얼", example: "That was unreal!", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "팀 서포트 표현",
      items: [
        { word: "Shake it off", meaning: "털어내", pronunciation: "쉐익 잇 오프", example: "Shake it off, next play!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Next play", meaning: "다음 플레이", pronunciation: "넥스트 플레이", example: "Forget it, next play!", freq: "⭐⭐⭐⭐⭐" },
        { word: "We got time", meaning: "시간 있어", pronunciation: "위 갓 타임", example: "We got time to come back.", freq: "⭐⭐⭐⭐" },
        { word: "Let's battle", meaning: "싸워보자", pronunciation: "레츠 배틀", example: "Let's battle, boys!", freq: "⭐⭐⭐⭐" },
        { word: "Stay together", meaning: "함께하자", pronunciation: "스테이 투게더", example: "Stay together, team!", freq: "⭐⭐⭐⭐" },
        { word: "Pick him up", meaning: "그를 응원해", pronunciation: "픽 힘 업", example: "Let's pick him up!", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "일상 슬랭",
      items: [
        { word: "Bro", meaning: "형제/친구", pronunciation: "브로", example: "What's up, bro?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Dude", meaning: "친구", pronunciation: "듀드", example: "Dude, that was sick!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Man", meaning: "야", pronunciation: "맨", example: "Hey man!", freq: "⭐⭐⭐⭐⭐" },
        { word: "For real", meaning: "진짜로", pronunciation: "포 리얼", example: "For real? That's crazy!", freq: "⭐⭐⭐⭐⭐" },
        { word: "That's fire", meaning: "진짜 좋다", pronunciation: "댓츠 파이어", example: "That play was fire!", freq: "⭐⭐⭐⭐" },
        { word: "That's sick", meaning: "엄청나다", pronunciation: "댓츠 식", example: "That's sick, bro!", freq: "⭐⭐⭐⭐" },
        { word: "You're good", meaning: "괜찮아", pronunciation: "유어 굿", example: "Don't worry, you're good.", freq: "⭐⭐⭐⭐⭐" },
        { word: "All good", meaning: "다 괜찮아", pronunciation: "올 굿", example: "We're all good.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Facts", meaning: "사실", pronunciation: "팩츠", example: "Facts, bro!", freq: "⭐⭐⭐⭐" },
        { word: "Lowkey", meaning: "은근히", pronunciation: "로우키", example: "I'm lowkey tired.", freq: "⭐⭐⭐⭐" },
        { word: "Highkey", meaning: "확실히", pronunciation: "하이키", example: "That was highkey good.", freq: "⭐⭐⭐" }
      ]
    }
  ];

  // 체크된 항목 수 계산
  const totalItems = vocabulary.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-4 sm:mb-6 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-purple-200 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
          <Link to="/week3-lesson" className="text-white hover:text-purple-200 font-semibold text-sm sm:text-base">
            ← 수업 자료
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md text-white p-6 sm:p-8 rounded-2xl mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">📚 Week 3 단어장</h1>
          <h2 className="text-xl sm:text-2xl mb-4">라커룸 토크 - 슬랭 & 야구 은어</h2>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">학습 진도</span>
              <span className="text-sm font-bold">{checkedCount} / {totalItems} ({progress}%)</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-purple-400 to-pink-400 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{ width: `${progress}%` }}
              >
                {progress > 10 && (
                  <span className="text-xs font-bold text-white">🔥</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Vocabulary Categories */}
        {vocabulary.map((category, catIndex) => (
          <div key={catIndex} className="mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                  <Star className="text-yellow-300" size={28} />
                  {category.category}
                  <span className="text-sm font-normal">({category.items.length}개)</span>
                </h3>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const itemId = `${catIndex}-${itemIndex}`;
                    const isChecked = checkedItems[itemId];
                    
                    return (
                      <div
                        key={itemId}
                        className={`bg-white rounded-xl p-4 transition-all ${
                          isChecked ? 'opacity-60 border-2 border-green-400' : 'border-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Checkbox */}
                          <button
                            onClick={() => toggleCheck(itemId)}
                            className={`flex-shrink-0 w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all ${
                              isChecked
                                ? 'bg-green-500 border-green-500'
                                : 'bg-white border-gray-300 hover:border-purple-500'
                            }`}
                          >
                            {isChecked && <Check className="text-white" size={20} />}
                          </button>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                              <div>
                                <h4 className="text-xl sm:text-2xl font-bold text-purple-800">{item.word}</h4>
                                <p className="text-base text-gray-600">({item.pronunciation})</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm">{item.freq}</span>
                                <Volume2 className="text-purple-600" size={20} />
                              </div>
                            </div>
                            
                            <p className="text-lg text-gray-800 font-semibold mb-2">= {item.meaning}</p>
                            
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-600 mb-1">예문:</p>
                              <p className="text-base font-semibold text-purple-800">"{item.example}"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Study Tips */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6">
          <h3 className="text-2xl font-bold text-white mb-4">💡 암기 팁</h3>
          <div className="space-y-3 text-white">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">1️⃣ 카테고리별로 암기</h4>
              <p className="text-sm">라커룸 표현 → 야구 슬랭 → 긍정 표현 순서로!</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">2️⃣ 소리내서 연습</h4>
              <p className="text-sm">발음 표기를 보면서 큰 소리로 5번씩 따라하기</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">3️⃣ 실전 연습</h4>
              <p className="text-sm">수업 자료의 대화 예시를 보면서 실제로 말해보기</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">4️⃣ 빈도 높은 것부터</h4>
              <p className="text-sm">⭐⭐⭐⭐⭐ 표현들을 최우선으로 완벽하게!</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">5️⃣ 상황 연상</h4>
              <p className="text-sm">각 표현을 어떤 상황에서 쓸지 구체적으로 상상하기</p>
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        {progress === 100 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center mb-6">
            <h3 className="text-3xl font-bold mb-2">🎉 완벽합니다!</h3>
            <p className="text-xl">Week 3 단어를 모두 마스터했어요!</p>
            <p className="text-lg mt-2">이제 라커룸에서 자신있게 대화해보세요! 🔥</p>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="bg-white/10 backdrop-blur-md text-white p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to="/week3-lesson" className="text-purple-200 hover:text-white text-sm sm:text-base">
            ← 수업 자료
          </Link>
          <div className="text-center">
            <p className="font-bold">총 {totalItems}개 단어/표현</p>
            <p className="text-sm">매일 10개씩 암기하면 5일 완성!</p>
          </div>
          <Link to="/" className="text-purple-200 hover:text-white text-sm sm:text-base">
            메인 →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Week3Vocab;