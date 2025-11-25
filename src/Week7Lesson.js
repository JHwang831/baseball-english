import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import WeekHeader from './WeekHeader';

const Week7Lesson = () => {
  const catcherVisits = [
    {
      situation: "볼카운트 불리할 때",
      talk: [
        { phrase: "Pound the zone", meaning: "존으로 꽂아" },
        { phrase: "Attack, attack", meaning: "공격해" },
        { phrase: "Get ahead of this guy", meaning: "앞서가" }
      ],
      response: "Got it / Yep"
    },
    {
      situation: "주자 득점권",
      talk: [
        { phrase: "Make your pitch", meaning: "네 공 던져" },
        { phrase: "Nothing too good", meaning: "너무 좋은 공 말고" },
        { phrase: "Stay away", meaning: "바깥쪽으로" }
      ],
      response: "Alright / Yeah"
    },
    {
      situation: "연속 안타 맞았을 때",
      talk: [
        { phrase: "Slow it down", meaning: "천천히 가" },
        { phrase: "Deep breath", meaning: "숨 크게" },
        { phrase: "Next pitch", meaning: "다음 공" }
      ],
      response: "I'm good / Yeah"
    },
    {
      situation: "타자 기다릴 때",
      talk: [
        { phrase: "Take your time", meaning: "천천히" },
        { phrase: "We got all day", meaning: "시간 많아" },
        { phrase: "Step off if you need", meaning: "필요하면 내려와" }
      ],
      response: "Okay / Alright"
    },
    {
      situation: "스트라이크 필요",
      talk: [
        { phrase: "We need a strike here", meaning: "스트라이크 필요해" },
        { phrase: "Just throw strikes", meaning: "스트라이크만" },
        { phrase: "Over the plate", meaning: "플레이트로" }
      ],
      response: "Got it / Yeah"
    }
  ];

  const signTalk = [
    {
      q: "What you wanna throw?",
      meaning: "뭐 던질래?",
      responses: ["Fastball / Heater", "Curve / Hook", "Change / Offspeed", "Slider / Breaking ball"]
    },
    {
      q: "You wanna go breaking ball here?",
      meaning: "변화구 갈래?",
      responses: ["Yeah, let's go curve", "Nah, fastball", "Let me shake to slider"]
    },
    {
      q: "Fastball away?",
      meaning: "바깥쪽 직구?",
      responses: ["Yeah, away", "Let's go inside", "Let me come back door"]
    },
    {
      q: "You good with that location?",
      meaning: "그 위치 괜찮아?",
      responses: ["Yeah, I'm good", "Let's go higher", "Let's go lower"]
    }
  ];

  const pickoffTalk = [
    { phrase: "I got a good look", meaning: "확인했어", when: "견제 전" },
    { phrase: "He's leaning", meaning: "몸 기울었어", when: "주자 움직임" },
    { phrase: "Pick if you want", meaning: "던져도 돼", when: "타이밍 좋을 때" },
    { phrase: "Hold him on", meaning: "붙잡아", when: "주자 1루" },
    { phrase: "Keep him close", meaning: "가까이 둬", when: "도루 우려" },
    { phrase: "No throw", meaning: "던지지 마", when: "타이밍 안 좋음" }
  ];

  const coachTalk = [
    {
      question: "How's the arm?",
      meaning: "팔 어때?",
      good: ["Good / Strong / Feeling good"],
      tired: ["Getting heavy / Bit tired / Losing feel"],
      done: ["I'm done / Arm's dead / Got nothing left"]
    },
    {
      question: "Can you face this guy?",
      meaning: "이 타자 상대할 수 있어?",
      yes: ["Yeah, I got him / I can get him / Let me get him"],
      no: ["I don't think so / Nah / I don't have it"]
    },
    {
      question: "What pitch you throwing?",
      meaning: "뭐 던지고 있어?",
      response: ["Mostly fastball / Working curve / Mixing it up / All fastballs"]
    },
    {
      question: "You going after him or working around?",
      meaning: "공격할 거야 피할 거야?",
      after: "Going after him",
      around: "I'll work around / Pitch around"
    }
  ];

  const infieldChatter = [
    { call: "Play's at first", meaning: "1루로", situation: "주자 1루" },
    { call: "Turn two", meaning: "병살", situation: "더블플레이 가능" },
    { call: "Back's going", meaning: "뒷문 닫아", situation: "2루수 커버" },
    { call: "I got second", meaning: "2루 내가", situation: "견제 커버" },
    { call: "No play", meaning: "안돼", situation: "아웃 불가능" },
    { call: "Tag up", meaning: "태그업", situation: "플라이볼" },
    { call: "Infield in", meaning: "내야 앞으로", situation: "3루 주자" },
    { call: "Half way", meaning: "중간쯤", situation: "얕은 플라이 대비" }
  ];

  const quickCalls = [
    { call: "Time", meaning: "타임", context: "마운드 올라갈 때" },
    { call: "Let's go", meaning: "가자", context: "투구 재개" },
    { call: "That's it", meaning: "그거야", context: "좋은 공" },
    { call: "Right there", meaning: "거기", context: "위치 좋음" },
    { call: "Stay on it", meaning: "계속", context: "같은 패턴" },
    { call: "Change eye level", meaning: "높이 바꿔", context: "타자 혼란" },
    { call: "Flip sides", meaning: "반대편", context: "좌우 반대" },
    { call: "Set it up", meaning: "깔아둬", context: "다음 공 준비" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 pb-20">
      <WeekHeader 
        weekNumber={7}
        title="Week 7: Mound Communication"
        type="lesson"
        colorFrom="indigo"
        colorTo="violet"
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Part 1: Catcher Mound Visits */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 1: Catcher Mound Visits
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {catcherVisits.map((item, idx) => (
                <div key={idx} className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
                  <div className="font-bold text-indigo-900 mb-3">{item.situation}</div>
                  <div className="space-y-2 mb-3">
                    {item.talk.map((t, i) => (
                      <div key={i} className="bg-white p-2 rounded">
                        <div className="font-medium text-gray-800">"{t.phrase}"</div>
                        <div className="text-sm text-gray-600">= {t.meaning}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-indigo-100 p-2 rounded">
                    <span className="text-xs text-gray-500">Your response:</span>
                    <div className="font-medium text-indigo-700">{item.response}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-violet-100 p-4 sm:p-6 rounded-xl mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 flex items-center gap-2">
                <Play size={20} /> Video Resources
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-500 mb-1">MLB</p>
                  <a href="https://youtu.be/wj5XGtU_hYo?si=QTs0UkoJzsw25Kwp" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline font-medium">
                    MLB Conversations Mic'd Up
                  </a>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-500 mb-1">MLB</p>
                  <a href="https://youtu.be/JE-qtUzqRhU?si=YNAx0ot848f_fjj-" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline font-medium">
                    Adam Wainwright MIC'D UP during pregame routine & bullpen session!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: Sign Discussion */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 2: Discussing Pitch Selection
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {signTalk.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-indigo-200 p-4 rounded-lg">
                  <div className="font-bold text-indigo-900 mb-1">"{item.q}"</div>
                  <div className="text-sm text-gray-600 mb-3">= {item.meaning}</div>
                  <div className="bg-indigo-50 p-3 rounded">
                    <div className="text-xs text-gray-500 mb-1">Responses:</div>
                    <div className="space-y-1">
                      {item.responses.map((r, i) => (
                        <div key={i} className="text-sm font-medium text-gray-800">• {r}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 3: Pickoff Communication */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 3: Pickoff Signals & Talk
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid gap-3">
              {pickoffTalk.map((item, idx) => (
                <div key={idx} className="bg-white border-l-4 border-indigo-500 p-4 rounded">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-bold text-indigo-900">"{item.phrase}"</span>
                    <span className="text-xs text-gray-500">{item.when}</span>
                  </div>
                  <div className="text-sm text-gray-600">= {item.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 4: Coach Questions */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 4: Coach Mound Visit Questions
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {coachTalk.map((item, idx) => (
                <div key={idx} className="bg-indigo-50 p-4 rounded-lg">
                  <div className="font-bold text-indigo-900 mb-1">"{item.question}"</div>
                  <div className="text-sm text-gray-600 mb-3">= {item.meaning}</div>
                  
                  <div className="space-y-2">
                    {item.good && (
                      <div className="bg-white p-2 rounded">
                        <div className="text-xs text-gray-500">Good:</div>
                        {item.good.map((g, i) => (
                          <div key={i} className="text-sm font-medium text-green-700">{g}</div>
                        ))}
                      </div>
                    )}
                    {item.yes && (
                      <div className="bg-white p-2 rounded">
                        <div className="text-xs text-gray-500">Yes:</div>
                        {item.yes.map((y, i) => (
                          <div key={i} className="text-sm font-medium text-green-700">{y}</div>
                        ))}
                      </div>
                    )}
                    {item.tired && (
                      <div className="bg-white p-2 rounded">
                        <div className="text-xs text-gray-500">Tired:</div>
                        {item.tired.map((t, i) => (
                          <div key={i} className="text-sm font-medium text-yellow-700">{t}</div>
                        ))}
                      </div>
                    )}
                    {item.done && (
                      <div className="bg-white p-2 rounded">
                        <div className="text-xs text-gray-500">Done:</div>
                        {item.done.map((d, i) => (
                          <div key={i} className="text-sm font-medium text-red-700">{d}</div>
                        ))}
                      </div>
                    )}
                    {item.no && (
                      <div className="bg-white p-2 rounded">
                        <div className="text-xs text-gray-500">No:</div>
                        {item.no.map((n, i) => (
                          <div key={i} className="text-sm font-medium text-red-700">{n}</div>
                        ))}
                      </div>
                    )}
                    {item.response && (
                      <div className="bg-white p-2 rounded">
                        <div className="text-xs text-gray-500">Examples:</div>
                        <div className="text-sm font-medium text-gray-800">{item.response}</div>
                      </div>
                    )}
                    {item.after && (
                      <div className="flex gap-2">
                        <div className="bg-white p-2 rounded flex-1">
                          <div className="text-xs text-gray-500">Attack:</div>
                          <div className="text-sm font-medium text-gray-800">{item.after}</div>
                        </div>
                        <div className="bg-white p-2 rounded flex-1">
                          <div className="text-xs text-gray-500">Pitch around:</div>
                          <div className="text-sm font-medium text-gray-800">{item.around}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 5: Infield Calls */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 5: Infield Communication
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {infieldChatter.map((item, idx) => (
                <div key={idx} className="bg-indigo-50 p-3 rounded-lg">
                  <div className="font-bold text-indigo-900">"{item.call}"</div>
                  <div className="text-sm text-gray-700">= {item.meaning}</div>
                  <div className="text-xs text-gray-500 mt-1 italic">{item.situation}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 6: Quick Calls */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 6: Quick Calls During At-Bat
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {quickCalls.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-indigo-200 p-3 rounded-lg">
                  <div className="font-bold text-indigo-900">"{item.call}"</div>
                  <div className="text-sm text-gray-700">= {item.meaning}</div>
                  <div className="text-xs text-gray-500 mt-1 italic">{item.context}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link 
            to="/week7-vocab"
            className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
          >
            Week 7 Vocabulary →
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

export default Week7Lesson;