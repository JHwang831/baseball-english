import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Volume2, Star, Home } from 'lucide-react';

const Week2Vocab = () => {
  // localStorage에서 초기값 직접 불러오기
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week2-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

  // 체크 상태 변경될 때마다 저장
  useEffect(() => {
    localStorage.setItem('week2-vocab-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vocabulary = [
    {
      category: "코치 명령문",
      items: [
        { word: "Take a lap", meaning: "한 바퀴 뛰어", pronunciation: "테익 어 랩", example: "Take a lap around the field.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Hustle up", meaning: "서둘러", pronunciation: "허슬 업", example: "Hustle up, let's go!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Line up", meaning: "줄 서", pronunciation: "라인 업", example: "Line up on the baseline.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Pair up", meaning: "짝 지어", pronunciation: "페어 업", example: "Pair up for drills.", freq: "⭐⭐⭐⭐" },
        { word: "Bring it in", meaning: "모여", pronunciation: "브링 잇 인", example: "Bring it in, guys!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Take five", meaning: "5분 쉬어", pronunciation: "테익 파이브", example: "Take five, be back at 3.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Water break", meaning: "물 마셔", pronunciation: "워러 브레익", example: "Water break, 2 minutes.", freq: "⭐⭐⭐⭐⭐" },
        { word: "On the line", meaning: "라인에 서", pronunciation: "온 더 라인", example: "Everyone on the line!", freq: "⭐⭐⭐⭐" },
        { word: "Focus up", meaning: "집중해", pronunciation: "포커스 업", example: "Focus up, pay attention.", freq: "⭐⭐⭐⭐" },
        { word: "Pick it up", meaning: "속도 올려", pronunciation: "픽 잇 업", example: "Pick it up, faster!", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "연습 용어",
      items: [
        { word: "Drill", meaning: "훈련", pronunciation: "드릴", example: "We're doing hitting drills.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Rep", meaning: "반복 횟수", pronunciation: "렙", example: "Give me 10 reps.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Round", meaning: "라운드", pronunciation: "라운드", example: "One more round.", freq: "⭐⭐⭐⭐" },
        { word: "Rotation", meaning: "로테이션", pronunciation: "로테이션", example: "Next rotation!", freq: "⭐⭐⭐⭐" },
        { word: "BP", meaning: "타격 연습", pronunciation: "비피", example: "BP starts at 3.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Bullpen", meaning: "불펜 연습", pronunciation: "불펜", example: "I got bullpen today.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Infield", meaning: "내야 수비", pronunciation: "인필드", example: "Take infield.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Outfield", meaning: "외야 수비", pronunciation: "아웃필드", example: "Outfield practice.", freq: "⭐⭐⭐⭐" },
        { word: "Long toss", meaning: "롱토스", pronunciation: "롱 토스", example: "Let's do long toss.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Soft toss", meaning: "소프트 토스", pronunciation: "소프트 토스", example: "Soft toss drill.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "야구 동작",
      items: [
        { word: "Fly balls", meaning: "뜬공", pronunciation: "플라이 볼즈", example: "Shag some fly balls.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Ground balls", meaning: "땅볼", pronunciation: "그라운드 볼즈", example: "Field ground balls.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Shag", meaning: "공 잡다", pronunciation: "샤그", example: "Go shag in the outfield.", freq: "⭐⭐⭐⭐" },
        { word: "Field", meaning: "수비하다", pronunciation: "필드", example: "Field this ground ball.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Follow through", meaning: "끝까지 따라가다", pronunciation: "팔로우 쓰루", example: "Follow through on your swing.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Footwork", meaning: "발놀림", pronunciation: "풋워크", example: "Watch your footwork.", freq: "⭐⭐⭐⭐" },
        { word: "Stay back", meaning: "뒤에 남다", pronunciation: "스테이 백", example: "Stay back on the ball.", freq: "⭐⭐⭐⭐" },
        { word: "Head down", meaning: "고개 숙이다", pronunciation: "헤드 다운", example: "Keep your head down.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "피드백 & 반응",
      items: [
        { word: "Good job", meaning: "잘했어", pronunciation: "굿 잡", example: "Good job today!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Nice work", meaning: "잘했어", pronunciation: "나이스 워크", example: "Nice work out there.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Keep it up", meaning: "계속해", pronunciation: "킵 잇 업", example: "Keep it up!", freq: "⭐⭐⭐⭐" },
        { word: "That's it", meaning: "그거야", pronunciation: "댓츠 잇", example: "That's it, perfect!", freq: "⭐⭐⭐⭐" },
        { word: "Way to go", meaning: "잘했어", pronunciation: "웨이 투 고", example: "Way to go, nice play!", freq: "⭐⭐⭐⭐" },
        { word: "Work on it", meaning: "노력해", pronunciation: "워크 온 잇", example: "Keep working on it.", freq: "⭐⭐⭐⭐⭐" },
        { word: "You're rushing", meaning: "너무 서둘러", pronunciation: "유어 러싱", example: "You're rushing, slow down.", freq: "⭐⭐⭐" }
      ]
    },
    {
      category: "질문 표현",
      items: [
        { word: "What's next?", meaning: "다음은?", pronunciation: "왓츠 넥스트", example: "What's next, Coach?", freq: "⭐⭐⭐⭐⭐" },
        { word: "What do I need?", meaning: "뭐가 필요해?", pronunciation: "왓 두 아이 니드", example: "What do I need to bring?", freq: "⭐⭐⭐⭐" },
        { word: "Where should I be?", meaning: "어디 있어야 해?", pronunciation: "웨어 슈드 아이 비", example: "Where should I be?", freq: "⭐⭐⭐⭐" },
        { word: "How should I do this?", meaning: "어떻게 해야 해?", pronunciation: "하우 슈드 아이 두 디스", example: "How should I do this?", freq: "⭐⭐⭐⭐" },
        { word: "Can you show me?", meaning: "보여줄 수 있어?", pronunciation: "캔 유 쇼 미", example: "Can you show me how?", freq: "⭐⭐⭐⭐" },
        { word: "Any tips?", meaning: "조언 있어?", pronunciation: "애니 팁스", example: "Any tips, Coach?", freq: "⭐⭐⭐⭐" },
        { word: "Just to make sure", meaning: "확인차", pronunciation: "저스트 투 메익 슈어", example: "Just to make sure I understand.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "컨디션 & 상태",
      items: [
        { word: "Sore", meaning: "아픈", pronunciation: "소어", example: "My arm's a bit sore.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Tight", meaning: "뻐근한", pronunciation: "타잇", example: "I'm feeling tight.", freq: "⭐⭐⭐⭐" },
        { word: "Good to go", meaning: "괜찮아", pronunciation: "굿 투 고", example: "I'm good to go.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Warmed up", meaning: "워밍업 완료", pronunciation: "워므드 업", example: "I'm all warmed up.", freq: "⭐⭐⭐⭐" },
        { word: "Sit this one out", meaning: "이번 건 빠질게", pronunciation: "싯 디스 원 아웃", example: "Can I sit this one out?", freq: "⭐⭐⭐" },
        { word: "Need a break", meaning: "쉬어야 해", pronunciation: "니드 어 브레익", example: "I need a quick break.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "유용한 동사",
      items: [
        { word: "Hustle", meaning: "서두르다", pronunciation: "허슬", example: "Hustle back to the dugout.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Focus", meaning: "집중하다", pronunciation: "포커스", example: "Focus on the ball.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Watch", meaning: "조심하다/보다", pronunciation: "왓치", example: "Watch your footwork.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Slow down", meaning: "천천히", pronunciation: "슬로우 다운", example: "Slow down, don't rush.", freq: "⭐⭐⭐⭐" },
        { word: "Speed up", meaning: "빠르게", pronunciation: "스피드 업", example: "Speed up your swing.", freq: "⭐⭐⭐" },
        { word: "Loosen up", meaning: "풀다", pronunciation: "루즌 업", example: "Loosen up before throwing.", freq: "⭐⭐⭐⭐" }
      ]
    }
  ];

  const phrases = [
    { phrase: "I got bullpen at 3", meaning: "3시에 불펜 있어", pronunciation: "아이 갓 불펜 앳 쓰리" },
    { phrase: "What drill are we doing?", meaning: "무슨 훈련해?", pronunciation: "왓 드릴 아 위 두잉" },
    { phrase: "I'll work on it", meaning: "노력할게", pronunciation: "아일 워크 온 잇" },
    { phrase: "My arm's sore", meaning: "팔이 아파", pronunciation: "마이 암즈 소어" },
    { phrase: "Can you repeat that?", meaning: "다시 말해줄래?", pronunciation: "캔 유 리핏 댓" },
    { phrase: "I'm good to go", meaning: "괜찮아", pronunciation: "아임 굿 투 고" },
    { phrase: "Where should I be?", meaning: "어디 있어야 해?", pronunciation: "웨어 슈드 아이 비" },
    { phrase: "Take a lap", meaning: "한 바퀴 뛰어", pronunciation: "테익 어 랩" },
    { phrase: "Bring it in", meaning: "모여", pronunciation: "브링 잇 인" },
    { phrase: "Any tips, Coach?", meaning: "조언 있어요, 코치?", pronunciation: "애니 팁스, 코치" }
  ];

  const totalItems = vocabulary.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="bg-gradient-to-br from-green-50 to-teal-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-4 sm:mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">📚 Week 2 단어장</h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">연습장 필수 단어 & 표현</h2>
          <div className="bg-white/20 p-3 sm:p-4 rounded-lg">
            <p className="text-base sm:text-lg lg:text-xl">✅ 체크박스 클릭해서 외운 단어 표시</p>
            <p className="text-sm sm:text-base lg:text-lg mt-2">🎯 목표: 70개 단어 100% 암기!</p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 flex items-center gap-2">
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
            <span className="text-2xl sm:text-3xl font-bold text-green-700">{progress}%</span>
          </div>
          {progress === 100 && (
            <div className="mt-4 bg-green-50 border-2 border-green-400 p-3 sm:p-4 rounded-lg text-center">
              <p className="text-lg sm:text-2xl font-bold text-green-700">🎉 완벽! Week 2 단어 모두 외웠어요!</p>
            </div>
          )}
        </div>

        {/* Vocabulary */}
        {vocabulary.map((section, sectionIdx) => (
          <div key={sectionIdx} className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 border-4 border-green-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6 border-b-4 border-green-300 pb-3">
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
                        : 'bg-teal-50 border-teal-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <button
                        onClick={() => toggleCheck(id)}
                        className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg border-2 flex items-center justify-center transition-all ${
                          checkedItems[id]
                            ? 'bg-green-500 border-green-500'
                            : 'bg-white border-green-300 hover:bg-green-600 hover:border-green-600 hover:text-white'
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
                        
                        <div className="bg-teal-50 px-3 sm:px-4 py-2 rounded-lg inline-block mb-3 border border-teal-300">
                          <span className="text-base sm:text-lg flex items-center gap-2">
                            <Volume2 size={18} className="text-teal-700" />
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

        {/* Weekly Schedule */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6">📅 매일 암기 스케줄</h3>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              { day: "월요일", focus: "코치 명령문", count: "10개" },
              { day: "화요일", focus: "연습 용어", count: "10개" },
              { day: "수요일", focus: "야구 동작 + 피드백", count: "15개" },
              { day: "목요일", focus: "질문 표현", count: "7개" },
              { day: "금요일", focus: "컨디션 + 유용한 동사", count: "12개" },
              { day: "토요일", focus: "핵심 구문 + 전체 복습", count: "10개 + 전체" },
              { day: "일요일", focus: "테스트 + 약한 부분", count: "전체" }
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 p-4 sm:p-5 rounded-xl border-2 border-green-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex-1">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 block">{item.day}</span>
                    <p className="text-base sm:text-lg text-gray-700 mt-1">{item.focus}</p>
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-green-700 bg-white px-3 sm:px-4 py-2 rounded-lg">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Tips */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">💡 Week 2 학습 팁</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-purple-200">
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-purple-700">🏃 명령문 암기법</h4>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• 동작과 함께 외우기</li>
                <li>• 코치 흉내내며 말하기</li>
                <li>• 빠르게 반응 연습</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-purple-200">
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-purple-700">⚾ 용어 암기법</h4>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• 실제 연습 상상하며 외우기</li>
                <li>• 야구 영상 보며 확인</li>
                <li>• 소리내어 반복</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 sm:p-6 rounded-2xl text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-3">
            <Link to="/" className="text-green-300 hover:text-green-100 text-sm sm:text-base">← 메인</Link>
            <p className="text-lg sm:text-xl">🎯 목표: 70개 단어 완벽 암기!</p>
            <Link to="/week2-lesson" className="text-orange-300 hover:text-orange-100 text-sm sm:text-base">수업자료 →</Link>
          </div>
          <p className="text-xs sm:text-sm text-gray-400">진도는 자동 저장됩니다 (총 {totalItems}개)</p>
        </div>

      </div>
    </div>
  );
};

export default Week2Vocab;