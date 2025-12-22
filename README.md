# Baseball English

A 36-week English learning platform designed specifically for Korean baseball players preparing for U.S. college teams. Built with React and Tailwind CSS, featuring structured weekly curriculum and progress tracking.

🌐 **Live Site**: [https://baseball-english.netlify.app/](https://baseball-english.netlify.app/)  
📚 **GitHub**: [https://github.com/JHwang831/baseball-english](https://github.com/JHwang831/baseball-english)

⚠️ **Status**: In Development (Started October 2025)

## 🎯 Project Purpose

This platform was created to help Korean baseball players, particularly high school students planning to attend U.S. college baseball programs, build essential English communication skills specific to the baseball context.

**Target Users**:
- Korean baseball players preparing for U.S. college recruitment
- Students needing baseball-specific English vocabulary and phrases
- Players preparing for tryouts, interviews, and campus visits

## ✨ Key Features

### 📅 36-Week Curriculum
**What it does**: Structured learning program spanning 36 weeks  
**How to use**: 
1. Navigate to the curriculum section
2. Start from Week 1 or jump to your current week
3. Complete lessons sequentially for best results

**Content includes**:
- Baseball terminology and positions
- Common phrases used in practice and games
- Communication with coaches and teammates
- Academic English for college classes
- Cultural aspects of American baseball

---

### 📊 Progress Tracking
**What it does**: Track your learning progress across all 36 weeks  
**How to use**:
1. Mark lessons as complete after finishing each week
2. View your overall progress percentage
3. See which weeks you've completed and which are remaining

**Features**:
- Visual progress indicators
- Week-by-week completion status
- Automatic progress saving (localStorage)

---

### 📱 Responsive Design
**What it does**: Optimized layout for all devices  
**How to use**: Access the platform on any device - phone, tablet, or desktop  
**Implementation**: Mobile-first design with Tailwind CSS responsive utilities

## 🏗️ Project Structure

```
baseball-english/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Home.jsx             # Landing page
│   │   ├── Curriculum.jsx       # Weekly lessons
│   │   ├── Progress.jsx         # Progress tracking
│   │   └── WeekCard.jsx         # Individual week component
│   ├── data/
│   │   └── curriculum.js        # 36-week lesson data
│   ├── App.jsx                  # Main app component
│   └── index.css                # Global styles
├── public/
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router
- **Storage**: localStorage (for progress tracking)
- **Deployment**: Netlify
- **Version Control**: Git/GitHub

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/JHwang831/baseball-english.git
cd baseball-english
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `build` folder.

## 📚 Curriculum Overview

The 36-week program is divided into thematic modules:

**Weeks 1-8**: Baseball Basics
- Positions and equipment terminology
- Basic game rules and situations
- Common practice phrases

**Weeks 9-16**: Game Communication
- In-game situations and plays
- Communicating with teammates
- Understanding coach instructions

**Weeks 17-24**: Advanced Baseball English
- Strategy and tactics vocabulary
- Statistical terms and analysis
- Post-game discussions

**Weeks 25-32**: College Life & Academics
- Classroom English
- Campus life vocabulary
- Academic writing basics

**Weeks 33-36**: Cultural Integration
- American baseball culture
- Team dynamics and etiquette
- Interview preparation

## 🎓 How to Use This Platform

### For Students:

1. **Start with Week 1**: Begin from the first week even if you have baseball experience
2. **Complete Sequentially**: Each week builds on previous content
3. **Practice Daily**: Spend 15-30 minutes per day for best results
4. **Track Progress**: Mark weeks complete to stay motivated
5. **Review Regularly**: Revisit completed weeks to reinforce learning

### For Coaches/Parents:

1. **Monitor Progress**: Check completion status regularly
2. **Supplement with Practice**: Use learned phrases during practice
3. **Encourage Consistency**: Daily practice is more effective than cramming
4. **Provide Context**: Help connect English terms to real game situations

## 🔧 Customization Guide

### Adding New Weekly Content

1. Open `src/data/curriculum.js`
2. Add a new week object:

```javascript
{
  week: 37,
  title: "New Topic",
  description: "Week description",
  topics: [
    "Topic 1",
    "Topic 2",
    "Topic 3"
  ],
  vocabulary: [
    { term: "word", definition: "meaning" }
  ],
  phrases: [
    { english: "phrase", korean: "번역" }
  ]
}
```

3. Save and the new week will automatically appear

---

### Modifying Progress Tracking

Progress is stored in browser localStorage. To customize:

1. Open `src/components/Progress.jsx`
2. Modify the storage key or data structure
3. Update progress calculation logic as needed

---

### Changing Styling

Update Tailwind classes in component files:
- `src/components/Navbar.jsx` - Navigation styling
- `src/components/WeekCard.jsx` - Individual week cards
- `src/index.css` - Global styles and custom utilities

## 📈 Future Enhancements

- [ ] Audio pronunciation guides for baseball terms
- [ ] Interactive quizzes for each week
- [ ] Video examples of game situations
- [ ] Flashcard system for vocabulary review
- [ ] User accounts and cloud progress sync
- [ ] Coach/parent dashboard for monitoring
- [ ] Mobile app version
- [ ] Integration with baseball training videos

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

If you have ideas for:
- Additional baseball terminology
- Better teaching approaches
- New features or improvements

Please open an issue or reach out directly.

## 📧 Contact

**Junhyeok Hwang (Jay)**
- GitHub: [@JHwang831](https://github.com/JHwang831)
- Email: [jun00883311@gmail.com]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built by Junhyeok Hwang, 2025
