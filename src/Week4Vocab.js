import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Volume2, Star, Home } from 'lucide-react';

const Week4Vocab = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('week4-vocab-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('week4-vocab-progress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vocabulary = [
    {
      category: "부상 정도 표현",
      items: [
        { word: "Sore", meaning: "아픈/쑤시는", pronunciation: "소어", example: "My arm's sore today.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Tight", meaning: "뻐근한/당기는", pronunciation: "타잇", example: "My shoulder feels tight.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Stiff", meaning: "뻣뻣한", pronunciation: "스티프", example: "I'm feeling stiff.", freq: "⭐⭐⭐⭐" },
        { word: "Acting up", meaning: "말썽부리는", pronunciation: "액팅 업", example: "My elbow's acting up.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Bothering me", meaning: "신경쓰이는", pronunciation: "바더링 미", example: "My knee's bothering me.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Sharp pain", meaning: "찌르는 통증", pronunciation: "샤프 페인", example: "I felt a sharp pain.", freq: "⭐⭐⭐⭐" },
        { word: "Pulled", meaning: "당긴/삔", pronunciation: "풀드", example: "I pulled my hamstring.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Tweaked", meaning: "살짝 다친", pronunciation: "트윅트", example: "I tweaked my ankle.", freq: "⭐⭐⭐⭐" },
        { word: "Hurt", meaning: "아프다", pronunciation: "허트", example: "It hurts when I throw.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Discomfort", meaning: "불편함", pronunciation: "디스컴퍼트", example: "Just some discomfort.", freq: "⭐⭐⭐" }
      ]
    },
    {
      category: "신체 부위 (상체)",
      items: [
        { word: "Shoulder", meaning: "어깨", pronunciation: "쇼울더", example: "My shoulder's tight.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Arm", meaning: "팔", pronunciation: "암", example: "My arm feels great!", freq: "⭐⭐⭐⭐⭐" },
        { word: "Elbow", meaning: "팔꿈치", pronunciation: "엘보우", example: "My elbow's sore.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Wrist", meaning: "손목", pronunciation: "리스트", example: "I hurt my wrist.", freq: "⭐⭐⭐⭐" },
        { word: "Back", meaning: "등/허리", pronunciation: "백", example: "My back's bothering me.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Rotator cuff", meaning: "회전근개", pronunciation: "로테이터 커프", example: "Pain in my rotator cuff.", freq: "⭐⭐⭐" },
        { word: "Neck", meaning: "목", pronunciation: "넥", example: "My neck is stiff.", freq: "⭐⭐⭐" }
      ]
    },
    {
      category: "신체 부위 (하체)",
      items: [
        { word: "Hip", meaning: "엉덩이", pronunciation: "힙", example: "My hip's tight.", freq: "⭐⭐⭐⭐" },
        { word: "Hamstring", meaning: "햄스트링", pronunciation: "햄스트링", example: "I pulled my hamstring.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Quad", meaning: "허벅지 앞", pronunciation: "쿼드", example: "My quad's sore.", freq: "⭐⭐⭐⭐" },
        { word: "Knee", meaning: "무릎", pronunciation: "니", example: "My knee hurts.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Calf", meaning: "종아리", pronunciation: "캘프", example: "My calf is tight.", freq: "⭐⭐⭐" },
        { word: "Ankle", meaning: "발목", pronunciation: "앵클", example: "I tweaked my ankle.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Foot", meaning: "발", pronunciation: "풋", example: "My foot hurts.", freq: "⭐⭐⭐⭐" },
        { word: "Leg", meaning: "다리", pronunciation: "레그", example: "My leg feels fine.", freq: "⭐⭐⭐⭐" }
      ]
    },
    {
      category: "컨디션 표현",
      items: [
        { word: "I'm good to go", meaning: "괜찮아요", pronunciation: "아임 굿 투 고", example: "I'm good to go, Coach.", freq: "⭐⭐⭐⭐⭐" },
        { word: "I'm at 100%", meaning: "완전히 회복", pronunciation: "아임 앳 원헌드레드", example: "I'm at 100% now.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Not 100%", meaning: "완전히 회복 안됨", pronunciation: "낫 원헌드레드", example: "I'm not 100% yet.", freq: "⭐⭐⭐⭐" },
        { word: "Feeling better", meaning: "좋아지고 있어요", pronunciation: "필링 베러", example: "I'm feeling better today.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Need to rest", meaning: "쉬어야 해요", pronunciation: "니드 투 레스트", example: "I need to rest today.", freq: "⭐⭐⭐⭐" },
        { word: "Can play through it", meaning: "뛸 수 있어요", pronunciation: "캔 플레이 쓰루 잇", example: "I can play through it.", freq: "⭐⭐⭐⭐" },
        { word: "Need to sit out", meaning: "빠져야 해요", pronunciation: "니드 투 싯 아웃", example: "I need to sit out.", freq: "⭐⭐⭐" }
      ]
    },
    {
      category: "치료 관련",
      items: [
        { word: "Ice", meaning: "아이싱", pronunciation: "아이스", example: "I need to ice it.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Heat", meaning: "온열 치료", pronunciation: "히트", example: "Should I use heat?", freq: "⭐⭐⭐" },
        { word: "Stretch", meaning: "스트레칭", pronunciation: "스트레치", example: "I need to stretch.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Tape", meaning: "테이핑", pronunciation: "테입", example: "Can you tape my ankle?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Massage", meaning: "마사지", pronunciation: "마사지", example: "I got a massage.", freq: "⭐⭐⭐" },
        { word: "Treatment", meaning: "치료", pronunciation: "트리트먼트", example: "I'm getting treatment.", freq: "⭐⭐⭐⭐" },
        { word: "Rehab", meaning: "재활", pronunciation: "리햅", example: "I'm doing rehab.", freq: "⭐⭐⭐⭐" },
        { word: "MRI", meaning: "MRI 검사", pronunciation: "엠알아이", example: "Do I need an MRI?", freq: "⭐⭐⭐" },
        { word: "X-ray", meaning: "엑스레이", pronunciation: "엑스레이", example: "They took an X-ray.", freq: "⭐⭐⭐" }
      ]
    },
    {
      category: "트레이너실 표현",
      items: [
        { word: "Trainer", meaning: "트레이너", pronunciation: "트레이너", example: "I need to see the trainer.", freq: "⭐⭐⭐⭐⭐" },
        { word: "Trainer room", meaning: "트레이너실", pronunciation: "트레이너 룸", example: "I'll be in the trainer room.", freq: "⭐⭐⭐⭐" },
        { word: "Get it checked", meaning: "검사받다", pronunciation: "겟 잇 첵트", example: "I should get it checked.", freq: "⭐⭐⭐⭐⭐" },
        { word: "How long?", meaning: "얼마나 오래?", pronunciation: "하우 롱", example: "How long should I rest?", freq: "⭐⭐⭐⭐⭐" },
        { word: "When can I...?", meaning: "언제 할 수 있어요?", pronunciation: "웬 캔 아이", example: "When can I throw again?", freq: "⭐⭐⭐⭐⭐" },
        { word: "Scale of 1-10", meaning: "1에서 10 중", pronunciation: "스케일 오브 원 투 텐", example: "It's about a 5.", freq: "⭐⭐⭐⭐" },
        { word: "Come back tomorrow", meaning: "내일 다시 와", pronunciation: "컴 백 투마로우", example: "Come back tomorrow.", freq: "⭐⭐⭐⭐" }
      ]
    }
  ];

  // 체크된 항목 수 계산
  const totalItems = vocabulary.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-4 sm:mb-6 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-red-200 font-semibold text-sm sm:text-base">
            <Home size={20} /> 메인으로
          </Link>
          <Link to="/week4-lesson" className="text-white hover:text-red-200 font-semibold text-sm sm:text-base">
            ← 수업 자료
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md text-white p-6 sm:p-8 rounded-2xl mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">📚 Week 4 단어장</h1>
          <h2 className="text-xl sm:text-2xl mb-4">부상 & 컨디션 표현</h2>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">학습 진도</span>
              <span className="text-sm font-bold">{checkedCount} / {totalItems} ({progress}%)</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-red-400 to-orange-400 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{ width: `${progress}%` }}
              >
                {progress > 10 && (
                  <span className="text-xs font-bold text-white">🔥</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Vocabulary Categories */}
        {vocabulary.map((category, catIndex) => (
          <div key={catIndex} className="mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 sm:p-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                  <Star className="text-yellow-300" size={28} />
                  {category.category}
                  <span className="text-sm font-normal">({category.items.length}개)</span>
                </h3>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const itemId = `${catIndex}-${itemIndex}`;
                    const isChecked = checkedItems[itemId];
                    
                    return (
                      <div
                        key={itemId}
                        className={`bg-white rounded-xl p-4 transition-all ${
                          isChecked ? 'opacity-60 border-2 border-green-400' : 'border-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Checkbox */}
                          <button
                            onClick={() => toggleCheck(itemId)}
                            className={`flex-shrink-0 w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all ${
                              isChecked
                                ? 'bg-green-500 border-green-500'
                                : 'bg-white border-gray-300 hover:border-red-500'
                            }`}
                          >
                            {isChecked && <Check className="text-white" size={20} />}
                          </button>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                              <div>
                                <h4 className="text-xl sm:text-2xl font-bold text-red-800">{item.word}</h4>
                                <p className="text-base text-gray-600">({item.pronunciation})</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm">{item.freq}</span>
                                <Volume2 className="text-red-600" size={20} />
                              </div>
                            </div>
                            
                            <p className="text-lg text-gray-800 font-semibold mb-2">= {item.meaning}</p>
                            
                            <div className="bg-red-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-600 mb-1">예문:</p>
                              <p className="text-base font-semibold text-red-800">"{item.example}"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Study Tips */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6">
          <h3 className="text-2xl font-bold text-white mb-4">💡 암기 팁</h3>
          <div className="space-y-3 text-white">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">1️⃣ 신체 부위부터 암기</h4>
              <p className="text-sm">상체 → 하체 순서로 신체 부위를 먼저 완벽히!</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">2️⃣ 조합해서 연습</h4>
              <p className="text-sm">"My [신체부위] is [증상]" 패턴으로 조합 연습</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">3️⃣ 실제 상황 연상</h4>
              <p className="text-sm">트레이너실에서 말하는 상황을 구체적으로 상상</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">4️⃣ 통증 정도 구분</h4>
              <p className="text-sm">경미 → 중간 → 심각 단계별로 표현 구분하기</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2">5️⃣ 매일 복습 필수</h4>
              <p className="text-sm">부상 표현은 생명과 직결! 매일 10개씩 암기</p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-400/20 backdrop-blur-md rounded-2xl p-6 mb-6 border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-yellow-100 mb-3">⚠️ 중요한 원칙</h3>
          <div className="text-white space-y-2">
            <p className="text-lg font-semibold">• 통증을 숨기는 것 = 팀에 대한 배신</p>
            <p className="text-lg font-semibold">• 작은 통증도 즉시 보고하기</p>
            <p className="text-lg font-semibold">• "I'm good" 거짓말 절대 금지</p>
            <p className="text-lg font-semibold">• 부상 예방이 최우선!</p>
          </div>
        </div>

        {/* Progress Summary */}
        {progress === 100 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center mb-6">
            <h3 className="text-3xl font-bold mb-2">🎉 완벽합니다!</h3>
            <p className="text-xl">Week 4 단어를 모두 마스터했어요!</p>
            <p className="text-lg mt-2">이제 부상 상태를 정확히 표현할 수 있어요! 💪</p>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="bg-white/10 backdrop-blur-md text-white p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to="/week4-lesson" className="text-red-200 hover:text-white text-sm sm:text-base">
            ← 수업 자료
          </Link>
          <div className="text-center">
            <p className="font-bold">총 {totalItems}개 단어/표현</p>
            <p className="text-sm">매일 10개씩 암기하면 1주일 완성!</p>
          </div>
          <Link to="/" className="text-red-200 hover:text-white text-sm sm:text-base">
            메인 →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Week4Vocab;