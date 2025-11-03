# Baseball English

A comprehensive web-based learning platform designed to help Korean baseball players master practical English for American college baseball teams.

## Overview

Baseball English is a 36-week curriculum focused on real-world communication skills needed for success in American baseball environments. The program covers everything from first-day survival phrases to advanced tactical terminology, emphasizing conversational English, slang, and baseball-specific jargon that players encounter daily.

## Target Audience

This program was developed specifically for Korean baseball players preparing to join American college teams, with a focus on practical, field-ready communication rather than traditional classroom English.

## Features

- **36-Week Structured Curriculum**: Progressive learning path from basic survival English to advanced tactical communication
- **Interactive Vocabulary Lists**: Track learning progress with built-in checkbox system and local storage
- **250+ Essential Terms**: Carefully curated vocabulary and expressions used in real baseball contexts
- **Position-Specific Guidance**: Tailored content for pitchers, catchers, infielders, and outfielders
- **Real-World Scenarios**: Practical conversation examples from locker rooms, practice fields, and team meetings
- **Progress Tracking**: Monitor completion rates for both lessons and vocabulary
- **Mobile-Responsive Design**: Access learning materials on any device

## Technology Stack

- React 18
- React Router v6
- Tailwind CSS
- Lucide React Icons
- Local Storage for progress persistence

## Current Progress

### Phase 1: Baseball Field Survival Kit (Weeks 1-12)

**Completed Weeks:**

- **Week 1**: Team First Day Survival English - Self-introductions and first conversations (41 terms)
- **Week 2**: Understanding Coach Instructions - Commands, abbreviations, and practice terminology (54 terms)
- **Week 3**: Locker Room Talk - Slang and baseball jargon (50 terms)
- **Week 4**: Injury and Condition Expression - Communicating physical status (53 terms)
- **Week 5**: Team Meetings - Tactical terminology and response expressions (52 terms)

**Total**: 250 essential terms across 5 completed weeks (13.9% complete)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/baseball-english.git

# Navigate to project directory
cd baseball-english

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── App.js                 # Main application component with routing
├── MainPage.js           # Homepage with curriculum overview
├── BottomNav.js          # Navigation bar component
├── Week~Lesson.js        # Week ~ lesson content
├── Week~Vocab.js         # Week ~ vocabulary list
└── ...                   # To Be Updated
```

## Learning Approach

Each week follows a consistent structure:

1. **Lesson Component**: Detailed explanations, examples, and cultural notes
2. **Vocabulary Component**: Interactive word lists with pronunciation guides, usage examples, and frequency indicators
3. **Practice Scenarios**: Real-world conversation examples with Korean translations
4. **Video Resources**: Curated YouTube channels for visual learning
5. **Homework Assignments**: Practical exercises to reinforce learning


## Progress Tracking

The application uses browser local storage to save:
- Completed weeks checkbox status
- Individual vocabulary item completion
- Overall learning progress

Data persists across browser sessions without requiring user accounts.

## Upcoming Content

**Week 6**: Media Interviews and Public Speaking - Professional communication with press and public

**Weeks 7-12**: Additional Phase 1 content covering game situations, equipment terminology, and facility navigation

**Phases 2-3**: Advanced communication skills, leadership vocabulary, and cultural integration (Weeks 13-36)

## Contributing

This is a personal educational project. However, suggestions for improvements or corrections are welcome through the issues section.

## License

This project is intended for educational purposes.

## Acknowledgments

Developed for my brother, pitcher, preparing for American college baseball in August 2026.

Special consideration given to the unique challenges Korean players face when adapting to American baseball culture and communication styles.

---

**Development Status**: Active development - 5 of 36 weeks complete

**Last Updated**: November 2025
