import { Language } from '../../types';

export const NAV_ITEMS: Record<Language, { id: string; label: string }[]> = {
  zh: [
    { id: 'dashboard', label: '主页' },
    { id: 'portfolio', label: '作品' },
    { id: 'articles', label: '经历' }, // 对应时间轴排版
    { id: 'about', label: '生活' },     // 对应大卡片排版（原“教育”位置）
    { id: 'contact', label: '联系' }
  ],
  en: [
    { id: 'dashboard', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'articles', label: 'Experience' },
    { id: 'about', label: 'Life' },       // 对应大卡片排版
    { id: 'contact', label: 'Contact' }
  ]
};
