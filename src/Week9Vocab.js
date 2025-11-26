import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import WeekHeader from './WeekHeader';

const Week9Vocab = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week9-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('week9-vocab-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vocabulary = [
    {
      category: "Count Situations",
      items: [
        { word: "Hitter's count", meaning: "타자 유리 카운트", pronunciation: "히터즈 카운트", example: "3-1, hitter's count.", example2: "It's a hitter's count, be aggressive.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Pitcher's count", meaning: "투수 유리 카운트", pronunciation: "피처즈 카운트", example: "0-2, pitcher's count.", example2: "Pitcher's count, protect.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Even count", meaning: "동등 카운트", pronunciation: "이븐 카운트", example: "2-2, even count.", example2: "Even count, battle.", freq: "⭐⭐⭐⭐" },
        { word: "Make him throw strikes", meaning: "스트라이크 던지게 만들어", pronunciation: "메이크 힘 쓰로우 스트라익스", example: "Make him throw strikes here.", example2: "Don't help him, make him throw strikes.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Protect the plate", meaning: "플레이트 보호해", pronunciation: "프로텍트 더 플레이트", example: "Two strikes, protect the plate.", example2: "Protect with two strikes.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Runner Situations",
      items: [
        { word: "Move him over", meaning: "주자 진루시켜", pronunciation: "무브 힘 오버", example: "Move him over to third.", example2: "Just move him over, we'll score him.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Bring him in", meaning: "홈으로 들여보내", pronunciation: "브링 힘 인", example: "Bring him in from third.", example2: "Sac fly, bring him in.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Station to station", meaning: "베이스 하나씩", pronunciation: "스테이션 투 스테이션", example: "Play it safe, station to station.", example2: "Station to station baseball.", freq: "⭐⭐⭐⭐" },
        { word: "Tag and go", meaning: "태그업 하고 가", pronunciation: "태그 앤 고", example: "Tag and go on the fly ball.", example2: "Tag up, then go.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Two out magic", meaning: "투아웃 매직", pronunciation: "투 아웃 매직", example: "Two out magic, let's go!", example2: "We do damage with two outs.", freq: "⭐⭐⭐⭐" },
        { word: "RISP", meaning: "득점권 주자", pronunciation: "알아이에스피", example: "Runner in scoring position.", example2: "We got RISP, need a hit.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Pitcher Assessment",
      items: [
        { word: "He's losing it", meaning: "힘 빠지는 중", pronunciation: "히즈 루징 잇", example: "He's losing it, work the count.", example2: "Their pitcher's losing it.", freq: "⭐⭐⭐⭐" },
        { word: "Getting wild", meaning: "제구 흔들려", pronunciation: "게팅 와일드", example: "He's getting wild now.", example2: "Getting wild, be patient.", freq: "⭐⭐⭐⭐" },
        { word: "Working slow", meaning: "천천히 던져", pronunciation: "워킹 슬로우", example: "He's working slow.", example2: "Working slow, losing rhythm.", freq: "⭐⭐⭐" },
        { word: "Rushing his delivery", meaning: "투구폼 급함", pronunciation: "러싱 히즈 딜리버리", example: "He's rushing his delivery.", example2: "Rushing, that's a good sign.", freq: "⭐⭐⭐" },
        { word: "Tipping pitches", meaning: "구종 티남", pronunciation: "티핑 피치즈", example: "He's tipping his curveball.", example2: "Watch for tipping pitches.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Plate Approach",
      items: [
        { word: "Look fastball, adjust breaking ball", meaning: "직구 노리고 변화구 대응", pronunciation: "룩 패스트볼 어저스트 브레이킹 볼", example: "Look fastball, adjust off-speed.", example2: "Fastball mindset, adjust to breaking ball.", freq: "⭐⭐⭐⭐⭐" },
        { word: "See it deep", meaning: "끝까지 봐", pronunciation: "씨 잇 딥", example: "See it deep before swinging.", example2: "See the ball deep.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Stay through the ball", meaning: "공 통과하며 쳐", pronunciation: "스테이 쓰루 더 볼", example: "Stay through the ball.", example2: "Don't pull off, stay through it.", freq: "⭐⭐⭐⭐" },
        { word: "Use the whole field", meaning: "전 필드 활용", pronunciation: "유즈 더 홀 필드", example: "Use the whole field today.", example2: "Don't try to pull everything.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Gap to gap", meaning: "갭 사이로", pronunciation: "갭 투 갭", example: "Gap to gap approach.", example2: "Hit gap to gap.", freq: "⭐⭐⭐⭐" },
        { word: "Quality at-bat", meaning: "좋은 타석", pronunciation: "퀄리티 앳 뱃", example: "Give me a quality at-bat.", example2: "Quality AB here.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Battle", meaning: "싸워 (파울치기)", pronunciation: "배틀", example: "Battle with two strikes.", example2: "Just battle up there.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Defensive Calls",
      items: [
        { word: "No doubles", meaning: "2루타 막아", pronunciation: "노 더블즈", example: "No doubles defense!", example2: "Play no doubles.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Corners in", meaning: "양 코너 앞으로", pronunciation: "코너즈 인", example: "Corners in for the bunt.", example2: "Bring the corners in.", freq: "⭐⭐⭐⭐" },
        { word: "Middle drawn in", meaning: "중간 수비 앞으로", pronunciation: "미들 드론 인", example: "Middle drawn in, turn two.", example2: "Draw the middle in.", freq: "⭐⭐⭐⭐" },
        { word: "Straight away", meaning: "정위치", pronunciation: "스트레이트 어웨이", example: "Play straight away on him.", example2: "Straight away positioning.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Shift on", meaning: "시프트 가동", pronunciation: "쉬프트 온", example: "Shift on for this lefty.", example2: "Put the shift on.", freq: "⭐⭐⭐⭐" },
        { word: "Playing deep", meaning: "깊게", pronunciation: "플레잉 딥", example: "Playing deep to prevent extra bases.", example2: "Play deep on him.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Pressure Moments",
      items: [
        { word: "Two out rally", meaning: "투아웃 랠리", pronunciation: "투 아웃 랠리", example: "Two out rally right here!", example2: "We love two out rallies.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Clutch situation", meaning: "승부처", pronunciation: "클러치 시츄에이션", example: "This is a clutch situation.", example2: "Clutch time.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Need a knock", meaning: "안타 필요해", pronunciation: "니드 어 녹", example: "Need a knock here.", example2: "Get us a knock.", freq: "⭐⭐⭐⭐" },
        { word: "Grind it out", meaning: "악착같이 버텨", pronunciation: "그라인드 잇 아웃", example: "Grind it out this inning.", example2: "Just grind.", freq: "⭐⭐⭐⭐" },
        { word: "Manufacturing runs", meaning: "점수 짜내기", pronunciation: "매뉴팩처링 런즈", example: "We're manufacturing runs today.", example2: "Manufacture a run here.", freq: "⭐⭐⭐⭐" },
        { word: "Small ball", meaning: "소량 득점 야구", pronunciation: "스몰 볼", example: "Play small ball this inning.", example2: "Small ball approach.", freq: "⭐⭐⭐⭐" },
        { word: "Put pressure on defense", meaning: "수비에 압박", pronunciation: "풋 프레셔 온 디펜스", example: "Put pressure on their defense.", example2: "Pressure the defense.", freq: "⭐⭐⭐⭐" },
        { word: "Chip away", meaning: "조금씩 따라가", pronunciation: "칩 어웨이", example: "Chip away at their lead.", example2: "Keep chipping away.", freq: "⭐⭐⭐⭐" },
        { word: "String some hits", meaning: "안타 연결", pronunciation: "스트링 썸 히츠", example: "String some hits together.", example2: "Let's string hits.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Dugout Jargon",
      items: [
        { word: "Pitcher's best friend", meaning: "더블플레이", pronunciation: "피처즈 베스트 프렌드", example: "Double play, pitcher's best friend.", example2: "That's the pitcher's best friend.", freq: "⭐⭐⭐⭐" },
        { word: "Rally killer", meaning: "랠리 죽이기", pronunciation: "랠리 킬러", example: "That double play was a rally killer.", example2: "Rally killer right there.", freq: "⭐⭐⭐⭐" },
        { word: "Crooked number", meaning: "2점 이상 득점", pronunciation: "크룩티드 넘버", example: "Put up a crooked number.", example2: "Need a crooked number this inning.", freq: "⭐⭐⭐⭐" },
        { word: "Ducks on the pond", meaning: "주자들 있음", pronunciation: "덕스 온 더 폰드", example: "We got ducks on the pond!", example2: "Ducks on the pond, drive 'em in.", freq: "⭐⭐⭐⭐" },
        { word: "Meat of the order", meaning: "중심타선", pronunciation: "밋 오브 디 오더", example: "Meat of the order coming up.", example2: "Here comes the meat.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Bottom of the lineup", meaning: "하위타선", pronunciation: "바텀 오브 더 라인업", example: "Bottom of the lineup now.", example2: "Get through the bottom.", freq: "⭐⭐⭐⭐" },
        { word: "Can of corn", meaning: "쉬운 플라이", pronunciation: "캔 오브 콘", example: "That's a can of corn.", example2: "Easy out, can of corn.", freq: "⭐⭐⭐" },
        { word: "Frozen rope", meaning: "강한 직선타", pronunciation: "프로즌 로프", example: "Frozen rope line drive!", example2: "He hit a frozen rope.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Lineup Talk",
      items: [
        { word: "Turning the lineup over", meaning: "타순 한 바퀴", pronunciation: "터닝 더 라인업 오버", example: "Turning the lineup over now.", example2: "Back to the top of the order.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Top of the order", meaning: "상위타선", pronunciation: "탑 오브 디 오더", example: "Top of the order coming up.", example2: "Here comes the top.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Back-to-back", meaning: "연속", pronunciation: "백투백", example: "Back-to-back hits!", example2: "Back-to-back homers!", freq: "⭐⭐⭐⭐" },
        { word: "Set the table", meaning: "출루해서 깔아줘", pronunciation: "셋 더 테이블", example: "Lead-off man, set the table.", example2: "Set the table for the big guys.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Drive 'em in", meaning: "밀어넣어", pronunciation: "드라이브 엠 인", example: "Drive these runners in.", example2: "Your job is to drive 'em in.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Productive out", meaning: "생산적 아웃", pronunciation: "프로덕티브 아웃", example: "At least get a productive out.", example2: "Sac fly, productive out.", freq: "⭐⭐⭐⭐⭐" }
      ]
    }
  ];

  const totalItems = vocabulary.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 pb-20">
      <WeekHeader 
        weekNumber={9}
        type="vocab"
        progress={progress}
        colorFrom="emerald"
        colorTo="teal"
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
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-t-xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-300" size={20} />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{category.category}</h2>
                </div>
                <span className="text-emerald-100 text-sm sm:text-base">
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
                          : 'border-emerald-200 bg-white hover:border-emerald-400'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleCheck(itemId)}
                          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                            isChecked 
                              ? 'bg-green-500 border-green-500' 
                              : 'bg-white border-gray-300 hover:border-emerald-500'
                          }`}
                        >
                          {isChecked && <Check className="text-white" size={16} />}
                        </button>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline gap-2 mb-2">
                            <span className="text-xl sm:text-2xl font-bold text-emerald-900">
                              {item.word}
                            </span>
                            <span className="text-sm text-gray-500">({item.pronunciation})</span>
                          </div>
                          
                          <div className="text-base sm:text-lg text-gray-700 mb-3">
                            = {item.meaning}
                          </div>

                          <div className="space-y-2">
                            <div className="bg-emerald-50 px-3 py-2 rounded text-sm sm:text-base text-gray-800">
                              {item.example}
                            </div>
                            <div className="bg-teal-50 px-3 py-2 rounded text-sm sm:text-base text-gray-800">
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Week 9 Complete!</h3>
            <p className="text-lg sm:text-xl text-green-100">
              All dugout jargon mastered
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/week9-lesson"
            className="flex-1 bg-white hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg border-2 border-gray-200"
          >
            ← Back to Lesson
          </Link>
          <Link 
            to="/"
            className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
          >
            Main Page
          </Link>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center text-emerald-200 text-sm">
          <p>Total: {totalItems} terms • 8 categories</p>
          <p className="mt-2">Progress auto-saved</p>
        </div>
      </div>
    </div>
  );
};

export default Week9Vocab;