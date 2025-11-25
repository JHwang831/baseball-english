import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import WeekHeader from './WeekHeader';

const Week8Lesson = () => {
  const warmupTalk = [
    {
      situation: "워밍업 시작",
      phrases: [
        { phrase: "Let's get loose", meaning: "몸 풀자" },
        { phrase: "Time to warm up", meaning: "워밍업 시간" },
        { phrase: "Get your arm going", meaning: "팔 돌려" }
      ]
    },
    {
      situation: "스트레칭 중",
      phrases: [
        { phrase: "Hold that stretch", meaning: "스트레칭 유지해" },
        { phrase: "Feel the pull", meaning: "당김 느껴봐" },
        { phrase: "Don't bounce", meaning: "튕기지 마" }
      ]
    },
    {
      situation: "롱토스",
      phrases: [
        { phrase: "Back it up", meaning: "뒤로 가" },
        { phrase: "Come in now", meaning: "이제 들어와" },
        { phrase: "Long toss done", meaning: "롱토스 끝" }
      ]
    },
    {
      situation: "투구 준비",
      phrases: [
        { phrase: "Get on the mound", meaning: "마운드 올라가" },
        { phrase: "Take your warm-up pitches", meaning: "워밍업 피칭해" },
        { phrase: "How many you need?", meaning: "몇 개 필요해?" }
      ]
    }
  ];

  const armCareTalk = [
    { phrase: "Ice your arm", meaning: "팔 아이싱", when: "투구 후" },
    { phrase: "Get treatment", meaning: "치료 받아", when: "컨디션 관리" },
    { phrase: "Do your bands", meaning: "밴드 운동해", when: "어깨 강화" },
    { phrase: "Foam roll it", meaning: "폼롤러 써", when: "근육 이완" },
    { phrase: "J-bands routine", meaning: "J밴드 루틴", when: "워밍업" },
    { phrase: "Arm sleeves on?", meaning: "암슬리브 껴?", when: "경기 전" },
    { phrase: "How's it feel?", meaning: "느낌 어때?", when: "확인" },
    { phrase: "Any tightness?", meaning: "뻐근한 데 있어?", when: "체크" }
  ];

  const gamePlanTalk = [
    {
      q: "Who are we facing?",
      meaning: "누구 상대해?",
      answer: "Their ace / Left-hander / Hard thrower"
    },
    {
      q: "What's the lineup look like?",
      meaning: "라인업 어때?",
      answer: "Lefty-heavy / Power lineup / Speed guys"
    },
    {
      q: "Any scouting report?",
      meaning: "스카우팅 리포트 있어?",
      answer: "Check the board / Coach has it / In the binder"
    },
    {
      q: "What's your game plan?",
      meaning: "게임 플랜 뭐야?",
      answer: "Attack early / Work ahead / Mix it up / Pound the zone"
    },
    {
      q: "You starting or relief?",
      meaning: "선발이야 구원이야?",
      answer: "I'm starting / Coming in relief / Throwing an inning"
    }
  ];

  const lockerRoomTalk = [
    { phrase: "Get dressed", meaning: "옷 갈아입어", context: "유니폼" },
    { phrase: "Tape up", meaning: "테이핑해", context: "손가락/팔" },
    { phrase: "Lace up", meaning: "끈 묶어", context: "스파이크" },
    { phrase: "Grab your glove", meaning: "글러브 챙겨", context: "준비" },
    { phrase: "Got your hat?", meaning: "모자 챙겼어?", context: "확인" },
    { phrase: "Check your cleats", meaning: "스파이크 확인해", context: "장비" },
    { phrase: "Bring extra", meaning: "여분 챙겨", context: "예비" },
    { phrase: "Lock it up", meaning: "잠가둬", context: "사물함" }
  ];

  const mentalPrep = [
    {
      situation: "집중력",
      talk: [
        { phrase: "Lock in", meaning: "집중해" },
        { phrase: "Get your head right", meaning: "마음 잡아" },
        { phrase: "Clear your mind", meaning: "머리 비워" }
      ]
    },
    {
      situation: "긴장 관리",
      talk: [
        { phrase: "Stay calm", meaning: "진정해" },
        { phrase: "Just breathe", meaning: "그냥 숨 쉬어" },
        { phrase: "You got this", meaning: "할 수 있어" }
      ]
    },
    {
      situation: "루틴 체크",
      talk: [
        { phrase: "Same routine", meaning: "똑같은 루틴" },
        { phrase: "Stick to your process", meaning: "네 과정 따라가" },
        { phrase: "Do your thing", meaning: "네 거 해" }
      ]
    }
  ];

  const timingTalk = [
    { call: "Game time", meaning: "경기 시간", context: "경기 시작" },
    { call: "First pitch in 30", meaning: "30분 후 시작", context: "시간 확인" },
    { call: "Get ready", meaning: "준비해", context: "곧 시작" },
    { call: "Infield is up", meaning: "내야 연습 중", context: "경기 전" },
    { call: "BP's done", meaning: "타격 연습 끝", context: "진행 상황" },
    { call: "Lineups posted", meaning: "라인업 나왔어", context: "확인" },
    { call: "National anthem", meaning: "국가", context: "경기 직전" },
    { call: "Let's go", meaning: "가자", context: "출발" }
  ];

  const catcherSync = [
    {
      topic: "Pitch Selection",
      phrases: [
        "What you throwing today?",
        "How's your curve feeling?",
        "Fastball command good?"
      ]
    },
    {
      topic: "Signs Review",
      phrases: [
        "Let's go over signs",
        "Shake means what?",
        "One finger, two fingers"
      ]
    },
    {
      topic: "Game Approach",
      phrases: [
        "Pitch to contact or strikeouts?",
        "Keep them off balance",
        "We going after everyone?"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 pb-20">
      <WeekHeader 
        weekNumber={8}
        title="Week 8: Pre-Game Routine"
        type="lesson"
        colorFrom="slate"
        colorTo="gray"
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Part 1: Warm-Up Talk */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-600 to-gray-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 1: Warm-Up Communication
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {warmupTalk.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-600">
                  <div className="font-bold text-slate-900 mb-3">{item.situation}</div>
                  <div className="space-y-2">
                    {item.phrases.map((p, i) => (
                      <div key={i} className="bg-white p-2 rounded">
                        <div className="font-medium text-gray-800">"{p.phrase}"</div>
                        <div className="text-sm text-gray-600">= {p.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-4 sm:p-6 rounded-xl mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 flex items-center gap-2">
                <Play size={20} /> Video Resources
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-500 mb-1">Tread Athletics</p>
                  <a href="https://www.youtube.com/watch?v=lpv80cCnNLs" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline font-medium">
                    Pitcher Pre-Game Routine
                  </a>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-500 mb-1">Trevor Bauer</p>
                  <a href="https://youtu.be/MeNseDHe5gc?si=3bY0kpPCqnTERPtv" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline font-medium">
                    Game Day Warmup Routine
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: Arm Care */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-600 to-gray-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 2: Arm Care & Prep
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {armCareTalk.map((item, idx) => (
                <div key={idx} className="bg-white border-l-4 border-slate-500 p-4 rounded">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-bold text-slate-900">"{item.phrase}"</span>
                    <span className="text-xs text-gray-500">{item.when}</span>
                  </div>
                  <div className="text-sm text-gray-600">= {item.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 3: Game Plan Discussion */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-600 to-gray-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 3: Game Plan Talk
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {gamePlanTalk.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-slate-200 p-4 rounded-lg">
                  <div className="font-bold text-slate-900 mb-1">"{item.q}"</div>
                  <div className="text-sm text-gray-600 mb-3">= {item.meaning}</div>
                  <div className="bg-slate-50 p-3 rounded">
                    <div className="text-xs text-gray-500 mb-1">Examples:</div>
                    <div className="text-sm font-medium text-gray-800">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 4: Locker Room Prep */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-600 to-gray-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 4: Locker Room Preparation
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {lockerRoomTalk.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-3 rounded-lg">
                  <div className="font-bold text-slate-900">"{item.phrase}"</div>
                  <div className="text-sm text-gray-700">= {item.meaning}</div>
                  <div className="text-xs text-gray-500 mt-1 italic">{item.context}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 5: Mental Preparation */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-600 to-gray-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 5: Mental Prep Talk
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {mentalPrep.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                  <div className="font-bold text-slate-900 mb-3">{item.situation}</div>
                  <div className="grid gap-2">
                    {item.talk.map((t, i) => (
                      <div key={i} className="bg-white p-2 rounded">
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

        {/* Part 6: Timing & Schedule */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-600 to-gray-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 6: Game Timing Talk
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {timingTalk.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-slate-200 p-3 rounded-lg">
                  <div className="font-bold text-slate-900">"{item.call}"</div>
                  <div className="text-sm text-gray-700">= {item.meaning}</div>
                  <div className="text-xs text-gray-500 mt-1 italic">{item.context}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 7: Catcher Sync-Up */}
        <section className="bg-white/95 backdrop-blur rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-600 to-gray-600 px-4 sm:px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Part 7: Syncing with Catcher
            </h2>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {catcherSync.map((item, idx) => (
                <div key={idx} className="border-2 border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-900 mb-2">{item.topic}</h4>
                  <div className="space-y-1">
                    {item.phrases.map((phrase, i) => (
                      <div key={i} className="text-sm bg-slate-50 p-2 rounded">
                        "{phrase}"
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
            to="/week8-vocab"
            className="flex-1 bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
          >
            Week 8 Vocabulary →
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

export default Week8Lesson;
