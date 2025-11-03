import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Play, AlertTriangle, Heart } from 'lucide-react';

const Week4Lesson = () => {
  const injuryBasics = [
    { 
      term: "Sore", 
      meaning: "아픈/쑤시는", 
      example: "My arm's a bit sore.",
      situation: "근육통, 뻐근할 때",
      level: "경미"
    },
    { 
      term: "Tight", 
      meaning: "뻐근한/당기는", 
      example: "My shoulder feels tight.",
      situation: "근육이 당길 때",
      level: "경미"
    },
    { 
      term: "Stiff", 
      meaning: "뻣뻣한", 
      example: "I'm feeling stiff.",
      situation: "몸이 굳었을 때",
      level: "경미"
    },
    { 
      term: "Acting up", 
      meaning: "말썽부리는", 
      example: "My elbow's acting up.",
      situation: "특정 부위 문제",
      level: "경미~중간"
    },
    { 
      term: "Bothering me", 
      meaning: "신경쓰이는", 
      example: "My knee's bothering me.",
      situation: "계속 신경쓰일 때",
      level: "경미~중간"
    },
    { 
      term: "Sharp pain", 
      meaning: "찌르는 듯한 통증", 
      example: "I felt a sharp pain.",
      situation: "갑작스런 통증",
      level: "심각"
    },
    { 
      term: "Pulled", 
      meaning: "당긴/삔", 
      example: "I think I pulled my hamstring.",
      situation: "근육 부상",
      level: "중간~심각"
    },
    { 
      term: "Tweaked", 
      meaning: "살짝 다친", 
      example: "I tweaked my ankle.",
      situation: "가벼운 부상",
      level: "경미"
    }
  ];

  const bodyParts = [
    { part: "Arm", korean: "팔", common: "투수 가장 중요" },
    { part: "Shoulder", korean: "어깨", common: "투수/야수 공통" },
    { part: "Elbow", korean: "팔꿈치", common: "투수 주의" },
    { part: "Wrist", korean: "손목", common: "타자 주의" },
    { part: "Back", korean: "등/허리", common: "전체 공통" },
    { part: "Hip", korean: "엉덩이", common: "하체 연결" },
    { part: "Hamstring", korean: "햄스트링", common: "주루 시 부상" },
    { part: "Quad", korean: "허벅지 앞", common: "달리기 부상" },
    { part: "Knee", korean: "무릎", common: "포수 주의" },
    { part: "Ankle", korean: "발목", common: "주루 시 부상" },
    { part: "Leg", korean: "다리", common: "전체" },
    { part: "Foot", korean: "발", common: "투수 랜딩" }
  ];

  const reportingInjury = [
    {
      level: "🟢 경미한 불편함",
      phrases: [
        "I'm a little sore today.",
        "My arm's feeling tight.",
        "I'm okay, just need to stretch.",
        "It's nothing serious, just stiff."
      ],
      action: "스트레칭, 가벼운 치료"
    },
    {
      level: "🟡 중간 수준",
      phrases: [
        "My elbow's been bothering me.",
        "I felt something in my shoulder.",
        "It's been acting up for a few days.",
        "I might need to get it checked."
      ],
      action: "트레이너 상담 필수"
    },
    {
      level: "🔴 심각한 통증",
      phrases: [
        "I felt a sharp pain.",
        "I think I pulled something.",
        "I can't throw right now.",
        "Something doesn't feel right."
      ],
      action: "즉시 연습 중단, 트레이너"
    }
  ];

  const trainerConversation = [
    {
      situation: "트레이너실 방문",
      you: "Hey, do you have a minute?",
      trainer: "Sure, what's up?",
      you_response: "My shoulder's been bothering me.",
      tip: "직접적으로 문제 말하기"
    },
    {
      situation: "증상 설명",
      trainer: "Where does it hurt?",
      you: "Right here, in my rotator cuff.",
      trainer_follow: "When did it start?",
      you_response: "About three days ago.",
      tip: "위치와 시작 시점 명확히"
    },
    {
      situation: "통증 정도",
      trainer: "How bad is the pain? Scale of 1-10?",
      you: "Maybe a 5 or 6.",
      trainer_follow: "Does it hurt when you throw?",
      you_response: "Yeah, especially on release.",
      tip: "숫자로 정확히 표현"
    },
    {
      situation: "치료 계획",
      trainer: "Let's ice it and do some stretches.",
      you: "How long should I rest?",
      trainer_response: "Take today off, we'll see tomorrow.",
      tip: "지시사항 확인하기"
    }
  ];

  const conditionPhrases = [
    { 
      phrase: "I'm good to go", 
      meaning: "괜찮아요, 할 수 있어요",
      when: "컨디션 체크 받을 때",
      tone: "긍정"
    },
    { 
      phrase: "I'm at 100%", 
      meaning: "완전히 회복했어요",
      when: "부상 후 복귀 시",
      tone: "긍정"
    },
    { 
      phrase: "I'm not 100%", 
      meaning: "완전히 회복 안됐어요",
      when: "정직하게 말할 때",
      tone: "조심"
    },
    { 
      phrase: "I can play through it", 
      meaning: "이 정도면 뛸 수 있어요",
      when: "경미한 불편함",
      tone: "중립"
    },
    { 
      phrase: "I need to sit out", 
      meaning: "쉬어야 할 것 같아요",
      when: "심각한 상태",
      tone: "조심"
    },
    { 
      phrase: "I'm feeling better", 
      meaning: "좋아지고 있어요",
      when: "회복 중",
      tone: "긍정"
    }
  ];

  const preventionTips = [
    {
      category: "투수",
      tips: [
        "Arm care routine 매일 하기",
        "Ice after throwing (20분)",
        "과도한 투구 피하기",
        "어깨/팔꿈치 스트레칭"
      ]
    },
    {
      category: "타자/야수",
      tips: [
        "웜업 충분히 하기",
        "햄스트링 스트레칭",
        "주루 전 준비운동",
        "손목 보호대 착용"
      ]
    },
    {
      category: "전체",
      tips: [
        "충분한 수면 (8시간+)",
        "수분 섭취 (물 많이)",
        "영양 관리",
        "통증 있으면 즉시 보고"
      ]
    }
  ];

  const dosDonts = [
    {
      title: "DO ✅ 해야 하는 것",
      items: [
        "통증 느끼면 즉시 말하기",
        "트레이너 지시 100% 따르기",
        "아이싱, 스트레칭 성실히",
        "컨디션 정직하게 보고",
        "충분한 휴식 취하기",
        "재활 운동 꾸준히"
      ]
    },
    {
      title: "DON'T ❌ 하면 안되는 것",
      items: [
        "통증 숨기기 (절대 금지!)",
        "트레이너 몰래 던지기",
        "아픈데 '괜찮아요' 거짓말",
        "재활 건너뛰기",
        "무리해서 연습하기",
        "자가 진단/치료"
      ]
    }
  ];

  const usefulPhrases = [
    "Can you tape my ankle?",
    "Do I need to ice this?",
    "How long should I rest?",
    "When can I throw again?",
    "Should I get an MRI?",
    "What exercises should I do?",
    "Is it okay to run?",
    "Can I hit but not throw?",
    "I need a heating pad.",
    "Where's the ice machine?",
    "Do you have ibuprofen?",
    "My arm feels great today!"
  ];

  const realScenarios = [
    {
      title: "시나리오 1: 투구 중 어깨 통증",
      conversation: [
        { person: "너", line: "Coach, can I talk to you?", translation: "코치님, 잠깐 얘기할 수 있을까요?" },
        { person: "코치", line: "What's going on?", translation: "무슨 일이야?" },
        { person: "너", line: "I felt something in my shoulder on that last pitch.", translation: "마지막 공 던질 때 어깨에서 뭔가 느꼈어요." },
        { person: "코치", line: "Go see the trainer right now.", translation: "지금 바로 트레이너한테 가봐." },
        { person: "너", line: "Yes sir.", translation: "네." }
      ]
    },
    {
      title: "시나리오 2: 트레이너실에서",
      conversation: [
        { person: "트레이너", line: "What seems to be the problem?", translation: "무슨 문제야?" },
        { person: "너", line: "My shoulder's been tight for a few days.", translation: "며칠 동안 어깨가 뻐근해요." },
        { person: "트레이너", line: "On a scale of 1-10?", translation: "1에서 10까지 중에?" },
        { person: "너", line: "Maybe a 4. Not terrible, just tight.", translation: "4 정도요. 심각하진 않은데 뻐근해요." },
        { person: "트레이너", line: "Let's do some stretches and ice it.", translation: "스트레칭하고 아이싱하자." },
        { person: "너", line: "Should I throw today?", translation: "오늘 던져도 될까요?" },
        { person: "트레이너", line: "Take today off, come back tomorrow.", translation: "오늘은 쉬고, 내일 와봐." }
      ]
    },
    {
      title: "시나리오 3: 회복 후 복귀",
      conversation: [
        { person: "코치", line: "How's the arm feeling?", translation: "팔 어때?" },
        { person: "너", line: "Much better, I'm ready to go.", translation: "훨씬 좋아요, 준비됐어요." },
        { person: "코치", line: "You sure? Don't push it.", translation: "확실해? 무리하지 마." },
        { person: "너", line: "I'm at 100%, no pain at all.", translation: "100% 회복했어요, 전혀 안 아파요." },
        { person: "코치", line: "Alright, but take it easy at first.", translation: "좋아, 그래도 처음엔 천천히 해." }
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

        <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white p-6 sm:p-8 rounded-t-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">⚾ Week 4</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold">부상 & 컨디션 표현</h2>
          <p className="text-lg sm:text-xl mt-3 sm:mt-4">"I'm feeling sore" / "My arm's acting up"</p>
        </div>

        <div className="bg-white shadow-2xl rounded-b-2xl">
          
          {/* Part 1: 부상 표현 기초 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6">🩹 Part 1: 부상 표현 기초 (8개)</h3>
            
            <div className="bg-yellow-50 border-l-8 border-yellow-400 p-4 sm:p-6 mb-6">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
                <AlertTriangle size={24} /> 중요!
              </h4>
              <p className="text-lg sm:text-xl">미국 야구에서 부상 숨기기 = 팀에 대한 배신! 작은 통증도 즉시 보고하세요.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {injuryBasics.map((item, i) => (
                <div key={i} className="bg-red-50 p-4 rounded-xl border-2 border-red-300">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-red-800">{item.term}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.level === '경미' ? 'bg-green-200 text-green-800' :
                      item.level === '중간~심각' ? 'bg-orange-200 text-orange-800' :
                      'bg-red-200 text-red-800'
                    }`}>
                      {item.level}
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">= {item.meaning}</p>
                  <p className="text-base bg-white p-3 rounded mb-2 font-semibold">"{item.example}"</p>
                  <p className="text-sm text-gray-600">💡 {item.situation}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Part 2: 신체 부위 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6">🦴 Part 2: 신체 부위 (12개)</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {bodyParts.map((item, i) => (
                <div key={i} className="bg-orange-50 p-4 rounded-xl border-2 border-orange-300 text-center">
                  <p className="text-xl font-bold text-orange-800 mb-1">{item.part}</p>
                  <p className="text-base text-gray-700 mb-2">{item.korean}</p>
                  <p className="text-xs bg-white p-2 rounded">{item.common}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-100 p-4 sm:p-6 rounded-xl mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3">💡 조합 예시</h4>
              <div className="space-y-2 text-sm sm:text-base">
                <p>• "My <strong>shoulder</strong> is <strong>sore</strong>." (어깨가 아파요)</p>
                <p>• "My <strong>elbow's</strong> <strong>acting up</strong>." (팔꿈치가 말썽이에요)</p>
                <p>• "I <strong>pulled</strong> my <strong>hamstring</strong>." (햄스트링을 다쳤어요)</p>
                <p>• "My <strong>ankle's</strong> <strong>bothering me</strong>." (발목이 신경쓰여요)</p>
              </div>
            </div>
          </section>

          {/* Part 3: 부상 보고 단계별 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6">📢 Part 3: 부상 보고 (3단계)</h3>
            
            <div className="space-y-4">
              {reportingInjury.map((level, i) => (
                <div key={i} className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-300 shadow-md">
                  <h4 className="text-xl font-bold mb-3">{level.level}</h4>
                  <div className="bg-gray-50 p-4 rounded-lg mb-3">
                    <p className="font-semibold mb-2">말하는 법:</p>
                    {level.phrases.map((phrase, idx) => (
                      <p key={idx} className="text-base mb-1">• "{phrase}"</p>
                    ))}
                  </div>
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                    <p className="text-sm font-semibold">➡️ 조치: {level.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 4: 트레이너와 대화 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6">🏥 Part 4: 트레이너와 대화 (4단계)</h3>
            
            <div className="space-y-4">
              {trainerConversation.map((conv, i) => (
                <div key={i} className="bg-green-50 p-4 sm:p-6 rounded-xl border-2 border-green-300">
                  <h4 className="text-lg font-bold text-green-800 mb-3">{i+1}단계: {conv.situation}</h4>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-purple-700">너: "{conv.you}"</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded">
                      <p className="font-semibold text-gray-700">트레이너: "{conv.trainer}"</p>
                    </div>
                    {conv.you_response && (
                      <div className="bg-white p-3 rounded">
                        <p className="font-semibold text-purple-700">너: "{conv.you_response}"</p>
                      </div>
                    )}
                    {conv.trainer_follow && (
                      <>
                        <div className="bg-gray-100 p-3 rounded">
                          <p className="font-semibold text-gray-700">트레이너: "{conv.trainer_follow}"</p>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <p className="font-semibold text-purple-700">너: "{conv.you_response}"</p>
                        </div>
                      </>
                    )}
                    {conv.trainer_response && (
                      <div className="bg-gray-100 p-3 rounded">
                        <p className="font-semibold text-gray-700">트레이너: "{conv.trainer_response}"</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-3 bg-yellow-50 p-2 rounded">
                    <p className="text-sm">💡 {conv.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 5: 컨디션 표현 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6 flex items-center gap-2">
              <Heart size={32} /> Part 5: 컨디션 표현 (6개)
            </h3>
            
            <div className="space-y-3">
              {conditionPhrases.map((item, i) => (
                <div key={i} className={`p-4 rounded-xl border-2 ${
                  item.tone === '긍정' ? 'bg-green-50 border-green-300' :
                  item.tone === '조심' ? 'bg-yellow-50 border-yellow-300' :
                  'bg-blue-50 border-blue-300'
                }`}>
                  <p className="text-xl font-bold mb-1">"{item.phrase}"</p>
                  <p className="text-lg text-gray-700 mb-2">= {item.meaning}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white px-3 py-1 rounded-full">언제: {item.when}</span>
                    <span className={`px-3 py-1 rounded-full ${
                      item.tone === '긍정' ? 'bg-green-200 text-green-800' :
                      item.tone === '조심' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-blue-200 text-blue-800'
                    }`}>
                      {item.tone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 6: 예방 팁 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6">🛡️ Part 6: 부상 예방 팁</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {preventionTips.map((cat, i) => (
                <div key={i} className="bg-blue-50 p-4 rounded-xl border-2 border-blue-300">
                  <h4 className="text-xl font-bold text-blue-800 mb-3">{cat.category}</h4>
                  <ul className="space-y-2">
                    {cat.tips.map((tip, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Part 7: Do's & Don'ts */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6">⚠️ Part 7: Do's & Don'ts</h3>
            
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

          {/* Part 8: 유용한 표현 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6">💬 Part 8: 유용한 표현 (12개)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {usefulPhrases.map((phrase, i) => (
                <div key={i} className="bg-purple-50 p-3 rounded-lg border border-purple-300">
                  <p className="text-base font-semibold">"{phrase}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Part 9: 실전 시나리오 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6">🎬 Part 9: 실전 시나리오 (3가지)</h3>
            
            <div className="space-y-6">
              {realScenarios.map((scenario, i) => (
                <div key={i} className="bg-gray-100 p-4 sm:p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-red-700 mb-4">{scenario.title}</h4>
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
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6">🎥 추천 영상 자료</h3>
            
            <div className="bg-blue-100 p-4 sm:p-6 rounded-xl">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-base mb-2">🏥 부상 관리 & 재활</h5>
                  <div className="space-y-2 text-sm">
                    <a href="https://youtu.be/i-npjB7CkqY?si=t9WoMrBq7-kQE7bM" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Tread Athletics - Arm Care Routines
                    </a>
                    <a href="https://youtu.be/SPKDIqiHX8o?si=w9xQz076LkOz-KaB" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 JAG Physical Therapy - Injury Prevention
                    </a>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-base mb-2">💪 스트레칭 & 예방</h5>
                  <div className="space-y-2 text-sm">
                    <a href="https://youtu.be/yaPtL61nSzU?si=cH6SfboY0QWeY2R4" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Ultimate Baseball Training - Pre-game Stretching
                    </a>
                    <a href="https://youtu.be/Z3QJxLaPBDI?si=WSnXnIeuh0pKZsS0" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Trevor Bauer - Recovery Tips
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded mt-3 text-sm">
                <p className="font-semibold mb-1">💡 영상 활용 팁:</p>
                <ul className="space-y-1 text-xs">
                  <li>• 전문 트레이너의 스트레칭 루틴 따라하기</li>
                  <li>• Arm care 영상 매일 보기</li>
                  <li>• 부상 예방 팁 노트에 정리하기</li>
                  <li>• MLB 선수들의 회복 과정 참고</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 숙제 */}
          <section className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6">📚 이번 주 숙제</h3>
            
            <div className="bg-orange-100 p-4 sm:p-6 rounded-xl">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">✍️ 필수 과제</h4>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>1️⃣ 부상 표현 8개 완벽 암기</li>
                <li>2️⃣ 신체 부위 12개 영어로 외우기</li>
                <li>3️⃣ 단어장 50개 단어 암기</li>
                <li>4️⃣ 트레이너 대화 연습 (역할극)</li>
                <li>5️⃣ 컨디션 표현 6개 암기</li>
                <li>6️⃣ 실전 시나리오 3개 반복 연습</li>
                <li>7️⃣ Arm care 영상 시청 & 실천</li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg mt-4">
                <h5 className="font-bold mb-2">🎯 이번 주 목표</h5>
                <p className="text-base">부상을 정직하게 보고하고, 트레이너와 원활히 소통하기!</p>
                <p className="text-sm text-red-600 mt-2 font-semibold">⚠️ 명심: 작은 통증도 숨기지 말고 바로 말하기!</p>
              </div>
            </div>
          </section>

        </div>

        <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-b-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to="/" className="text-blue-300 hover:text-blue-100 text-sm sm:text-base">← 메인</Link>
          <Link to="/week4-vocab" className="text-red-300 hover:text-red-100 text-sm sm:text-base">단어장 →</Link>
        </div>

      </div>
    </div>
  );
};

export default Week4Lesson;