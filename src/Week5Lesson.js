import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Play, Target, Users } from 'lucide-react';

const Week5Lesson = () => {
  const tacticalTerms = [
    {
      term: "Bunt",
      meaning: "번트",
      situation: "주자 진루 시키기",
      example: "We need a bunt here.",
      response: "Got it, I'm on it."
    },
    {
      term: "Steal",
      meaning: "도루",
      situation: "주자가 다음 베이스로",
      example: "Green light to steal.",
      response: "I'll take off on first move."
    },
    {
      term: "Hit-and-run",
      meaning: "히트앤런",
      situation: "주자 출발 + 타자 치기",
      example: "Hit-and-run is on.",
      response: "Understood, I'll protect the runner."
    },
    {
      term: "Squeeze play",
      meaning: "스퀴즈 플레이",
      situation: "3루 주자 홈으로",
      example: "Squeeze play, runner on third.",
      response: "I'll bunt no matter what."
    },
    {
      term: "Take a pitch",
      meaning: "공 보내기",
      situation: "일부러 안 치기",
      example: "Take the first pitch.",
      response: "Yes sir, I'll take it."
    },
    {
      term: "Looking fastball",
      meaning: "직구 노리기",
      situation: "특정 구종 기다리기",
      example: "Be looking fastball.",
      response: "Fastball, got it."
    },
    {
      term: "Work the count",
      meaning: "볼카운트 끌기",
      situation: "많은 공 보게 하기",
      example: "Work the count, make him throw.",
      response: "I'll be patient."
    },
    {
      term: "Protect with two strikes",
      meaning: "2스트라이크에 보호",
      situation: "삼진 피하기",
      example: "Protect with two strikes.",
      response: "I'll shorten my swing."
    }
  ];

  const defensiveTerms = [
    {
      term: "Shift",
      meaning: "수비 시프트",
      explanation: "타자 성향에 따라 수비 위치 변경",
      example: "We're shifting on this guy."
    },
    {
      term: "Play deep",
      meaning: "깊게 서기",
      explanation: "타구가 센 타자 대비",
      example: "Play deep, he hits it hard."
    },
    {
      term: "Play shallow",
      meaning: "얕게 서기",
      explanation: "번트나 약한 타구 대비",
      example: "Play shallow, he might bunt."
    },
    {
      term: "No doubles",
      meaning: "2루타 안돼",
      explanation: "외야수가 깊게 수비",
      example: "No doubles defense!"
    },
    {
      term: "Infield in",
      meaning: "내야 앞으로",
      explanation: "홈으로 공 빨리 보내기",
      example: "Infield in, runner on third."
    },
    {
      term: "Play at home",
      meaning: "홈 플레이",
      explanation: "홈으로만 공 보내기",
      example: "Play's at home only."
    },
    {
      term: "Turn two",
      meaning: "병살 만들기",
      explanation: "더블플레이",
      example: "Turn two if you can."
    },
    {
      term: "Cut off",
      meaning: "중계플레이",
      explanation: "외야에서 내야로 공 전달",
      example: "Be ready for the cut off."
    }
  ];

  const signs = [
    {
      category: "타격 사인",
      signs: [
        { sign: "Touch cap", meaning: "번트", tip: "모자 만지기" },
        { sign: "Touch belt", meaning: "히트앤런", tip: "벨트 만지기" },
        { sign: "Touch nose", meaning: "도루", tip: "코 만지기" },
        { sign: "Touch ear", meaning: "테이크 피치", tip: "귀 만지기" },
        { sign: "Clap hands", meaning: "스퀴즈", tip: "손뼉 치기" }
      ]
    },
    {
      category: "수비 사인",
      signs: [
        { sign: "Point up", meaning: "플라이볼 우선", tip: "위 가리키기" },
        { sign: "Point down", meaning: "땅볼 우선", tip: "아래 가리키기" },
        { sign: "Fist", meaning: "파스트볼", tip: "주먹 쥐기" },
        { sign: "Two fingers", meaning: "커브볼", tip: "두 손가락" }
      ]
    }
  ];

  const meetingPhrases = [
    {
      coach: "Alright, bring it in guys.",
      meaning: "좋아, 모여.",
      situation: "미팅 시작",
      response: "Coming!"
    },
    {
      coach: "Here's the game plan.",
      meaning: "게임 플랜이야.",
      situation: "전략 설명 시작",
      response: "[집중해서 듣기]"
    },
    {
      coach: "Any questions?",
      meaning: "질문 있어?",
      situation: "설명 후",
      response: "No sir." / "Yes, one question..."
    },
    {
      coach: "Make sure you understand the signs.",
      meaning: "사인 확실히 알아둬.",
      situation: "사인 확인",
      response: "Yes Coach, I got them."
    },
    {
      coach: "If you're confused, call time.",
      meaning: "헷갈리면 타임 콜해.",
      situation: "중요한 조언",
      response: "Will do, Coach."
    },
    {
      coach: "Let's execute.",
      meaning: "실행하자.",
      situation: "마무리",
      response: "Yes sir!"
    }
  ];

  const confirmation = [
    {
      phrase: "I'm on it",
      meaning: "제가 할게요",
      when: "임무 받았을 때",
      tone: "적극적"
    },
    {
      phrase: "Copy that",
      meaning: "알겠습니다",
      when: "지시 이해했을 때",
      tone: "전문적"
    },
    {
      phrase: "Understood",
      meaning: "이해했습니다",
      when: "확인할 때",
      tone: "공식적"
    },
    {
      phrase: "Roger",
      meaning: "알았어요",
      when: "라디오 스타일",
      tone: "간결"
    },
    {
      phrase: "I hear you",
      meaning: "듣고 있어요",
      when: "경청 표현",
      tone: "적극적"
    },
    {
      phrase: "Will do",
      meaning: "그렇게 할게요",
      when: "요청 수락",
      tone: "긍정적"
    }
  ];

  const clarifyingQuestions = [
    "Just to clarify, you want me to...?",
    "So I should bunt on the first pitch?",
    "Are we stealing on the first move?",
    "What if he throws over?",
    "Do I take if it's a ball?",
    "Should I protect the runner?",
    "What's the sign for hit-and-run again?",
    "Which base am I covering?",
    "Do I go on contact?",
    "What if the count changes?"
  ];

  const situations = [
    {
      situation: "주자 1루, 번트 사인",
      steps: [
        "1. 사인 확인 (모자 터치)",
        "2. 'Got it, bunting.' 말하기",
        "3. 타석에서 번트 자세",
        "4. 성공 후 벤치로 '1루 안전!' 확인"
      ]
    },
    {
      situation: "히트앤런 사인",
      steps: [
        "1. 사인 확인 (벨트 터치)",
        "2. 주자에게 눈빛 확인",
        "3. '주자 보호할게요' 각오",
        "4. 어떤 공이든 배트에 맞추기"
      ]
    },
    {
      situation: "사인 헷갈림",
      steps: [
        "1. 즉시 타임아웃 요청",
        "2. 'Time, Coach!' 외치기",
        "3. 1루 코치나 3루 코치에게 확인",
        "4. 명확히 이해 후 재개"
      ]
    }
  ];

  const gameContext = [
    {
      context: "Late & Close",
      meaning: "막판 접전",
      strategy: "Every pitch matters. Play smart.",
      response: "I understand, one pitch at a time."
    },
    {
      context: "Big inning",
      meaning: "큰 이닝",
      strategy: "Let's score multiple runs.",
      response: "Let's put up a crooked number."
    },
    {
      context: "Momentum shift",
      meaning: "분위기 전환",
      strategy: "This is our chance to take control.",
      response: "Let's seize this moment."
    },
    {
      context: "Damage control",
      meaning: "피해 최소화",
      strategy: "Limit the damage, get an out.",
      response: "One out at a time."
    }
  ];

  const dosDonts = [
    {
      title: "DO ✅ 미팅에서 해야 할 것",
      items: [
        "사인 완벽히 이해하기",
        "질문 있으면 즉시 물어보기",
        "눈 맞추며 집중해서 듣기",
        "핵심 내용 머릿속 반복하기",
        "'Got it' 확실히 말하기",
        "헷갈리면 다시 확인하기"
      ]
    },
    {
      title: "DON'T ❌ 미팅에서 하면 안되는 것",
      items: [
        "딴짓하거나 핸드폰 보기",
        "사인 애매하게 넘어가기",
        "안 들었는데 '알았어요'",
        "다른 선수와 잡담하기",
        "졸거나 집중력 잃기",
        "사인 까먹고 경기 중 헤매기"
      ]
    }
  ];

  const realScenarios = [
    {
      title: "시나리오 1: 경기 전 미팅",
      conversation: [
        { person: "코치", line: "Alright guys, here's today's lineup.", translation: "좋아 얘들아, 오늘 라인업이야." },
        { person: "코치", line: "We're facing a lefty, so stay back on the breaking ball.", translation: "좌완 상대하니까 변화구에 뒤에 남아." },
        { person: "너", line: "Should we be looking fastball early in the count?", translation: "초반 카운트에 직구 노려야 하나요?" },
        { person: "코치", line: "Exactly. He starts everyone with a heater.", translation: "정확해. 그 친구 다들한테 직구로 시작해." },
        { person: "너", line: "Got it, fastball early.", translation: "알겠습니다, 초반 직구요." },
        { person: "코치", line: "Signs are the same as yesterday. Any questions?", translation: "사인은 어제랑 같아. 질문?" },
        { person: "너", line: "No sir, I'm clear on the signs.", translation: "없습니다, 사인 명확해요." }
      ]
    },
    {
      title: "시나리오 2: 이닝 중 벤치 토크",
      conversation: [
        { person: "코치", line: "If you get on, we're running.", translation: "네가 출루하면 달릴 거야." },
        { person: "너", line: "Green light to steal?", translation: "도루 허가요?" },
        { person: "코치", line: "Yeah, but read the pitcher first.", translation: "응, 근데 투수 먼저 읽어봐." },
        { person: "너", line: "I'm on it, Coach.", translation: "알겠습니다, 코치님." },
        { person: "코치", line: "And if he goes to the slide step, hold up.", translation: "그리고 슬라이드 스텝 쓰면 기다려." },
        { person: "너", line: "Got it. Only if he's in the full windup.", translation: "알겠어요. 풀 와인드업일 때만요." }
      ]
    },
    {
      title: "시나리오 3: 사인 재확인",
      conversation: [
        { person: "너", line: "Coach, just to make sure - cap is bunt, right?", translation: "코치님, 확인차 - 모자가 번트 맞죠?" },
        { person: "코치", line: "Correct. And belt is hit-and-run.", translation: "맞아. 그리고 벨트가 히트앤런." },
        { person: "너", line: "And if I miss the sign?", translation: "그리고 사인 놓치면?" },
        { person: "코치", line: "Call time and check with me. Never guess.", translation: "타임 부르고 나한테 확인해. 절대 추측하지 마." },
        { person: "너", line: "Understood. I'll call time if I'm unsure.", translation: "이해했어요. 확실하지 않으면 타임 부를게요." }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-4 sm:mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6 sm:p-8 rounded-t-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">⚾ Week 5</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold">팀 미팅 - 전술 용어 & 반응 표현</h2>
          <p className="text-lg sm:text-xl mt-3 sm:mt-4">"Got it" / "I'm on it"</p>
        </div>

        <div className="bg-white shadow-2xl rounded-b-2xl">
          
          {/* Part 1: 공격 전술 용어 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6 flex items-center gap-2">
              <Target size={32} /> Part 1: 공격 전술 용어 (8개)
            </h3>
            
            <div className="bg-yellow-50 border-l-8 border-yellow-400 p-4 sm:p-6 mb-6">
              <h4 className="text-xl sm:text-2xl font-bold mb-3">⚠️ 핵심 포인트</h4>
              <p className="text-lg sm:text-xl">전술 이해 못하면 = 경기 망침! 사인 헷갈리면 반드시 타임 요청!</p>
            </div>

            <div className="space-y-4">
              {tacticalTerms.map((item, i) => (
                <div key={i} className="bg-indigo-50 p-4 sm:p-6 rounded-xl border-2 border-indigo-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-2xl font-bold text-indigo-800">{item.term}</h4>
                      <p className="text-lg text-gray-700">= {item.meaning}</p>
                    </div>
                    <span className="text-sm bg-white px-3 py-1 rounded-full font-semibold">{item.situation}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">코치:</p>
                      <p className="text-base font-semibold">"{item.example}"</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                      <p className="text-sm text-gray-600 mb-1">너:</p>
                      <p className="text-base font-semibold text-green-700">"{item.response}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 2: 수비 전술 용어 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">🛡️ Part 2: 수비 전술 용어 (8개)</h3>
            
            <div className="space-y-4">
              {defensiveTerms.map((item, i) => (
                <div key={i} className="bg-purple-50 p-4 rounded-xl border-2 border-purple-300">
                  <h4 className="text-xl font-bold text-purple-800 mb-2">{item.term}</h4>
                  <p className="text-lg text-gray-700 mb-2">= {item.meaning}</p>
                  <p className="text-base text-gray-600 mb-3">{item.explanation}</p>
                  <div className="bg-white p-3 rounded">
                    <p className="text-base font-semibold">예: "{item.example}"</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 3: 사인 시스템 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">👋 Part 3: 사인 시스템</h3>
            
            <div className="bg-red-50 border-l-8 border-red-400 p-4 sm:p-6 mb-6">
              <p className="text-lg font-bold">⚠️ 중요: 이건 일반적인 예시! 각 팀마다 사인이 다르니 반드시 확인하세요!</p>
            </div>

            <div className="space-y-6">
              {signs.map((cat, i) => (
                <div key={i} className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">{cat.category}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cat.signs.map((sign, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg border border-blue-200">
                        <p className="text-lg font-bold text-blue-700 mb-1">{sign.sign}</p>
                        <p className="text-base text-gray-700 mb-1">→ {sign.meaning}</p>
                        <p className="text-sm text-gray-600">({sign.tip})</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-100 p-4 rounded-xl mt-4">
              <p className="font-bold mb-2">💡 사인 익히기 팁:</p>
              <ul className="space-y-1 text-sm">
                <li>• 연습 때 계속 반복해서 몸으로 익히기</li>
                <li>• 헷갈리는 사인은 노트에 정리하기</li>
                <li>• 경기 전 항상 재확인하기</li>
                <li>• 100% 확신 없으면 타임 요청!</li>
              </ul>
            </div>
          </section>

          {/* Part 4: 미팅 필수 표현 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6 flex items-center gap-2">
              <Users size={32} /> Part 4: 미팅 필수 표현 (6개)
            </h3>
            
            <div className="space-y-3">
              {meetingPhrases.map((item, i) => (
                <div key={i} className="bg-green-50 p-4 rounded-xl border-2 border-green-300">
                  <div className="mb-2">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.situation}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded">
                      <p className="text-base font-semibold text-gray-700">코치: "{item.coach}"</p>
                      <p className="text-sm text-gray-600">({item.meaning})</p>
                    </div>
                    {item.response !== "[집중해서 듣기]" && (
                      <div className="bg-green-100 p-3 rounded border-l-4 border-green-600">
                        <p className="text-base font-semibold text-green-700">너: "{item.response}"</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 5: 확인 & 이해 표현 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">✅ Part 5: 확인 & 이해 표현 (6개)</h3>
            
            <div className="space-y-3">
              {confirmation.map((item, i) => (
                <div key={i} className={`p-4 rounded-xl border-2 ${
                  item.tone === '적극적' ? 'bg-blue-50 border-blue-300' :
                  item.tone === '전문적' ? 'bg-purple-50 border-purple-300' :
                  item.tone === '공식적' ? 'bg-indigo-50 border-indigo-300' :
                  'bg-green-50 border-green-300'
                }`}>
                  <p className="text-xl font-bold mb-1">"{item.phrase}"</p>
                  <p className="text-lg text-gray-700 mb-2">= {item.meaning}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white px-3 py-1 rounded-full">언제: {item.when}</span>
                    <span className="bg-white px-3 py-1 rounded-full">톤: {item.tone}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-100 p-4 rounded-xl mt-6">
              <h4 className="font-bold mb-3">🎯 사용 가이드</h4>
              <div className="space-y-2 text-sm">
                <p>• <strong>"Got it"</strong> - 가장 일반적 (Week 1에서 배움, 여기서 재활용)</p>
                <p>• <strong>"I'm on it"</strong> - 적극적, 자신감 있을 때</p>
                <p>• <strong>"Copy that"</strong> - 전문적, 간결한 확인</p>
                <p>• <strong>"Understood"</strong> - 공식적, 중요한 지시</p>
                <p>• <strong>"Roger"</strong> - 군대식, 빠른 응답</p>
                <p>• <strong>"Will do"</strong> - 행동 약속, 긍정적</p>
              </div>
            </div>
          </section>

          {/* Part 6: 명확화 질문 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">❓ Part 6: 명확화 질문 (10개)</h3>
            
            <div className="bg-blue-50 border-l-8 border-blue-400 p-4 sm:p-6 mb-6">
              <p className="text-lg font-bold">💡 질문하는 것 = 프로페셔널! 모르는 척하는 것 = 아마추어!</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {clarifyingQuestions.map((q, i) => (
                <div key={i} className="bg-white p-3 rounded-lg border-2 border-gray-200">
                  <p className="text-base font-semibold">"{q}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Part 7: 상황별 대처 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">🎯 Part 7: 상황별 대처 (3가지)</h3>
            
            <div className="space-y-4">
              {situations.map((sit, i) => (
                <div key={i} className="bg-yellow-50 p-4 sm:p-6 rounded-xl border-2 border-yellow-300">
                  <h4 className="text-xl font-bold text-yellow-800 mb-3">{sit.situation}</h4>
                  <div className="space-y-2">
                    {sit.steps.map((step, idx) => (
                      <div key={idx} className="bg-white p-3 rounded flex items-start gap-3">
                        <span className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-base">{step.replace(/^\d+\.\s/, '')}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 8: 게임 상황 용어 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">⚡ Part 8: 게임 상황 용어 (4가지)</h3>
            
            <div className="space-y-4">
              {gameContext.map((ctx, i) => (
                <div key={i} className="bg-red-50 p-4 rounded-xl border-2 border-red-300">
                  <h4 className="text-xl font-bold text-red-800 mb-2">{ctx.context}</h4>
                  <p className="text-lg text-gray-700 mb-3">= {ctx.meaning}</p>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded">
                      <p className="text-sm text-gray-600">전략:</p>
                      <p className="text-base font-semibold">"{ctx.strategy}"</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-gray-600">반응:</p>
                      <p className="text-base font-semibold text-green-700">"{ctx.response}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 9: Do's & Don'ts */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">⚠️ Part 9: Do's & Don'ts</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dosDonts.map((section, i) => (
                <div key={i} className={`p-4 sm:p-6 rounded-xl ${
                  i === 0 ? 'bg-green-50 border-2 border-green-300' : 'bg-red-50 border-2 border-red-300'
                }`}>
                  <h4 className={`text-xl font-bold mb-4 ${i === 0 ? 'text-green-700' : 'text-red-700'}`}>
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="text-sm sm:text-base flex items-start gap-2">
                        <span className="flex-shrink-0">{i === 0 ? '✅' : '❌'}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Part 10: 실전 시나리오 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">🎬 Part 10: 실전 시나리오 (3가지)</h3>
            
            <div className="space-y-6">
              {realScenarios.map((scenario, i) => (
                <div key={i} className="bg-gray-100 p-4 sm:p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-indigo-700 mb-4">{scenario.title}</h4>
                  <div className="space-y-3">
                    {scenario.conversation.map((chat, idx) => (
                      <div key={idx} className={`p-3 rounded-lg ${
                        chat.person === '너' ? 'bg-green-100 border-l-4 border-green-500' : 
                        'bg-white'
                      }`}>
                        <p className="font-bold text-sm text-gray-600 mb-1">{chat.person}</p>
                        <p className="text-lg font-semibold mb-1">"{chat.line}"</p>
                        <p className="text-sm text-gray-600">({chat.translation})</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 영상 자료 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">🎥 추천 영상 자료</h3>
            
            <div className="bg-blue-100 p-4 sm:p-6 rounded-xl">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-base mb-2">🎯 전술 & 사인</h5>
                  <div className="space-y-2 text-sm">
                    <a href="https://youtu.be/pME9SsFMmf4?si=TmslDotdB_hhksj9" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Dan Blewett - Signs for Catchers
                    </a>
                    <a href="https://youtu.be/EMYSWzocrtk?si=9GiSQGpDB7AOdpQn" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Lance Brozdowski - Game Strategy
                    </a>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-base mb-2">⚾ 야구 기초용어</h5>
                  <div className="space-y-2 text-sm">
                    <a href="https://youtu.be/daiZtbGFdDM?si=6u1fg4C8KT4RCAZS" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 MLB - Baseball Basics
                    </a>
                    <a href="https://youtu.be/5NPbQBECF0w?si=9qExdmqDzXedtbve" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 MLB - How Can You Get Out in Baseball?
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded mt-3 text-sm">
                <p className="font-semibold mb-1">💡 영상 활용 팁:</p>
                <ul className="space-y-1 text-xs">
                  <li>• MLB 경기에서 사인 주는 모습 관찰하기</li>
                  <li>• 전술 실행 장면 반복 시청</li>
                  <li>• 코치-선수 소통 방식 배우기</li>
                  <li>• 상황별 전략 이해하기</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 숙제 */}
          <section className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6">📚 이번 주 숙제</h3>
            
            <div className="bg-orange-100 p-4 sm:p-6 rounded-xl">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">✍️ 필수 과제</h4>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>1️⃣ 공격 전술 8개 완벽 암기</li>
                <li>2️⃣ 수비 전술 8개 이해하기</li>
                <li>3️⃣ 단어장 50개 단어 암기</li>
                <li>4️⃣ 팀 사인 시스템 완벽히 익히기</li>
                <li>5️⃣ 확인 표현 6개 자연스럽게 쓰기</li>
                <li>6️⃣ 명확화 질문 10개 연습</li>
                <li>7️⃣ 실전 시나리오 3개 역할극</li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg mt-4">
                <h5 className="font-bold mb-2">🎯 이번 주 목표</h5>
                <p className="text-base">전술 100% 이해하고, 미팅에서 적극적으로 소통하기!</p>
                <p className="text-sm text-indigo-600 mt-2 font-semibold">💡 사인 헷갈리면 타임! 추측하지 말고 확인!</p>
              </div>
            </div>
          </section>

        </div>

        <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-b-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to="/" className="text-blue-300 hover:text-blue-100 text-sm sm:text-base">← 메인</Link>
          <Link to="/week5-vocab" className="text-indigo-300 hover:text-indigo-100 text-sm sm:text-base">단어장 →</Link>
        </div>

      </div>
    </div>
  );
};

export default Week5Lesson;