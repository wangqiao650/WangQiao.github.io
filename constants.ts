import { Category, Project, Experience, Skill, Language, HonorsData, Article, ArticleCategory } from './types';
import { Sparkles, Image, History, Send } from 'lucide-react';
import { PROJECT_DATA } from './src/data/projects';
import { ARTICLE_DATA } from './src/data/articles';

// 1. 作品集分类标签 (Portfolio - 用于顶部筛选和作品角标)
export const CATEGORY_LABELS: Record<Language, Record<string, string>> = {
  zh: {
    'All': '全部',
    // 精准修复三个顽固角标：
    'Category Name': '示例分类',      
    'Commercial Video': '账号运营',   // 已将“品牌营销”修改为“账号运营”
    'Photography': '静态摄影',        
    
    // 其他分类同步保持：
    'Video Production': '短视频制作',
    'Digital Illustration': '数字插画',
    'UI/UX Design': '交互设计',
    'Thesis Project': '本科毕设',
    'Motion Graphics': '视觉特效',
    'AI Creation': 'AI 创作'
  },
  en: {
    'All': 'All',
    'Category Name': 'Example Category',
    'Commercial Video': 'Account Operations', // 对应英文修改为更专业的术语
    'Photography': 'Photography',
    'Video Production': 'Video Production',
    'Digital Illustration': 'Digital Illustration',
    'UI/UX Design': 'UI/UX Design',
    'Thesis Project': 'Thesis Project',
    'Motion Graphics': 'Motion Graphics',
    'AI Creation': 'AI Creation'
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
