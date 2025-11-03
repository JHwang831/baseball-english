import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Volume2, Star, Home } from 'lucide-react';

const Week1Vocab = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week1-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('week1-vocab-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vocabulary = [
    {
      category: "필수 인사 표현",
      items: [
        { word: "What's up?", meaning: "뭐해?", pronunciation: "왓섭", example: "What's up, bro?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Nice to meet you", meaning: "만나서 반가워요", pronunciation: "나이스 투 밋 쥬", example: "Nice to meet you, Coach.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Hey man", meaning: "야 친구", pronunciation: "헤이 맨", example: "Hey man, I'm Jake.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Good to meet you", meaning: "만나서 좋아", pronunciation: "굿 투 밋 쥬", example: "Good to meet you, bro.", freq: "⭐⭐⭐⭐" },
        { word: "Bro / Dude", meaning: "형제/친구", pronunciation: "브로 / 듀드", example: "Thanks, bro!", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "자기소개 필수",
      items: [
        { word: "I'm from", meaning: "~에서 왔어", pronunciation: "아임 프럼", example: "I'm from Seoul.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Position", meaning: "포지션", pronunciation: "퍼지션", example: "What position do you play?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Pitcher", meaning: "투수", pronunciation: "피처", example: "I'm a pitcher.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Excited", meaning: "신남", pronunciation: "익사이티드", example: "I'm excited to be here.", freq: "⭐⭐⭐⭐" },
        { word: "Stoked", meaning: "완전 신남", pronunciation: "스토우크트", example: "I'm stoked to be on the team.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "리액션 표현 (긍정)",
      items: [
        { word: "Yeah", meaning: "응", pronunciation: "예", example: "Yeah, for sure.", freq: "⭐⭐⭐⭐⭐" },
        { word: "For sure", meaning: "확실히", pronunciation: "포 슈어", example: "For sure, I'm down.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Got it", meaning: "알겠어", pronunciation: "가릿", example: "Got it, Coach.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Sounds good", meaning: "좋아", pronunciation: "사운즈 굿", example: "Sounds good to me.", freq: "⭐⭐⭐⭐⭐" },
        { word: "I'm down", meaning: "나 할래", pronunciation: "아임 다운", example: "I'm down for that.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Bet", meaning: "오케이", pronunciation: "벳", example: "Bet, I'm there.", freq: "⭐⭐⭐⭐" },
        { word: "100%", meaning: "백퍼", pronunciation: "원 헌드레드", example: "I'm 100% in.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "리액션 표현 (부정)",
      items: [
        { word: "Nah", meaning: "아니", pronunciation: "나", example: "Nah, I'm good.", freq: "⭐⭐⭐⭐⭐" },
        { word: "I'm good", meaning: "괜찮아요", pronunciation: "아임 굿", example: "I'm good, thanks.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Not really", meaning: "별로", pronunciation: "낫 릴리", example: "Not really my thing.", freq: "⭐⭐⭐⭐" },
        { word: "Maybe next time", meaning: "다음에", pronunciation: "메이비 넥스트 타임", example: "Maybe next time.", freq: "⭐⭐⭐⭐" },
        { word: "Can't make it", meaning: "못가", pronunciation: "캔트 메익 잇", example: "Can't make it today.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "야구 기본 용어",
      items: [
        { word: "Fastball", meaning: "직구", pronunciation: "패스트볼", example: "What's your fastball at?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Throw hard", meaning: "세게 던지다", pronunciation: "쓰로우 하드", example: "You throw hard?", freq: "⭐⭐⭐⭐" },
        { word: "Arms", meaning: "투수들", pronunciation: "암즈", example: "We need more arms.", freq: "⭐⭐⭐⭐" },
        { word: "Practice", meaning: "연습", pronunciation: "프랙티스", example: "See you at practice.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Lift", meaning: "웨이트", pronunciation: "리프트", example: "You lift?", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "유용한 표현",
      items: [
        { word: "Appreciate it", meaning: "고마워", pronunciation: "어프리시에잇 잇", example: "Thanks, appreciate it.", freq: "⭐⭐⭐⭐⭐" },
        { word: "My bad", meaning: "내 잘못", pronunciation: "마이 배드", example: "My bad, guys.", freq: "⭐⭐⭐⭐⭐" },
        { word: "No worries", meaning: "괜찮아", pronunciation: "노 워리즈", example: "No worries, bro.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Let me know", meaning: "알려줘", pronunciation: "렛 미 노우", example: "Let me know if you need help.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Wanna", meaning: "~하고 싶어", pronunciation: "와나", example: "Wanna grab lunch?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Gonna", meaning: "~할 거야", pronunciation: "거나", example: "I'm gonna be there.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "필수 구문",
      items: [
        { word: "Thank you for having me", meaning: "받아주셔서 감사합니다", pronunciation: "땡큐 포 해빙 미", example: "Thank you for having me, Coach.", freq: "⭐⭐⭐⭐⭐" },
        { word: "I'm working on it", meaning: "노력중이에요", pronunciation: "아임 워킹 온 잇", example: "I'm working on my English.", freq: "⭐⭐⭐⭐" },
        { word: "Around 90", meaning: "90정도", pronunciation: "어라운드 나인티", example: "My fastball is around 90.", freq: "⭐⭐⭐⭐" },
        { word: "Welcome to the team", meaning: "팀에 온 걸 환영해", pronunciation: "웰컴 투 더 팀", example: "Welcome to the team!", freq: "⭐⭐⭐⭐⭐" },
        { word: "See you later", meaning: "나중에 봐", pronunciation: "씨 유 레이러", example: "See you later, bro.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Good job", meaning: "잘했어", pronunciation: "굿 잡", example: "Good job out there!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Let's go!", meaning: "가자!", pronunciation: "렛츠 고", example: "Let's go, team!", freq: "⭐⭐⭐⭐⭐" },
        { word: "You got this", meaning: "넌 할 수 있어", pronunciation: "유 갓 디스", example: "You got this, man!", freq: "⭐⭐⭐⭐⭐" }
      ]
    }
  ];

  // 체크된 항목 수 계산
  const totalItems = vocabulary.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-4 sm:mb-6 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-blue-200 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
          <Link to="/week1-lesson" className="text-white hover:text-blue-200 font-semibold text-sm sm:text-base">
            ← 수업 자료
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md text-white p-6 sm:p-8 rounded-2xl mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">📚 Week 1 단어장</h1>
          <h2 className="text-xl sm:text-2xl mb-4">팀 첫날 생존 영어</h2>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">학습 진도</span>
              <span className="text-sm font-bold">{checkedCount} / {totalItems} ({progress}%)</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-blue-400 to-indigo-400 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
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
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 sm:p-6">
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
                                : 'bg-white border-gray-300 hover:border-blue-500'
                            }`}
                          >
                            {isChecked && <Check className="text-white" size={20} />}
                          </button>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                              <div>
                                <h4 className="text-xl sm:text-2xl font-bold text-blue-800">{item.word}</h4>
                                <p className="text-base text-gray-600">({item.pronunciation})</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm">{item.freq}</span>
                                <Volume2 className="text-blue-600" size={20} />
                              </div>
                            </div>
                            
                            <p className="text-lg text-gray-800 font-semibold mb-2">= {item.meaning}</p>
                            
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-600 mb-1">예문:</p>
                              <p className="text-base font-semibold text-blue-800">"{item.example}"</p>
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
              <p className="text-sm">인사 표현 → 자기소개 → 리액션 순서로!</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">2️⃣ 소리내서 연습</h4>
              <p className="text-sm">발음 표기를 보면서 큰 소리로 5번씩 따라하기</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">3️⃣ 실전 상황 연상</h4>
              <p className="text-sm">팀 첫날, 코치를 만났을 때를 상상하며 연습</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">4️⃣ 빈도 높은 것부터</h4>
              <p className="text-sm">⭐⭐⭐⭐⭐ 표현들을 최우선으로 완벽하게!</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">5️⃣ 매일 10개씩</h4>
              <p className="text-sm">하루 10개씩 암기하면 4일 만에 완성!</p>
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        {progress === 100 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center mb-6">
            <h3 className="text-3xl font-bold mb-2">🎉 완벽합니다!</h3>
            <p className="text-xl">Week 1 단어를 모두 마스터했어요!</p>
            <p className="text-lg mt-2">이제 팀 첫날 자신있게 인사할 수 있어요! 🔥</p>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="bg-white/10 backdrop-blur-md text-white p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to="/week1-lesson" className="text-blue-200 hover:text-white text-sm sm:text-base">
            ← 수업 자료
          </Link>
          <div className="text-center">
            <p className="font-bold">총 {totalItems}개 단어/표현</p>
            <p className="text-sm">매일 10개씩 암기하면 4일 완성!</p>
          </div>
          <Link to="/" className="text-blue-200 hover:text-white text-sm sm:text-base">
            메인 →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Week1Vocab;