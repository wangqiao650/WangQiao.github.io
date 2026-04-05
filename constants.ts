import { Category, Project, Experience, Skill, Language, HonorsData, Article, ArticleCategory } from './types';
import { Sparkles, Image, History, Send } from 'lucide-react';
import { PROJECT_DATA } from './src/data/projects';
import { ARTICLE_DATA } from './src/data/articles';

// 1. 作品页面的分类标签 (Projects)
export const CATEGORY_LABELS = {
  zh: {
    'All': '全部',
    'VIDEO PRODUCTION': '短视频制作',      // 必须和图片中的英文完全一致
    'digital illustration': '数字插画'     // 必须和图片中的英文完全一致
    'UI/UX DESIGN': '平面交互设计',        // 注意：如果图片里是大写，这里也要大写
    'THESIS PROJECT': '本科毕设',
    'MOTION GRAPHICS': '视觉特效研究'
  },
  en: {
    'All': 'All',
    'VIDEO PRODUCTION': 'Video Production',
    'digital illustration': 'digital illustration',
    'UI/UX DESIGN': 'UI/UX Design',
    'THESIS PROJECT': 'Thesis Project',
    'MOTION GRAPHICS': 'Motion Graphics'
  }
};

// 2. 经历页面的分类标签 (Experience - 用于时间轴筛选)
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

// 3. 生活页面的分类标签 (Life - 沿用原文章界面的侧边栏)
export const LIFE_LABELS: Record<Language, Record<string, string>> = {
  zh: {
    'All': '全部',
    'Travel': '山海游记',
    'Daily': '碎碎念',
    'Art': '艺术杂谈',
    'Thought': '感悟'
  },
  en: {
    'All': 'All',
    'Travel': 'Travel',
    'Daily': 'Daily',
    'Art': 'Art Talk',
    'Thought': 'Thoughts'
  }
};

// 4. 作品数据映射
export const PROJECTS: Record<Language, Project[]> = {
  zh: PROJECT_DATA.map(p => ({
    id: p.id,
    ...p.common,
    ...p.zh,
    bilingualTitle: { zh: p.zh.title, en: p.en.title }
  })),
  en: PROJECT_DATA.map(p => ({
    id: p.id,
    ...p.common,
    ...p.en,
    bilingualTitle: { zh: p.zh.title, en: p.en.title }
  }))
};

// 5. 经历数据映射 (指向原本的 ARTICLE_DATA，后续你可以在此调整数据源)
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

// 6. 生活数据映射 (同样指向 ARTICLE_DATA，供“生活”板块的大卡片布局使用)
export const LIFE_DATA: Record<Language, any[]> = {
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
