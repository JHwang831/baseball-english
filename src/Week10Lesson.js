import React from 'react';
import { Link } from 'react-router-dom';
import WeekHeader from './WeekHeader';

const Week10Lesson = () => {
  const coachDebrief = [
    {
      situation: "투수 등판 분석",
      exchange: [
        { q: "How many pitches?", meaning: "몇 개 던졌어?", a: "Around 95 / Just under 100" },
        { q: "How'd the arm feel?", meaning: "팔 어땠어?", a: "Good / Little tired / Felt strong" },
        { q: "What was working today?", meaning: "뭐가 됐어?", a: "Fastball was good / Curve had bite / Change was down" },
        { q: "Command issues?", meaning: "제구 문제?", a: "Little wild early / Found it later / Couldn't locate" }
      ]
    },
    {
      situation: "타격 분석",
      exchange: [
        { q: "See the ball well?", meaning: "공 잘 봤어?", a: "Yeah, saw it good / Little late / Struggling to see spin" },
        { q: "What was he throwing?", meaning: "뭐 던졌어?", a: "Mostly fastball / Mixing well / Heavy on breaking balls" },
        { q: "Make any adjustments?", meaning: "조정했어?", a: "Moved closer / Opened up / Stayed back more" },
        { q: "Swing decisions?", meaning: "스윙 판단?", a: "Chased some / Took good pitches / Got beat on strikes" }
      ]
    }
  ];

  const statReview = [
    {
      category: "투수 성적",
      terms: [
        { phrase: "Threw X innings", meaning: "X이닝 던짐", example: "Threw 6 innings, 3 runs" },
        { phrase: "Pitch count at X", meaning: "투구 수 X개", example: "Pitch count at 98" },
        { phrase: "X strikeouts", meaning: "X 삼진", example: "Got 7 strikeouts today" },
        { phrase: "Walked X", meaning: "X 볼넷", example: "Walked 2, both scored" },
        { phrase: "Gave up X hits", meaning: "X 안타 맞음", example: "Gave up 5 hits" }
      ]
    },
    {
      category: "타격 성적",
      terms: [
        { phrase: "X for X", meaning: "X타수 X안타", example: "Went 2 for 4 today" },
        { phrase: "X RBI", meaning: "X 타점", example: "Got 2 RBI on that double" },
        { phrase: "Drew a walk", meaning: "볼넷 얻음", example: "Drew a walk in the 5th" },
        { phrase: "Struck out X times", meaning: "X번 삼진", example: "Struck out twice" },
        { phrase: "Left X on base", meaning: "X명 잔루", example: "Left 3 runners on base" }
      ]
    }
  ];

  const videoReview = [
    { phrase: "Let's watch video", meaning: "영상 보자", when: "분석 시작" },
    { phrase: "Look at this pitch", meaning: "이 공 봐", when: "특정 투구" },
    { phrase: "See your release point?", meaning: "릴리스포인트 보여?", when: "투구 폼" },
    { phrase: "Watch your front side", meaning: "앞쪽 봐", when: "투구 메카닉" },
    { phrase: "Check your swing path", meaning: "스윙 궤도 봐", when: "타격 폼" },
    { phrase: "You pulled off", meaning: "빠져나갔어", when: "타격 자세" },
    { phrase: "Load was late", meaning: "로딩 늦었어", when: "준비 동작" },
    { phrase: "Head came off the ball", meaning: "머리 떨어졌어", when: "타격 시선" }
  ];

  const assignmentTalk = [
    {
      type: "다음 훈련",
      phrases: [
        { phrase: "Extra bullpen tomorrow", meaning: "내일 추가 불펜", who: "투수" },
        { phrase: "Cage work at 2", meaning: "2시 타격장", who: "타자" },
        { phrase: "Side session", meaning: "사이드 세션", who: "투수" },
        { phrase: "Live BP", meaning: "라이브 타격", who: "타자" },
        { phrase: "Film study tomorrow", meaning: "내일 영상 분석", who: "모두" }
      ]
    },
    {
      type: "다음 등판",
      phrases: [
        { phrase: "You're going X days", meaning: "X일 쉬어", who: "투수" },
        { phrase: "Lined up for X", meaning: "X일 예정", who: "선발" },
        { phrase: "Available tomorrow", meaning: "내일 가능", who: "구원" },
        { phrase: "Get two days rest", meaning: "이틀 쉬어", who: "투수" }
      ]
    }
  ];

  const recoveryTalk = [
    { phrase: "Ice your arm", meaning: "팔 아이싱", when: "투구 후" },
    { phrase: "Get on the table", meaning: "테이블 올라가", when: "치료" },
    { phrase: "Stim treatment", meaning: "전기 자극", when: "근육 회복" },
    { phrase: "Stretch with trainer", meaning: "트레이너랑 스트레칭", when: "유연성" },
    { phrase: "Contrast bath", meaning: "냉온탕", when: "염증 관리" },
    { phrase: "Soft tissue work", meaning: "연조직 작업", when: "마사지" },
    { phrase: "Range of motion drills", meaning: "가동범위 운동", when: "재활" },
    { phrase: "Report any soreness", meaning: "통증 보고해", when: "중요" }
  ];

  const scheduleInfo = [
    {
      situation: "연전",
      info: [
        { phrase: "Same time tomorrow", meaning: "내일 같은 시간", context: "일정" },
        { phrase: "First pitch at X", meaning: "X시 시작", context: "경기 시간" },
        { phrase: "Day game tomorrow", meaning: "내일 낮 경기", context: "데이게임" },
        { phrase: "Night game", meaning: "밤 경기", context: "나이트게임" }
      ]
    },
    {
      situation: "시리즈",
      info: [
        { phrase: "Last game of series", meaning: "시리즈 마지막", context: "종료" },
        { phrase: "New opponent Friday", meaning: "금요일 새 상대", context: "다음 시리즈" },
        { phrase: "Travel day", meaning: "이동일", context: "원정" },
        { phrase: "Homestand continues", meaning: "홈 경기 계속", context: "홈" }
      ]
    },
    {
      situation: "휴식",
      info: [
        { phrase: "Off day tomorrow", meaning: "내일 쉬는 날", context: "휴식" },
        { phrase: "Report at X", meaning: "X시 집합", context: "다음 훈련" },
        { phrase: "Optional workout", meaning: "자율 운동", context: "선택" },
        { phrase: "Team meeting at X", meaning: "X시 팀 미팅", context: "회의" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 pb-20">
      <WeekHeader 
        weekNumber={10}
        title="Week 10: Post-Game Talk"
        type="lesson"
        colorFrom="amber"
        colorTo="orange"
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Part 1: Coach Debrief */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 1: Coach Performance Debrief
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {coachDebrief.map((item, idx) => (
                <div key={idx} className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                  <div className="font-bold text-amber-900 mb-3">{item.situation}</div>
                  <div className="space-y-3">
                    {item.exchange.map((ex, i) => (
                      <div key={i} className="bg-white p-3 rounded">
                        <div className="font-medium text-gray-800 mb-1">Q: "{ex.q}"</div>
                        <div className="text-sm text-gray-600 mb-2">= {ex.meaning}</div>
                        <div className="bg-amber-50 p-2 rounded">
                          <div className="text-xs text-gray-500">Answers:</div>
                          <div className="text-sm font-medium text-gray-800">{ex.a}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-100 p-4 sm:p-6 rounded-xl mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3">📺 Video Resources</h4>
              <div className="space-y-3">
                {/* 채널: MLB / 검색어: "MLB Post Game Interview" */}
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-500 mb-1">MLB</p>
                  <a href="https://youtu.be/-S3gpCFjSck?si=BTnVLrcQznyayO8a" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline font-medium">
                    Post-Game Player Interviews
                  </a>
                  <p className="text-xs text-gray-400 mt-1">"MLB Post Game Interview"</p>
                </div>
                {/* 채널: MLB / 검색어: "Pitcher Discusses Outing" */}
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-500 mb-1">MLB</p>
                  <a href="https://youtu.be/NKtdPPBJ82E?si=JdXuspGgqTxeSfOa" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline font-medium">
                    Pitchers Discussing Performance
                  </a>
                  <p className="text-xs text-gray-400 mt-1">"MLB Pitcher Discusses Outing"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: Stats Review */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 2: Performance Stats Review
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {statReview.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-amber-200 p-4 rounded-lg">
                  <div className="font-bold text-amber-900 mb-3">{item.category}</div>
                  <div className="grid gap-2">
                    {item.terms.map((t, i) => (
                      <div key={i} className="bg-amber-50 p-3 rounded">
                        <div className="font-medium text-gray-800">"{t.phrase}"</div>
                        <div className="text-sm text-gray-600 mb-1">= {t.meaning}</div>
                        <div className="text-xs text-gray-500 italic">{t.example}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 3: Video Review Session */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 3: Video Review Session
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {videoReview.map((item, idx) => (
                <div key={idx} className="bg-white border-l-4 border-amber-500 p-4 rounded">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-bold text-amber-900">"{item.phrase}"</span>
                    <span className="text-xs text-gray-500">{item.when}</span>
                  </div>
                  <div className="text-sm text-gray-600">= {item.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 4: Training Assignments */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 4: Training Assignments
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {assignmentTalk.map((item, idx) => (
                <div key={idx} className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                  <div className="font-bold text-amber-900 mb-3">{item.type}</div>
                  <div className="grid gap-2">
                    {item.phrases.map((p, i) => (
                      <div key={i} className="bg-white p-3 rounded flex items-baseline justify-between">
                        <div>
                          <div className="font-medium text-gray-800">"{p.phrase}"</div>
                          <div className="text-sm text-gray-600">= {p.meaning}</div>
                        </div>
                        <span className="text-xs text-gray-500">{p.who}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 5: Recovery Protocol */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 5: Post-Game Recovery
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {recoveryTalk.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-amber-200 p-3 rounded-lg">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-bold text-amber-900">"{item.phrase}"</span>
                    <span className="text-xs text-gray-500">{item.when}</span>
                  </div>
                  <div className="text-sm text-gray-600">= {item.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 6: Schedule Information */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 6: Next Game Schedule
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {scheduleInfo.map((item, idx) => (
                <div key={idx} className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                  <div className="font-bold text-amber-900 mb-3">{item.situation}</div>
                  <div className="space-y-2">
                    {item.info.map((inf, i) => (
                      <div key={i} className="bg-white p-3 rounded">
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="font-medium text-gray-800">"{inf.phrase}"</span>
                          <span className="text-xs text-gray-500">{inf.context}</span>
                        </div>
                        <div className="text-sm text-gray-600">= {inf.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link 
            to="/week10-vocab"
            className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
          >
            Week 10 Vocabulary →
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

export default Week10Lesson;
