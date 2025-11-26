import React from 'react';
import { Link } from 'react-router-dom';
import WeekHeader from './WeekHeader';

const Week9Lesson = () => {
  const benchCalls = [
    {
      situation: "타자 카운트별",
      calls: [
        { phrase: "Hitter's count", meaning: "타자 유리 (3-1, 2-0 등)", context: "유리한 카운트" },
        { phrase: "Pitcher's count", meaning: "투수 유리 (0-2, 1-2)", context: "불리한 카운트" },
        { phrase: "Even count", meaning: "동등 (2-2, 1-1)", context: "중립" },
        { phrase: "Make him throw strikes", meaning: "스트라이크 던지게 만들어", context: "볼카운트 유리" },
        { phrase: "Protect the plate", meaning: "플레이트 보호해", context: "투 스트라이크" }
      ]
    },
    {
      situation: "주자 상황",
      calls: [
        { phrase: "Move him over", meaning: "주자 진루시켜", context: "번트/우타" },
        { phrase: "Bring him in", meaning: "홈으로 들여보내", context: "득점권" },
        { phrase: "Station to station", meaning: "베이스 하나씩", context: "안전하게" },
        { phrase: "Tag and go", meaning: "태그업 하고 가", context: "플라이볼" },
        { phrase: "Two out magic", meaning: "투아웃 매직", context: "투아웃 랠리" }
      ]
    },
    {
      situation: "투수 상태 체크",
      calls: [
        { phrase: "He's losing it", meaning: "힘 빠지는 중", context: "투수 지침" },
        { phrase: "Getting wild", meaning: "제구 흔들려", context: "볼 많아짐" },
        { phrase: "Working slow", meaning: "천천히 던져", context: "템포 느려짐" },
        { phrase: "Rushing his delivery", meaning: "투구폼 급함", context: "서두름" },
        { phrase: "Tipping pitches", meaning: "구종 티남", context: "폼 차이" }
      ]
    }
  ];

  const plateApproach = [
    { phrase: "Look fastball, adjust breaking ball", meaning: "직구 노리고 변화구 대응", type: "타격 접근" },
    { phrase: "See it deep", meaning: "끝까지 봐", type: "타격" },
    { phrase: "Stay through the ball", meaning: "공 통과하며 쳐", type: "스윙" },
    { phrase: "Use the whole field", meaning: "전 필드 활용", type: "배팅" },
    { phrase: "Gap to gap", meaning: "갭 사이로", type: "목표" },
    { phrase: "Don't try to do too much", meaning: "무리하지 마", type: "접근" },
    { phrase: "Quality at-bat", meaning: "좋은 타석", type: "목표" },
    { phrase: "Battle", meaning: "싸워", type: "파울 쳐내기" }
  ];

  const defensiveShifts = [
    { call: "No doubles", meaning: "2루타 막아", situation: "후반 1점차" },
    { call: "Corners in", meaning: "양 코너 앞으로", situation: "번트 대비" },
    { call: "Middle drawn in", meaning: "중간 수비 앞으로", situation: "더블플레이" },
    { call: "Straight away", meaning: "정위치", situation: "표준 수비" },
    { call: "Shift on", meaning: "시프트 가동", situation: "풀타자" },
    { call: "Playing deep", meaning: "깊게", situation: "장타 대비" }
  ];

  const pressureSituations = [
    {
      situation: "득점권 주자",
      talk: [
        { phrase: "Two out rally", meaning: "투아웃 랠리" },
        { phrase: "RISP", meaning: "득점권 주자 (Runners In Scoring Position)" },
        { phrase: "Clutch situation", meaning: "승부처" },
        { phrase: "Need a knock", meaning: "안타 필요해" }
      ]
    },
    {
      situation: "후반 승부",
      talk: [
        { phrase: "Grind it out", meaning: "악착같이 버텨" },
        { phrase: "Manufacturing runs", meaning: "점수 짜내기" },
        { phrase: "Small ball", meaning: "소량 득점 야구" },
        { phrase: "Put pressure on defense", meaning: "수비에 압박" }
      ]
    },
    {
      situation: "역전 기회",
      talk: [
        { phrase: "Chip away", meaning: "조금씩 따라가" },
        { phrase: "Get back in this", meaning: "다시 붙자" },
        { phrase: "String some hits", meaning: "안타 연결" },
        { phrase: "Big inning potential", meaning: "큰 이닝 가능성" }
      ]
    }
  ];

  const benchJargon = [
    { phrase: "Pitcher's best friend", meaning: "더블플레이", context: "투수 돕기" },
    { phrase: "Rally killer", meaning: "랠리 죽이기", context: "더블플레이 당함" },
    { phrase: "Crooked number", meaning: "2점 이상", context: "득점" },
    { phrase: "Ducks on the pond", meaning: "주자들 있음", context: "득점 기회" },
    { phrase: "Meat of the order", meaning: "중심타선", context: "3-4-5번" },
    { phrase: "Bottom of the lineup", meaning: "하위타선", context: "7-8-9번" },
    { phrase: "Can of corn", meaning: "쉬운 플라이", context: "범타" },
    { phrase: "Frozen rope", meaning: "강한 직선타", context: "라이너" }
  ];

  const lineupTalk = [
    { phrase: "Turning the lineup over", meaning: "타순 한 바퀴", when: "9번 다음 1번" },
    { phrase: "Top of the order coming up", meaning: "상위타선 나옴", when: "1-2-3번" },
    { phrase: "Back-to-back", meaning: "연속", when: "연타" },
    { phrase: "Set the table", meaning: "출루해서 깔아줘", when: "1-2번 역할" },
    { phrase: "Drive 'em in", meaning: "밀어넣어", when: "3-4-5번 역할" },
    { phrase: "Productive out", meaning: "생산적 아웃", when: "주자 진루" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 pb-20">
      <WeekHeader 
        weekNumber={9}
        title="Week 9: Dugout Communication"
        type="lesson"
        colorFrom="emerald"
        colorTo="teal"
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Part 1: Bench Calls by Situation */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 1: Bench Calls - Game Situations
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {benchCalls.map((item, idx) => (
                <div key={idx} className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                  <div className="font-bold text-emerald-900 mb-3">{item.situation}</div>
                  <div className="space-y-2">
                    {item.calls.map((c, i) => (
                      <div key={i} className="bg-white p-3 rounded">
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="font-medium text-gray-800">"{c.phrase}"</span>
                          <span className="text-xs text-gray-500">{c.context}</span>
                        </div>
                        <div className="text-sm text-gray-600">= {c.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 2: Plate Approach Talk */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 2: Plate Approach Communication
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {plateApproach.map((item, idx) => (
                <div key={idx} className="bg-white border-l-4 border-emerald-500 p-4 rounded">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-bold text-emerald-900">"{item.phrase}"</span>
                    <span className="text-xs text-gray-500">{item.type}</span>
                  </div>
                  <div className="text-sm text-gray-600">= {item.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 3: Defensive Shifts & Calls */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 3: Defensive Positioning Calls
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid gap-3">
              {defensiveShifts.map((item, idx) => (
                <div key={idx} className="bg-emerald-50 p-3 rounded-lg">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="font-bold text-emerald-900">"{item.call}"</div>
                      <div className="text-sm text-gray-700">= {item.meaning}</div>
                    </div>
                    <span className="text-xs text-gray-500">{item.situation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 4: Pressure Situations */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 4: High Pressure Situations
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {pressureSituations.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-emerald-200 p-4 rounded-lg">
                  <div className="font-bold text-emerald-900 mb-3">{item.situation}</div>
                  <div className="grid gap-2">
                    {item.talk.map((t, i) => (
                      <div key={i} className="bg-emerald-50 p-2 rounded">
                        <div className="font-medium text-gray-800">"{t.phrase}"</div>
                        <div className="text-sm text-gray-600">= {t.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 5: Dugout Jargon */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 5: Dugout Jargon & Slang
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {benchJargon.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-emerald-200 p-3 rounded-lg">
                  <div className="font-bold text-emerald-900">"{item.phrase}"</div>
                  <div className="text-sm text-gray-700 mb-1">= {item.meaning}</div>
                  <div className="text-xs text-gray-500 italic">{item.context}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 6: Lineup Talk */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 6: Lineup & Batting Order Talk
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid gap-3">
              {lineupTalk.map((item, idx) => (
                <div key={idx} className="bg-emerald-50 p-3 rounded-lg">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="font-bold text-emerald-900">"{item.phrase}"</div>
                      <div className="text-sm text-gray-700">= {item.meaning}</div>
                    </div>
                    <span className="text-xs text-gray-500">{item.when}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Note about videos */}
        <div className="bg-teal-100 p-4 sm:p-6 rounded-xl mb-6">
          <h4 className="text-lg sm:text-xl font-bold mb-3">📺 Video Resources</h4>
          <div className="space-y-3">
            {/* BEST home run CELEBRATIONS from teams of the season */}
            <div className="bg-white p-3 rounded">
              <p className="text-xs text-gray-500 mb-1">MLB</p>
              <a href="https://www.youtube.com/watch?v=TEQDwNMueEY" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline font-medium">
                MLB
              </a>
              <p className="text-xs text-gray-400 mt-1">BEST home run CELEBRATIONS from teams of the season</p>
            </div>
            {/* 채널: MLB / 검색어: "Baseball Dugout Chatter" */}
            <div className="bg-white p-3 rounded">
              <p className="text-xs text-gray-500 mb-1">SD Padres</p>
              <a href="https://www.youtube.com/watch?v=6vL5kJvgv4o" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline font-medium">
                Best Dugout Moments and Chatter
              </a>
              <p className="text-xs text-gray-400 mt-1">Mic’d Up in the Dugout With T-Wade!</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link 
            to="/week9-vocab"
            className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
          >
            Week 9 Vocabulary →
          </Link>
          <Link 
            to="/"
            className="flex-1 bg-white hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg border-2 border-gray-200"
          >
            Back to Main
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Week9Lesson;