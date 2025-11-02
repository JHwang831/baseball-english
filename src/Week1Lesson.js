import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Play, Volume2 } from 'lucide-react';

const Week1Lesson = () => {
  const greetings = {
    formal: [
      { eng: "Nice to meet you, Coach.", kor: "나이스 투 밋 쥬, 코치" },
      { eng: "Thank you for having me.", kor: "땡큐 포 해빙 미" },
      { eng: "I'm excited to be here.", kor: "아임 익사이티드 투 비 히어" },
      { eng: "Yes sir / Yes Coach", kor: "예스 서 / 예스 코치" }
    ],
    casual: [
      { eng: "Hey, what's up?", kor: "헤이, 왓츠 업?" },
      { eng: "Hey man, I'm [name].", kor: "헤이 맨, 아임 [이름]" },
      { eng: "Good to meet you, bro.", kor: "굿 투 밋 쥬, 브로" },
      { eng: "What's good, dude?", kor: "왓츠 굿, 듀드?" }
    ]
  };

  const questions = [
    { q: "Where you from?", a: "I'm from Seoul / Korea.", tip: "from 발음: 프럼" },
    { q: "What position do you play?", a: "I'm a pitcher / I play third base.", tip: "포지션 준비" },
    { q: "How long you been playing?", a: "About 8 years / Since I was 10.", tip: "you been = you've been" },
    { q: "You speak English?", a: "Yeah, a little / I'm working on it.", tip: "겸손하게" },
    { q: "First time in the States?", a: "Yeah, first time / Nah, been here before.", tip: "Nah = No" },
    { q: "What's your fastball at?", a: "Around 90 / Mid 80s.", tip: "투수만 해당" },
    { q: "You got a roommate yet?", a: "Not yet / Yeah, I'm with [name].", tip: "yet = 아직" },
    { q: "You lift?", a: "Yeah, every day / Not as much as I should.", tip: "lift = 웨이트" }
  ];

  const reactions = [
    { word: "Yeah", meaning: "응/맞아", freq: "⭐⭐⭐⭐⭐" },
    { word: "For sure", meaning: "확실히", freq: "⭐⭐⭐⭐⭐" },
    { word: "Got it", meaning: "알겠어", freq: "⭐⭐⭐⭐⭐" },
    { word: "I'm down", meaning: "나 할래", freq: "⭐⭐⭐⭐⭐" },
    { word: "Sounds good", meaning: "좋아", freq: "⭐⭐⭐⭐⭐" },
    { word: "Bet", meaning: "오케이", freq: "⭐⭐⭐⭐" },
    { word: "Nah", meaning: "아니", freq: "⭐⭐⭐⭐⭐" },
    { word: "I'm good", meaning: "괜찮아요", freq: "⭐⭐⭐⭐⭐" }
  ];

  const pronunciation = [
    { word: "Water", wrong: "워터 ❌", right: "와러 ✅", tip: "t를 r처럼" },
    { word: "Better", wrong: "베터 ❌", right: "베러 ✅", tip: "t를 r처럼" },
    { word: "Got it", wrong: "갓 잇 ❌", right: "가릿 ✅", tip: "빠르게" },
    { word: "What's up", wrong: "왓츠 업 ❌", right: "왓섭 ✅", tip: "붙여서" },
    { word: "Wanna", wrong: "원트 투 ❌", right: "와나 ✅", tip: "want to" },
    { word: "Gonna", wrong: "고잉 투 ❌", right: "거나 ✅", tip: "going to" }
  ];

  const mistakes = [
    { title: "실수 #1: 모르는데 'Yes'", problem: "못 알아듣고 Yes → 큰일남", solution: "Sorry, can you repeat that?" },
    { title: "실수 #2: 혼자 조용히 있기", problem: "영어 못해서 안 섞임 → 오해받음", solution: "간단하게 반응: Nice! / Good job!" },
    { title: "실수 #3: 부상 숨기기", problem: "작은 부상 → 큰 부상", solution: "Coach, my arm hurts." },
    { title: "실수 #4: 문자 답장 안하기", problem: "무시당했나 생각함", solution: "1시간 내 답장하기" }
  ];

  const drills = [
    "I play baseball every day after school.",
    "My favorite player is Shohei Ohtani.",
    "I wanna be better at English.",
    "Can you throw me the ball, please?",
    "I got it! I got it!",
    "Let me know if you need anything.",
    "I'm gonna practice harder this week.",
    "What time does practice start tomorrow?"
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-4 sm:mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 sm:p-8 rounded-t-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">⚾ Week 1</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold">팀 첫날 생존 영어</h2>
          <p className="text-lg sm:text-xl mt-3 sm:mt-4">자기소개 & 팀원과의 첫 대화</p>
        </div>

        <div className="bg-white shadow-2xl rounded-b-2xl">
          
          {/* Part 1 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">🤝 Part 1: 첫 만남 인사</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="bg-green-50 p-4 sm:p-6 rounded-xl">
                <h4 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">✅ 코치/스태프</h4>
                {greetings.formal.map((item, i) => (
                  <div key={i} className="bg-white p-3 rounded mb-3">
                    <p className="font-bold text-sm sm:text-base">{item.eng}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{item.kor}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                <h4 className="text-xl sm:text-2xl font-bold text-blue-700 mb-3 sm:mb-4">✅ 팀원들</h4>
                {greetings.casual.map((item, i) => (
                  <div key={i} className="bg-white p-3 rounded mb-3">
                    <p className="font-bold text-sm sm:text-base">{item.eng}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{item.kor}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-100 p-4 sm:p-6 rounded-xl">
              <h4 className="text-lg sm:text-xl font-bold mb-3 flex items-center gap-2">
                <Play size={20} /> 참고 영상
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white p-3 rounded">
                  <a href="https://youtu.be/phZSs-sJp3c?si=LQp_iwNi-8nZiCnt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    10 Ways to Say Hello
                  </a>
                </div>
                <div className="bg-white p-3 rounded">
                  <a href="https://youtu.be/aRBzYEn7dhM?si=4-GWz4NHjkDpFbTR" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    English Conversation Practice
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Part 2 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">🎤 Part 2: 자기소개 템플릿</h3>
            
            <div className="bg-purple-100 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3">📝 30초 버전</h4>
              <div className="bg-white p-4 rounded space-y-2 text-sm sm:text-base">
                <p>1️⃣ Hey, I'm <span className="bg-yellow-200 px-2">[이름]</span></p>
                <p>2️⃣ I'm from <span className="bg-yellow-200 px-2">[도시]</span>, South Korea</p>
                <p>3️⃣ I play <span className="bg-yellow-200 px-2">[포지션]</span></p>
                <p>4️⃣ I've been playing for about <span className="bg-yellow-200 px-2">[년수]</span> years</p>
                <p>5️⃣ Really excited to be on the team!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-bold mb-2 text-sm sm:text-base">투수 예시</h4>
                <div className="bg-white p-3 rounded text-xs sm:text-sm space-y-1">
                  <p>"Hey, I'm Junseok."</p>
                  <p>"I'm from Seoul, South Korea."</p>
                  <p>"I'm a pitcher."</p>
                  <p>"I've been playing for about 8 years."</p>
                  <p>"Really excited to be on the team!"</p>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <h4 className="font-bold mb-2 text-sm sm:text-base">내야수 예시</h4>
                <div className="bg-white p-3 rounded text-xs sm:text-sm space-y-1">
                  <p>"What's up, I'm Junho."</p>
                  <p>"I'm from Busan, Korea."</p>
                  <p>"I play shortstop."</p>
                  <p>"Been playing since I was like 10."</p>
                  <p>"Stoked to be here, man!"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Part 3 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">❓ Part 3: 자주 묻는 질문 TOP 8</h3>
            
            <div className="space-y-4">
              {questions.map((item, i) => (
                <div key={i} className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-lg sm:text-xl font-bold text-blue-900 mb-2">Q{i+1}: "{item.q}"</p>
                  <div className="bg-white p-3 rounded">
                    <p className="text-green-700 font-semibold text-sm sm:text-base">✅ {item.a}</p>
                    <p className="text-xs sm:text-sm text-orange-600 mt-1">💡 {item.tip}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-100 p-4 rounded-xl mt-6">
              <h4 className="font-bold mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Play size={20} /> 연습 영상
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="https://youtu.be/BjuhgzNEG0Y?si=IKfVu2VUlCVC_hTJ" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-blue-600 hover:underline text-sm">
                  100 Common Questions
                </a>
                <a href="https://youtu.be/FchVRKXWoEY?si=vkDRI5he2f2xXJbb" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-blue-600 hover:underline text-sm">
                  Baseball Interview
                </a>
              </div>
            </div>
          </section>

          {/* Part 4 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">💬 Part 4: 리액션 표현</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {reactions.map((item, i) => (
                <div key={i} className="bg-white p-3 rounded-xl shadow border-2 border-green-200">
                  <p className="text-lg sm:text-xl font-bold text-green-700">"{item.word}"</p>
                  <p className="text-xs sm:text-sm">= {item.meaning}</p>
                  <p className="text-xs text-orange-600">{item.freq}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Part 5 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">🎵 Part 5: 발음 주의</h3>
            
            <div className="space-y-3">
              {pronunciation.map((item, i) => (
                <div key={i} className="bg-red-50 p-4 rounded-xl">
                  <p className="text-xl sm:text-2xl font-bold text-red-700 mb-2">{item.word}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-red-100 p-2 rounded text-sm sm:text-base">{item.wrong}</div>
                    <div className="bg-green-100 p-2 rounded text-sm sm:text-base">{item.right}</div>
                  </div>
                  <p className="text-xs sm:text-sm mt-2">💡 {item.tip}</p>
                </div>
              ))}
            </div>

            <div className="bg-indigo-100 p-4 rounded-xl mt-6">
              <h4 className="font-bold mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Play size={20} /> 발음 영상
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="https://youtu.be/78LjCJb1JE8?si=alyAVCAek90VDLoM" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-blue-600 hover:underline text-sm">
                  American Accent Training
                </a>
                <a href="https://youtu.be/L1UUg0zdq8M?si=SwykiRFdr9Bjk8KL" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-blue-600 hover:underline text-sm">
                  Wanna, Gonna, Gotta
                </a>
              </div>
            </div>
          </section>

          {/* Part 6 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">⚠️ Part 6: 자주 하는 실수</h3>
            
            <div className="space-y-4">
              {mistakes.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border-2 border-gray-200">
                  <h4 className="text-lg sm:text-xl font-bold text-red-600 mb-2">{item.title}</h4>
                  <p className="text-sm sm:text-base text-red-700 bg-red-50 p-2 rounded mb-2">문제: {item.problem}</p>
                  <p className="text-sm sm:text-base text-green-700 bg-green-50 p-2 rounded">✅ 해결: {item.solution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Part 7 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">🗣️ Part 7: 발음 드릴 (매일 5분)</h3>
            
            <div className="space-y-3">
              {drills.map((sentence, i) => (
                <div key={i} className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i+1}
                  </span>
                  <p className="text-base sm:text-lg font-semibold">{sentence}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 숙제 */}
          <section className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">📚 이번 주 숙제</h3>
            
            <div className="bg-orange-100 p-4 sm:p-6 rounded-xl">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">✍️ 필수 과제</h4>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>1️⃣ 자기소개 30초 완벽 암기 (녹음)</li>
                <li>2️⃣ 발음 단어 6개 10번씩 연습</li>
                <li>3️⃣ 단어장 100% 암기</li>
                <li>4️⃣ 발음 드릴 8개 매일 5분</li>
                <li>5️⃣ 참고 영상 6개 시청</li>
              </ul>
            </div>
          </section>

        </div>

        <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-b-2xl flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <Link to="/" className="text-blue-300 hover:text-blue-100 text-sm sm:text-base">← 메인</Link>
          <Link to="/week1-vocab" className="text-purple-300 hover:text-purple-100 text-sm sm:text-base">단어장 →</Link>
        </div>

        </div>
    </div>
  );
};

export default Week1Lesson;