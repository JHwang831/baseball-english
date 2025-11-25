import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import WeekHeader from './WeekHeader';

const Week8Vocab = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week8-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('week8-vocab-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vocabulary = [
    {
      category: "Warm-Up Talk",
      items: [
        { word: "Let's get loose", meaning: "몸 풀자", pronunciation: "렛츠 겟 루스", example: "Let's get loose before BP.", example2: "Time to get loose.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Get your arm going", meaning: "팔 돌려", pronunciation: "겟 유어 암 고잉", example: "Get your arm going early.", example2: "Start getting your arm going.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Hold that stretch", meaning: "스트레칭 유지해", pronunciation: "홀드 댓 스트레치", example: "Hold that stretch for 30 seconds.", example2: "Hold it, hold it.", freq: "⭐⭐⭐⭐" },
        { word: "Feel the pull", meaning: "당김 느껴봐", pronunciation: "필 더 풀", example: "Feel the pull in your hamstring.", example2: "You should feel the pull.", freq: "⭐⭐⭐" },
        { word: "Don't bounce", meaning: "튕기지 마", pronunciation: "돈트 바운스", example: "Don't bounce when stretching.", example2: "No bouncing.", freq: "⭐⭐⭐⭐" },
        { word: "Back it up", meaning: "뒤로 가", pronunciation: "백 잇 업", example: "Back it up 10 more feet.", example2: "Keep backing up.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Come in now", meaning: "이제 들어와", pronunciation: "컴 인 나우", example: "Come in now, that's enough.", example2: "Start coming in.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Long toss done", meaning: "롱토스 끝", pronunciation: "롱 토스 던", example: "Long toss is done.", example2: "We're done with long toss.", freq: "⭐⭐⭐⭐" },
        { word: "Get on the mound", meaning: "마운드 올라가", pronunciation: "겟 온 더 마운드", example: "Get on the mound now.", example2: "Time to get on the mound.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Warm-up pitches", meaning: "워밍업 피칭", pronunciation: "워밍업 피치즈", example: "Take your warm-up pitches.", example2: "How many warm-ups you need?", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Arm Care",
      items: [
        { word: "Ice your arm", meaning: "팔 아이싱", pronunciation: "아이스 유어 암", example: "Ice your arm after throwing.", example2: "Don't forget to ice.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Get treatment", meaning: "치료 받아", pronunciation: "겟 트리트먼트", example: "Get treatment before the game.", example2: "Go get treatment.", freq: "⭐⭐⭐⭐" },
        { word: "Do your bands", meaning: "밴드 운동해", pronunciation: "두 유어 밴즈", example: "Did you do your bands?", example2: "Don't skip bands.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Foam roll it", meaning: "폼롤러 써", pronunciation: "폼 롤 잇", example: "Foam roll your legs.", example2: "Go foam roll.", freq: "⭐⭐⭐⭐" },
        { word: "J-bands", meaning: "J밴드", pronunciation: "제이밴즈", example: "J-bands before every throw.", example2: "Did your J-bands?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Arm sleeves", meaning: "암슬리브", pronunciation: "암 슬리브즈", example: "Put your arm sleeves on.", example2: "Got your sleeves?", freq: "⭐⭐⭐⭐" },
        { word: "Any tightness?", meaning: "뻐근한 데 있어?", pronunciation: "애니 타잇니스", example: "Feel any tightness?", example2: "Any tightness in the shoulder?", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Game Plan Talk",
      items: [
        { word: "Who are we facing?", meaning: "누구 상대해?", pronunciation: "후 아 위 페이싱", example: "Who are we facing today?", example2: "Who's their starter?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Their ace", meaning: "상대 에이스", pronunciation: "데어 에이스", example: "We're facing their ace.", example2: "Their ace is throwing today.", freq: "⭐⭐⭐⭐" },
        { word: "Hard thrower", meaning: "강속구 투수", pronunciation: "하드 쓰로워", example: "He's a hard thrower.", example2: "Hard thrower, mid-90s.", freq: "⭐⭐⭐⭐" },
        { word: "Lefty-heavy", meaning: "좌타자 많은", pronunciation: "레프티 헤비", example: "Their lineup is lefty-heavy.", example2: "Lefty-heavy today.", freq: "⭐⭐⭐" },
        { word: "Power lineup", meaning: "장타 라인업", pronunciation: "파워 라인업", example: "They got a power lineup.", example2: "Power lineup top to bottom.", freq: "⭐⭐⭐⭐" },
        { word: "Speed guys", meaning: "빠른 주자들", pronunciation: "스피드 가이즈", example: "Watch out for their speed guys.", example2: "They got speed guys.", freq: "⭐⭐⭐⭐" },
        { word: "Scouting report", meaning: "스카우팅 리포트", pronunciation: "스카우팅 리포트", example: "Check the scouting report.", example2: "Did you read the report?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Attack early", meaning: "초반 공격", pronunciation: "어택 얼리", example: "Let's attack early in counts.", example2: "Attack early, get ahead.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Work ahead", meaning: "앞서가며", pronunciation: "워크 어헤드", example: "Work ahead in the count.", example2: "Just work ahead.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Locker Room Prep",
      items: [
        { word: "Get dressed", meaning: "옷 갈아입어", pronunciation: "겟 드레스트", example: "Get dressed, game soon.", example2: "Time to get dressed.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Tape up", meaning: "테이핑해", pronunciation: "테입 업", example: "Tape up your fingers.", example2: "Need to tape up?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Lace up", meaning: "끈 묶어", pronunciation: "레이스 업", example: "Lace up your cleats.", example2: "Get laced up.", freq: "⭐⭐⭐⭐" },
        { word: "Grab your glove", meaning: "글러브 챙겨", pronunciation: "그랩 유어 글러브", example: "Grab your glove, let's go.", example2: "Don't forget your glove.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Got your hat?", meaning: "모자 챙겼어?", pronunciation: "갓 유어 햇", example: "Got your hat and glove?", example2: "Where's your hat?", freq: "⭐⭐⭐⭐" },
        { word: "Check your cleats", meaning: "스파이크 확인해", pronunciation: "첵 유어 클릿츠", example: "Check your cleats for mud.", example2: "Cleats clean?", freq: "⭐⭐⭐⭐" },
        { word: "Bring extra", meaning: "여분 챙겨", pronunciation: "브링 엑스트라", example: "Bring extra laces.", example2: "Got extra?", freq: "⭐⭐⭐" },
        { word: "Lock it up", meaning: "잠가둬", pronunciation: "락 잇 업", example: "Lock up your valuables.", example2: "Lock it up.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Mental Prep",
      items: [
        { word: "Lock in", meaning: "집중해", pronunciation: "락 인", example: "Time to lock in.", example2: "Lock in now.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Get your head right", meaning: "마음 잡아", pronunciation: "겟 유어 헤드 라잇", example: "Get your head right.", example2: "Head right, let's go.", freq: "⭐⭐⭐⭐" },
        { word: "Clear your mind", meaning: "머리 비워", pronunciation: "클리어 유어 마인드", example: "Clear your mind before pitching.", example2: "Just clear it.", freq: "⭐⭐⭐⭐" },
        { word: "Stay calm", meaning: "진정해", pronunciation: "스테이 캄", example: "Stay calm out there.", example2: "Just stay calm.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Just breathe", meaning: "그냥 숨 쉬어", pronunciation: "저스트 브리드", example: "Just breathe, you're good.", example2: "Breathe and focus.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Same routine", meaning: "똑같은 루틴", pronunciation: "세임 루틴", example: "Same routine as always.", example2: "Stick to same routine.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Stick to your process", meaning: "네 과정 따라가", pronunciation: "스틱 투 유어 프로세스", example: "Stick to your process.", example2: "Trust your process.", freq: "⭐⭐⭐⭐" },
        { word: "Do your thing", meaning: "네 거 해", pronunciation: "두 유어 씽", example: "Just do your thing out there.", example2: "Go do your thing.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Game Timing",
      items: [
        { word: "Game time", meaning: "경기 시간", pronunciation: "게임 타임", example: "Game time in 10 minutes.", example2: "It's game time.", freq: "⭐⭐⭐⭐⭐" },
        { word: "First pitch in 30", meaning: "30분 후 시작", pronunciation: "퍼스트 피치 인 써티", example: "First pitch in 30 minutes.", example2: "30 till first pitch.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Get ready", meaning: "준비해", pronunciation: "겟 레디", example: "Get ready, almost time.", example2: "Everyone get ready.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Infield is up", meaning: "내야 연습 중", pronunciation: "인필드 이즈 업", example: "Infield is up now.", example2: "Infield taking ground balls.", freq: "⭐⭐⭐⭐" },
        { word: "BP's done", meaning: "타격 연습 끝", pronunciation: "비피즈 던", example: "BP's done, get loose.", example2: "They finished BP.", freq: "⭐⭐⭐⭐" },
        { word: "Lineups posted", meaning: "라인업 나왔어", pronunciation: "라인업스 포스티드", example: "Lineups are posted.", example2: "Check the lineup board.", freq: "⭐⭐⭐⭐⭐" },
        { word: "National anthem", meaning: "국가", pronunciation: "내셔널 앤썸", example: "After the national anthem.", example2: "Stand for anthem.", freq: "⭐⭐⭐⭐⭐" }
      ]
    },
    {
      category: "Catcher Sync",
      items: [
        { word: "Let's go over signs", meaning: "사인 확인하자", pronunciation: "렛츠 고 오버 사인즈", example: "Let's go over signs quick.", example2: "Go over signs before game.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Shake means what?", meaning: "쉐이크는 뭐야?", pronunciation: "쉐익 민즈 왓", example: "Shake means I want something else.", example2: "What does shake mean?", freq: "⭐⭐⭐⭐" },
        { word: "One finger, two fingers", meaning: "한 손가락, 두 손가락", pronunciation: "원 핑거, 투 핑거즈", example: "One finger fastball, two fingers curve.", example2: "One, two, three fingers.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Pitch to contact", meaning: "맞게 던져", pronunciation: "피치 투 컨택트", example: "Pitch to contact today.", example2: "We're pitching to contact.", freq: "⭐⭐⭐⭐" },
        { word: "Keep them off balance", meaning: "밸런스 흐트러뜨려", pronunciation: "킵 뎀 오프 밸런스", example: "Keep them off balance.", example2: "Off balance all game.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Going after everyone", meaning: "모두 공격", pronunciation: "고잉 애프터 에브리원", example: "We're going after everyone today.", example2: "Attack everyone in lineup.", freq: "⭐⭐⭐⭐" }
      ]
    }
  ];

  const totalItems = vocabulary.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 pb-20">
      <WeekHeader 
        weekNumber={8}
        type="vocab"
        progress={progress}
        colorFrom="slate"
        colorTo="gray"
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
              <div className="bg-gradient-to-r from-slate-600 to-gray-600 rounded-t-xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-300" size={20} />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{category.category}</h2>
                </div>
                <span className="text-slate-100 text-sm sm:text-base">
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
                          : 'border-slate-200 bg-white hover:border-slate-400'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleCheck(itemId)}
                          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                            isChecked 
                              ? 'bg-green-500 border-green-500' 
                              : 'bg-white border-gray-300 hover:border-slate-500'
                          }`}
                        >
                          {isChecked && <Check className="text-white" size={16} />}
                        </button>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline gap-2 mb-2">
                            <span className="text-xl sm:text-2xl font-bold text-slate-900">
                              {item.word}
                            </span>
                            <span className="text-sm text-gray-500">({item.pronunciation})</span>
                          </div>
                          
                          <div className="text-base sm:text-lg text-gray-700 mb-3">
                            = {item.meaning}
                          </div>

                          <div className="space-y-2">
                            <div className="bg-slate-50 px-3 py-2 rounded text-sm sm:text-base text-gray-800">
                              {item.example}
                            </div>
                            <div className="bg-gray-50 px-3 py-2 rounded text-sm sm:text-base text-gray-800">
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Week 8 Complete!</h3>
            <p className="text-lg sm:text-xl text-green-100">
              All pre-game routine terms mastered
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/week8-lesson"
            className="flex-1 bg-white hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg border-2 border-gray-200"
          >
            ← Back to Lesson
          </Link>
          <Link 
            to="/"
            className="flex-1 bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
          >
            Main Page
          </Link>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center text-slate-200 text-sm">
          <p>Total: {totalItems} terms • 7 categories</p>
          <p className="mt-2">Progress auto-saved</p>
        </div>
      </div>
    </div>
  );
};

export default Week8Vocab;
