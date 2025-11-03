import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Volume2, Star, Home } from 'lucide-react';

const Week5Vocab = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week5-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('week5-vocab-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vocabulary = [
    {
      category: "공격 전술 용어",
      items: [
        { word: "Bunt", meaning: "번트", pronunciation: "번트", example: "We need a bunt here.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Steal", meaning: "도루", pronunciation: "스틸", example: "Green light to steal.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Hit-and-run", meaning: "히트앤런", pronunciation: "힛앤런", example: "Hit-and-run is on.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Squeeze play", meaning: "스퀴즈 플레이", pronunciation: "스퀴즈 플레이", example: "Squeeze play, runner on third.", freq: "⭐⭐⭐⭐" },
        { word: "Take a pitch", meaning: "공 보내기", pronunciation: "테익 어 피치", example: "Take the first pitch.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Looking fastball", meaning: "직구 노리기", pronunciation: "루킹 패스트볼", example: "Be looking fastball.", freq: "⭐⭐⭐⭐" },
        { word: "Work the count", meaning: "볼카운트 끌기", pronunciation: "워크 더 카운트", example: "Work the count, be patient.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Protect with two strikes", meaning: "2스트라이크 보호", pronunciation: "프로텍트 위드 투 스트라익스", example: "Protect with two strikes.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "수비 전술 용어",
      items: [
        { word: "Shift", meaning: "수비 시프트", pronunciation: "시프트", example: "We're shifting on this guy.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Play deep", meaning: "깊게 서기", pronunciation: "플레이 딥", example: "Play deep, he hits hard.", freq: "⭐⭐⭐⭐" },
        { word: "Play shallow", meaning: "얕게 서기", pronunciation: "플레이 샐로우", example: "Play shallow, watch the bunt.", freq: "⭐⭐⭐⭐" },
        { word: "No doubles", meaning: "2루타 안돼", pronunciation: "노 더블즈", example: "No doubles defense!", freq: "⭐⭐⭐⭐" },
        { word: "Infield in", meaning: "내야 앞으로", pronunciation: "인필드 인", example: "Infield in, runner on third.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Play at home", meaning: "홈 플레이", pronunciation: "플레이 앳 홈", example: "Play's at home only.", freq: "⭐⭐⭐⭐" },
        { word: "Turn two", meaning: "병살 만들기", pronunciation: "턴 투", example: "Turn two if you can.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Cut off", meaning: "중계플레이", pronunciation: "컷 오프", example: "Be ready for the cut off.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "미팅 & 커뮤니케이션",
      items: [
        { word: "Bring it in", meaning: "모여", pronunciation: "브링 잇 인", example: "Bring it in, guys!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Game plan", meaning: "게임 플랜", pronunciation: "게임 플랜", example: "Here's the game plan.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Any questions?", meaning: "질문 있어?", pronunciation: "애니 퀘스쳔스", example: "Any questions?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Make sure", meaning: "확실히 해", pronunciation: "메익 슈어", example: "Make sure you understand.", freq: "⭐⭐⭐⭐⭐" },
        { word: "If confused, call time", meaning: "헷갈리면 타임", pronunciation: "이프 컨퓨즈드 콜 타임", example: "If you're confused, call time.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Let's execute", meaning: "실행하자", pronunciation: "레츠 익스큐트", example: "Let's execute!", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "확인 & 이해 표현",
      items: [
        { word: "I'm on it", meaning: "제가 할게요", pronunciation: "아임 온 잇", example: "I'm on it, Coach!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Copy that", meaning: "알겠습니다", pronunciation: "카피 댓", example: "Copy that, stealing on first move.", freq: "⭐⭐⭐⭐" },
        { word: "Understood", meaning: "이해했습니다", pronunciation: "언더스투드", example: "Understood, Coach.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Roger", meaning: "알았어요", pronunciation: "로저", example: "Roger, I'm ready.", freq: "⭐⭐⭐" },
        { word: "I hear you", meaning: "듣고 있어요", pronunciation: "아이 히어 유", example: "I hear you, Coach.", freq: "⭐⭐⭐⭐" },
        { word: "Will do", meaning: "그렇게 할게요", pronunciation: "윌 두", example: "Will do, thanks Coach.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "명확화 질문",
      items: [
        { word: "Just to clarify", meaning: "확인차", pronunciation: "저스트 투 클래리파이", example: "Just to clarify, you want me to bunt?", freq: "⭐⭐⭐⭐⭐" },
        { word: "So I should...?", meaning: "그럼 제가...?", pronunciation: "소 아이 슈드", example: "So I should steal on first move?", freq: "⭐⭐⭐⭐⭐" },
        { word: "What if...?", meaning: "만약에...?", pronunciation: "왓 이프", example: "What if he throws over?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Which base?", meaning: "어느 베이스?", pronunciation: "위치 베이스", example: "Which base am I covering?", freq: "⭐⭐⭐⭐" },
        { word: "On contact?", meaning: "접촉하면?", pronunciation: "온 컨택트", example: "Do I go on contact?", freq: "⭐⭐⭐⭐" },
        { word: "What's the sign again?", meaning: "사인 다시?", pronunciation: "왓츠 더 사인 어겐", example: "What's the sign for bunt again?", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "사인 관련",
      items: [
        { word: "Signs", meaning: "사인/신호", pronunciation: "사인즈", example: "I got the signs.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Signals", meaning: "시그널", pronunciation: "시그널즈", example: "Watch for my signals.", freq: "⭐⭐⭐⭐" },
        { word: "Indicator", meaning: "지시자", pronunciation: "인디케이터", example: "The indicator is the belt touch.", freq: "⭐⭐⭐" },
        { word: "Read the sign", meaning: "사인 읽기", pronunciation: "리드 더 사인", example: "Read the sign carefully.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Missed the sign", meaning: "사인 놓침", pronunciation: "미스트 더 사인", example: "I missed the sign, sorry.", freq: "⭐⭐⭐⭐" },
        { word: "Call time", meaning: "타임 요청", pronunciation: "콜 타임", example: "Call time if you're unsure.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "게임 상황 용어",
      items: [
        { word: "Late and close", meaning: "막판 접전", pronunciation: "레이트 앤 클로우즈", example: "It's late and close, focus up.", freq: "⭐⭐⭐⭐" },
        { word: "Big inning", meaning: "큰 이닝", pronunciation: "빅 이닝", example: "Let's have a big inning!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Momentum shift", meaning: "분위기 전환", pronunciation: "모멘텀 시프트", example: "This is our momentum shift.", freq: "⭐⭐⭐⭐" },
        { word: "Damage control", meaning: "피해 최소화", pronunciation: "대미지 컨트롤", example: "Damage control, get an out.", freq: "⭐⭐⭐⭐" },
        { word: "Crooked number", meaning: "복수 득점", pronunciation: "크루키드 넘버", example: "Let's put up a crooked number.", freq: "⭐⭐⭐" },
        { word: "One pitch at a time", meaning: "한 공씩", pronunciation: "원 피치 앳 어 타임", example: "One pitch at a time.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "실행 & 반응",
      items: [
        { word: "Execute", meaning: "실행하다", pronunciation: "익스큐트", example: "Let's execute the game plan.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Green light", meaning: "허가/출발", pronunciation: "그린 라잇", example: "You got the green light.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Red light", meaning: "금지/정지", pronunciation: "레드 라잇", example: "Red light, don't go.", freq: "⭐⭐⭐⭐" },
        { word: "On your own", meaning: "너 판단", pronunciation: "온 유어 오운", example: "You're on your own here.", freq: "⭐⭐⭐⭐" },
        { word: "Read the pitcher", meaning: "투수 읽기", pronunciation: "리드 더 피처", example: "Read the pitcher first.", freq: "⭐⭐⭐⭐⭐" },
        { word: "First move", meaning: "첫 움직임", pronunciation: "퍼스트 무브", example: "Go on first move.", freq: "⭐⭐⭐⭐⭐" }
      ]
    }
  ];

  // 체크된 항목 수 계산
  const totalItems = vocabulary.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-4 sm:mb-6 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-indigo-200 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
          <Link to="/week5-lesson" className="text-white hover:text-indigo-200 font-semibold text-sm sm:text-base">
            ← 수업 자료
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md text-white p-6 sm:p-8 rounded-2xl mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">📚 Week 5 단어장</h1>
          <h2 className="text-xl sm:text-2xl mb-4">팀 미팅 - 전술 용어 & 반응 표현</h2>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">학습 진도</span>
              <span className="text-sm font-bold">{checkedCount} / {totalItems} ({progress}%)</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-indigo-400 to-purple-400 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
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
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sm:p-6">
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
                                : 'bg-white border-gray-300 hover:border-indigo-500'
                            }`}
                          >
                            {isChecked && <Check className="text-white" size={20} />}
                          </button>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                              <div>
                                <h4 className="text-xl sm:text-2xl font-bold text-indigo-800">{item.word}</h4>
                                <p className="text-base text-gray-600">({item.pronunciation})</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm">{item.freq}</span>
                                <Volume2 className="text-indigo-600" size={20} />
                              </div>
                            </div>
                            
                            <p className="text-lg text-gray-800 font-semibold mb-2">= {item.meaning}</p>
                            
                            <div className="bg-indigo-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-600 mb-1">예문:</p>
                              <p className="text-base font-semibold text-indigo-800">"{item.example}"</p>
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
              <h4 className="font-bold mb-2">1️⃣ 전술 용어부터 완벽히</h4>
              <p className="text-sm">공격 전술 8개 + 수비 전술 8개를 최우선으로!</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">2️⃣ 사인과 함께 외우기</h4>
              <p className="text-sm">각 전술마다 사인 동작을 함께 연습</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">3️⃣ 확인 표현 자동화</h4>
              <p className="text-sm">"Got it", "I'm on it" 등을 자연스럽게</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">4️⃣ 질문 표현 필수</h4>
              <p className="text-sm">헷갈리면 즉시 질문하는 습관 들이기</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">5️⃣ 상황별 시뮬레이션</h4>
              <p className="text-sm">각 전술이 언제 쓰이는지 상황 연상하며 암기</p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-400/20 backdrop-blur-md rounded-2xl p-6 mb-6 border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-yellow-100 mb-3">⚠️ 핵심 원칙</h3>
          <div className="text-white space-y-2">
            <p className="text-lg font-semibold">• 사인 헷갈리면 = 반드시 타임 요청!</p>
            <p className="text-lg font-semibold">• 추측해서 실행 = 경기 망침</p>
            <p className="text-lg font-semibold">• 질문하는 것 = 프로페셔널!</p>
            <p className="text-lg font-semibold">• 전술 이해 = 경기 승리의 열쇠</p>
          </div>
        </div>

        {/* Progress Summary */}
        {progress === 100 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center mb-6">
            <h3 className="text-3xl font-bold mb-2">🎉 완벽합니다!</h3>
            <p className="text-xl">Week 5 단어를 모두 마스터했어요!</p>
            <p className="text-lg mt-2">이제 팀 전술을 완벽히 이해하고 실행할 수 있어요! 🎯</p>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="bg-white/10 backdrop-blur-md text-white p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to="/week5-lesson" className="text-indigo-200 hover:text-white text-sm sm:text-base">
            ← 수업 자료
          </Link>
          <div className="text-center">
            <p className="font-bold">총 {totalItems}개 단어/표현</p>
            <p className="text-sm">매일 10개씩 암기하면 1주일 완성!</p>
          </div>
          <Link to="/" className="text-indigo-200 hover:text-white text-sm sm:text-base">
            메인 →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Week5Vocab;