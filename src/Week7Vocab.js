import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import WeekHeader from './WeekHeader';

const Week7Vocab = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week7-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('week7-vocab-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vocabulary = [
    {
      category: "Catcher Mound Talk",
      items: [
        { word: "Pound the zone", meaning: "존으로 꽂아", pronunciation: "파운드 더 존", example: "Pound the zone, get ahead.", example2: "Just pound it in there.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Attack", meaning: "공격해", pronunciation: "어택", example: "Attack, attack this guy.", example2: "Let's attack early.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Get ahead", meaning: "앞서가", pronunciation: "겟 어헤드", example: "Get ahead of this guy.", example2: "Get ahead in the count.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Make your pitch", meaning: "네 공 던져", pronunciation: "메이크 유어 피치", example: "Make your pitch here.", example2: "Just make your pitch.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Nothing too good", meaning: "너무 좋은 공 말고", pronunciation: "너씽 투 굿", example: "Nothing too good to hit.", example2: "Don't give him anything good.", freq: "⭐⭐⭐⭐" },
        { word: "Stay away", meaning: "바깥쪽으로", pronunciation: "스테이 어웨이", example: "Stay away from him.", example2: "Keep it away.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Slow it down", meaning: "천천히 가", pronunciation: "슬로우 잇 다운", example: "Slow it down a bit.", example2: "Let's slow the game down.", freq: "⭐⭐⭐⭐" },
        { word: "Deep breath", meaning: "숨 크게", pronunciation: "딥 브레쓰", example: "Take a deep breath.", example2: "Deep breath right here.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Next pitch", meaning: "다음 공", pronunciation: "넥스트 피치", example: "Next pitch, that's all.", example2: "Just the next pitch.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Pitch Selection Talk",
      items: [
        { word: "What you wanna throw?", meaning: "뭐 던질래?", pronunciation: "왓 유 워너 쓰로우", example: "What you wanna throw here?", example2: "What do you wanna go with?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Fastball away", meaning: "바깥쪽 직구", pronunciation: "패스트볼 어웨이", example: "Fastball away, he's late.", example2: "Go fastball away.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Breaking ball", meaning: "변화구", pronunciation: "브레이킹 볼", example: "Breaking ball in the dirt.", example2: "Show him breaking ball.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Heater", meaning: "직구", pronunciation: "히터", example: "Heater up and in.", example2: "Just throw the heater.", freq: "⭐⭐⭐⭐" },
        { word: "Offspeed", meaning: "변속구", pronunciation: "오프스피드", example: "Offspeed down.", example2: "Go offspeed here.", freq: "⭐⭐⭐⭐" },
        { word: "Back door", meaning: "뒷문 (바깥→안)", pronunciation: "백 도어", example: "Back door slider.", example2: "Come back door.", freq: "⭐⭐⭐⭐" },
        { word: "Let me shake", meaning: "거부할게", pronunciation: "렛 미 쉐익", example: "Let me shake to curve.", example2: "I'll shake it off.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Pickoff Communication",
      items: [
        { word: "I got a good look", meaning: "확인했어", pronunciation: "아이 갓 어 굿 룩", example: "I got a good look at him.", example2: "Got a look.", freq: "⭐⭐⭐⭐" },
        { word: "He's leaning", meaning: "몸 기울었어", pronunciation: "히즈 리닝", example: "He's leaning that way.", example2: "He's leaning off.", freq: "⭐⭐⭐⭐" },
        { word: "Pick if you want", meaning: "던져도 돼", pronunciation: "픽 이프 유 원트", example: "Pick if you want to.", example2: "You can pick.", freq: "⭐⭐⭐⭐" },
        { word: "Hold him on", meaning: "붙잡아", pronunciation: "홀드 힘 온", example: "Hold him on first.", example2: "Keep holding him.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Keep him close", meaning: "가까이 둬", pronunciation: "킵 힘 클로우즈", example: "Keep him close to the bag.", example2: "Keep that runner close.", freq: "⭐⭐⭐⭐" },
        { word: "No throw", meaning: "던지지 마", pronunciation: "노 쓰로우", example: "No throw, bad jump.", example2: "I got no throw.", freq: "⭐⭐⭐" }
      ]
    },
    {
      category: "Coach Questions",
      items: [
        { word: "How's the arm?", meaning: "팔 어때?", pronunciation: "하우즈 디 암", example: "How's the arm feeling?", example2: "Arm okay?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Can you face this guy?", meaning: "이 타자 상대할 수 있어?", pronunciation: "캔 유 페이스 디스 가이", example: "Can you face this hitter?", example2: "You got this guy?", freq: "⭐⭐⭐⭐⭐" },
        { word: "What pitch you throwing?", meaning: "뭐 던지고 있어?", pronunciation: "왓 피치 유 쓰로잉", example: "What pitch are you throwing?", example2: "What you been throwing?", freq: "⭐⭐⭐⭐" },
        { word: "Going after him?", meaning: "공격할 거야?", pronunciation: "고잉 애프터 힘", example: "You going after him?", example2: "We going after this guy?", freq: "⭐⭐⭐⭐" },
        { word: "Pitch around", meaning: "피해서 던져", pronunciation: "피치 어라운드", example: "Pitch around this guy.", example2: "Let's pitch around him.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Arm Condition Responses",
      items: [
        { word: "Feeling strong", meaning: "강하게 느껴져", pronunciation: "필링 스트롱", example: "I'm feeling strong.", example2: "Still feeling strong.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Good to go", meaning: "준비됐어", pronunciation: "굿 투 고", example: "I'm good to go.", example2: "Yeah, good to go.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Getting heavy", meaning: "무거워지고 있어", pronunciation: "게팅 헤비", example: "Arm's getting a bit heavy.", example2: "It's getting heavy.", freq: "⭐⭐⭐⭐" },
        { word: "Losing feel", meaning: "감 잃어가", pronunciation: "루징 필", example: "I'm losing feel on my curve.", example2: "Losing the feel.", freq: "⭐⭐⭐" },
        { word: "Arm's dead", meaning: "팔 죽었어", pronunciation: "암즈 데드", example: "My arm's dead.", example2: "Arm's completely dead.", freq: "⭐⭐⭐" },
        { word: "Got nothing left", meaning: "아무것도 안 남았어", pronunciation: "갓 너씽 레프트", example: "I got nothing left.", example2: "Nothing left in the tank.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Infield Calls",
      items: [
        { word: "Play's at first", meaning: "1루로", pronunciation: "플레이즈 앳 퍼스트", example: "Play's at first, guys.", example2: "One out at first.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Turn two", meaning: "병살", pronunciation: "턴 투", example: "Turn two if we can.", example2: "Let's turn two.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Back's going", meaning: "뒷문 닫아", pronunciation: "백스 고잉", example: "Back's going to second.", example2: "I got back.", freq: "⭐⭐⭐⭐" },
        { word: "I got second", meaning: "2루 내가", pronunciation: "아이 갓 세컨드", example: "I got second on the throw.", example2: "I'm at second.", freq: "⭐⭐⭐⭐" },
        { word: "No play", meaning: "안돼", pronunciation: "노 플레이", example: "No play, eat it.", example2: "We got no play.", freq: "⭐⭐⭐⭐" },
        { word: "Tag up", meaning: "태그업", pronunciation: "태그 업", example: "Tag up, runner going.", example2: "He's tagging.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Infield in", meaning: "내야 앞으로", pronunciation: "인필드 인", example: "Infield in!", example2: "Bring it in!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Half way", meaning: "중간쯤", pronunciation: "하프 웨이", example: "Play half way.", example2: "Half way depth.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Quick Game Calls",
      items: [
        { word: "Time", meaning: "타임", pronunciation: "타임", example: "Time! Mound visit.", example2: "I need time.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Let's go", meaning: "가자", pronunciation: "렛츠 고", example: "Let's go, batter up.", example2: "Come on, let's go.", freq: "⭐⭐⭐⭐⭐" },
        { word: "That's it", meaning: "그거야", pronunciation: "댓츠 잇", example: "That's it, right there!", example2: "Yeah, that's it!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Right there", meaning: "거기", pronunciation: "라잇 데어", example: "Right there, perfect spot.", example2: "Keep it right there.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Stay on it", meaning: "계속", pronunciation: "스테이 온 잇", example: "Stay on that fastball.", example2: "Stay on it.", freq: "⭐⭐⭐⭐" },
        { word: "Change eye level", meaning: "높이 바꿔", pronunciation: "체인지 아이 레벨", example: "Change eye level on him.", example2: "Mix the eye level.", freq: "⭐⭐⭐⭐" },
        { word: "Flip sides", meaning: "반대편", pronunciation: "플립 사이즈", example: "Flip sides to inside.", example2: "Let's flip sides.", freq: "⭐⭐⭐⭐" },
        { word: "Set it up", meaning: "깔아둬", pronunciation: "셋 잇 업", example: "Set up the curve.", example2: "Set it up with fastballs.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Pitch Quality Talk",
      items: [
        { word: "Mostly fastball", meaning: "주로 직구", pronunciation: "모스틀리 패스트볼", example: "Mostly fastball today.", example2: "I'm throwing mostly fastballs.", freq: "⭐⭐⭐⭐" },
        { word: "Working curve", meaning: "커브 섞어", pronunciation: "워킹 커브", example: "I'm working the curve in.", example2: "Working my curve ball.", freq: "⭐⭐⭐⭐" },
        { word: "Mixing it up", meaning: "섞어서", pronunciation: "믹싱 잇 업", example: "Just mixing it up.", example2: "I'm mixing pitches.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Lost my release point", meaning: "릴리스포인트 잃었어", pronunciation: "로스트 마이 릴리스 포인트", example: "I lost my release point.", example2: "Can't find release point.", freq: "⭐⭐⭐" },
        { word: "Command is off", meaning: "제구 안 돼", pronunciation: "커맨드 이즈 오프", example: "My command is off today.", example2: "Command's not there.", freq: "⭐⭐⭐" }
      ]
    }
  ];

  const totalItems = vocabulary.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 pb-20">
      <WeekHeader 
        weekNumber={7}
        type="vocab"
        progress={progress}
        colorFrom="indigo"
        colorTo="violet"
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
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-300" size={20} />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{category.category}</h2>
                </div>
                <span className="text-indigo-100 text-sm sm:text-base">
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
                          : 'border-indigo-200 bg-white hover:border-indigo-400'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleCheck(itemId)}
                          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                            isChecked 
                              ? 'bg-green-500 border-green-500' 
                              : 'bg-white border-gray-300 hover:border-indigo-500'
                          }`}
                        >
                          {isChecked && <Check className="text-white" size={16} />}
                        </button>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline gap-2 mb-2">
                            <span className="text-xl sm:text-2xl font-bold text-indigo-900">
                              {item.word}
                            </span>
                            <span className="text-sm text-gray-500">({item.pronunciation})</span>
                          </div>
                          
                          <div className="text-base sm:text-lg text-gray-700 mb-3">
                            = {item.meaning}
                          </div>

                          <div className="space-y-2">
                            <div className="bg-indigo-50 px-3 py-2 rounded text-sm sm:text-base text-gray-800">
                              {item.example}
                            </div>
                            <div className="bg-violet-50 px-3 py-2 rounded text-sm sm:text-base text-gray-800">
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Week 7 Complete!</h3>
            <p className="text-lg sm:text-xl text-green-100">
              All mound communication terms mastered
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/week7-lesson"
            className="flex-1 bg-white hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg border-2 border-gray-200"
          >
            ← Back to Lesson
          </Link>
          <Link 
            to="/"
            className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
          >
            Main Page
          </Link>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center text-indigo-200 text-sm">
          <p>Total: {totalItems} terms • 8 categories</p>
          <p className="mt-2">Progress auto-saved</p>
        </div>
      </div>
    </div>
  );
};

export default Week7Vocab;