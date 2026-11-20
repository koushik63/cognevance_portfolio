export interface NavItem {
  label: string;
  href: string;
}

export interface AboutCard {
  id: string;
  title: string;
  description: string;
  icon: 'compass' | 'cpu' | 'sparkles';
  tag: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  illustration: 'ralvik' | 'gamified' | 'gamerz';
  liveUrl: string | null;
  githubUrl: string | null;
  statusNote: string;
}

export interface JourneyMilestone {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  type: 'education' | 'frontend' | 'backend' | 'aiml' | 'projects';
}

export const personalInfo = {
  name: 'Koushik Konkipudi',
  shortName: 'Koushik',
  logoText: 'K.',
  role: 'Full-Stack Developer | AI/ML Enthusiast',
  animatedRoles: [
    'Full-Stack Developer',
    'AI/ML Enthusiast',
    'Creative Problem Solver',
  ],
  education: 'B.Tech in Artificial Intelligence and Machine Learning, 2nd Year, NIAT Hyderabad',
  availability: 'Available for opportunities',
  tagline: 'Turning ideas into intelligent digital experiences.',
  introduction:
    "I'm a developer passionate about building meaningful digital experiences through technology, creativity, and intelligent solutions. I enjoy transforming ideas into functional, beautiful, and interactive applications.",
  aboutParagraphs: [
    "I'm currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at NIAT Hyderabad. I enjoy exploring modern technologies, developing web applications, and experimenting with AI-powered solutions.",
    'I believe in learning by building. Every project gives me an opportunity to understand new technologies, solve real problems, and improve my development skills.',
  ],
  emailPlaceholder: 'koushik.konkipudi@example.com',
  githubUrl: 'https://github.com/koushik63',
  linkedinUrl: 'https://www.linkedin.com/in/koushik-konkipudi-175043360/',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const floatingTechLabels: string[] = [
  'React',
  'TypeScript',
  'Python',
  'Node.js',
  'Three.js',
  'AI / ML',
];

export const aboutCards: AboutCard[] = [
  {
    id: 'continuous-learner',
    title: 'Continuous Learner',
    description:
      'Constantly exploring emerging web standards, AI/ML architectures, and software engineering fundamentals through hands-on experimentation.',
    icon: 'compass',
    tag: '01 // MINDSET',
  },
  {
    id: 'problem-solver',
    title: 'Problem Solver',
    description:
      'Breaking down complex challenges into clean, modular systems and intuitive user experiences with a focus on practical impact.',
    icon: 'cpu',
    tag: '02 // APPROACH',
  },
  {
    id: 'technology-enthusiast',
    title: 'Technology Enthusiast',
    description:
      'Driven by curiosity for intelligent applications, interactive 3D interfaces, and full-stack tools that bridge creativity and logic.',
    icon: 'sparkles',
    tag: '03 // PASSION',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Crafting responsive, accessible, and interactive user interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core languages for algorithmic thinking, systems, and AI/ML.',
    skills: ['Python', 'C++'],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Building structured APIs, server logic, and application workflows.',
    skills: ['Node.js', 'Express.js'],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Modeling relational and document data for modern applications.',
    skills: ['SQL', 'MongoDB', 'Supabase'],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Version control, collaboration, and cloud deployment workflows.',
    skills: ['Git', 'GitHub', 'Vercel'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'ralvik-investments',
    title: 'RALVIK INVESTMENTS',
    category: 'FinTech & Analytics',
    description:
      'A stock market analysis and investment platform featuring market data, watchlists, financial filters, portfolio tracking, and trading automation concepts.',
    techStack: ['React', 'JavaScript', 'Node.js', 'SQL', 'Market Analytics'],
    illustration: 'ralvik',
    // Configurable placeholders — replace with actual deployment & repository URLs when published
    liveUrl: null,
    githubUrl: null,
    statusNote: 'Repository & live deployment link configurable in portfolioData.ts',
  },
  {
    id: 'gamified-learning',
    title: 'Gamified Learning Platform',
    category: 'EdTech & AI/ML',
    description:
      'An AI-powered educational platform designed to improve student engagement and rural education through interactive learning, quizzes, multilingual content, and offline support.',
    techStack: ['React', 'Python', 'AI / ML', 'MongoDB', 'Offline-First'],
    illustration: 'gamified',
    liveUrl: null,
    githubUrl: null,
    statusNote: 'Repository & live deployment link configurable in portfolioData.ts',
  },
  {
    id: 'the-gamerz',
    title: 'The Gamerz',
    category: 'Interactive Web & Community',
    description:
      'A gaming community and gaming hub website concept focused on gaming content and interactive experiences.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Interactive UI'],
    illustration: 'gamerz',
    liveUrl: null,
    githubUrl: null,
    statusNote: 'Repository & live deployment link configurable in portfolioData.ts',
  },
];

export const experienceJourney: JourneyMilestone[] = [
  {
    id: 'btech-aiml',
    period: 'Current — 2nd Year',
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    subtitle: 'NIAT Hyderabad',
    description:
      'Building a strong foundation in computer science, mathematics, data structures, and core artificial intelligence and machine learning principles.',
    highlights: ['AI & ML Foundations', 'Python & C++ Programming', 'Data Structures & Algorithms'],
    type: 'education',
  },
  {
    id: 'frontend-learning',
    period: 'Web Foundations',
    title: 'Frontend Development Exploration',
    subtitle: 'Modern UI Engineering',
    description:
      'Mastered semantic HTML, responsive CSS layouts, modern JavaScript, and component-driven architecture with React to craft engaging user interfaces.',
    highlights: ['HTML & CSS', 'JavaScript (ES6+)', 'React & Responsive Design'],
    type: 'frontend',
  },
  {
    id: 'backend-learning',
    period: 'Full-Stack Progression',
    title: 'Backend & Database Architecture',
    subtitle: 'Server-Side & Data Modeling',
    description:
      'Expanded into server-side development using Node.js and Express.js, integrating relational and NoSQL databases including SQL, MongoDB, and Supabase.',
    highlights: ['Node.js & Express.js', 'REST API Design', 'SQL, MongoDB & Supabase'],
    type: 'backend',
  },
  {
    id: 'aiml-exploration',
    period: 'Intelligent Systems',
    title: 'AI/ML Experimentation',
    subtitle: 'Applied Intelligence',
    description:
      'Exploring how machine learning models and intelligent workflows can enhance real-world web applications—from educational personalization to analytical insights.',
    highlights: ['Python Ecosystem', 'Intelligent UX Concepts', 'Data-Driven Problem Solving'],
    type: 'aiml',
  },
  {
    id: 'projects-hackathons',
    period: 'Hands-On Building',
    title: 'Personal Projects & Hackathon Participation',
    subtitle: 'Learning by Building',
    description:
      'Applying full-stack and AI/ML concepts in collaborative hackathons and independent builds, turning ideas into functional prototypes under real-world constraints.',
    highlights: ['Rapid Prototyping', 'Team Collaboration', 'End-to-End Product Thinking'],
    type: 'projects',
  },
];
