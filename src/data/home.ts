import { Language, Category } from '../../types';

export const HOME_DATA: Record<Language, any> = {
  zh: {
    heroItems: [
      { text: "视频制作", annotation: "（百万点赞剪辑手）", category: Category.VIDEO },
      { text: "AI 艺术创作", annotation: "（探索创作新边界）", category: Category.DESIGN },
      { text: "视觉设计", annotation: "（数媒艺术科班）", category: Category.DESIGN },
      { text: "新媒体运营", annotation: "（实战派增长）", category: Category.DEV }
    ],
    intro: "一个集美貌与才华于一体的女子。热衷于探索未知领域，享受完成挑战后的满足感。为人有边界，善沟通，心态好。",
    selectedWorks: "精选作品",
    years: "[ 2021 — 2025 ]"
  },
  en: {
    heroItems: [
      { text: "Video Production", annotation: "(Million-level Viral Editor)", category: Category.VIDEO },
      { text: "AI Art Creation", annotation: "(Exploring New Boundaries)", category: Category.DESIGN },
      { text: "Visual Design", annotation: "(Digital Media Art)", category: Category.DESIGN },
      { text: "New Media", annotation: "(Growth Driven)", category: Category.DEV }
    ],
    intro: "A blend of aesthetic vision and professional talent. Passionate about exploring unknown fields and embracing challenges.",
    selectedWorks: "Selected Works",
    years: "[ 2021 — 2025 ]"
  }
};
