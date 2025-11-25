import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Play, Target } from 'lucide-react';

const Week6Lesson = () => {
  const pitchCalls = [
    {
      call: "Fastball up",
      meaning: "높은 직구",
      context: "포수가 구종과 위치 지시",
      response: "Got it"
    },
    {
      call: "Breaking ball down",
      meaning: "낮은 변화구",
      context: "슬라이더/커브 낮게",
      response: "Yeah"
    },
    {
      call: "Changeup away",
      meaning: "바깥쪽 체인지업",
      context: "우타자 바깥쪽",
      response: "Alright"
    },
    {
      call: "Backdoor slider",
      meaning: "뒤쪽 슬라이더",
      context: "스트라이크 존 뒤로",
      response: "I'll try"
    },
    {
      call: "Dot the corner",
      meaning: "코너에 정확히",
      context: "정밀 제구",
      response: "Yes sir"
    },
    {
      call: "Waste one",
      meaning: "공 하나 버리기",
      context: "볼존에 던지기",
      response: "Okay"
    }
  ];

  const bullpenDialogue = [
    {
      situation: "시작",
      exchanges: [
        { speaker: "Coach", line: "How many you throwing today?" },
        { speaker: "You", line: "Around 40, just working on feel." },
        { speaker: "Coach", line: "Sounds good. Let me know if anything feels off." }
      ]
    },
    {
      situation: "중간",
      exchanges: [
        { speaker: "Catcher", line: "That slider's moving good today." },
        { speaker: "You", line: "Yeah, feeling it. Arm slot feels right." },
        { speaker: "Catcher", line: "Keep staying on top of it." }
      ]
    },
    {
      situation: "마무리",
      exchanges: [
        { speaker: "Coach", line: "Last five, then we're done." },
        { speaker: "You", line: "Got it. Fastball finish?" },
        { speaker: "Coach", line: "Yeah, finish strong." }
      ]
    }
  ];

  const feedbackResponses = [
    {
      feedback: "That was good. Do that again.",
      response: "Will do",
      alt: "Got it"
    },
    {
      feedback: "You're rushing a bit.",
      response: "Yeah, I feel it",
      alt: "Let me slow it down"
    },
    {
      feedback: "Stay through it.",
      response: "Alright",
      alt: "I'll finish better"
    },
    {
      feedback: "More over the top.",
      response: "Got it, higher slot",
      alt: "I'll adjust"
    },
    {
      feedback: "That's the one.",
      response: "Felt good",
      alt: "Yeah, that's it"
    }
  ];

  const armCheck = [
    {
      question: "How's the arm?",
      good: "Feels good / Loose / Ready to go",
      okay: "Pretty good / Getting there",
      concern: "Little tight / Not quite there yet"
    },
    {
      question: "Any tightness?",
      good: "Nah, all good",
      okay: "Little bit, but normal",
      concern: "Yeah, a little / Could use more warm-up"
    },
    {
      question: "Need more time?",
      good: "I'm good / Ready when you are",
      okay: "Maybe a few more / Just a couple",
      concern: "Yeah, few more minutes"
    }
  ];

  const mechanicsTerms = [
    { term: "Arm slot", meaning: "팔 각도", example: "Keep your arm slot consistent" },
    { term: "Release point", meaning: "릴리스 포인트", example: "Your release point was high that time" },
    { term: "Stride", meaning: "발 내딛기", example: "Shorten your stride a bit" },
    { term: "Follow through", meaning: "팔로우 스루", example: "Stay through it, don't cut it off" },
    { term: "Over the top", meaning: "위에서 던지기", example: "Get more over the top on that one" },
    { term: "Three-quarters", meaning: "3/4 각도", example: "You're dropping to three-quarters" },
    { term: "Sidearm", meaning: "사이드암", example: "Don't go sidearm on the breaking ball" },
    { term: "Rotate", meaning: "회전", example: "Rotate through your hips" }
  ];

  const countingPitches = [
    { count: "That's 10", meaning: "10개 던짐", response: "Got it, 10" },
    { count: "Halfway there", meaning: "절반", response: "Alright" },
    { count: "Five more", meaning: "5개 남음", response: "Okay, five" },
    { count: "Last one", meaning: "마지막", response: "Last one, got it" },
    { count: "You're at 35", meaning: "35개 던짐", response: "35, okay" }
  ];

  const nextStartTalk = [
    {
      question: "When am I going next?",
      answer: "You got Friday / Tuesday game / Not sure yet"
    },
    {
      question: "How many innings?",
      answer: "Planning on 5 / See how you feel / Full game if you got it"
    },
    {
      question: "What's the plan?",
      answer: "Just attack the zone / We'll go over it tomorrow / Work inside today"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 pb-20">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md sticky top-0 z-10 border-b border-white/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-teal-100 hover:text-white transition-colors" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              <Home size={18} />
              <span className="text-sm">Back to Main</span>
            </Link>
            <div className="text-white font-bold text-sm sm:text-base" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Week 6: Bullpen Session</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Part 1: Pitch Calls */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Target size={24} />
              Part 1: Pitch Calls & Responses
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {pitchCalls.map((item, idx) => (
                <div key={idx} className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <div className="font-bold text-lg text-teal-900">{item.call}</div>
                  <div className="text-gray-700 mt-1">= {item.meaning}</div>
                  <div className="text-sm text-gray-600 mt-2 italic">{item.context}</div>
                  <div className="mt-3 bg-white p-2 rounded">
                    <span className="text-xs text-gray-500">Your response:</span>
                    <div className="font-medium text-teal-700">"{item.response}"</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cyan-100 p-4 sm:p-6 rounded-xl mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 flex items-center gap-2">
                <Play size={20} /> Video Resources
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-500 mb-1">Driveline Baseball</p>
                  <a href="https://youtu.be/0lbQwFmwBNs?si=22zK_gGTevFtxqXQ" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline font-medium">
                    The Basics of Pitch Movement & Spin
                  </a>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-500 mb-1">TopVelocity.net</p>
                  <a href="https://youtu.be/lS2C5pUqsNk?si=2s9HcAqdCUZhPqM2" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline font-medium">
                    Front Leg Pitching Mechanics
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: Bullpen Dialogue */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 2: Typical Bullpen Conversations
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8 space-y-6">
            {bullpenDialogue.map((scenario, idx) => (
              <div key={idx} className="border-2 border-teal-200 rounded-lg p-4">
                <h4 className="font-bold text-teal-900 mb-3">{scenario.situation}</h4>
                <div className="space-y-3">
                  {scenario.exchanges.map((exchange, i) => (
                    <div key={i} className={`p-3 rounded ${exchange.speaker === 'You' ? 'bg-teal-50 ml-8' : 'bg-gray-50 mr-8'}`}>
                      <div className="text-xs font-semibold text-gray-500 mb-1">{exchange.speaker}</div>
                      <div className="font-medium">{exchange.line}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Part 3: Feedback Responses */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 3: Responding to Feedback
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-3">
              {feedbackResponses.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-teal-200 p-4 rounded-lg">
                  <div className="text-gray-700 mb-2 italic">Coach: "{item.feedback}"</div>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-teal-100 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-teal-800">"{item.response}"</span>
                    </div>
                    <div className="bg-cyan-100 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-cyan-800">"{item.alt}"</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 4: Arm Check */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 4: Arm Condition Check
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {armCheck.map((item, idx) => (
                <div key={idx} className="bg-teal-50 p-4 rounded-lg">
                  <div className="font-bold text-teal-900 mb-3">"{item.question}"</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <div>
                        <span className="text-xs text-gray-500">Good condition:</span>
                        <div className="font-medium">{item.good}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">~</span>
                      <div>
                        <span className="text-xs text-gray-500">Okay:</span>
                        <div className="font-medium">{item.okay}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">!</span>
                      <div>
                        <span className="text-xs text-gray-500">Concern:</span>
                        <div className="font-medium">{item.concern}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 5: Mechanics Terms */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 5: Mechanics Terminology
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid gap-3">
              {mechanicsTerms.map((item, idx) => (
                <div key={idx} className="bg-white border-l-4 border-teal-500 p-4 rounded">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-bold text-lg text-teal-900">{item.term}</span>
                    <span className="text-gray-600">= {item.meaning}</span>
                  </div>
                  <div className="text-sm text-gray-700 bg-gray-50 p-2 rounded mt-2">
                    "{item.example}"
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cyan-100 p-4 sm:p-6 rounded-xl mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3">Video: Pitching Mechanics</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-500 mb-1">Driveline Baseball</p>
                  <a href="https://youtu.be/6GyKxKSR8o0" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline font-medium">
                    Pitching Mechanics 101
                  </a>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-500 mb-1">TopVelocity</p>
                  <a href="https://youtu.be/wNOmXMUfGWY" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline font-medium">
                    How to Fix Your Pitching Mechanics
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 6: Counting Pitches */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 6: Pitch Count Communication
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid gap-3">
              {countingPitches.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-teal-50 p-4 rounded-lg">
                  <div>
                    <div className="font-bold text-teal-900">"{item.count}"</div>
                    <div className="text-sm text-gray-600">{item.meaning}</div>
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-teal-700">"{item.response}"</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 7: Next Start Discussion */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 7: Talking About Your Next Start
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {nextStartTalk.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-teal-200 p-4 rounded-lg">
                  <div className="font-bold text-teal-900 mb-2">You: "{item.question}"</div>
                  <div className="bg-teal-50 p-3 rounded">
                    <span className="text-sm text-gray-600">Possible answers:</span>
                    <div className="font-medium text-gray-800 mt-1">"{item.answer}"</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 8: Common Phrases */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 8: Quick Phrases You'll Hear
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-teal-50 p-3 rounded">
                <div className="font-bold">"Let it eat"</div>
                <div className="text-sm text-gray-600">= 힘껏 던져</div>
              </div>
              <div className="bg-teal-50 p-3 rounded">
                <div className="font-bold">"Take something off"</div>
                <div className="text-sm text-gray-600">= 속도 줄여</div>
              </div>
              <div className="bg-teal-50 p-3 rounded">
                <div className="font-bold">"Pump it in there"</div>
                <div className="text-sm text-gray-600">= 던져넣어</div>
              </div>
              <div className="bg-teal-50 p-3 rounded">
                <div className="font-bold">"Trust it"</div>
                <div className="text-sm text-gray-600">= 믿고 던져</div>
              </div>
              <div className="bg-teal-50 p-3 rounded">
                <div className="font-bold">"Finish it"</div>
                <div className="text-sm text-gray-600">= 마무리해</div>
              </div>
              <div className="bg-teal-50 p-3 rounded">
                <div className="font-bold">"That'll play"</div>
                <div className="text-sm text-gray-600">= 그거면 돼</div>
              </div>
              <div className="bg-teal-50 p-3 rounded">
                <div className="font-bold">"Air it out"</div>
                <div className="text-sm text-gray-600">= 날려버려</div>
              </div>
              <div className="bg-teal-50 p-3 rounded">
                <div className="font-bold">"Dial it in"</div>
                <div className="text-sm text-gray-600">= 조율해</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link 
            to="/week6-vocab"
            className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
          >
            Week 6 Vocabulary →
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

export default Week6Lesson;