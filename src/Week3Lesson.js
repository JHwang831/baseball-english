import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Play, AlertCircle, MessageCircle } from 'lucide-react';

const Week3Lesson = () => {
  const lockerRoomBasics = [
    { phrase: "What's good?", meaning: "어떻게 지내?", context: "친한 사이 인사", response: "Not much, you?" },
    { phrase: "You ready?", meaning: "준비됐어?", context: "경기/연습 전", response: "Let's do it!" },
    { phrase: "Let's get it!", meaning: "해보자!", context: "사기 올리기", response: "Yeah!" },
    { phrase: "We got this!", meaning: "우리 할 수 있어!", context: "팀 격려", response: "For sure!" },
    { phrase: "Stay locked in!", meaning: "집중해!", context: "집중 독려", response: "I'm focused!" },
    { phrase: "That's my guy!", meaning: "그게 바로 내 친구!", context: "칭찬할 때", response: "Thanks bro!" },
    { phrase: "You good?", meaning: "괜찮아?", context: "걱정될 때", response: "Yeah, I'm good." },
    { phrase: "My bad", meaning: "내 실수", context: "사과할 때", response: "You're good." },
    { phrase: "No cap", meaning: "진짜로", context: "강조할 때", response: "For real?" },
    { phrase: "On God", meaning: "진심으로", context: "맹세할 때", response: "I believe you." }
  ];

  const baseballSlang = [
    { 
      term: "Dinger", 
      meaning: "홈런", 
      example: "He crushed a dinger!",
      useCase: "라커룸에서 홈런 치면 쓰는 말"
    },
    { 
      term: "Heat / Gas", 
      meaning: "빠른 공", 
      example: "That's some heat!",
      useCase: "빠른 볼 볼 때"
    },
    { 
      term: "Cheese", 
      meaning: "강속구", 
      example: "Throw that cheese!",
      useCase: "빠른 볼 던지라고 할 때"
    },
    { 
      term: "Painted the corner", 
      meaning: "코너 정확히 꽂음", 
      example: "You painted that corner!",
      useCase: "정확한 투구 칭찬"
    },
    { 
      term: "Moonshot", 
      meaning: "엄청 높은 홈런", 
      example: "That was a moonshot!",
      useCase: "아주 높이 친 홈런"
    },
    { 
      term: "Can of corn", 
      meaning: "쉬운 뜬공", 
      example: "That's a can of corn.",
      useCase: "쉽게 잡히는 공"
    },
    { 
      term: "Wheels", 
      meaning: "다리/발", 
      example: "He's got wheels!",
      useCase: "빠른 선수 칭찬"
    },
    { 
      term: "Cannon", 
      meaning: "강한 어깨", 
      example: "That guy's got a cannon.",
      useCase: "송구 좋은 선수"
    },
    { 
      term: "Ribbie / RBI", 
      meaning: "타점", 
      example: "Nice ribbie!",
      useCase: "득점 타점 낼 때"
    },
    { 
      term: "Yard / Going yard", 
      meaning: "홈런 치다", 
      example: "Let's go yard!",
      useCase: "홈런 치자!"
    }
  ];

  const positiveVibes = [
    { phrase: "Let's go!", meaning: "가자!", when: "사기 올릴 때", emoji: "🔥" },
    { phrase: "That's what I'm talking about!", meaning: "그거야!", when: "잘했을 때", emoji: "💪" },
    { phrase: "Hell yeah!", meaning: "완전 좋아!", when: "흥분될 때", emoji: "⚾" },
    { phrase: "We're rolling!", meaning: "우리 잘하고 있어!", when: "연승 중", emoji: "🎯" },
    { phrase: "Keep it up!", meaning: "계속해!", when: "격려할 때", emoji: "👏" },
    { phrase: "You're dialed in!", meaning: "완전 집중했네!", when: "집중 칭찬", emoji: "🎯" },
    { phrase: "That's clutch!", meaning: "결정적이야!", when: "중요한 순간", emoji: "⭐" },
    { phrase: "Unreal!", meaning: "믿을 수 없어!", when: "놀라울 때", emoji: "😱" }
  ];

  const supportPhrases = [
    { 
      situation: "동료가 실수했을 때",
      bad: "Why did you do that? ❌",
      good: "Shake it off, next play! ✅",
      tip: "항상 긍정적으로"
    },
    { 
      situation: "누군가 홈런 쳤을 때",
      bad: "Nice ❌ (너무 짧음)",
      good: "Let's go! That's huge! ✅",
      tip: "열정적으로 반응"
    },
    { 
      situation: "코치가 누군가를 칭찬할 때",
      bad: "아무 반응 없음 ❌",
      good: "Yeah! / That's my guy! ✅",
      tip: "함께 응원해주기"
    },
    { 
      situation: "팀이 지고 있을 때",
      bad: "We're gonna lose ❌",
      good: "We got time, let's battle! ✅",
      tip: "절대 포기 안하는 태도"
    },
    { 
      situation: "벤치에서 응원할 때",
      bad: "조용히 앉아있기 ❌",
      good: "계속 응원 구호 ✅",
      tip: "에너지가 승패 가름"
    }
  ];

  const slangDosAndDonts = [
    {
      title: "DO ✅ 해도 되는 것",
      items: [
        "Bro, dude, man - 친한 팀원끼리",
        "What's good, what's up - 일상 인사",
        "Let's go, we got this - 사기 올리기",
        "My bad, you're good - 가벼운 사과",
        "For real, no cap - 공감 표현",
        "That's fire, that's sick - 칭찬"
      ]
    },
    {
      title: "DON'T ❌ 조심해야 하는 것",
      items: [
        "욕설은 절대 먼저 쓰지 않기",
        "코치/스태프에게 슬랭 쓰지 않기 (sir, coach로)",
        "여성 앞에서 거친 표현 자제",
        "모르는 슬랭은 의미 확인 후 사용",
        "팀 문화 파악 전까지는 보수적으로",
        "인종/성별 관련 농담 절대 금지"
      ]
    }
  ];

  const culturalNotes = [
    {
      title: "🤜🤛 Dap / Fist Bump",
      content: "악수보다 주먹 인사가 더 캐주얼. 잘했을 때 주먹 부딪치기는 필수!",
      tip: "처음엔 어색해도 자연스럽게 따라하기"
    },
    {
      title: "💬 Trash Talk",
      content: "상대팀 견제는 OK지만, 선 넘으면 안됨. 팀원끼리도 장난은 있지만 악의는 NO",
      tip: "처음엔 관찰만, 나중에 참여"
    },
    {
      title: "🎵 Music Culture",
      content: "라커룸 음악은 팀 분위기. Hip-hop, Country, Rock 다양. 취향 물어보고 존중하기",
      tip: "한국 음악도 소개하면 관심 가짐"
    },
    {
      title: "⚾ Pre-game Rituals",
      content: "각자의 루틴 존중. 어떤 선수는 조용히, 어떤 선수는 시끄럽게 준비",
      tip: "방해하지 않기, 관찰하며 배우기"
    }
  ];

  const pronunciationDrill = [
    { phrase: "Let's go!", wrong: "렛츠 고", right: "레츠고우", tip: "한 단어처럼" },
    { phrase: "What's good?", wrong: "왓츠 굿", right: "왓츠굿", tip: "빠르게 붙여서" },
    { phrase: "My guy!", wrong: "마이 가이", right: "마가이", tip: "y 약하게" },
    { phrase: "You good?", wrong: "유 굿", right: "유굳", tip: "d 약하게" },
    { phrase: "For real?", wrong: "포 리얼", right: "포리얼", tip: "r 강하게" },
    { phrase: "No cap", wrong: "노 캡", right: "노캡", tip: "한 단어처럼" },
    { phrase: "On God", wrong: "온 갓", right: "안갓", tip: "o 짧게" },
    { phrase: "That's fire!", wrong: "댓츠 파이어", right: "댓츠파이어", tip: "강조" }
  ];

  const conversationExample = {
    title: "라커룸 실전 대화 예시",
    scenario: "경기 전 라커룸",
    conversation: [
      { person: "팀원 A", line: "Yo, you ready for today?", translation: "야, 오늘 준비됐어?" },
      { person: "너", line: "Yeah man, let's get it!", translation: "응, 해보자!" },
      { person: "팀원 B", line: "We got this! Just gotta bring that heat!", translation: "우리 할 수 있어! 그냥 강속구 던지면 돼!" },
      { person: "너", line: "For sure, I'm locked in.", translation: "당연하지, 집중했어." },
      { person: "팀원 A", line: "That's what I'm talking about! Let's go yard today!", translation: "그거야! 오늘 홈런 치자!" },
      { person: "너", line: "Hell yeah!", translation: "완전 좋아!" }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-4 sm:mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white p-6 sm:p-8 rounded-t-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">⚾ Week 3</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold">라커룸 토크 - 슬랭 & 야구 은어 Part 1</h2>
          <p className="text-lg sm:text-xl mt-3 sm:mt-4">팀원들과 진짜 친해지는 법</p>
        </div>

        <div className="bg-white shadow-2xl rounded-b-2xl">
          
          {/* Part 1: 라커룸 기본 표현 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">💬 Part 1: 라커룸 기본 표현 (10개)</h3>
            
            <div className="bg-yellow-50 border-l-8 border-yellow-400 p-4 sm:p-6 mb-6">
              <h4 className="text-xl sm:text-2xl font-bold mb-3">⚠️ 핵심 포인트</h4>
              <p className="text-lg sm:text-xl">라커룸은 가장 편한 공간! 여기서 팀 케미가 만들어져요.</p>
            </div>

            <div className="space-y-4">
              {lockerRoomBasics.map((item, i) => (
                <div key={i} className="bg-purple-50 p-4 rounded-xl border-2 border-purple-300">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {i+1}
                    </span>
                    <div className="flex-1">
                      <p className="text-xl sm:text-2xl font-bold text-purple-800 mb-1">"{item.phrase}"</p>
                      <p className="text-lg text-gray-700 mb-1">뜻: {item.meaning}</p>
                      <p className="text-sm text-gray-600 mb-2">상황: {item.context}</p>
                      <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                        <p className="text-base font-semibold text-purple-700">✅ 답변: "{item.response}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 2: 야구 슬랭 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">⚾ Part 2: 야구 슬랭 (10개)</h3>
            
            <div className="space-y-4">
              {baseballSlang.map((item, i) => (
                <div key={i} className="bg-pink-50 p-4 sm:p-6 rounded-xl border-2 border-pink-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h4 className="text-2xl font-bold text-pink-800">{item.term}</h4>
                    <span className="text-sm bg-white px-3 py-1 rounded-full font-semibold">{item.useCase}</span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">= {item.meaning}</p>
                  <div className="bg-white p-3 rounded">
                    <p className="text-base font-semibold">예문: "{item.example}"</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-100 p-4 sm:p-6 rounded-xl mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 flex items-center gap-2">
                <MessageCircle size={20} /> 💡 사용 팁
              </h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• 이 단어들은 공식 용어가 아니라 라커룸/일상에서 쓰는 표현</li>
                <li>• 코치한테는 정식 용어 쓰기 (예: 홈런 = home run)</li>
                <li>• 팀원들끼리는 이런 슬랭으로 대화하면 자연스러움</li>
                <li>• 처음엔 듣기만 하다가 자신감 생기면 써보기</li>
              </ul>
            </div>
          </section>

          {/* Part 3: 긍정 에너지 표현 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">🔥 Part 3: 긍정 에너지 표현 (8개)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {positiveVibes.map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 rounded-xl border-2 border-orange-300">
                  <p className="text-4xl mb-2">{item.emoji}</p>
                  <p className="text-xl font-bold text-orange-800 mb-1">"{item.phrase}"</p>
                  <p className="text-base text-gray-700 mb-1">{item.meaning}</p>
                  <p className="text-sm text-gray-600">언제: {item.when}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border-l-8 border-green-400 p-4 sm:p-6 mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3">🌟 라커룸 에너지 = 팀 성적</h4>
              <p className="text-base sm:text-lg">미국 야구는 긍정적인 에너지가 정말 중요해요! 조용하면 "He's not engaged" (집중 안한다)로 오해받을 수 있어요.</p>
            </div>
          </section>

          {/* Part 4: 팀 서포트 표현 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">👥 Part 4: 팀 서포트 (5가지 상황)</h3>
            
            <div className="space-y-4">
              {supportPhrases.map((item, i) => (
                <div key={i} className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-300 shadow-md">
                  <h4 className="text-lg sm:text-xl font-bold text-blue-600 mb-3">
                    상황: {item.situation}
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-base font-semibold text-red-700">{item.bad}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-base font-semibold text-green-700">{item.good}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                      <p className="text-sm">💡 {item.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 5: Do's and Don'ts */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">⚠️ Part 5: 슬랭 Do's & Don'ts</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slangDosAndDonts.map((section, i) => (
                <div key={i} className={`p-4 sm:p-6 rounded-xl ${i === 0 ? 'bg-green-50 border-2 border-green-300' : 'bg-red-50 border-2 border-red-300'}`}>
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

          {/* Part 6: 문화 노트 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">🇺🇸 Part 6: 라커룸 문화 (4가지)</h3>
            
            <div className="space-y-4">
              {culturalNotes.map((note, i) => (
                <div key={i} className="bg-blue-50 p-4 sm:p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">{note.title}</h4>
                  <p className="text-base text-gray-700 mb-2">{note.content}</p>
                  <div className="bg-yellow-50 p-2 rounded">
                    <p className="text-sm font-semibold">💡 Tip: {note.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 7: 발음 드릴 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">🗣️ Part 7: 발음 드릴 (8개)</h3>
            
            <div className="space-y-3">
              {pronunciationDrill.map((item, i) => (
                <div key={i} className="bg-purple-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {i+1}
                    </span>
                    <p className="text-xl font-bold text-purple-800">{item.phrase}</p>
                  </div>
                  <div className="ml-11 space-y-1">
                    <p className="text-base text-red-600">❌ 잘못된 발음: {item.wrong}</p>
                    <p className="text-base text-green-600">✅ 올바른 발음: {item.right}</p>
                    <p className="text-sm bg-white p-2 rounded">💡 {item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 8: 실전 대화 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">💬 Part 8: {conversationExample.title}</h3>
            
            <div className="bg-gray-100 p-4 sm:p-6 rounded-xl">
              <div className="bg-blue-600 text-white p-3 rounded-lg mb-4">
                <p className="font-bold text-lg">상황: {conversationExample.scenario}</p>
              </div>
              
              <div className="space-y-3">
                {conversationExample.conversation.map((chat, i) => (
                  <div key={i} className={`p-3 rounded-lg ${chat.person === '너' ? 'bg-green-100 border-l-4 border-green-500' : 'bg-white'}`}>
                    <p className="font-bold text-sm text-gray-600 mb-1">{chat.person}</p>
                    <p className="text-lg font-semibold mb-1">"{chat.line}"</p>
                    <p className="text-sm text-gray-600">({chat.translation})</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 영상 자료 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">🎥 추천 영상 자료</h3>
            
            <div className="bg-blue-100 p-4 sm:p-6 rounded-xl">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-base mb-2">🎯 라커룸 문화 & 슬랭</h5>
                  <div className="space-y-2 text-sm">
                    <a href="https://youtu.be/Zy29UAE0tlI?si=ffmb11IMIj-m76-R" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Jomboy Media - 야구 문화 & 재미있는 해설
                    </a>
                    <a href="https://youtu.be/AlX3GGtmAcw?si=jZqZqfz1Wo3LPAJI" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 MLB - Behind the Scenes 영상들
                    </a>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-base mb-2">💬 실제 대화 & 인터뷰</h5>
                  <div className="space-y-2 text-sm">
                    <a href="https://youtu.be/fXd7Fh_ujrM?si=gwRyDFRFjBjoo0Zb" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 MLB - 선수 인터뷰
                    </a>
                    <a href="https://youtu.be/6yeQYjcdpT4?si=sQ0Z7CvDfpXIoRIc" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Dominate The Diamond - 팀 문화 영상
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded mt-3 text-sm">
                <p className="font-semibold mb-1">💡 영상 활용 팁:</p>
                <ul className="space-y-1 text-xs">
                  <li>• MLB 하이라이트에서 벤치 반응 관찰하기</li>
                  <li>• 선수 인터뷰에서 슬랭 표현 찾기</li>
                  <li>• Behind the scenes 영상으로 라커룸 분위기 파악</li>
                  <li>• 자막으로 확인하면서 반복 시청</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 숙제 */}
          <section className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">📚 이번 주 숙제</h3>
            
            <div className="bg-orange-100 p-4 sm:p-6 rounded-xl">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">✍️ 필수 과제</h4>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>1️⃣ 라커룸 기본 표현 10개 완벽 암기</li>
                <li>2️⃣ 야구 슬랭 10개 외우기 (예문까지)</li>
                <li>3️⃣ 단어장 50개 단어 암기</li>
                <li>4️⃣ 긍정 표현 8개 큰 소리로 연습</li>
                <li>5️⃣ 실전 대화 예시 역할극 (3번 이상)</li>
                <li>6️⃣ MLB 하이라이트 영상 보고 벤치 반응 관찰</li>
                <li>7️⃣ Do's & Don'ts 리스트 숙지</li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg mt-4">
                <h5 className="font-bold mb-2">🎯 이번 주 목표</h5>
                <p className="text-base">팀원들과 편하게 대화하고, 라커룸에서 자연스럽게 어울리기!</p>
              </div>
            </div>
          </section>

        </div>

        <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-b-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to="/" className="text-blue-300 hover:text-blue-100 text-sm sm:text-base">← 메인</Link>
          <Link to="/week3-vocab" className="text-purple-300 hover:text-purple-100 text-sm sm:text-base">단어장 →</Link>
        </div>

      </div>
    </div>
  );
};

export default Week3Lesson;