import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Play, AlertCircle } from 'lucide-react';

const Week2Lesson = () => {
  const commands = [
    { eng: "Take a lap!", kor: "한 바퀴 뛰어!", meaning: "운동장 돌기", tip: "lap = 한 바퀴" },
    { eng: "Hustle up!", kor: "서둘러!", meaning: "빨리 움직여", tip: "hustle = 서두르다" },
    { eng: "Line up!", kor: "줄 서!", meaning: "일렬로 서기", tip: "정렬 명령" },
    { eng: "Pair up!", kor: "짝 지어!", meaning: "2명씩 짝 만들기", tip: "파트너 찾기" },
    { eng: "Bring it in!", kor: "모여!", meaning: "원형으로 모이기", tip: "팀 모임" },
    { eng: "Take five!", kor: "5분 쉬어!", meaning: "휴식 시간", tip: "five = 5분" },
    { eng: "Water break!", kor: "물 마셔!", meaning: "급수 시간", tip: "짧은 휴식" },
    { eng: "On the line!", kor: "라인에 서!", meaning: "출발선에 서기", tip: "달리기 준비" },
    { eng: "Focus up!", kor: "집중해!", meaning: "주의 집중", tip: "산만할 때" },
    { eng: "Pick it up!", kor: "속도 올려!", meaning: "더 빠르게", tip: "동작이 느릴 때" },
    { eng: "Shake it off!", kor: "털어내!", meaning: "실수 잊기", tip: "멘탈 리셋" },
    { eng: "Let's go!", kor: "시작!", meaning: "출발/시작", tip: "가장 많이 씀" },
    { eng: "One more time!", kor: "한 번 더!", meaning: "반복", tip: "재시도" },
    { eng: "Hold up!", kor: "잠깐!", meaning: "멈춰", tip: "중단 명령" },
    { eng: "Get back!", kor: "돌아와!", meaning: "제자리로", tip: "위치 복귀" }
  ];

  const practice = [
    { word: "Drill", meaning: "훈련", example: "We're doing hitting drills.", tip: "반복 훈련" },
    { word: "Rep", meaning: "반복 횟수", example: "Give me 10 reps.", tip: "repetition 축약" },
    { word: "Round", meaning: "라운드", example: "One more round.", tip: "1세트" },
    { word: "Rotation", meaning: "로테이션", example: "Next rotation!", tip: "순서 교대" },
    { word: "BP (Batting Practice)", meaning: "타격 연습", example: "BP starts at 3.", tip: "비피" },
    { word: "Bullpen", meaning: "불펜 연습", example: "I got bullpen today.", tip: "투구 연습" },
    { word: "Infield", meaning: "내야 수비", example: "Take infield.", tip: "내야 연습" },
    { word: "Outfield", meaning: "외야 수비", example: "Outfield practice.", tip: "외야 연습" },
    { word: "Fly balls", meaning: "뜬공", example: "Shag some fly balls.", tip: "shag = 잡다" },
    { word: "Ground balls", meaning: "땅볼", example: "Field ground balls.", tip: "내야 기본" },
    { word: "Long toss", meaning: "롱토스", example: "Let's do long toss.", tip: "원거리 캐치볼" },
    { word: "Soft toss", meaning: "소프트 토스", example: "Soft toss drill.", tip: "가까이서 던져주기" },
    { word: "Cage work", meaning: "타석 연습", example: "Hit the cage.", tip: "실내 타격장" },
    { word: "Live BP", meaning: "실전 타격", example: "Live BP today.", tip: "투수 상대 타격" },
    { word: "Simulated game", meaning: "모의 경기", example: "We're doing a sim game.", tip: "sim = simulated" }
  ];

  const feedback = [
    { phrase: "Good job!", meaning: "잘했어!", response: "Thanks, Coach!" },
    { phrase: "Nice work!", meaning: "잘했어!", response: "Appreciate it!" },
    { phrase: "Keep it up!", meaning: "계속해!", response: "Yes sir!" },
    { phrase: "That's it!", meaning: "그거야!", response: "Got it!" },
    { phrase: "Way to go!", meaning: "잘했어!", response: "Thanks!" },
    { phrase: "Watch your footwork.", meaning: "발놀림 조심해", response: "Got it, working on it." },
    { phrase: "Stay back.", meaning: "뒤에 남아", response: "Yes Coach." },
    { phrase: "Follow through.", meaning: "끝까지 따라가", response: "Will do." },
    { phrase: "Head down.", meaning: "고개 숙여", response: "Yes sir." },
    { phrase: "You're rushing.", meaning: "너무 서둘러", response: "I'll slow down." }
  ];

  const questions = [
    { situation: "이해 못했을 때", q: "Sorry, what was that?", alt: "Can you say that again?" },
    { situation: "확인하고 싶을 때", q: "So you want me to...?", alt: "Just to make sure..." },
    { situation: "다음 할 일 물어볼 때", q: "What's next, Coach?", alt: "What should I do now?" },
    { situation: "준비물 물어볼 때", q: "What do I need?", alt: "Should I bring anything?" },
    { situation: "시간 물어볼 때", q: "What time do we start?", alt: "When does it start?" },
    { situation: "위치 물어볼 때", q: "Where should I be?", alt: "Where do you want me?" },
    { situation: "방법 물어볼 때", q: "How should I do this?", alt: "Can you show me?" },
    { situation: "조언 구할 때", q: "Any tips, Coach?", alt: "What should I focus on?" },
    { situation: "컨디션 말할 때", q: "My arm's a bit sore.", alt: "I'm feeling tight." },
    { situation: "빠질 때", q: "Coach, can I sit this one out?", alt: "Mind if I skip this?" }
  ];

  const mistakes = [
    { 
      title: "실수 #1: 'Yes' 만 반복",
      problem: "이해 안되는데 계속 Yes → 잘못 함",
      solution: "'Can you repeat that?' 용감하게 물어보기",
      tip: "코치들은 이해 못하는 게 더 싫어함"
    },
    {
      title: "실수 #2: 지시 듣고 바로 안 움직임",
      problem: "생각하다가 늦게 움직임 → 게으르다고 오해",
      solution: "일단 빠르게 움직이고 생각하기",
      tip: "Hustle은 태도의 문제!"
    },
    {
      title: "실수 #3: 피드백에 변명",
      problem: "코치: '발 조심해' 너: 'But...' → 안 좋게 봄",
      solution: "'Got it, I'll fix it' 바로 수긍",
      tip: "변명 대신 개선 의지 보이기"
    },
    {
      title: "실수 #4: 질문 안하고 혼자 추측",
      problem: "잘못 이해하고 엉뚱한 것 → 시간 낭비",
      solution: "'Just to make sure...' 확인하기",
      tip: "확인 = 프로페셔널"
    },
    {
      title: "실수 #5: 연습 중 딴짓",
      problem: "대기 중 핸드폰, 딴 얘기 → 인상 나쁨",
      solution: "항상 집중, 팀원 응원하기",
      tip: "연습 = 경기처럼!"
    },
    {
      title: "실수 #6: 부상 참고 연습",
      problem: "아픈데 말 안함 → 큰 부상",
      solution: "'Coach, my arm hurts' 즉시 보고",
      tip: "미국은 부상 관리 = 기본"
    }
  ];

  const drills = [
    "Coach wants us to take a lap around the field.",
    "We're doing hitting drills for the next hour.",
    "Can you give me ten reps of this?",
    "Let's pair up and do some long toss.",
    "I need to work on my footwork today.",
    "My bullpen session is at three o'clock.",
    "We're taking infield practice after BP.",
    "Coach said to focus on my follow through.",
    "I'm feeling a bit sore, but I'm good to go.",
    "What drill are we doing next, Coach?",
    "I'll hustle up and get back in line.",
    "Thanks for the feedback, I'll work on it."
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-4 sm:mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white p-6 sm:p-8 rounded-t-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">⚾ Week 2</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold">연습장에서 코치 지시 이해하기</h2>
          <p className="text-lg sm:text-xl mt-3 sm:mt-4">명령문, 축약형, 야구 용어</p>
        </div>

        <div className="bg-white shadow-2xl rounded-b-2xl">
          
          {/* Part 1 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6">🏃 Part 1: 코치 명령문 (15개)</h3>
            
            <div className="bg-yellow-50 border-l-8 border-yellow-400 p-4 sm:p-6 mb-6">
              <h4 className="text-xl sm:text-2xl font-bold mb-3">⚠️ 핵심 포인트</h4>
              <p className="text-lg sm:text-xl">명령문은 짧고 빠름! 듣자마자 바로 행동해야 함!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commands.map((item, i) => (
                <div key={i} className="bg-green-50 p-4 rounded-xl border-2 border-green-300">
                  <p className="text-xl sm:text-2xl font-bold text-green-800 mb-2">"{item.eng}"</p>
                  <p className="text-lg text-gray-700 mb-1">🇰🇷 {item.kor}</p>
                  <p className="text-base text-gray-600 mb-2">= {item.meaning}</p>
                  <p className="text-sm bg-white p-2 rounded">💡 {item.tip}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-100 p-4 sm:p-6 rounded-xl mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 flex items-center gap-2">
                <Play size={20} /> 추천 영상 자료
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-base mb-2">🎯 코치 명령어 & 연습 용어</h5>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.youtube.com/@ultimatebaseballtraining" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Ultimate Baseball Training - 코치 Justin의 실전 드릴
                    </a>
                    <a href="https://www.youtube.com/@AntonelliBaseball" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Antonelli Baseball - 매일 업데이트되는 1000+ 영상
                    </a>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-base mb-2">⚾ 불펜 & 타격 연습 (BP)</h5>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.youtube.com/@yougotmojo" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 MOJO - 팀 연습 & 개인 드릴
                    </a>
                    <a href="https://www.youtube.com/@imgacademy" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 IMG Academy - 프로 수준 훈련법
                    </a>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-bold text-base mb-2">🎓 종합 코칭 자료</h5>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.youtube.com/@DominateTheDiamond" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Dominate The Diamond - 전 프로선수 코치들의 실전 팁
                    </a>
                    <a href="https://www.youtube.com/@NorthernBaseballTraining" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                      📺 Northern Baseball Training - 고품질 교육 영상
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded mt-3 text-sm">
                <p className="font-semibold mb-1">💡 영상 활용 팁:</p>
                <ul className="space-y-1 text-xs">
                  <li>• 자막(CC)을 켜고 반복해서 시청하세요</li>
                  <li>• 코치의 입모양과 발음에 집중하세요</li>
                  <li>• 영상 속도를 0.75x로 낮춰서 따라 말하기 연습</li>
                  <li>• 각 채널에서 "baseball drills", "coach commands" 검색</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Part 2 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6">⚾ Part 2: 연습 용어 (15개)</h3>
            
            <div className="space-y-4">
              {practice.map((item, i) => (
                <div key={i} className="bg-teal-50 p-4 rounded-xl border-2 border-teal-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <p className="text-xl sm:text-2xl font-bold text-teal-800">{item.word}</p>
                    <span className="text-sm bg-white px-3 py-1 rounded-full">{item.tip}</span>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">= {item.meaning}</p>
                  <p className="text-base bg-white p-3 rounded">예문: "{item.example}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Part 3 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6">💬 Part 3: 피드백 받기 (10가지)</h3>
            
            <div className="space-y-4">
              {feedback.map((item, i) => (
                <div key={i} className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-xl font-bold text-blue-800 mb-2">코치: "{item.phrase}"</p>
                  <p className="text-lg text-gray-700 mb-2">뜻: {item.meaning}</p>
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                    <p className="text-base font-semibold text-green-700">✅ 너: "{item.response}"</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 border-l-8 border-orange-400 p-4 sm:p-6 mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3">🎯 피드백 반응 규칙</h4>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• 긍정 피드백: "Thanks!" / "Appreciate it!"</li>
                <li>• 교정 피드백: "Got it!" / "I'll work on it!"</li>
                <li>• 절대 변명하지 않기</li>
                <li>• 바로 개선 의지 보이기</li>
              </ul>
            </div>
          </section>

          {/* Part 4 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6">❓ Part 4: 질문하는 법 (10가지 상황)</h3>
            
            <div className="space-y-4">
              {questions.map((item, i) => (
                <div key={i} className="bg-purple-50 p-4 rounded-xl border-2 border-purple-300">
                  <div className="mb-3">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.situation}
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-purple-800 mb-2">"{item.q}"</p>
                  <p className="text-base text-gray-600 bg-white p-3 rounded">또는: "{item.alt}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* Part 5 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6">⚠️ Part 5: 자주 하는 실수 (6가지)</h3>
            
            <div className="space-y-4">
              {mistakes.map((item, i) => (
                <div key={i} className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-300 shadow-md">
                  <h4 className="text-lg sm:text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
                    <AlertCircle size={24} /> {item.title}
                  </h4>
                  <div className="space-y-3">
                    <p className="text-base bg-red-50 p-3 rounded">❌ 문제: {item.problem}</p>
                    <p className="text-base bg-green-50 p-3 rounded">✅ 해결: {item.solution}</p>
                    <p className="text-sm bg-blue-50 p-3 rounded border-l-4 border-blue-400">💡 {item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 6 */}
          <section className="p-4 sm:p-6 lg:p-8 border-b-4 border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6">🗣️ Part 6: 발음 드릴 (12개)</h3>
            
            <div className="space-y-3">
              {drills.map((sentence, i) => (
                <div key={i} className="bg-green-50 p-4 rounded-xl flex items-start gap-3">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i+1}
                  </span>
                  <p className="text-base sm:text-lg font-semibold">{sentence}</p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border-l-8 border-yellow-400 p-4 sm:p-6 mt-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3">📝 매일 연습 루틴</h4>
              <ol className="space-y-2 text-base sm:text-lg list-decimal list-inside">
                <li>문장 천천히 읽기 (5번)</li>
                <li>빠르게 읽기 (5번)</li>
                <li>녹음하기</li>
                <li>들으면서 교정</li>
              </ol>
            </div>
          </section>

          {/* 숙제 */}
          <section className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6">📚 이번 주 숙제</h3>
            
            <div className="bg-orange-100 p-4 sm:p-6 rounded-xl">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">✍️ 필수 과제</h4>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>1️⃣ 코치 명령문 15개 완벽 암기</li>
                <li>2️⃣ 연습 용어 15개 암기</li>
                <li>3️⃣ 단어장 100% 암기 (70개)</li>
                <li>4️⃣ 발음 드릴 12개 매일 5분</li>
                <li>5️⃣ 피드백 반응 10가지 외우기</li>
                <li>6️⃣ 참고 영상 2개 시청</li>
              </ul>
            </div>
          </section>

        </div>

        <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-b-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to="/" className="text-blue-300 hover:text-blue-100 text-sm sm:text-base">← 메인</Link>
          <Link to="/week2-vocab" className="text-purple-300 hover:text-purple-100 text-sm sm:text-base">단어장 →</Link>
        </div>

      </div>
    </div>
  );
};

export default Week2Lesson;