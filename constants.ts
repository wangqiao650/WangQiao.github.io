import { Category, Project, Experience, Skill, Language, HonorsData, Article, ArticleCategory } from './types';
import { Sparkles, Image, History, Send } from 'lucide-react';
import { PROJECT_DATA } from './src/data/projects';
import { ARTICLE_DATA } from './src/data/articles';

export const CATEGORY_LABELS: Record<Language, Record<string, string>> = {
  zh: {
    'All': '全部',
    'Videography': '动态影像', // Renamed
    'Graphics & UI': '平面交互',
    'Photography': '静态摄影', // Renamed
    'Development': '应用开发'
  },
  en: {
    'All': 'All',
    'Videography': 'Videography',
    'Graphics & UI': 'Graphics & UI',
    'Photography': 'Photography',
    'Development': 'Development'
  }
};

export const EXPERIENCE_LABELS: Record<Language, Record<string, string>> = {
  zh: {
    'All': '全部',
    'Education': '教育经历',
    'Work': '工作实践',
    'Award': '荣誉奖项',
    'Project': '核心项目'
  },
  en: {
    'All': 'All',
    'Education': 'Education',
    'Work': 'Experience',
    'Award': 'Awards',
    'Project': 'Key Projects'
  }
};

export const PROJECTS: Record<Language, Project[]> = {
  zh: PROJECT_DATA.map(p => ({
    id: p.id,
    ...p.common,
    ...p.zh,
    // Inject bilingual title for fallback UI
    bilingualTitle: {
      zh: p.zh.title,
      en: p.en.title
    }
  })),
  en: PROJECT_DATA.map(p => ({
    id: p.id,
    ...p.common,
    ...p.en,
    // Inject bilingual title for fallback UI
    bilingualTitle: {
      zh: p.zh.title,
      en: p.en.title
    }
  }))
};

export const EXPERIENCES: Record<Language, any[]> = {
  zh: ARTICLE_DATA.map(a => ({
    id: a.id,
    ...a.common,
    ...a.zh
  })),
  en: ARTICLE_DATA.map(a => ({
    id: a.id,
    ...a.common,
    ...a.en
  }))
};
