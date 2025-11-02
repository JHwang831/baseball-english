import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Volume2, Star, Home } from 'lucide-react';

const Week1Vocab = () => {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('week1-vocab-progress');
    if (saved) setCheckedItems(JSON.parse(saved));
  }, []);

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
    }
  ];

  const phrases = [
    { phrase: "Thank you for having me", meaning: "받아주셔서 감사합니다", pronunciation: "땡큐 포 해빙 미" },
    { phrase: "I'm working on it", meaning: "노력중이에요", pronunciation: "아임 워킹 온 잇" },
    { phrase: "Around 90", meaning: "90정도", pronunciation: "어라운드 나인티" },
    { phrase: "Welcome to the team", meaning: "팀에 온 걸 환영해", pronunciation: "웰컴 투 더 팀" },
    { phrase: "See you later", meaning: "나중에 봐", pronunciation: "씨 유 레이러" },
    { phrase: "Good job", meaning: "잘했어", pronunciation: "굿 잡" },
    { phrase: "Let's go!", meaning: "가자!", pronunciation: "렛츠 고!" },
    { phrase: "You got this", meaning: "넌 할 수 있어", pronunciation: "유 갓 디스" }
  ];

  const totalItems = vocabulary.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-4 sm:mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">📚 Week 1 단어장</h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">필수 암기 단어 & 표현</h2>
          <div className="bg-white/20 p-3 sm:p-4 rounded-lg">
            <p className="text-base sm:text-lg lg:text-xl">✅ 체크박스 클릭해서 외운 단어 표시</p>
            <p className="text-sm sm:text-base lg:text-lg mt-2">🎯 목표: 100% 암기!</p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            <Star className="text-yellow-500" size={28} /> 암기 진도
          </h3>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-1 bg-gray-200 rounded-full h-8 sm:h-10">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-600 h-8 sm:h-10 rounded-full transition-all duration-500 flex items-center justify-center"
                style={{ width: `${progress}%` }}
              >
                <span className="text-white font-bold text-sm sm:text-lg">
                  {checkedCount} / {totalItems}
                </span>
              </div>
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-indigo-700">{progress}%</span>
          </div>
          {progress === 100 && (
            <div className="mt-4 bg-green-50 border-2 border-green-400 p-3 sm:p-4 rounded-lg text-center">
              <p className="text-lg sm:text-2xl font-bold text-green-700">🎉 완벽! 모든 단어를 외웠어요!</p>
            </div>
          )}
        </div>

        {/* Vocabulary */}
        {vocabulary.map((section, sectionIdx) => (
          <div key={sectionIdx} className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 border-4 border-blue-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6 border-b-4 border-blue-300 pb-3">
              {section.category} ({section.items.length}개)
            </h3>
            
            <div className="space-y-4">
              {section.items.map((item, itemIdx) => {
                const id = `${sectionIdx}-${itemIdx}`;
                return (
                  <div 
                    key={id}
                    className={`border-2 rounded-xl p-4 sm:p-6 transition-all ${
                      checkedItems[id] 
                        ? 'bg-green-50 border-green-400' 
                        : 'bg-blue-50 border-blue-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <button
                        onClick={() => toggleCheck(id)}
                        className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg border-2 flex items-center justify-center transition-all ${
                          checkedItems[id]
                            ? 'bg-green-500 border-green-500'
                            : 'bg-white border-blue-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white'
                        }`}
                      >
                        {checkedItems[id] && <Check className="text-white" size={20} />}
                      </button>
                      
                      <div className="flex-1">
                        <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-2xl sm:text-3xl font-bold text-gray-900">{item.word}</span>
                          <span className="text-xs sm:text-sm text-orange-600">{item.freq}</span>
                        </div>
                        
                        <div className="mb-3">
                          <span className="text-xl sm:text-2xl text-gray-700">= {item.meaning}</span>
                        </div>
                        
                        <div className="bg-purple-50 px-3 sm:px-4 py-2 rounded-lg inline-block mb-3 border border-purple-300">
                          <span className="text-base sm:text-lg flex items-center gap-2">
                            <Volume2 size={18} className="text-purple-700" />
                            <span className="font-bold">{item.pronunciation}</span>
                          </span>
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                          <span className="text-sm sm:text-base font-semibold text-blue-700">예문:</span>
                          <p className="text-base sm:text-lg mt-1">{item.example}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Phrases */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 border-4 border-orange-300">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4 sm:mb-6 border-b-4 border-orange-300 pb-3">
            🔥 핵심 구문 ({phrases.length}개)
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {phrases.map((item, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl shadow-md border-2 border-orange-200">
                <p className="text-lg sm:text-2xl font-bold text-orange-700 mb-2">"{item.phrase}"</p>
                <p className="text-base sm:text-xl text-gray-700 mb-2">= {item.meaning}</p>
                <div className="bg-orange-50 px-3 py-2 rounded border border-orange-200">
                  <p className="text-sm sm:text-base text-orange-600 flex items-center gap-2">
                    <Volume2 size={16} /> {item.pronunciation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Tips */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">💡 암기 팁</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-purple-200">
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-purple-700">✍️ 쓰면서 외우기</h4>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• 단어 5번씩 쓰기</li>
                <li>• 예문 따라 쓰기</li>
                <li>• 자기만의 예문 만들기</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-purple-200">
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-purple-700">🗣️ 말하면서 외우기</h4>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• 발음 10번씩 따라하기</li>
                <li>• 녹음해서 들어보기</li>
                <li>• 큰 소리로 읽기!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">📅 매일 암기 스케줄</h3>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              { day: "월요일", focus: "필수 인사 + 자기소개", count: "10개" },
              { day: "화요일", focus: "리액션 표현 (긍정)", count: "7개" },
              { day: "수요일", focus: "리액션 표현 (부정)", count: "5개" },
              { day: "목요일", focus: "야구 용어", count: "5개" },
              { day: "금요일", focus: "유용한 표현 + 핵심 구문", count: "14개" },
              { day: "토요일", focus: "전체 복습", count: "전체" },
              { day: "일요일", focus: "테스트", count: "전체" }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-4 sm:p-5 rounded-xl border-2 border-blue-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex-1">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 block">{item.day}</span>
                    <p className="text-base sm:text-lg text-gray-700 mt-1">{item.focus}</p>
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-blue-700 bg-white px-3 sm:px-4 py-2 rounded-lg">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 sm:p-6 rounded-2xl text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-3">
            <Link to="/" className="text-blue-300 hover:text-blue-100 text-sm sm:text-base">← 메인</Link>
            <p className="text-lg sm:text-xl">🎯 목표: 모든 단어 완벽 암기!</p>
            <Link to="/week1-lesson" className="text-orange-300 hover:text-orange-100 text-sm sm:text-base">수업자료 →</Link>
          </div>
          <p className="text-xs sm:text-sm text-gray-400">진도는 자동 저장됩니다 (총 {totalItems}개)</p>
        </div>

      </div>
    </div>
  );
};

export default Week1Vocab;