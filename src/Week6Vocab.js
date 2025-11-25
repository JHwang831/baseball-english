import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Home, Star } from 'lucide-react';

const Week6Vocab = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week6-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('week6-vocab-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vocabulary = [
    {
      category: "Pitch Calls",
      items: [
        { word: "Fastball up", meaning: "높은 직구", pronunciation: "패스트볼 업", example: "Fastball up and in.", example2: "Give me fastball up.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Breaking ball down", meaning: "낮은 변화구", pronunciation: "브레이킹 볼 다운", example: "Breaking ball down and away.", example2: "Throw the breaking ball down.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Changeup away", meaning: "바깥쪽 체인지업", pronunciation: "체인지업 어웨이", example: "Changeup away to lefties.", example2: "Go changeup away here.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Backdoor slider", meaning: "뒤쪽 슬라이더", pronunciation: "백도어 슬라이더", example: "Backdoor slider on the corner.", example2: "Try a backdoor slider.", freq: "⭐⭐⭐⭐" },
        { word: "Dot the corner", meaning: "코너 정확히", pronunciation: "닷 더 코너", example: "Dot the corner with the fastball.", example2: "Can you dot it?", freq: "⭐⭐⭐⭐" },
        { word: "Waste one", meaning: "공 버리기", pronunciation: "웨이스트 원", example: "Waste one up here.", example2: "Just waste one outside.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Arm Condition",
      items: [
        { word: "Feels good", meaning: "좋아요", pronunciation: "필스 굿", example: "Arm feels good today.", example2: "Everything feels good.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Loose", meaning: "풀렸어요", pronunciation: "루스", example: "I'm loose and ready.", example2: "Arm's nice and loose.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Little tight", meaning: "좀 뻣뻣해요", pronunciation: "리틀 타잇", example: "Little tight, need more warm-up.", example2: "Still a little tight.", freq: "⭐⭐⭐⭐" },
        { word: "Getting there", meaning: "거의 됐어요", pronunciation: "게팅 데어", example: "I'm getting there, almost ready.", example2: "Arm's getting there.", freq: "⭐⭐⭐⭐" },
        { word: "Ready to go", meaning: "준비됐어요", pronunciation: "레디 투 고", example: "I'm ready to go.", example2: "All good, ready to go.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Mechanics Terms",
      items: [
        { word: "Arm slot", meaning: "팔 각도", pronunciation: "암 슬랏", example: "Keep your arm slot consistent.", example2: "Arm slot's dropping.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Release point", meaning: "릴리스 포인트", pronunciation: "릴리스 포인트", example: "Your release point was high.", example2: "Same release point every time.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Stride", meaning: "발 내딛기", pronunciation: "스트라이드", example: "Shorten your stride a bit.", example2: "Good stride length.", freq: "⭐⭐⭐⭐" },
        { word: "Follow through", meaning: "팔로우 스루", pronunciation: "팔로우 스루", example: "Finish your follow through.", example2: "Good follow through.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Over the top", meaning: "위에서 던지기", pronunciation: "오버 더 탑", example: "Get more over the top.", example2: "Stay over the top.", freq: "⭐⭐⭐⭐" },
        { word: "Three-quarters", meaning: "3/4 각도", pronunciation: "쓰리쿼터스", example: "You're dropping to three-quarters.", example2: "Three-quarters slot today.", freq: "⭐⭐⭐⭐" },
        { word: "Rotate", meaning: "회전하다", pronunciation: "로테이트", example: "Rotate through your hips.", example2: "Good rotation.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Quick Responses",
      items: [
        { word: "Got it", meaning: "알겠어요", pronunciation: "갓 잇", example: "Got it, fastball up.", example2: "Got it, I'll adjust.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Will do", meaning: "그렇게 할게요", pronunciation: "윌 두", example: "Will do, same thing.", example2: "Will do, Coach.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Yeah, I feel it", meaning: "네, 느껴져요", pronunciation: "예, 아이 필 잇", example: "Yeah, I feel it too.", example2: "Yeah, I feel what you mean.", freq: "⭐⭐⭐⭐" },
        { word: "I'll adjust", meaning: "조정할게요", pronunciation: "아일 어져스트", example: "I'll adjust the arm slot.", example2: "I'll adjust next one.", freq: "⭐⭐⭐⭐" },
        { word: "Alright", meaning: "알겠어요", pronunciation: "올라잇", example: "Alright, got it.", example2: "Alright, I'll try.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Felt good", meaning: "좋았어요", pronunciation: "펠트 굿", example: "That one felt good.", example2: "Yeah, felt good.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Let me try again", meaning: "다시 해볼게요", pronunciation: "렛 미 트라이 어겐", example: "Let me try again.", example2: "Let me try one more.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Counting & Progress",
      items: [
        { word: "That's 10", meaning: "10개", pronunciation: "댓츠 텐", example: "That's 10, halfway.", example2: "Okay, that's 10.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Halfway there", meaning: "절반", pronunciation: "하프웨이 데어", example: "Halfway there, feeling good.", example2: "We're halfway there.", freq: "⭐⭐⭐⭐" },
        { word: "Five more", meaning: "5개 더", pronunciation: "파이브 모어", example: "Five more, then we're done.", example2: "Just five more.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Last one", meaning: "마지막", pronunciation: "래스트 원", example: "Last one, finish strong.", example2: "This is the last one.", freq: "⭐⭐⭐⭐⭐" },
        { word: "You're at 35", meaning: "35개 던짐", pronunciation: "유어 앳 써티파이브", example: "You're at 35 now.", example2: "That's 35 total.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Bullpen Phrases",
      items: [
        { word: "Let it eat", meaning: "힘껏 던져", pronunciation: "렛 잇 잇", example: "Let it eat on this one.", example2: "Just let it eat.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Take something off", meaning: "속도 줄여", pronunciation: "테익 썸씽 오프", example: "Take something off the fastball.", example2: "Take a little off.", freq: "⭐⭐⭐⭐" },
        { word: "Pump it in", meaning: "던져넣어", pronunciation: "펌프 잇 인", example: "Just pump it in there.", example2: "Pump fastballs.", freq: "⭐⭐⭐⭐" },
        { word: "Trust it", meaning: "믿고 던져", pronunciation: "트러스트 잇", example: "Trust your stuff.", example2: "Trust it, don't aim.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Finish it", meaning: "마무리해", pronunciation: "피니쉬 잇", example: "Finish strong.", example2: "Finish through it.", freq: "⭐⭐⭐⭐⭐" },
        { word: "That'll play", meaning: "그거면 돼", pronunciation: "댓얼 플레이", example: "That'll play in a game.", example2: "Yeah, that'll play.", freq: "⭐⭐⭐⭐" },
        { word: "Air it out", meaning: "날려버려", pronunciation: "에어 잇 아웃", example: "Air it out, full send.", example2: "Let's air it out.", freq: "⭐⭐⭐⭐" },
        { word: "Dial it in", meaning: "조율해", pronunciation: "다이얼 잇 인", example: "Dial in your mechanics.", example2: "Just dial it in.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Next Start Talk",
      items: [
        { word: "When am I going?", meaning: "언제 던져요?", pronunciation: "웬 앰 아이 고잉", example: "When am I going next?", example2: "When am I up?", freq: "⭐⭐⭐⭐⭐" },
        { word: "How many innings?", meaning: "몇 이닝?", pronunciation: "하우 메니 이닝스", example: "How many innings today?", example2: "How many am I throwing?", freq: "⭐⭐⭐⭐⭐" },
        { word: "What's the plan?", meaning: "계획이 뭐예요?", pronunciation: "왓츠 더 플랜", example: "What's the plan for today?", example2: "What's the game plan?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Attack the zone", meaning: "존 공략", pronunciation: "어택 더 존", example: "Just attack the zone.", example2: "Go after them, attack.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Work inside", meaning: "안쪽 공략", pronunciation: "워크 인사이드", example: "Work inside on righties.", example2: "Let's work inside today.", freq: "⭐⭐⭐⭐" }
      ]
    }
  ];

  const totalItems = vocabulary.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 pb-20">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md sticky top-0 z-10 border-b border-white/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between mb-2">
            <Link to="/" className="inline-flex items-center gap-2 text-teal-100 hover:text-white transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              <Home size={18} />
              <span className="text-sm">Back to Main</span>
            </Link>
            <div className="text-white font-bold text-sm sm:text-base" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Week 6 단어장</div>
          </div>
          {/* Progress Bar */}
          <div className="bg-white/20 rounded-full h-2 sm:h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-teal-400 to-cyan-400 h-full transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: `${progress}%` }}
            >
              {progress > 10 && (
                <span className="text-xs font-bold text-white" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>🔥 {progress}%</span>
              )}
            </div>
          </div>
          {progress < 10 && (
            <div className="text-right mt-1">
              <span className="text-xs text-teal-200" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>{progress}%</span>
            </div>
          )}
        </div>
      </div>

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
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-t-xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-300" size={20} />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{category.category}</h2>
                </div>
                <span className="text-teal-100 text-sm sm:text-base">
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
                          : 'border-teal-200 bg-white hover:border-teal-400'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleCheck(itemId)}
                          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                            isChecked 
                              ? 'bg-green-500 border-green-500' 
                              : 'bg-white border-gray-300 hover:border-teal-500'
                          }`}
                        >
                          {isChecked && <Check className="text-white" size={16} />}
                        </button>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline gap-2 mb-2">
                            <span className="text-xl sm:text-2xl font-bold text-teal-900">
                              {item.word}
                            </span>
                            <span className="text-sm text-gray-500">({item.pronunciation})</span>
                          </div>
                          
                          <div className="text-base sm:text-lg text-gray-700 mb-3">
                            = {item.meaning}
                          </div>

                          <div className="space-y-2">
                            <div className="bg-teal-50 px-3 py-2 rounded text-sm sm:text-base text-gray-800">
                              {item.example}
                            </div>
                            <div className="bg-cyan-50 px-3 py-2 rounded text-sm sm:text-base text-gray-800">
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Week 6 Complete!</h3>
            <p className="text-lg sm:text-xl text-green-100">
              You've mastered all 47 bullpen terms
            </p>
          </div>
        )}

        {/* Study Tips */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Study Tips</h3>
          <div className="space-y-3 text-teal-50">
            <p>1. Practice pitch calls with a partner or recording yourself</p>
            <p>2. Focus on mechanics terms - you'll hear these constantly</p>
            <p>3. Memorize quick responses for smooth communication</p>
            <p>4. Use high-frequency terms (⭐⭐⭐⭐⭐) first</p>
            <p>5. Watch bullpen videos to hear terms in context</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/week6-lesson"
            className="flex-1 bg-white hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg border-2 border-gray-200"
          >
            ← Back to Lesson
          </Link>
          <Link 
            to="/"
            className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
          >
            Main Page
          </Link>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center text-teal-200 text-sm">
          <p>Total: 47 terms • 7 categories</p>
          <p className="mt-2">Progress auto-saved</p>
        </div>
      </div>
    </div>
  );
};

export default Week6Vocab;