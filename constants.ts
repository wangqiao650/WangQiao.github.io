import { Project, Language } from './types';
// 引入你的数据源
import { PROJECT_DATA } from './src/data/projects';
import { ARTICLE_DATA } from './src/data/articles';
import { DEV_DATA } from './src/data/dev'; // 确保引入了你刚才修改的 AI 工具数据

// 1. 作品集分类标签 (Portfolio & AI Tools)
export const CATEGORY_LABELS: Record<Language, Record<string, string>> = {
  zh: {
    'All': '全部',
    'Ai工具': 'AI 工具',        // 新增：对应你 dev.ts 里的分类
    'Category Name': '示例分类',
    'Commercial Video': '账号运营', 
    'Photography': '静态摄影',
    'Video Production': '短视频制作',
    'Digital Illustration': '数字插画',
    'UI/UX Design': '交互设计',
    'Thesis Project': '本科毕设',
    'Motion Graphics': '视觉特效',
    'AI Creation': 'AI 创作'
  },
  en: {
    'All': 'All',
    'Ai工具': 'AI Tools',
    'Category Name': 'Example Category',
    'Commercial Video': 'Account Operations',
    'Photography': 'Photography',
    'Video Production': 'Video Production',
    'Digital Illustration': 'Digital Illustration',
    'UI/UX Design': 'UI/UX Design',
    'Thesis Project': 'Thesis Project',
    'Motion Graphics': 'Motion Graphics',
    'AI Creation': 'AI Creation'
  }
};

// 2. 经历页面的分类标签
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

// 3. 生活页面的分类标签
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

// --- 数据合并映射逻辑 ---

// 合并原始作品数据和 AI 工具数据
const ALL_RAW_PROJECTS = [...PROJECT_DATA, ...DEV_DATA];

// 4. 最终输出的作品数据 (PROJECTS)
export const PROJECTS: Record<Language, Project[]> = {
  zh: ALL_RAW_PROJECTS.map(p => ({
    id: p.id,
    ...p.common,
    ...p.zh,
    bilingualTitle: { zh: p.zh.title, en: p.en.title }
  })),
  en: ALL_RAW_PROJECTS.map(p => ({
    id: p.id,
    ...p.common,
    ...p.en,
    bilingualTitle: { zh: p.zh.title, en: p.en.title }
  }))
};

// 5. 经历数据映射
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

// 6. 生活数据映射
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
