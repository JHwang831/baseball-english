import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Volume2, Star, Home } from 'lucide-react';

const Week2Vocab = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week2-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

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

  // 체크된 항목 수 계산
  const totalItems = vocabulary.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="bg-gradient-to-br from-green-900 via-green-800 to-teal-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-4 sm:mb-6 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-green-200 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
          <Link to="/week2-lesson" className="text-white hover:text-green-200 font-semibold text-sm sm:text-base">
            ← 수업 자료
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md text-white p-6 sm:p-8 rounded-2xl mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">📚 Week 2 단어장</h1>
          <h2 className="text-xl sm:text-2xl mb-4">연습장에서 코치 지시 이해하기</h2>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">학습 진도</span>
              <span className="text-sm font-bold">{checkedCount} / {totalItems} ({progress}%)</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-green-400 to-teal-400 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
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
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4 sm:p-6">
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
                                : 'bg-white border-gray-300 hover:border-green-500'
                            }`}
                          >
                            {isChecked && <Check className="text-white" size={20} />}
                          </button>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                              <div>
                                <h4 className="text-xl sm:text-2xl font-bold text-green-800">{item.word}</h4>
                                <p className="text-base text-gray-600">({item.pronunciation})</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm">{item.freq}</span>
                                <Volume2 className="text-green-600" size={20} />
                              </div>
                            </div>
                            
                            <p className="text-lg text-gray-800 font-semibold mb-2">= {item.meaning}</p>
                            
                            <div className="bg-green-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-600 mb-1">예문:</p>
                              <p className="text-base font-semibold text-green-800">"{item.example}"</p>
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
              <p className="text-sm">코치 명령문 → 연습 용어 → 피드백 순서로!</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">2️⃣ 연습장 상황 연상</h4>
              <p className="text-sm">코치가 지시할 때를 구체적으로 상상하며 연습</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">3️⃣ 명령문은 빠르게</h4>
              <p className="text-sm">코치 명령문은 듣자마자 바로 반응해야 해요!</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">4️⃣ 질문 표현 필수</h4>
              <p className="text-sm">이해 못했을 때 용감하게 질문하는 연습!</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">5️⃣ 매일 복습</h4>
              <p className="text-sm">하루 10개씩 암기하면 1주일 완성!</p>
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        {progress === 100 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center mb-6">
            <h3 className="text-3xl font-bold mb-2">🎉 완벽합니다!</h3>
            <p className="text-xl">Week 2 단어를 모두 마스터했어요!</p>
            <p className="text-lg mt-2">이제 연습장에서 코치 지시를 완벽히 이해할 수 있어요! 🔥</p>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="bg-white/10 backdrop-blur-md text-white p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to="/week2-lesson" className="text-green-200 hover:text-white text-sm sm:text-base">
            ← 수업 자료
          </Link>
          <div className="text-center">
            <p className="font-bold">총 {totalItems}개 단어/표현</p>
            <p className="text-sm">매일 10개씩 암기하면 1주일 완성!</p>
          </div>
          <Link to="/" className="text-green-200 hover:text-white text-sm sm:text-base">
            메인 →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Week2Vocab;